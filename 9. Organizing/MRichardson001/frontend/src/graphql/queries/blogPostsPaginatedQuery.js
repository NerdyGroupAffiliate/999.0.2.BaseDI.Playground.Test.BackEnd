import gql from "graphql-tag";

export const blogPostsPaginatedQuery = gql`
  query blogPostsPaginated($currentPage: Int, $searchVar: String, $tag: String, $region: String) {
    blogPostsPaginated(currentPage: $currentPage, searchVar: $searchVar, tag: $tag, region: $region) {
      blogPost
    }
  }
`
