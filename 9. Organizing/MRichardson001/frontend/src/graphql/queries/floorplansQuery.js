import gql from "graphql-tag";

export const floorplansQuery = gql`
  query floorplans($propertyId: ID!, $amliPropertyId: ID!) {
    floorplans(propertyId: $propertyId, amliPropertyId: $amliPropertyId) {
      floorplanId
      entrataFloorplanId
      floorplanName
      bathroomMin
      bedroomMax
      bedroomMin
      priceMin
      priceMax
      bedroomMax
      sqFtMax
      sqftMin
      availableUnitCount
      isFloorplanActive
      descriptionShort
      cms
      displayOrder
    }
  }
`;
