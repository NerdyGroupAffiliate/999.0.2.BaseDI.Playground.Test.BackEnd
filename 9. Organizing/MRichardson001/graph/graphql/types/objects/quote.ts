export default `
   type Quote {
    quoteId: String
    realPageQuoteId: String
    prospectId: String
    realPageGuestCardId: String
    unitId: String
    quoteExpirationDate: Date
    startDate: Date
    endDate: Date
    leaseTerm: Int
    depositRequired: Boolean
    deposit: Float
    quotedRent: Float
    totalRent: Float
    realPageMonthlyPaymentScheduleId: String
    quoteName: String
    trackingInfo: String
    quotePricingXml: String
    createdDate: Date
    updateDate: Date
    quoteStatus: String
    buildingNumber: String
    unitNumber: String
    unit: Object
    property: Object
    floorPlan: Object
    leaseOptions: [Object]
    paymentSummary: Object
  }
`;
