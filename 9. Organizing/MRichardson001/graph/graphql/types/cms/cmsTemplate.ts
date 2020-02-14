const cmsTemplate = (name: string, text: string) => `
  type ${name} {
    id: ID!
    name: String
    description: String
    coverPhotoUrl: String
    ${text}
  }
`;

export default cmsTemplate;
