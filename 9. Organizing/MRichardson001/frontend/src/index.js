// IE Polyfills
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import 'element-remove';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import * as Sentry from "@sentry/browser";
import App from "./App";
import client from "./helpers/apollo-client";
import { HelmetProvider } from "react-helmet-async";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./helpers/ScrollTop";
import config from "./config";
import $ from "jquery";
import _ from "lodash";

window.jQuery = $;
window.$ = $;
window.__ = _;

if (!!config.SENTRY_DSN) {
  Sentry.init({
    dsn: config.SENTRY_DSN
  });
}

if (config.CLIENT_BUILD_VERSION) {
    console.log("Client Build Version: " + config.CLIENT_BUILD_VERSION);
}

if (config.GRAPHQL_URL) {
    console.log("Graph Server Build Version: " + config.GRAPHQL_URL);
}

if (config.BLOB_STORAGE_URL) {
    console.log("Blob Storage URL: " + config.BLOB_STORAGE_URL);
}

const setup = async () => {
  const render = props =>
    ReactDOM.render(
      <ApolloProvider client={client}>
          <HelmetProvider>
            <BrowserRouter>
              <ScrollToTop>
                <App {...props} />
              </ScrollToTop>
            </BrowserRouter>
          </HelmetProvider>
      </ApolloProvider>,
      document.getElementById("root")
    );
  render({});
  App.getRoutes(client, false, () => null).then(
    ({ dynamicRoutes, allPageData, pages }) => {
      render({ routes: dynamicRoutes, pageData: allPageData });
    }
  );
};

setup();

// If you want your app to work offaline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
