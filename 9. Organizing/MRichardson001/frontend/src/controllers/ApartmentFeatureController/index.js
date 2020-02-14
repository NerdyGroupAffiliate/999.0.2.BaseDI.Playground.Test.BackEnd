import React from "react";
import ApartmentFeatureView from "../../components/ApartmentFeatureView";

import "./index.css"

export default props => {
  return (
    <ApartmentFeatureView>
      <feature>{props.feature}</feature>
    </ApartmentFeatureView>
  );
};
