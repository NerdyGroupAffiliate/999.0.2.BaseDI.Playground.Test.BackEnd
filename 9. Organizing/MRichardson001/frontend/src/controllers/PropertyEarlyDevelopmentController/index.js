import React from "react";
import { graphql } from "react-apollo";
import PropertyEarlyBannerView from "../../components/PropertyEarlyBannerView";
import PropertyEarlyPhaseView from "../../components/PropertyEarlyPhaseView";
import PropertyEarlyMenuView from "../../components/PropertyEarlyMenuView";
import { amenitiesQuery } from "../../graphql/queries/amenitiesQuery";

function PropertyEarlyDevelopment(props) {
  return (
    <span>
      <PropertyEarlyBannerView.Controller {...props} />
      <PropertyEarlyPhaseView.Controller {...props} />
      <PropertyEarlyMenuView.Controller {...props} />
    </span>
  );
}

export default graphql(amenitiesQuery, {
  options: props => ({
    variables: {
      propertyPageId: props.property.id
    }
  })
})(PropertyEarlyDevelopment);
