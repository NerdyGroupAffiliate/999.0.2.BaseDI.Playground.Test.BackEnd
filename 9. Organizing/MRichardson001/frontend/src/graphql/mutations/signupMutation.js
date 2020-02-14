import gql from "graphql-tag";

const SignUpMutation = gql`
    mutation SignUpMutation($signUpInput: SignUpInput!) {
        signUp(signUpInput: $signUpInput) {
            userId
            firstName
            lastName
            email
            token
        }
    }
`;

export default SignUpMutation;
