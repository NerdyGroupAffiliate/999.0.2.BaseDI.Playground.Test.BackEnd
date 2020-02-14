import gql from "graphql-tag";

export const propertyFloorplansSummary = gql`
  query propertyFloorplansSummary(
    $propertyId: ID!
    $amliPropertyId: ID!
    $moveInDate: String
  ) {
    propertyFloorplansSummary(
      propertyId: $propertyId
      amliPropertyId: $amliPropertyId
      moveInDate: $moveInDate
    ) {
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
      returnedRegularUnitCount
      returnedAffordableUnitCount
      allFloorPlanUnitsAreAffordable
      displayOrder
      cms
    }
  }
`;
