import * as Sentry from '@sentry/node';
import * as moment from 'moment';
import config from '../../config';
import AMLIAxiosClientExtendedTimeout from '../../helpers/amli-axios-client';
import { ensureNonExpiredToken } from '../../middleware/jwt';

interface CreateQuoteArgs {
  quoteCreateInput: {
    deposit: number;
    depositRequired: boolean;
    startDate: Date;
    endDate: Date;
    leaseDay: number;
    leaseTerm: number;
    propertyId: number;
    quotedRent: number;
    totalRent: number;
    trackingInfo: string;
    unitId: number;
    leaseOptions: any[];
  };
}

const createQuote = async (_: any, args: CreateQuoteArgs, context: any) => {
  const {
    req: {
      headers: { authorization }
    }
  } = context;
  const data = args.quoteCreateInput;
  const guestCardPayload = {
    PropertyId: data.propertyId,
    Status: 'new',
    DateNeeded: moment().add(48, 'hours').format('MM/DD/YY'),
    LastChangedBy: 'testerjester',
  };
  try {
    const guestCard = await AMLIAxiosClientExtendedTimeout.post(
      `/GuestCard/SaveAuthorizedGuestCard?authKey=${config.amli.authtoken}`,
      guestCardPayload,
      {
        headers: {
          authorization: `Bearer ${authorization}`
        }
      }
    );
    if (!guestCard) {
      throw new Error('failed to create guest card');
    }
    const res = await AMLIAxiosClientExtendedTimeout.post(
      `/Quote/SaveNewAuthorizedQuoteModel?authKey=${config.amli.authtoken}`,
      data,
      {
        timeout: 450000,
        headers: {
          authorization: `Bearer ${authorization}`
        }
      }
    );

    // @ts-ignore
    if (res && res.quoteId !== -1) {
      return res;
    } else {
      return null;
    }
  } catch (e) {
    Sentry.captureException(e);
    console.log(e);
    return false;
  }
  return false;
};

export default ensureNonExpiredToken(createQuote);
