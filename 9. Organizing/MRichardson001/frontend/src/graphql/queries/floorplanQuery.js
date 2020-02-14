import gql from "graphql-tag";

export const floorplanQuery = gql`
  query floorplan($id: ID, $amliId: ID) {
    floorplan(id: $id, amliId: $amliId) {
      floorplanId
      isFloorplanActive
      cms
    }
  }
`;
