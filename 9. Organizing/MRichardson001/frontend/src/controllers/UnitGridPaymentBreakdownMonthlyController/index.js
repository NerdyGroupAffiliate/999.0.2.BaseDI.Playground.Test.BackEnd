import React from "react";
import get from "lodash/get";
import UnitGridPaymentBreakdownMonthlyView from "../../components/UnitGridPaymentBreakdownMonthlyView";

import styles from "./styles.module.css";
import UnitGridPaymentBreakdownEntryView from "../../components/UnitGridPaymentBreakdownEntryView";
import { formatDollar } from "../../helpers/utils";

import {
  getPersonaColor,
  personaColorStyle
} from "../../helpers/property/persona";

import "./index.css";
function UnitGridPaymentBreakdownMonthly(props) {
  const breakdown = props.breakdown || {};
  if (!props.unitQuery || props.unitQuery.loading || !props.unitQuery.unit) {
    return null;
  }

  // const others = leaseOptions.filter(opt => opt.Category === "OTHER");
  const others = [];

  const property = get(props, "property");
  const total = [...(breakdown.RentSummary || []), ...(others || [])].reduce(
    (prev, curr) => prev + (curr.ExtendedAmount || curr.Rent),
    0
  );
  return (
    <UnitGridPaymentBreakdownMonthlyView {...props}>
      <title className={styles.titleContainer}>
        <div className={styles.lineContainer}>
          <span>{props.section_title ? props.section_title : "Monthly Payments"}</span>
          <span>${formatDollar(total, 0)}</span>
        </div>
        <div className={styles.separator} />
      </title>
      <edit-addons
        className={styles.button}
        tabIndex={0}
        onKeyDown={e =>
          document.querySelector(".af-class-next-step").scrollIntoView({
            behavior: "smooth",
            block: "start"
          })
        }
        onClick={() =>
          document.querySelector(".af-class-next-step").scrollIntoView({
            behavior: "smooth",
            block: "start"
          })
        }
      >
        <div className="af-class-arrow-left--chevron w-embed">
          <svg viewBox="0 0 12 7" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g fill={getPersonaColor(property, "secondary")}>
                <polygon points="12 1.17318436 6 7 0 1.17318436 1.20805369 0 6 4.65363128 10.7919463 0" />
              </g>
            </g>
          </svg>
        </div>
        <div
          className="af-class-text-block-112"
          style={personaColorStyle(property, "secondary")}
        >
          Edit Add-ons
        </div>
      </edit-addons>
      <unitGridPaymentBreakdownEntryViewList0>
        {(breakdown.RentSummary || []).map((bd, index) => (
          <UnitGridPaymentBreakdownEntryView.Controller
            key={`breakdown_${index}`}
            title={bd.Description}
            value={`$${formatDollar(bd.ExtendedAmount, 0)}/mo.`}
          />
        ))}

        {false &&
          !!others &&
          others.length > 0 &&
          others.map((it, index) => (
            <UnitGridPaymentBreakdownEntryView.Controller
              key={`others_monthly_${index}`}
              title={it.Name}
              value={`$${formatDollar(it.Rent, 0)}/mo.`}
            />
          ))}
      </unitGridPaymentBreakdownEntryViewList0>
    </UnitGridPaymentBreakdownMonthlyView>
  );
}

export default UnitGridPaymentBreakdownMonthly;
