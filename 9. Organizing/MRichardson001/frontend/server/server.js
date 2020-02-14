/* eslint-disable */

//let appInsights = require("applicationinsights");
//appInsights.setup("09542ed2-3192-48a3-882b-5ede812e3d66").start();

// Express requirements
import bodyParser from "body-parser";
import compression from "compression";
import express from "express";
import sm from "sitemap";
import favicon from "serve-favicon";
import morgan from "morgan";
import path from "path";
// import forceDomain from 'forcedomain';
import Loadable from "react-loadable";
import cookieParser from "cookie-parser";
// Our loader - this basically acts as the entry point for each page load
import loader from "./loader";
import homeloader from "./homeloader";
import client from "../src/helpers/apollo-client";
import App from "../src/App";
import CacheService from "./cache-service";
import endsWith from "lodash/endsWith";

const ttl = 60 * 5 * 1; // cache for 5 minutes
export const cache = new CacheService(ttl); // Create a new cache service instance

import config from "../src/config";

const Sentry = require("@sentry/node");

if (!!config.SENTRY_DSN) {
  Sentry.init({
    dsn: config.SENTRY_DSN
  });
}

if (config.SERVER_BUILD_VERSION) {
    console.log("Server Build Version: " + config.SERVER_BUILD_VERSION);
}

if (config.GRAPHQL_URL) {
    console.log("Graph Server Build Version: " + config.GRAPHQL_URL);
}

if (config.BLOB_STORAGE_URL) {
    console.log("Blog Storage URL: " + config.BLOB_STORAGE_URL);
}

require("dotenv").config();

// Create our express app using the port optionally specified
const app = express();
const PORT = process.env.PORT || 3000;

// Compress, parse, log, and raid the cookie jar
app.use(compression({ threshold: 0 }));

app.use(
  "/static",
  express.static(path.resolve(__dirname, "..", "..", "./build/static"), {
    maxAge: "15d",
    fallthrough: false
  })
);
app.use(
  "/css",
  express.static(path.resolve(__dirname, "..", "..", "./build/css"), {
    maxAge: "15d",
    fallthrough: false
  })
);
app.use(
  "/images",
  express.static(path.resolve(__dirname, "..", "..", "./build/images"), {
    maxAge: "300d",
    fallthrough: false
  })
);

app.use(
    "/fonts",
    express.static(path.resolve(__dirname, "..", "..", "./build/fonts"), {
        maxAge: "300d",
        fallthrough: false
    })
);

app.use(favicon(path.resolve(__dirname, "..", "..", "./build/favicon.ico")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(morgan("dev"));
app.use(cookieParser());

app.disable("x-powered-by");

const sitemap = sm.createSitemap({
  hostname: 'https://www.amli.com/',
  cacheTime: 600
});


app.use(
  express.Router().get("/sitemap.xml", async (req, res) => {

    const { dynamicRoutes: routes } = await cache.get(
      "routes",
      () => App.getRoutes(client, true, () => null)
    );

    routes.forEach(route => {
      if (!!route && !!route.props && !!route.props.path) {
        if (Array.isArray(route.props.path)) {
          route.props.path.forEach(url => {
            if (
              sitemap.urls.findIndex(containedUrl => containedUrl.url === url) <
              0
            ) {
              sitemap.add({ url });
            }
          });
        } else {
          if (
            sitemap.urls.findIndex(({ url }) => url === route.props.path) < 0
          ) {
            const isFloorplan = endsWith(route.props.path, "/floorplan/:amliId");
            const isUnit = endsWith(route.props.path, "floorplan/:amliId/unit/:unitId");
            if (isFloorplan || isUnit) {
              // DO NOTHING
              // We are not adding FLOOR PLAN or UNIT routes to sitemap.xml
            } else {
              sitemap.add({ url: route.props.path });
            }
          }
        }
      }
    });
    sitemap.toXML((err, xml) => {
      if (err) {
        return res.status(500).end();
      }
      res.header("Content-Type", "application/xml");
      res.send(xml);
    });
  })
);

// Set up homepage, static assets, and capture everything else
app.use(express.Router().get("/", homeloader));

// app.use(express.static(path.resolve(__dirname, '../public')));
app.use(loader);

// We tell React Loadable to load all required assets and start listening - ROCK AND ROLL!
Loadable.preloadAll().then(() => {
  app.listen(PORT, console.log("App listening on port" + PORT + "!"));
});

// Preeload route information to cache
const routDataProm = cache.get("routes", () =>
  App.getRoutes(client, true, () => null)
);

const thinRouteDataProm = cache.get("routesThin", () =>
  App.getRoutes(client, false, () => null)
);

const FullPageData = cache.get("allData", () => App.getAllPages(client));

// Handle the bugs somehow
app.on("error", error => {
  console.log(error);
  throw error;
});

/* eslint-enable */
