import gql from "graphql-tag";

export const quotesQuery = gql`
  query {
    quotes {
      quoteId
      realPageQuoteId
      prospectId
      realPageGuestCardId
      unitId
      quoteExpirationDate
      startDate
      endDate
      leaseTerm
      depositRequired
      deposit
      quotedRent
      totalRent
      realPageMonthlyPaymentScheduleId
      quoteName
      trackingInfo
      quotePricingXml
      createdDate
      updateDate
      quoteStatus
      buildingNumber
      unitNumber
      unit
      floorPlan
      property
      leaseOptions
      paymentSummary
    }
  }
`;
