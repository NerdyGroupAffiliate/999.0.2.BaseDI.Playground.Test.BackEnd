import gql from "graphql-tag";

export const leadSourcesQuery = gql`
  query leadSources($propertyId: ID!) {
    leadSources(propertyId: $propertyId) {
      data
    }
  }
`;
