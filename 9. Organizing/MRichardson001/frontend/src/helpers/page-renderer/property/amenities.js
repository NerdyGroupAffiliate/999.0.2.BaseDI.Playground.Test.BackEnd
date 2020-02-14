import React from "react";
import get from "lodash/get";
import { graphql } from "react-apollo";
import componentMapper from "../../component-mapper";
import { amenitiesQuery } from "../../../graphql/queries/amenitiesQuery";
import { getRelatedAmenitiesPage } from "../../get-related-property-pages";

const amenitiesPage = props => {
  const { property } = props;
  const amenities = getRelatedAmenitiesPage(props.property.id, props.appdata);
  const slices =
    get(props, "preview.data.body") ||
    get(props, "data.amenities.data.body") ||
    get(amenities, "data.body") ||
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
        />
      );
    })
    .filter(slice => !!slice);

  return SliceComp;
};

export const amenitiesHOC = graphql(amenitiesQuery, {
  options: props => ({
    variables: {
      propertyPageId: props.property.id
    }
  })
});

export const amenitiesSlices = amenitiesHOC(amenitiesPage);
