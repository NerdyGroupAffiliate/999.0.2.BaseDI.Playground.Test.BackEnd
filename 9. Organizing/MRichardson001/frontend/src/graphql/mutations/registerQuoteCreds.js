import gql from "graphql-tag";

const RegisterQuoteCredMutation = gql`
  mutation RegisterQuoteCredMutation($quoteId: String!) {
    registerQuoteCreds(quoteId: $quoteId)
  }
`;

export default RegisterQuoteCredMutation;
