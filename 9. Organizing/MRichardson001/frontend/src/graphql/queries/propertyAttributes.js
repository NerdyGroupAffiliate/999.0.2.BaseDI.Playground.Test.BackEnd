import gql from "graphql-tag";

export const propertyAttributesQuery = gql`
  query propertyAttributes($id: String!) {
    propertyAttributes(id: $id) {
      minPrice
      maxPrice
      minBeds
      maxBeds
      reviews
      availabeUnitCount
      availablePercent
      propertyTag
      displayOrder
    }
  }
`;
