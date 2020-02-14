import gql from "graphql-tag";

export const unitsQuery = gql`
  query units($propertyId: ID!, $floorplanId: ID, $amliFloorplanId: ID, $moveInDate: String, $pets: String) {
    units(
      propertyId: $propertyId
      floorplanId: $floorplanId
      amliFloorplanId: $amliFloorplanId
      moveInDate: $moveInDate
      pets: $pets
    ) {
      attributes
      floor
      pets
      quoteDateRange
      unitId
      buildingNumber
      unitNumber
      realPageUnitId
      rpAvailableDate
      rent
      floorplanTag
      amenities
      pricing
      sqftMin
      sqftMax
      prismicUnitNumber
      affordableUnit
      squareFeet
    }
  }
`;
