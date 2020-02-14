import * as Sentry from '@sentry/node';
import * as moment from 'moment';
import AMLIAxiosClient from '../../helpers/amli-axios-client';

interface GuestCardArgs {
  propertyId: string;
  dateNeeded: Date;
  name: string;
}

const guestCard = async (_: any, args: GuestCardArgs, context: any) => {
  const { propertyId, dateNeeded, name } = args;
  let authorization;

  try {
    authorization = context.req.headers.authorization;
  } catch (e) {
    return false;
  }

  if (moment(dateNeeded).isBefore(moment())) {
    return false;
  }
  try {
    const guestCardData: any = await AMLIAxiosClient.post(
      '/GuestCard/SaveAuthorizedGuestCard',
      {
        PropertyId: propertyId,
        Status: 'new',
        DateNeeded: dateNeeded,
        RealPageCreatedDate: new Date(),
        LastChangedBy: name,
        Created: new Date()
      },
      {
        headers: {
          authorization: `Bearer ${authorization}`
        }
      }
    );

    return true;
  } catch (e) {
    Sentry.captureException(e);
    return false;
  }
};

export default guestCard;
