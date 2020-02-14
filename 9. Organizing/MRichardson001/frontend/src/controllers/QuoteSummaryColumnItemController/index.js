import React from "react";
import QuoteSummaryColumnItemView from "../../components/QuoteSummaryColumnItemView";

import styles from './styles.module.css';

function QuoteSummaryColumnItem(props) {
  return (
    <QuoteSummaryColumnItemView>
      <label className={styles.label}>{props.label}</label>
      <value className={styles.value}>{props.value}</value>
    </QuoteSummaryColumnItemView>
  );
}

export default QuoteSummaryColumnItem;
