import gql from "graphql-tag";

export const amenitiesQuery = gql`
  query amenities($propertyPageId: String!){
    amenities(propertyPageId: $propertyPageId){
      data
    }
  }
`
