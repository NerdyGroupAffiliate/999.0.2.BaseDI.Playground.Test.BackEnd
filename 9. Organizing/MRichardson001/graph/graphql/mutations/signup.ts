import * as Sentry from '@sentry/node';
import { get } from 'lodash';
import config from '../../config';
import AMLIAxiosClientExtendedTimeout from '../../helpers/amli-axios-client';

interface SignUpArgs {
  signUpInput: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    quoteId: number;
    leadSource: string;
  };
}

const signUp = async (_: any, args: SignUpArgs, context: any) => {
  const {
    signUpInput: {
      firstName,
      lastName,
      email,
      password,
      quoteId,
      leadSource
    }
  } = args;
  let data: any = null;
  try {
    data = await AMLIAxiosClientExtendedTimeout.post(
      `/Auth/RegisterUser?realPageQuoteId=${quoteId}`,
      {
        emailAddress: email,
        firstName,
        lastName,
        password,
        leadSource
      }
    );
    let processedData = Array.isArray(data) ? data[0] : null;
    if (processedData === 'An error occured') {
      throw new Error('AMLI signup endpoint unavailable');
    } else if (processedData === 'Failed to create user, an error occurred.') {
      throw new Error(data);
    }
    const extractDataRegExp = new RegExp('User Id - (.+) - Token - (.+)', 'ig');
    processedData = extractDataRegExp.exec(processedData);

    const userId =
      processedData && Array.isArray(processedData) ? processedData[1] : null;
    const token =
      processedData && Array.isArray(processedData) ? processedData[2] : null;
    return {
      email,
      firstName,
      lastName,
      userId,
      token
    };

  } catch (e) {
    const errorMsg = (get(e, 'response.data.Message') || get(e, 'response.data.Message')) ?
      `${get(e, 'response.data.Message')} ${get(e, 'response.data.Description')}` :
      e;

    Sentry.captureException(e);
    throw new Error(errorMsg);
  }
};

export default signUp;
