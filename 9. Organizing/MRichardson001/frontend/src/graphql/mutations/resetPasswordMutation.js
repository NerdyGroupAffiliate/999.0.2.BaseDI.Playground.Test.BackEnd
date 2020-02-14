import gql from "graphql-tag";

const ResetPasswordMutation = gql`
  mutation ResetPasswordMutation(
    $email: String!
    $password: String!
    $confirmPassword: String!
    $token: String!
  ) {
    resetPassword(
      email: $email
      password: $password
      confirmPassword: $confirmPassword
      token: $token
    )
  }
`;

export default ResetPasswordMutation;
