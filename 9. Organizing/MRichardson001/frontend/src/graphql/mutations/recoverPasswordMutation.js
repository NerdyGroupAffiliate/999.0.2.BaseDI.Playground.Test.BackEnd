import gql from "graphql-tag";

const RecoverPasswordMutation = gql`
  mutation RecoverPasswordMutation($email: String!, $url: String!) {
    recoverPassword(email: $email, url: $url)
  }
`;

export default RecoverPasswordMutation;
