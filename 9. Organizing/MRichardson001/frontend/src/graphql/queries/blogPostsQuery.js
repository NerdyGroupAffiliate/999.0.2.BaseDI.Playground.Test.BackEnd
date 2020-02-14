import gql from "graphql-tag";

export const blogPostsQuery = gql`
  query blogPosts($propertyPageId: String) {
    blogPosts(propertyPageId: $propertyPageId) {
      blogPost
    }
  }
`
