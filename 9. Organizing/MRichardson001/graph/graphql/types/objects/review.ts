export default `
  type Review {
    id: Int
    review: String
    rating: Float
    reviewer: String
    review_url: String
    share_url: String
    review_date: Date
    review_time: Date
    user_profile_image: String
    published: Boolean
  }
`;

export const ReviewConnection = `
  type ReviewConnection {
    edges: [Review]!
    pages: PageInfo
  }
`;
