import gql from "graphql-tag";

export const furnishedQuery = gql`
  query location($propertyPageId: String!){
    furnished(propertyPageId: $propertyPageId){
      data
    }
  }
`
