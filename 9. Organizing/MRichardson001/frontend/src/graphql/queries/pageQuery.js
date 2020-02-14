import gql from "graphql-tag";

export const pageQuery = gql`
  query page($id: String!) {
    page(id: $id) {
      id
      uid
      data
    }
  }
`