import gql from "graphql-tag";

export const specialQuery = gql`
  query special($specialId: String){
    special(specialId: $specialId){
      data
    }
  }
`
