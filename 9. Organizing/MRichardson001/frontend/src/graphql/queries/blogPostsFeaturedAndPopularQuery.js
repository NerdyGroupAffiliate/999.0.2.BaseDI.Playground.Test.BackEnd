import gql from "graphql-tag";

export const blogPostsFeaturedAndPopularQuery = gql`
  query blogPostsFeaturedAndPopular($featuedPost: String, $popularPosts: [String] ) {
    blogPostsFeaturedAndPopular(featuedPost: $featuedPost, popularPosts: $popularPosts) {
      blogPost
    }
  }
`

