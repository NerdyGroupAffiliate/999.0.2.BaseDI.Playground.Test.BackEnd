import gql from "graphql-tag";

export const propertyReviewsQuery = gql`
  query propertyReviews($id: String!, $limit: Int!) {
    propertyReviews(id: $id, limit: $limit) {
      edges {
        id
        review
        rating
        reviewer
        review_url
        share_url
        review_date
        review_time
        user_profile_image
        published
      }
      pages {
        cursor
        current
        pages
        items
      }
    }
  }
`;
