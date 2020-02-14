/* eslint-disable */

// Express requirements
import path from "path";
import fs from "fs";
import "isomorphic-fetch";
import get from "lodash/get";
import pick from "lodash/pick";
// React requirements
import React from "react";
import Helmet, { HelmetProvider } from "react-helmet-async";
import { Frontload, frontloadServerRender } from "react-frontload";
import { StaticRouter } from "react-router";
import Loadable from "react-loadable";
import { ApolloProvider, renderToStringWithData } from "react-apollo";
import App from "../src/App";
import manifest from "../build/manifest.json";
import client from "../src/helpers/apollo-client";
import { getCookieHandler } from "../src/helpers/cookies";
import config from "../src/config";
import { cache } from './server'

const Prismic = require("prismic-javascript");

const initCms = () =>
  Prismic.getApi("https://amli-website.cdn.prismic.io/api/v2");

// LOADER
export default async (req, res) => {
  try {
    const cookies = getCookieHandler(req);

    const css = await cache.get(
      "styles",
      () =>
        new Promise((resolve, reject) =>
          fs.readdir(
            path.resolve(__dirname, "../../build/static/css"),
            {
              encoding: "utf8"
            },
            (err, files) =>
              err
                ? reject(err)
                : resolve(files.filter(fl => fl.endsWith(".css")))
          )
        )
    );

    const scrp = await cache.get(
      "scripts",
      () =>
        new Promise((resolve, reject) =>
          fs.readdir(
            path.resolve(__dirname, "../../build/static/js"),
            {
              encoding: "utf8"
            },
            (err, files) =>
              err
                ? reject(err)
                : resolve(files.filter(fl => fl.endsWith(".js")))
          )
        )
    );

    const injectHTML = (data, { html, title, meta, body, scripts, state, pagesData }) => {
      data = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=5">
        <meta name="robots" content="index, follow" />
        <title></title>
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WRLMWT');</script>
        <!-- End Google Tag Manager -->
        ${css
          .map(item => `<link href="/static/css/${item}" rel="stylesheet">`)
          .join(" ")}
    </head>
    <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WRLMWT"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div id="root" role="main"></div></body></html>`;

      data = data.replace("<html>", "<html " + html + ">");
      data = data.replace(/<title>.*?<\/title>/g, title);
      data = data.replace("</head>", meta + "</head>");
      data = data.replace(
        '<div id="root" role="main"></div>',
        '<div id="root" role="main">' + body + "</div>" +
        // "</div>" +
        // "<script>window.__APOLLO_STATE__ = " +
        // escape(JSON.stringify(state)) +
        // "</script>"
        "<script>window.__PAGES_DATA__ ='" +
        escape(JSON.stringify(pagesData)) +
        "'</script>"
      );
      data = data.replace(
        "</body>",
        scripts.join("") +
          scrp
            .map(item => `<script src="/static/js/${item}"></script>`)
            .join(" ") +
          "</body>"
      );

      return data;
    };

    const helmetContext = {};
    const context = {};
    const modules = [];
    const cmsApi = await cache.get("cms", () => initCms());
    const homePage = await cache.get("homepage", () =>
      cmsApi.query(Prismic.Predicates.at("document.id", config.HOMEPAGE_ID))
    );

    const banner = get(homePage, "results[0].data.header_image.url");
    const title = get(homePage, "results[0].data.header_title");
    const subtitle = get(homePage, "results[0].data.header_subtitle");
    const { dynamicRoutes, allPageData, pages } = await cache.get("routesThin", () =>
      App.getRoutes(client, false, () => null)
    );

    frontloadServerRender((dryRun, FLContext) =>
      renderToStringWithData(
        <HelmetProvider context={helmetContext}>
          <ApolloProvider client={client}>
            <Loadable.Capture report={m => modules.push(m)}>
              <StaticRouter location={req.url} context={context}>
                <Frontload isServer={true} context={FLContext}>
                  <App
                    banner={banner}
                    loader={{ title, subtitle }}
                    routes={dynamicRoutes}
                    pageData={allPageData}
                  >
                    <Helmet />
                  </App>
                </Frontload>
              </StaticRouter>
            </Loadable.Capture>
          </ApolloProvider>
        </HelmetProvider>
      )
    )
      .then(routeMarkup => {
        if (context.url) {
          res.writeHead(302, {
            Location: context.url
          });
          res.end();
        } else {
          const initialApolloState = client.extract();
          const extractAssets = (assets, chunks) =>
            Object.keys(assets)
              .filter(asset => chunks.indexOf(asset.replace(".js", "")) > -1)
              .map(k => assets[k]);

          const extraChunks = extractAssets(manifest, modules).map(
            c =>
              '<link rel="prefetch" as="script" src="/' +
              c.replace(/^\//, "") +
              '"></link>'
          );

          // We need to tell Helmet to compute the right meta tags, title, and such
          const { helmet } = helmetContext;


          const home = pages.find(pg => pg.id === config.HOMEPAGE_ID)
          const slimpages = pages.map(pg => ({
            ...pg,
            data:
              !!home && pg.id === home.id
                ? home.data
                : pick(pg.data, config.ENTITIES_DATA_FIELDS)
          }));
          // Pass all this nonsense into our HTML formatting function above
          const html = injectHTML(null, {
            html: helmet.htmlAttributes.toString(),
            title: helmet.title.toString(),
            meta: helmet.meta.toString(),
            state: initialApolloState,
            body:
              routeMarkup +
              `<img alt="banner" src="${banner}" style="width:100vw; height:100vh; object-fit: cover" />`,
            scripts: [helmet.script.toString(), ...extraChunks],
            pagesData: { pages: slimpages, banner },
          });

          // We have all the final HTML, let's send it to the user already!
          res.send(html);
        }
      })
      .catch(e => console.log(e));
  } catch (e) {
    console.log(e);
  }
};

/* eslint-enable */
