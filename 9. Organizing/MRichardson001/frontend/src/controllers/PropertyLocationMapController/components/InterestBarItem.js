import React from "react";
import styles from "./components.styles.module.css";
import { getIcon } from "../../../helpers/map-utils";

export default props => (
  <React.Fragment>
    <div
      className={styles.iconContainer}
      style={
        props.places === props.selected
          ? { backgroundColor: props.activeColor || "#f5a623" }
          : {}
      }
    >
      <img
        className={styles.icon}
        src={getIcon(props.places)}
        alt={props.places}
      />
    </div>
    <span className={styles.label}>{props.title}</span>
  </React.Fragment>
);
