import gql from "graphql-tag";

const SignInMutation = gql`
  mutation SignInMutation($signInInput: SignInInput!) {
    signIn(signInInput: $signInInput) {
      userId
      firstName
      lastName
      email
      token
    }
  }
`;

export default SignInMutation;
