import gql from "graphql-tag";

export const locationQuery = gql`
  query location($propertyPageId: String!){
    location(propertyPageId: $propertyPageId){
      data
    }
  }
`
