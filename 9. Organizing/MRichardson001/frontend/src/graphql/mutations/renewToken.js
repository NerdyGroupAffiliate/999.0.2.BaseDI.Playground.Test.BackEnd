import gql from "graphql-tag";

const RenewTokenMutation = gql`
  mutation RenewTokenMutation {
    renewToken {
      token
    }
  }
`;

export default RenewTokenMutation;