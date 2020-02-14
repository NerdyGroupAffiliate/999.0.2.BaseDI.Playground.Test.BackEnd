import React from "react";
import get from "lodash/get";
import { graphql } from "react-apollo";
import componentMapper from "../../component-mapper";
import { locationQuery } from "../../../graphql/queries/locationQuery";
import { getRelatedLocationPage } from "../../get-related-property-pages";

const location = props => {
  const { property } = props;
  const location = getRelatedLocationPage(props.property.id, props.appdata);
  const slices =
    get(props, "preview.data.body") ||
    get(props, "data.location.data.body") ||
    get(location, "data.body") ||
    [];
  const SliceComp = slices
    .map((slice, index) => {
      const Component = componentMapper(slice.slice_type);
      if (!Component) {
        return null;
      }

      return (
        <Component
          key={`${slice.slice_type}_${index}`}
          slice={slice}
          property={property}
          mapState={props.configs.mapState}
          appData={props.configs.appdata}
          data={property.data}
          updatePropertyMapState={props.configs.updatePropertyMapState}
        />
      );
    })
    .filter(slice => !!slice);

  return SliceComp;
};

export const locationHOC = graphql(locationQuery, {
  options: props => ({
    variables: {
      propertyPageId: props.property.id
    }
  })
});

export const locationSlices = locationHOC(location);
