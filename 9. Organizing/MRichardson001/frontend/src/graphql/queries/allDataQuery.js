import gql from "graphql-tag";

export const allDataQuery = gql`
  query {
    allData {
      id
      uid
      data
      type
    }
  }
`;
