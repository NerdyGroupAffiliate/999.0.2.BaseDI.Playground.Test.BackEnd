import gql from "graphql-tag";

const CreateQuoteMutation = gql`
  mutation CreateQuoteMutation($quoteCreateInput: QuoteCreateInput!) {
    createQuote(quoteCreateInput: $quoteCreateInput) {
      quoteId
      realPageQuoteId
      realPageGuestCardId
    }
  }
`;

export default CreateQuoteMutation;
