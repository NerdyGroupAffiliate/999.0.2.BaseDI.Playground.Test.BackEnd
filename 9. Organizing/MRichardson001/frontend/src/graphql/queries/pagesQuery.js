import gql from "graphql-tag";

export const pagesQuery = gql`
  query pages($full: Boolean) {
    pages(full: $full) {
      id
      uid
      data
      type
    }
  }
`;
