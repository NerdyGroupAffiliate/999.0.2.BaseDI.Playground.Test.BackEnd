import gql from "graphql-tag";

export const blogPostQuery = gql`
  query blogPost($blogPostId: String!) {
    blogPost(blogPostId: $blogPostId) {
      id
      uid
      data
    }
  }
`;
