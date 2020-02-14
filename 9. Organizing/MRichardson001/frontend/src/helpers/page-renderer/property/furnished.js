import React from "react";
import get from "lodash/get";
import { graphql } from "react-apollo";
import componentMapper from "../../component-mapper";
import { furnishedQuery } from "../../../graphql/queries/furnishedQuery";
import { getRelatedFurnishedPage } from "../../get-related-property-pages";

const furnished = props => {
  const { property } = props;
  const furnished = getRelatedFurnishedPage(props.property.id, props.appdata);
  const slices =
    get(props, "preview.data.body") ||
    get(props, "data.furnished.data.body") ||
    get(furnished, "data.body") ||
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
          route={props.configs.subroute}
        />
      );
    })
    .filter(slice => !!slice);

  return SliceComp;
};

export const furnishedHOC = graphql(furnishedQuery, {
  options: props => ({
    variables: {
      propertyPageId: props.property.id
    }
  })
});

export const furnishedSlices = furnishedHOC(furnished);
