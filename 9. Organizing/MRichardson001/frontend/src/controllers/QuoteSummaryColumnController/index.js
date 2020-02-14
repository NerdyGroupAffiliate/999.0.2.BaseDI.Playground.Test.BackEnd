import React, { useState, useEffect } from "react";
import * as moment from "moment";
import { withApollo } from "react-apollo";
import QuoteSummaryColumnView from "../../components/QuoteSummaryColumnView";
import QuoteSummaryColumnItemView from "../../components/QuoteSummaryColumnItemView";
import { formatDollar, canUseDOM } from "../../helpers/utils";
import styles from "./styles.module.css";
import "./index.css";
import { applyWithQuote } from "../../helpers/property/apply";

const items = [
  {
    field: "leaseTerm",
    formatter: text => `${text} Months`,
    label: "Lease Length"
  },
  {
    field: "startDate",
    formatter: date => moment(date).format("M/DD/YY"),
    label: "Move-in date"
  },
  {
    field: "totalRent",
    formatter: rent => `$${formatDollar(rent, 0)}`,
    label: "Monthly Payment"
  },
  {
    field: "realPageQuoteId",
    formatter: id => id,
    label: "Quote Number"
  },
  {
    field: "quoteExpirationDate",
    formatter: date => moment(date).format("MMM D, YYYY"),
    label: "Quote Expiration"
  }
];

function QuoteSummaryColumn(props) {
  const [applyLink, setApplyLink] = useState(null);

  useEffect(() => {
    if (!applyLink){
      getLinkObject();
    }
  }, [])

  const getLinkObject = async e => {
    if (props && props.client && props.quote && props.quote.realPageQuoteId) {
      const linkData = await applyWithQuote(props.client, props.quote.realPageQuoteId, true);
      setApplyLink(linkData);
    }
  }

  return (
    <div className={styles.wrapper}>
      <QuoteSummaryColumnView {...props}>
        <details-list>
          <quoteSummaryColumnItemViewList0 className={styles.itemsContainer}>
            {items.map((item, index) =>
              props.quote[item.field] ? (
                <QuoteSummaryColumnItemView.Controller
                  key={`item_summary_${index}`}
                  label={item.label}
                  value={item.formatter(props.quote[item.field])}
                />
              ) : null
            )}
          </quoteSummaryColumnItemViewList0>
        </details-list>
        <apply
          className={styles.apply}
          {...applyLink}
        />
        <tabs-container>
          <tabs className="payment-summary-tabs">
            {/* <div className="af-class-tab-header af-class-active af-class-small" style={{marginBottom: 0, paddingBottom: 0}}>Payment Summary</div>
            <div
              className="paymentsummary-print-icon"
              onClick={() => {
                if (canUseDOM) {
                  window.print()
                }
            }}
            >
              <svg
                className="paymentsummaryprinticon"
                width={35}
                height={42}
                viewBox="-97.48 -97.48 682.34 682.34"
                stroke="#000"
                strokeWidth={0}>
                <path d="M400.1 100.918h-9.871V11.646C390.229 5.215 385.014 0 378.582 0H108.804c-6.436 0-11.646 5.215-11.646 11.646v89.271h-9.877c-38.523 0-69.871 31.344-69.871 69.871v144.258c0 38.528 31.348 69.87 69.871 69.87h9.877v90.818c0 6.432 5.21 11.646 11.646 11.646h269.778c6.432 0 11.646-5.215 11.646-11.646v-90.818h9.871c38.523 0 69.871-31.342 69.871-69.87V170.789c.001-38.528-31.347-69.871-69.87-69.871zM120.449 23.291h246.489v77.627H120.449V23.291zm246.489 440.801H120.449V320.465h246.489v143.627zm79.744-149.046c0 25.687-20.896 46.581-46.582 46.581h-9.871v-41.162h25.186c6.436 0 11.645-5.214 11.645-11.646 0-6.43-5.209-11.645-11.645-11.645H75.421c-6.431 0-11.646 5.215-11.646 11.645 0 6.433 5.215 11.646 11.646 11.646h21.737v41.162h-9.877c-25.685 0-46.581-20.896-46.581-46.581V170.789c0-25.685 20.896-46.58 46.581-46.58H400.1c25.684 0 46.58 20.896 46.58 46.58v144.257h.002z" stroke="none" />
                <path d="M378.582 170.646c-8.771 0-15.893 7.119-15.893 15.893s7.119 15.893 15.893 15.893c8.775 0 15.895-7.118 15.895-15.893-.002-8.774-7.12-15.893-15.895-15.893zM147.618 360.734h192.146c6.432 0 11.646-5.213 11.646-11.646 0-6.43-5.215-11.645-11.646-11.645H147.618c-6.431 0-11.646 5.215-11.646 11.645 0 6.433 5.215 11.646 11.646 11.646zM147.618 403.926h192.146c6.432 0 11.646-5.217 11.646-11.646 0-6.432-5.215-11.645-11.646-11.645H147.618c-6.431 0-11.646 5.213-11.646 11.645s5.215 11.646 11.646 11.646z" stroke="none" />
              </svg>
            </div>
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n@media print {\n   .paymentsummaryprinticon {\n    visibility: hidden;\n  }\n}\n" }} />
            </div> */}
          </tabs>
        </tabs-container>
      </QuoteSummaryColumnView>
    </div>
  );
}

export default withApollo(QuoteSummaryColumn);
