export default `
  type Mutation {
    signIn(signInInput: SignInInput): Session!
    renewToken: SessionRenewal!
    signUp(signUpInput: SignUpInput): Session!
    guestCard(input: GuestCardInput): Boolean
    recoverPassword(email: String, url: String): Boolean
    registerQuoteCreds(quoteId: String): String
    resetPassword(email: String, password: String, confirmPassword: String, token: String): Boolean
    createQuote(quoteCreateInput: QuoteCreateInput): Quote
    contactForm(input: ContactFormInput): Boolean
  }
`;
