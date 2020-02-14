export default `
  type UnitPricing {
    unit: Unit
    pricing: [PricingItem]
    leaseOptions: [Object]
    additionalPayment: [Object]
    initialPaymentInfo: Object
    QuotingDisplayStartDate: Date
    QuotingDisplayEndDate: Date
    NumberOfDaysDisplayed: Int
  }
`;
