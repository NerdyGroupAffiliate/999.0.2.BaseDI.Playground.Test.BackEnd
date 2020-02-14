import * as Sentry from '@sentry/node';
import config from '../../config';
import AMLIAxiosClient from '../../helpers/amli-axios-client';


interface ResetPasswordArgs {
  email: string;
  password: string;
  confirmPassword: string;
  token: string;
}

const resetPassword = async (_: any, args: ResetPasswordArgs, context: any) => {
  const {
    req: {
      headers: { authorization }
    }
  } = context;

  const { email, password, confirmPassword, token } = args;
  if (!token || !(password === confirmPassword)) {
    return false;
  }

  try {

    const resetPasswordReply: any = await AMLIAxiosClient.post(
      `/Auth/ResetPasswordAsync?authKey=${config.amli.authtoken}`,
      { userName: email, password, token },
      {
        headers: {
          authorization: `Bearer ${authorization}`
        }
      }
    );

    return resetPasswordReply && resetPasswordReply.success === true;
  } catch (e) {
    console.log(e);
    Sentry.captureException(e);
    return false;
  }
};

export default resetPassword;
