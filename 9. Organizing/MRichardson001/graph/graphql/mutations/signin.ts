import * as Sentry from '@sentry/node';
import config from '../../config';
import AMLIAxiosClient from '../../helpers/amli-axios-client';

interface SignInArgs {
  signInInput: {
    email: string;
    password: string;
  };
}

const signIn = async (_: any, args: SignInArgs, context: any) => {

  const { signInInput: { email, password } } = args;
  let user: any = null;
  try {
    user = await AMLIAxiosClient.post(`/Auth/AuthenticateUser?authKey=${config.amli.authtoken}`,
      {
        emailAddress: email,
        password
      });
  } catch (error) {
    Sentry.captureException(error);
    throw new Error('Invalid username/password');
  }

  return {
    email: user && user.emailAddress,
    firstName: user && user.firstName,
    lastName: user && user.lastName,
    userId: user && user.userId,
    token: user && user.token,
  };
};

export default signIn;
