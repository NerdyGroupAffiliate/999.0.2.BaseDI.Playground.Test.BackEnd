import gql from "graphql-tag";

export const unitQuery = gql`
  query unit($id: ID!, $startDate: String) {
    unit(id: $id, startDate: $startDate) {
      unit {
        description
        cms
        unitType
        sqft
        floor
      }
      pricing {
        Day
        QuoteDateDisplay
        EndDateDisplay
        Pricing {
          Term
          Amenities
          BaseRent
          Premium
          TotalCost
          EndDate
        }
      }
      leaseOptions
      additionalPayment
      initialPaymentInfo
      QuotingDisplayStartDate
      QuotingDisplayEndDate
      NumberOfDaysDisplayed
    }
  }
`;
