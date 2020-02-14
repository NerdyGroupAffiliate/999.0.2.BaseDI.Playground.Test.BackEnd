import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { createHttpLink } from "apollo-link-http";
import get from "lodash/get";
import config from "../config";
import { getItem, clear } from "./cookies";
import RenewToken from "./token-renewal";

const httpLink = createHttpLink({
  uri: config.GRAPHQL_URL
});

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from the cookies.
  let user = getItem("user");
  if (!!user && !user.token) {
    try {
      user = JSON.parse(user);
    } catch (e) {
      console.log(e);
    }
  }

  // Use the setContext method to set the HTTP headers.
  const headers = get(operation.getContext() || {}, "headers", {});
  if (!!user) {
    operation.setContext({
      headers: {
        authorization:
          user && user.token
            ? user.token
            : headers && headers.authorization
            ? headers.authorization
            : ""
      }
    });
  }

  // handle token renewal
  RenewToken.renew();

  // Call the next link in the middleware chain.
  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(async ({ message, extensions }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Code: ${extensions &&
          extensions.code}`
      );

      if (extensions && extensions.code === "UNAUTHENTICATED") {
        clear();
        return;
      }

      if (extensions && extensions.code === "412") {
        clear();
        return;
      }
    });
  }
});

const apolloLink = ApolloLink.from([authLink, errorLink, httpLink]);

const client = new ApolloClient({
  cache:
    !!process.browser && !!window.__APOLLO_STATE__
      ? new InMemoryCache().restore(unescape(window.__APOLLO_STATE__))
      : new InMemoryCache(),
  link: apolloLink,
  ssrMode: !process.browser
});

export default client;
