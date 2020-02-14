import * as Sentry from '@sentry/node';
import AMLIAxiosClient from '../../helpers/amli-axios-client';
import { ensureNonExpiredToken } from '../../middleware/jwt';

const renewToken = async (_: any, args: any, context: any) => {
  const {
    req: {
      headers: { authorization }
    }
  } = context;

  let token: any = null;
  try {
    token = await AMLIAxiosClient.get('/Auth/RenewAuthTokenAsync',
      {
        headers: {
          authorization: `Bearer ${authorization}`
        }
      });

  } catch (error) {
    Sentry.captureException(error);
    throw new Error('Invalid or expired authentication');
  }

  return {
    token
  };
};

export default ensureNonExpiredToken(renewToken);
