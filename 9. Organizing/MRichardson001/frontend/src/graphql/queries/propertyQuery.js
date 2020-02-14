import gql from "graphql-tag";

export const propertyQuery = gql`
  query property($id: ID, $amliId: ID) {
    property(id: $id, amliId: $amliId) {
      id
      uid
      data
    }
  }
`;
