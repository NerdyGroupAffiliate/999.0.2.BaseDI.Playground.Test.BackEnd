/* eslint-disable */

// Express requirements
import path from "path";
import fs from "fs";
import "isomorphic-fetch";
// React requirements
import React from "react";
import Helmet, { HelmetProvider } from "react-helmet-async";
import { Frontload, frontloadServerRender } from "react-frontload";
import { StaticRouter } from "react-router";
import Loadable from "react-loadable";
import { ApolloProvider, renderToStringWithData } from "react-apollo";
import pick from "lodash/pick";
import App from "../src/App";
import manifest from "../build/manifest.json";
import client from "../src/helpers/apollo-client";
import config from "../src/config";
import { getCookieHandler } from "../src/helpers/cookies";
const axios = require('axios');

import { cache } from "./server";

const relatedPagesFinder = (pages, page) => {
  if (!page) {
    return [];
  }
  let subregions = [];
  if (page.type === "region") {
    subregions = (page.data["sub-regions"] || []).map(sr => sr["sub-region"].id);
  } else if (page.type === "sub-region") {
    subregions = [page.id];
  }

  const relatedPages = pages.filter(
    pg =>
      (!!pg.data.linked_documents &&
        pg.data.linked_documents.findIndex(ld => ld.id === page.id) > -1) ||
      (!!pg.data.property &&
        pg.data.property.id === page.id) ||
      (!!pg.data["sub-regions"] &&
        pg.data["sub-regions"].findIndex(sr =>
          subregions.includes(sr["sub-region"].id)
        ) > -1) ||
      subregions.includes(pg.id)
  );
  return relatedPages.map(pg => pg.id);
};

const pageFinder = (pages, req) => {
  const urlPieces = req.originalUrl.substr(1).split("/");
  return pages.find(page => {
    let found = false;
    if (urlPieces.length === 1) {
      if (page.uid === urlPieces[0]) {
        found = true;
      }
    } else {
      for (const piece of urlPieces.reverse()) {
        if (piece === page.uid) {
          found = true;
          break;
        }
      }
    }
    return found;
  });
};

const getAllPages = (allPageData, req) => {
  const url = `/${req.originalUrl.substr(1).split("/")[0]}`;
  const allPagesUrl = ["contact", "resident-portal", "feedback", "applynow"];
  return allPagesUrl.includes(url.replace('/', '')) ? allPageData : undefined;
};

const getPageMetaData = async (uid, pages) => {
    let found = false;

    let page = pages.find(page => {
        if (uid === page.uid) {
            found = true;
        }

        return found;
    });

    if (page == undefined)
        return null;

    return page;
}

////////////////////////////////////////////////////////////////////////////////
//NOT IN POETIC BRANCH
//PRODUCTION CODE NEEDS THIS.
////////////////////////////////////////////////////////////////////////////////
const doWeLookUpPage = (path) => {
    let lookUpPage = true;
    let lastPiece = "";
    let secondToLastPiece = "";
    let searchPath = path;

    let urlPieces = "";

    if (searchPath.includes(".com")) {
        urlPieces = searchPath.split(".com/").reverse();
    }
    else {
        urlPieces = searchPath.substr(1).split("/").reverse();
    }

    if (urlPieces && urlPieces.length > 0) {
        lastPiece = urlPieces[0];
        lastPiece = String(lastPiece).toLowerCase();

        if (urlPieces.length > 1) {
            secondToLastPiece = urlPieces[1];
            secondToLastPiece = String(secondToLastPiece).toLowerCase();
        }

        //CHECK FOR STATIC PAGES
        if (secondToLastPiece == "blog" ||
            lastPiece == "contact-modal-form" ||
            lastPiece == "blog-article" ||
            lastPiece == "floor-plan-the-grid" ||
            lastPiece == "floorplan-create-profile" ||
            lastPiece == "floorplan-quote-summary" ||
            lastPiece == "floorplan-unit-chosen" ||
            lastPiece == "index" ||
            lastPiece == "landing-page-template" ||
            lastPiece == "location" ||
            lastPiece == "navigation-test" ||
            lastPiece == "property-contact" ||
            lastPiece == "property-navigation" ||
            lastPiece == "property-phase-one" ||
            lastPiece == "property-phase-two" ||
            lastPiece == "property-phase-three" ||
            lastPiece == "region-neighborhood" ||
            lastPiece == "short-term-furnished" ||
            lastPiece == "sub-region" ||
            lastPiece == "test" ||
            lastPiece == "user-account-over" ||
            lastPiece == "not-found" ||
            lastPiece == "unauthorized" ||
            lastPiece == "create-profile" ||
            lastPiece == "austin" ||
            lastPiece == "houston" ||
            lastPiece == "denver" ||
            lastPiece == "atlanta" ||
            lastPiece == "southern-california" ||
            lastPiece == "southeast-florida" ||
            lastPiece == "seattle" ||
            lastPiece == "dallas" ||
            lastPiece == "blog" ||
            lastPiece == "resident-portal" ||
            lastPiece == "terms-of-use" ||
            lastPiece == "privacy-policy" ||
            lastPiece == "about-us" ||
            lastPiece == "leadership" ||
            lastPiece == "development" ||
            lastPiece == "feedback" ||
            lastPiece == "retail" ||
            lastPiece == "corporate-governance" ||
            lastPiece == "careers" ||
            lastPiece == "culture" ||
            lastPiece == "benefits" ||
            lastPiece == "professional-development" ||
            lastPiece == "giving-back" ||
            lastPiece == "find-your-career" ||
            lastPiece == "sustainability" ||
            lastPiece.includes("sustainability#")) {

            lookUpPage = false;
        }
    }

    return lookUpPage;
}

////////////////////////////////////////////////////////////////////////////////
//NOT IN POETIC BRANCH
//PRODUCTION CODE NEEDS THIS.
////////////////////////////////////////////////////////////////////////////////
const handleInvalidPathService = async (path) =>
{
    const checkRedirectLibrary = async (path) => {   
        let matchingRoute = null;

        if (doWeLookUpPage(path))
        {
            try
            {
                const getRedirects = async (redirectFile) => {
                    return await axios.get(redirectFile)
                        .then(function (response) {
                            const redirects = response.data.Routes;

                            return redirects;
                        })
                        .catch(function (error) {
                            console.log(error);

                            return null;
                        });
                };

                let redirectFile = "";

                const blobStorage = config.BLOB_STORAGE_URL;
                const blobStorageLastChar = blobStorage.charAt(blobStorage.length - 1);

                redirectFile = blobStorage + "redirects/redirects.json";

                if (blobStorageLastChar != "/")
                    redirectFile = blobStorage + "/redirects/redirects.json";

                //console.log("redirectFile = " + redirectFile);

                const routes = await getRedirects(redirectFile);

                //console.log("routes = " + JSON.stringify(routes));

                let found = false;

                let searchPathNew = path.toLowerCase();

                if (searchPathNew.includes(".com")) {
                    searchPathNew = searchPathNew.split(".com")[1];
                }

                if (searchPathNew.charAt(0) != "/") {
                    searchPathNew = "/" + searchPathNew;
                }

                matchingRoute = routes.Route.find(item => {
                    let searchPathOld = item.Item.Old.toLowerCase();

                    if (searchPathOld.charAt(0) != "/") {
                        searchPathOld = "/" + searchPathOld;
                    }

                    if (searchPathOld === searchPathNew) {
                        found = true;
                    }

                    return found;
                });

                if (matchingRoute && matchingRoute.Item && (matchingRoute.Item.New == matchingRoute.Item.Old)) {
                    return null;
                }

                if (matchingRoute && matchingRoute.Item && matchingRoute.Item.New) {
                    return matchingRoute.Item.New;
                }
                else {
                    return null;
                }

            }
            catch (e)
            {
                console.log(e);

                return null;
            }        
        }

        return null;
    };

    if (path) {
        return await checkRedirectLibrary(path);
    }
}
////////////////////////////////////////////////////////////////////////////////

// LOADER
export default async (req, res) => {
  try 
  {
    ////////////////////////////////////////////////////////////////////////////
    //NOT IN POETIC BRANCH
	//PRODUCTION CODE NEEDS THIS.
    ////////////////////////////////////////////////////////////////////////////
    let urlRoute = await handleInvalidPathService(req.originalUrl);

    if (urlRoute)
    {
        if (urlRoute.includes("http"))
        {
            res.redirect(301, urlRoute);

            return;
        }
        else
        {
            res.writeHead(301, {
                Location: urlRoute
            });
            res.end();
        }

        return;
    }
    ////////////////////////////////////////////////////////////////////////////

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
    const injectHTML = (
      data,
      { html, title, meta, body, scripts, state, pagesData }
    ) => {
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
        '<div id="root" role="main">' +
          body +
          "</div>" +
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
        scrp
          .map(item => `<script src="/static/js/${item}"></script>`)
          .join(" ") + "</body>"
      );

      return data;
    };

    const helmetContext = {};
    const context = {};
    const modules = [];
    const { dynamicRoutes, allPageData, pages } = await cache.get(
      "routes",
      () => App.getRoutes(client, true, () => null)
    );

    const FullPageData = await cache.get("allData", () =>
      App.getAllPages(client)
    );


    frontloadServerRender((dryRun, FLContext) =>
      renderToStringWithData(
        <ApolloProvider client={client}>
          <HelmetProvider context={helmetContext}>
            <Loadable.Capture report={m => modules.push(m)}>
              <StaticRouter location={req.url} context={context}>
                <Frontload isServer={true} context={FLContext}>
                  <App routes={dynamicRoutes} pageData={allPageData}>
                    <Helmet />
                  </App>
                </Frontload>
              </StaticRouter>
            </Loadable.Capture>
          </HelmetProvider>
        </ApolloProvider>
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

          const page = pageFinder(FullPageData, req);
          const relatedPagesIds = relatedPagesFinder(FullPageData, page);
          const slimpages = FullPageData.map(pg => {
            return ({
            ...pg,
            data:
              (!!page && pg.id === page.id) || relatedPagesIds.includes(pg.id)
                ? pg.data
                : pick(pg.data, config.ENTITIES_DATA_FIELDS)
          })});
          // Pass all this nonsense into our HTML formatting function above
          const html = injectHTML(null, {
            html: helmet.htmlAttributes.toString(),
            title: helmet.title.toString(),
            meta: helmet.meta.toString(),
            state: initialApolloState,
            body: routeMarkup,
            scripts: [helmet.script.toString(), ...extraChunks],
            pagesData: {
              pages: slimpages,
              allPageData: getAllPages(allPageData, req)
            }
          });

          // We have all the final HTML, let's send it to the user already!
          res.send(html);
        }
      })
      .catch(e => {
        res.status(500).end();
        console.log(e)
      });
  } catch (e) {
    res.status(500).end().
    console.log(e);
  }
};

/* eslint-enable */
