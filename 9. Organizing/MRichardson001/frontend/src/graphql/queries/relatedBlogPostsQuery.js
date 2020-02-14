import gql from "graphql-tag";

export const relatedBlogPostsQuery = gql`
  query relatedBlogPostsQuery($blogPostId: String!) {
    relatedBlogPosts(blogPostId: $blogPostId) {
      id
      uid
      data
    }
  }
`;
