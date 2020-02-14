import * as Sentry from '@sentry/node';
import config from '../../config';
import AMLIAxiosClient from '../../helpers/amli-axios-client';

interface RecoverPasswordArgs {
  email: string;
  url: string;
}

const recoverPassword = async (_: any, args: RecoverPasswordArgs, context: any) => {
  const {
    req: {
      headers: { authorization }
    }
  } = context;
  const { email, url } = args;

  try {
    const recoverPasswordReply: any = await AMLIAxiosClient.post(
      `/Auth/RequestPasswordResetByModelAsync?authKey=${config.amli.authtoken}`,
      { userName: email, resetPasswordUrl: url },
      {
        headers: {
          authorization: `Bearer ${authorization}`
        }
      }
    );
    return recoverPasswordReply && recoverPasswordReply.success === true;
  } catch (e) {
    console.log(e);
    Sentry.captureException(e);
    return false;
  }

};

export default recoverPassword;
