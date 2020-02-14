import gql from "graphql-tag";

const ContactFormMutation = gql`
  mutation ContactForm($input: ContactFormInput!) {
    contactForm(input: $input)
  }
`;

export default ContactFormMutation;
