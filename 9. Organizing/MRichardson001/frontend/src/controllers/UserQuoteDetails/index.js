import  React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import { compose, graphql } from "react-apollo";
import { pagesQuery, quotesQuery } from "../../graphql/queries";
import get from "lodash/get";

import { getItem } from "../../helpers/cookies";
import FooterView from "../../components/FooterView";
import NavigationHeaderController from "../NavigationHeaderController";

import styles from "./styles.module.css";
import UserAccountSidebarView from "../../components/UserAccountSidebarView";
import Spinner from "../Spinner";
import QuoteSummaryCardView from "../../components/QuoteSummaryCardView";
import QuoteSummaryColumnView from "../../components/QuoteSummaryColumnView";
import GatherNavData from "../../helpers/gather-navbar-data";
import { ViewCapture } from "../../helpers/plugins/guestAnalytics";
import BackArrow from "../../assets/icons/back-arrow.svg";

const moment = require("moment");

function UserQuoteDetails(props) {
  const user = getItem("user");
  const navData = GatherNavData(props);

  useEffect(()=> {
    ViewCapture("Quote Details");
  }, [])

  if (!user || !user.userId) {
      props.history.push(`/create-profile`);
    return null;
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

  const quoteId = get(props, "match.params.id");

  const quote = (props.quotesQuery.quotes || []).find(
    quote => quote.quoteId === quoteId
  );

  if (!quote) {
    return null;
  }
  const isExpired = moment(quote.quoteExpirationDate).isBefore(moment());
  if (isExpired) {
    return null;
  }

  return (
    <span className={styles.outsideWrapper}>
      <NavigationHeaderController
        {...props}
        links={navData}
      />
      <div className={styles.bodyContainer}>
        <UserAccountSidebarView.Controller {...props} properties={properties} quote={quote} user={user} />
        {props.quotesQuery.loading || !quote ? (
          <Spinner style={{ padding: 50 }} />
        ) : null}
        {!!quote ? (
          <div className={styles.quoteDetailWrapper}>
            <div
              className={styles.backButton}
              onClick={() => props.history.push('/account')}
              onKeyDown={e => e.keyCode === 13 && props.history.push('/account')}
              tabIndex={0}
            >
              <img src={BackArrow} alt="Back Arrow" />
              <span>My Account</span>
            </div>
            <div className={styles.quotesContainer}>
              <QuoteSummaryCardView.Controller
                {...props}
                detailsPage
                user={user}
                appdata={{ standard_page, properties, regions, subregions }}
                quote={quote}
              />
            </div>
          </div>
        ) : null}
        {!!quote ? (
          <QuoteSummaryColumnView.Controller
            {...props}
            detailsPage
            user={user}
            appdata={{ standard_page, properties, regions, subregions }}
            quote={quote}
          />
        ) : null}
      </div>
      <FooterView.Controller {...props} links={navData.footerLinks}/>
    </span>
  );
}

export default withRouter(
  compose(
    graphql(pagesQuery),
    graphql(quotesQuery, {
      name: "quotesQuery"
    })
  )(UserQuoteDetails)
);
