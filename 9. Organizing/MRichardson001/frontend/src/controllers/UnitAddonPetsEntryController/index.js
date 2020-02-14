import React from "react";
import UnitAddonPetsEntryView from "../../components/UnitAddonPetsEntryView";
import { formatDollar } from "../../helpers/utils";

function getDescription(type) {
  switch (type) {
    case "rent":
      return " / mo";
    case "deposit":
      return " deposit";
    case "fee":
      return " fee";
    default:
      return "";
  }
}

function UnitAddonPetsEntry(props) {
  return (
    <UnitAddonPetsEntryView>
      <label>{props.label}</label>
      <value>
        ${formatDollar(props.value, 2)}
        {getDescription(props.type)}
      </value>
    </UnitAddonPetsEntryView>
  );
}

export default UnitAddonPetsEntry;
