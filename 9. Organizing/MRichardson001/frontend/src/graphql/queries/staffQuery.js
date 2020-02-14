import gql from "graphql-tag";

export const staffQuery = gql`
  query {
    staff {
      id
      uid
      data
      type
    }
  }
`;
