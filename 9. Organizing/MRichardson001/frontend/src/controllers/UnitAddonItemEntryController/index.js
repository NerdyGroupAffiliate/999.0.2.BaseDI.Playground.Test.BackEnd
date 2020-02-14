import React from "react";
import PlusIcon from "../../assets/icons/icon-plus-sign.svg";
import UnitAddonItemEntryView from "../../components/UnitAddonItemEntryView";
import { formatDollar } from "../../helpers/utils";
import styles from "./styles.module.css";
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

function UnitAddonItemEntry(props) {
  const minVal = props.min || 0;
  return (
    <UnitAddonItemEntryView>
      <wrapper
        className={[styles.wrapper, props.selected ? styles.selected : ""].join(
          " "
        )}
        style={
          props.selected
            ? { border: `1px solid ${getPersonaColor(props.property)}` }
            : {}
        }
      >
        <title className={styles.title}>{props.title}</title>
        <value className={styles.value}>
          ${formatDollar(props.value, 2)}
          {getDescription(props.type)}
        </value>
        <unit-addon-selector>
          <minus-button
            className={styles.button}
            tabIndex={0}
            onKeyDown={e =>
              e.keyCode === 13 &&
              props.setSelected(Math.max(props.quantity - 1, minVal))
            }
            onClick={() => props.setSelected(Math.max(props.quantity - 1, minVal))}
          />
          <quantity>
            <span>{props.quantity}</span>
          </quantity>
          <plus-button
            className={styles.button}
            tabIndex={0}
            onKeyDown={e =>
              e.keyCode === 13 &&
              props.quantity + 1 <= props.max &&
              props.setSelected(props.quantity + 1)
            }
            onClick={() => {
              if (props.quantity + 1 <= props.max) {
                props.setSelected(props.quantity + 1);
              }
            }}
          >
            <plus-icon className={styles.plusButton}>
              <img src={PlusIcon} alt="add item" className={styles.plusSign} />
            </plus-icon>
          </plus-button>
        </unit-addon-selector>
      </wrapper>
    </UnitAddonItemEntryView>
  );
}

export default UnitAddonItemEntry;
