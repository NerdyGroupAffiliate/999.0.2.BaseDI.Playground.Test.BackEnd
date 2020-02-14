import React from "react";
import UnitAddonStorageEntryView from "../../components/UnitAddonStorageEntryView";
import { formatDollar } from "../../helpers/utils";
import styles from './styles.module.css';
import { getPersonaColor } from "../../helpers/property/persona";

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

function UnitAddonStorageEntry(props) {
  return (
    <UnitAddonStorageEntryView>
      <wrapper
        className={[styles.wrapper, props.selected ? styles.selected : ""].join(
          " "
        )}
        style={
          props.selected
            ? { border: `1px solid ${getPersonaColor(props.property)}` }
            : {}
        }
        onClick={() => props.setSelected(props.selected)}
      >
        <title>{props.title}</title>
        <value>
          ${formatDollar(props.value, 2)}
          {getDescription(props.type)}
        </value>
      </wrapper>
    </UnitAddonStorageEntryView>
  );
}

export default UnitAddonStorageEntry;
