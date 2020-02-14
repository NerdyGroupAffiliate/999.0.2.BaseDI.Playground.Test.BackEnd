import gql from "graphql-tag";

export const authorQuery = gql`
  query author($id: String) {
    author(id: $id) {
      id
      uid
      data
    }
  }
`;
