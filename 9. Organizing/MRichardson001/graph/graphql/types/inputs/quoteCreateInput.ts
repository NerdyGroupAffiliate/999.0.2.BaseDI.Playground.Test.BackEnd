export default `
  input QuoteCreateInput {
    floorplanAmliId: Int
    propertyDocId: String
    property: [Object]
    deposit: Float
    depositRequired: Boolean
    startDate: Date
    endDate: Date
    leaseDay: Int
    leaseTerm: Int
    propertyId: Int
    quotedRent: Float
    totalRent: Float
    trackingInfo: String
    unitId: Int
    leaseOptions: [Object]
  }`;
