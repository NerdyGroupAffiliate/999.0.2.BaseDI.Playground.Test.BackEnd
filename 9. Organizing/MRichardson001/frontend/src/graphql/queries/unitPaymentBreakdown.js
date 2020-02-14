import gql from "graphql-tag";

export const unitPaymentBreakdownQuery = gql`
  query unitPaymentBreakdown($id: ID!, $termMonths: Int, $dayIndex: Int, $leaseOptions: [Object], $startDate: String) {
    unitPaymentBreakdown(id: $id, termMonths: $termMonths, dayIndex: $dayIndex, leaseOptions: $leaseOptions, startDate: $startDate) {
        DayIndex
        TermIndex
        TotalDueImmediately
        TotalDueOnPreApproval
        TotalDueAtMoveIn
        TotalMonthlyPayment
        DueImmediately {
            ExtendedAmount
            Description
            DueDate
        }
        DueAtMoveIn {
            ExtendedAmount
            Description
            DueDate
        }
        DueOnApproval {
            ExtendedAmount
            Description
            DueDate
        }
        RentSummary {
            ExtendedAmount
            Description
            DueDate
        }
        CustomRentSummary {
            ExtendedAmount
            Description
            DueDate
        }
    }
  }
`;
