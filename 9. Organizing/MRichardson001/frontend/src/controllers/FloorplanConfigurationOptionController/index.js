import React from "react";
import FloorplanConfigurationOptionView from "../../components/FloorplanConfigurationOptionView";

import styles from "./styles.module.css";
export default function FloorplanConfigurationOption(props) {
  return (
    <FloorplanConfigurationOptionView>
      <option
        className={props.active ? styles.active : styles.notActive}
        onClick={e => {
          if (e) {
            e.preventDefault();
          }
          return props.onClick && props.onClick();
        }}
        href="#"
        style={{
          ...(props.style || {}),
          borderBottom: `3px ${props.style.color} solid`
        }}
      >
        {props.option}
      </option>
    </FloorplanConfigurationOptionView>
  );
}
