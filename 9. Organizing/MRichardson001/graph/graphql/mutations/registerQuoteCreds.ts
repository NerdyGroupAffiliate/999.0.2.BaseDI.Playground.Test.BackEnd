import * as Sentry from '@sentry/node';
import config from '../../config';
import AMLIAxiosClient from '../../helpers/amli-axios-client';
import { ensureNonExpiredToken } from '../../middleware/jwt';

interface IRegisterQuoteCredsArgs {
  quoteId: string;
}

const registerQuoteCreds = async (_: any, args: IRegisterQuoteCredsArgs, context: any) => {
  const {
    req: {
      headers: { authorization }
    }
  } = context;
  const id = args.quoteId;

  try {
    const guid = await AMLIAxiosClient.post(
      `/Auth/StoreQuoteCredentials?authKey=${config.amli.authtoken}&quoteId=${id}`,
      {},
      {
        headers: {
          authorization: `Bearer ${authorization}`
        }
      }
    );
    if (!guid) {
      throw new Error('failed to register quote credentials');
    }
    return guid;
  } catch (e) {
    Sentry.captureException(e);
    console.log(e);
    return null;
  }
  return null;
};

export default ensureNonExpiredToken(registerQuoteCreds);
