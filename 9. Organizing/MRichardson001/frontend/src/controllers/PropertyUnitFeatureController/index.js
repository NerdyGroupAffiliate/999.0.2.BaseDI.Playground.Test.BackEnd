import React from "react";
import PropertyUnitFeatureView from "../../components/PropertyUnitFeatureView";

function PropertyUnitFeature(props) {
  return (
    <PropertyUnitFeatureView>
      <value>{props.value}</value>
    </PropertyUnitFeatureView>
  );
}

export default PropertyUnitFeature;
