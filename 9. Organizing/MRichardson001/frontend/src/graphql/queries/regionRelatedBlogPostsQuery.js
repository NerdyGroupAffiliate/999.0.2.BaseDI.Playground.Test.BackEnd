import gql from "graphql-tag";

export const regionRelatedBlogPostsQuery = gql`
  query regionRelatedBlogPosts($region: String!) {
    regionRelatedBlogPosts(region: $region) {
      blogPost
    }
  }
`
