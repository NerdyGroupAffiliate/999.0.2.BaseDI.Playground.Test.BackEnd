import React from "react";
import get from "lodash/get";

import styles from "./styles.module.css";
import UnitGridPaymentBreakdownView from "../../components/UnitGridPaymentBreakdownView";
import UnitGridPaymentBreakdownImmediateView from "../../components/UnitGridPaymentBreakdownImmediateView";


function UnitGridPaymentBreakdown(props) {
  const breakdown = props.breakdown || {};

  if (!props.unitQuery || !props.unitQuery.unit) {
    return null;
  }

  // const application = leaseOptions.find(lo => lo.Category === "APPLICANT");

  const dueImmediately = get(breakdown, "DueImmediately", []);
  const dueOnApproval = get(breakdown, "DueOnApproval", []);
  const dueAtMoveIn = get(breakdown, "DueAtMoveIn", []);

  // const deposits = leaseOptions.filter(
  //   lo => lo.Deposit > 0 && lo.Category !== "ANIMAL"
  // );

  return (
    <UnitGridPaymentBreakdownView {...props}>
      <payment-title>
        4. Payment Breakdown
      </payment-title>
      <payment-hide-button
        className={styles.button}
        tabIndex={0}
        onKeyDown={e =>
          e.keyCode === 13 &&
          props.setUiOptions({
            ...props.uiOptions,
            showPaymentBreakdown: !props.uiOptions.showPaymentBreakdown
          })
        }
        onClick={() =>
          props.setUiOptions({
            ...props.uiOptions,
            showPaymentBreakdown: !props.uiOptions.showPaymentBreakdown
          })
        }
      >
        <payment-hide-button-label>
          {props.uiOptions.showPaymentBreakdown ? "Hide" : "Show"}
        </payment-hide-button-label>
        <payment-hide-button-arrow
          className={[
            styles.toggleArrow,
            props.uiOptions.showPaymentBreakdown ? "" : styles.closedArrow
          ].join(" ")}
        />
      </payment-hide-button>
      <payment-breakdown-details
        className={[
          styles.details,
          props.uiOptions.showPaymentBreakdown ? styles.show : ""
        ].join(" ")}
      >
        <payment-due-immediately>
          <unitGridPaymentBreakdownImmediateViewList0>
            <UnitGridPaymentBreakdownImmediateView.Controller
              {...props}
              section_title="Due Immediately"
              items={(dueImmediately || []).map(it => ({
                label: it.Description,
                value: it.ExtendedAmount,
                type: "fee"
              }))}
            />
            <UnitGridPaymentBreakdownImmediateView.Controller
              {...props}
              section_title="Due On Pre Approval"
              items={(dueOnApproval || []).map(it => ({
                label: it.Description,
                value: it.ExtendedAmount
              }))}
            />
            <UnitGridPaymentBreakdownImmediateView.Controller
              {...props}
              section_title="Due At Move In"
              items={(dueAtMoveIn || []).map(bd => ({
                label: bd.Description,
                value: bd.ExtendedAmount
              }))}
            />
          </unitGridPaymentBreakdownImmediateViewList0>
        </payment-due-immediately>
        <payment-monthly />
      </payment-breakdown-details>
    </UnitGridPaymentBreakdownView>
  );
}

export default UnitGridPaymentBreakdown;
