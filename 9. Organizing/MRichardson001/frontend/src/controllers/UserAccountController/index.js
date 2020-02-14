import React from "react";
import { withRouter } from "react-router";
import get from "lodash/get";
import { withApollo } from "react-apollo";
import Spinner from "../Spinner";
import UserAccountView from "../../components/UserAccountView";
import QuoteSummaryCardView from "../../components/QuoteSummaryCardView";

import styles from "./styles.module.css";
import "./index.css";

function UserAccount(props) {
  if (!props || !props.quotesQuery) {
    return null;
  }
  const { quotesQuery } = props;

  const selectedProperty = get(props, "location.state.selectedProperty");
  const selectedPropertyUid = get(selectedProperty, "value") || get(selectedProperty, "uid");
  const selectedPropertyName = get(selectedProperty, "label") || get(selectedProperty, "data.name");
  let filteredQuotes = [];
  if ( quotesQuery && quotesQuery.quotes && quotesQuery.quotes.length) {
    filteredQuotes = quotesQuery.quotes.sort((a, b) => +b.quoteId - +a.quoteId).filter(qt => qt.realPageQuoteId != -1);
  }
  let fullRoute;
  const getFullRoute = () => {
    const subregionUid = get(selectedProperty, "data.sub-regions[0].sub-region.uid");
    if (subregionUid) {
      const region =
        props.appdata.regions.find(reg =>
            reg.data["sub-regions"].find(sr =>
                sr["sub-region"].uid === subregionUid
          ));
          if (region) {
            fullRoute = `/apartments/${region.uid}/${subregionUid}-apartments`
            return fullRoute
          }
    }
    return null
  }

  return (
    <UserAccountView {...props}>
      <quotes
        className={
          filteredQuotes.length
            ? styles.emptyContainer
            : styles.quotesWrapper
        }
      >
        <quoteSummaryCardViewList1
          className={styles.listContainer}
          style={ quotesQuery.loading ? { justifyContent: 'center'} : null}
        >
          {
            quotesQuery.loading
              ? <Spinner />
              : filteredQuotes.length
              ? filteredQuotes
                  .map((quote, index) => (
                    <QuoteSummaryCardView.Controller
                      key={`quote_${index}`}
                      quote={quote}
                      {...props}
                    />
                  ))
              : <div className={styles.emptyContentWrapper}>
                  <p className={styles.emptyTextBlurb}>
                    No quotes? They expire after 30 days, so please visit the Floor Plans &amp; Pricing page of your favorite AMLI community to save a new quote.
                  </p>
                  <a
                    href={
                      selectedProperty
                        ? `${getFullRoute()}/${selectedPropertyUid}/floorplans`
                        : '/'
                    }
                    className={styles.emptyButton}
                    onClick={e => {
                      if (e && e.preventDefault) {
                        e.preventDefault()
                      }
                      props.history.push(
                        selectedProperty
                        ? `${getFullRoute()}/${selectedPropertyUid}/floorplans`
                        : '/'
                      )
                    }}
                  >
                    <span>
                      {selectedProperty
                        ? selectedPropertyName
                        : 'View Regions'
                      }
                    </span>
                    <img
                      role="none"
                      src="/images/icon-arrow--right-no-shadow3x.png"
                      className={[
                        "af-class-button-apply-arrow",
                        styles.buttonArrow
                      ].join(" ")}
                      alt="view property"
                    />
                  </a>
                </div>
          }
        </quoteSummaryCardViewList1>
      </quotes>
    </UserAccountView>
  );
}

export default withRouter(withApollo(UserAccount));
