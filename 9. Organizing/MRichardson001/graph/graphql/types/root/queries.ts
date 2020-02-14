export default `
  type Query {
    allData: [Page]!
    author(id: String): Author
    amenities(propertyPageId: String!): Amenities
    apartmentSizes(propertyId: ID!): ApartmentSizes
    blogPost(blogPostId: String!): Page
    blogPosts(propertyPageId: String): [BlogPost]
    relatedBlogPosts(blogPostId: String!): [Page]
    blogPostsPaginated(currentPage: Int, searchVar: String, tag: String, region: String): [BlogPost]
    blogPostsFeaturedAndPopular(featuedPost: String, popularPosts: [String]): [BlogPost]
    floorplans(propertyId: ID!, amliPropertyId: ID!): [Floorplan]!
    floorplan(id: ID, amliId: ID): Floorplan
    leadSources(propertyId: ID!): LeadSources
    location(propertyPageId: String!): Location
    furnished(propertyPageId: String!): Furnished!
    unit(id: ID!, startDate: String): UnitPricing
    units(propertyId: ID!, floorplanId: ID, amliFloorplanId: ID, moveInDate: String, pets: String): [Unit]
    unitPaymentBreakdown(id: ID!, termMonths: Int, dayIndex: Int, startDate: String, leaseOptions: [Object]): PaymentBreakdown
    guestCards(email: String!, password: String!): [GuestCard]
    property(id: ID, amliId: ID): Page!
    properties: [Property]!
    propertyFloorplansSummary(propertyId: ID!, amliPropertyId: ID!, moveInDate: String): [Floorplan]!
    propertyReviews(id: String!, cursor: String, limit: Int): ReviewConnection!
    propertyAttributes(id: String!): PropertyAttributes!
    pages(full: Boolean): [Page]!
    page(id: String!): Page!
    regionRelatedBlogPosts(region: String!): [BlogPost]
    staff: [Staff]!
    special(specialId: String): Special
    quotes: [Quote]
    redirects: Routes
  }
`;
