export default `
  type Floorplan {
    floorplanId: ID
    entrataFloorplanId: ID
    bathroomMax: Float
    bathroomMin: Float
    bedroomMax: Int
    bedroomMin: Int
    priceMax: Float
    priceMaxIls: Float
    priceMin: Float
    priceMinIls: Float
    rpPropertyId: ID
    sqFtMax: Float
    sqftMin: Float
    displayOrder: Int
    availablePercent: Float
    availableUnitCount: Int
    unitCount: Int
    created: Date
    lastChanged: Date
    lastChangedBy: String
    isFloorplanActive: Boolean
    floorplanName: String
    floorplanTag: String
    descriptionLong: String
    descriptionShort: String
    returnedAffordableUnitCount: Int
    returnedRegularUnitCount: Int
    allFloorPlanUnitsAreAffordable: Boolean
    cms: Object
  }
`;
