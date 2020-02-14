export default `
  type PaymentItem {
    ExtendedAmount: Float
    Description: String
    DueDate: String
  }

  type PaymentBreakdown {
    StartDate: String
    EndDate: String
    TotalDueImmediately: Float
    TotalDueOnPreApproval: Float
    TotalDueAtMoveIn: Float
    TotalMonthlyPayment: Float
    DayIndex: Int
    TermIndex: Int
    DueImmediately: [PaymentItem]
    DueAtMoveIn: [PaymentItem]
    DueOnApproval: [PaymentItem]
    RentSummary: [PaymentItem]
    CustomRentSummary: [PaymentItem]
  }
`;
