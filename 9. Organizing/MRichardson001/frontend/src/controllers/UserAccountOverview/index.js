import React, {useEffect} from "react";
import { withRouter } from "react-router-dom";

import { compose, graphql } from "react-apollo";
import { pagesQuery, quotesQuery } from "../../graphql/queries";
import get from "lodash/get";

import { getItem } from "../../helpers/cookies";
import UserAccountView from "../../components/UserAccountView";
import FooterView from "../../components/FooterView";
import NavigationHeaderController from "../NavigationHeaderController";
import GatherNavData from "../../helpers/gather-navbar-data";
import styles from './styles.module.css';
import { ViewCapture } from "../../helpers/plugins/guestAnalytics";
import Helmet from "react-helmet-async";

function UserAccountOverview(props) {
  const user = getItem("user");
  const navData = GatherNavData(props);
  const rpQuoteId = get(props, "location.state.realPageQuoteId");
  const quotes = get(props, "quotesQuery.quotes", [])

  if (!user || !user.userId) {
      props.history.push(`/create-profile`);
    return null;
  }

  if (!!user && rpQuoteId && quotes && quotes.length) {
    const desiredQuote = quotes.find( quote => quote.realPageQuoteId === rpQuoteId);
    if (desiredQuote) {
      props.history.push(`/quote/${desiredQuote.quoteId}`);
    }
  }

  const regions = get(props, "data.pages", []).filter(
    page => page && page.type === "region"
  );

  const subregions = get(props, "data.pages", []).filter(
    page => page && page.type === "sub-region"
  );

  const standard_page = get(props, "data.pages", []).filter(
    page =>
      !!page && !!page.data && !!page.type && page.type === "standard_page"
  );

  const properties = get(props, "data.pages", []).filter(
    page => !!page && !!page.data && !!page.type && page.type === "property"
  );

  useEffect(()=>{
    ViewCapture("Account");
  }, [])

  const links = { regions };

  return (
    <span className={styles.container}>
    <Helmet>
      <title>Account</title>
    </Helmet>
      <NavigationHeaderController
        {...props}
        links={links}
        appdata={{ standard_page }}
      />
      <UserAccountView.Controller
        {...props}
        user={user}
        appdata={{ standard_page, properties, regions, subregions }}
      />
      <FooterView.Controller {...props} links={navData.footerLinks}/>
    </span>
  );
}

export default withRouter(
  compose(
    graphql(pagesQuery),
    graphql(quotesQuery, {
      name: "quotesQuery",
      options: {
        fetchPolicy: "network-only"
      }
    })
  )(UserAccountOverview)
);
