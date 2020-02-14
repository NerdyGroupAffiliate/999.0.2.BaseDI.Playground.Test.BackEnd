import gql from "graphql-tag";

export const apartmentSizesQuery = gql`
  query apartmentSizes($propertyId: ID!) {
    apartmentSizes(propertyId: $propertyId) {
      data
    }
  }
`;
