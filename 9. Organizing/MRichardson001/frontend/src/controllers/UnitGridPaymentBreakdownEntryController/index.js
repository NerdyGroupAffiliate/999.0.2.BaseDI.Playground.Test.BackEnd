import React from "react";
import UnitGridPaymentBreakdownEntryView from "../../components/UnitGridPaymentBreakdownEntryView";

function UnitGridPaymentBreakdownEntry(props) {
  return (
    <UnitGridPaymentBreakdownEntryView>
      <title>{props.title}</title>
      <value>{props.value}</value>
    </UnitGridPaymentBreakdownEntryView>
  );
}

export default UnitGridPaymentBreakdownEntry;
