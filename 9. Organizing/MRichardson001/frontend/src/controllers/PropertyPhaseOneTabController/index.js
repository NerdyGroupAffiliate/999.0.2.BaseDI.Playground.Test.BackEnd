import React from "react";
import { withRouter } from "react-router";
import get from "lodash/get";
import PropertyPhaseOneTabView from "../../components/PropertyPhaseOneTabView";
import GetPropertyFullRoute from "../../helpers/get-full-property-route";

import styles from './styles.module.css';

import "./index.css";

function PropertyPhaseOneTab(props) {

  let disableButton = props.disabled;
  if (props.value === "/amenities" && props.data.amenities === null) {
    disableButton = true;
  }
  if (props.value === "/floorplans" && props.property.data.enable_pricing_availability_page === "Yes"){
    disableButton = false;
  }

  const fullRoute = GetPropertyFullRoute(props.property, props.appdata);
  const propertyRoute = get(props, "property.uid");

  return (
    <PropertyPhaseOneTabView>
      <wrapper
        className={[
          props.selected ? "" : styles.notselected,
          disableButton ? styles.disabled : ""
        ].join(" ")}
        onClick={() => {
          if (disableButton || !props.value) {
            return;
          }
          if (props.value === "/"){
            props.history.push(`${fullRoute}/${propertyRoute}`);
          } else {
            props.history.push(`${fullRoute}/${propertyRoute}${props.value}`);
          }
        }}
      >
        <title className={styles.tab}>
          {props.title}
          { disableButton ? <div className={styles.comingSoon}>Page Coming Soon</div> : null }
        </title>
      </wrapper>
    </PropertyPhaseOneTabView>
  );
}

export default withRouter(PropertyPhaseOneTab);
