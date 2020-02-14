import React from "react";
import FloorplanPoliciesTabView from "../../components/FloorplanPoliciesTabView";
import { getPersonaColor } from "../../helpers/property/persona";
import styles from "./styles.module.css";

function FloorplanPoliciesTab(props) {
  const { property } = props;
  return (
    <FloorplanPoliciesTabView>
      <wrapper
        style={
          props.active
            ? { borderTop: `5px solid ${getPersonaColor(property, "primary")}` }
            : null
        }
        className={`${styles.title} ${
          props.active ? styles.active : styles.inactive
        }`}
        tabIndex={0}
        onKeyDown={e => e.keyCode === 13 && props.onClick && props.onClick()}
        onClick={() => props && props.onClick && props.onClick()}
      >
        {props.title}
      </wrapper>
    </FloorplanPoliciesTabView>
  );
}

export default FloorplanPoliciesTab;
