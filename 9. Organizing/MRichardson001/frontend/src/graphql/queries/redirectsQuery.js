import gql from "graphql-tag";

export const redirectsQuery = gql`
  query {
    redirects {
      Routes
    }
  }
`;

