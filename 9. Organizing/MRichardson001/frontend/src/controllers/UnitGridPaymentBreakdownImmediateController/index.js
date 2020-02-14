import React from "react";
import UnitGridPaymentBreakdownImmediateView from "../../components/UnitGridPaymentBreakdownImmediateView";
import UnitGridPaymentBreakdownEntryView from "../../components/UnitGridPaymentBreakdownEntryView";
import { formatDollar } from "../../helpers/utils";
import styles from "./styles.module.css";

import "./index.css";

function UnitGridPaymentBreakdownImmediate(props) {
  const total = props.items.reduce((prev, curr) => prev + curr.value, 0);
  return (
    <UnitGridPaymentBreakdownImmediateView {...props}>
      <title className={styles.titleContainer}>
        <div className={styles.lineContainer}>
          <span>{props.section_title}</span>
          <span>${formatDollar(total, 0)}</span>
        </div>
        <div className={styles.separator} />
      </title>
      <unitGridPaymentBreakdownEntryViewList0>
        {(props.items || []).map((item, index) => (
          <UnitGridPaymentBreakdownEntryView.Controller
            key={`item_entry-${index}`}
            title={item.label}
            value={`$${formatDollar(item.value)}`}
          />
        ))}
      </unitGridPaymentBreakdownEntryViewList0>
    </UnitGridPaymentBreakdownImmediateView>
  );
}

export default UnitGridPaymentBreakdownImmediate;
