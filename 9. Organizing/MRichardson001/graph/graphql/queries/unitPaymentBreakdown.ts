// @ts-ignore
import * as Sentry from '@sentry/node';
import config from '../../config';
import AMLIAxiosClient from '../../helpers/amli-axios-client';

export default async (obj: any, args: any, context: any) => {
  const { id, termMonths, dayIndex, leaseOptions, startDate } = args;
  const params = {
    authKey: config.amli.authtoken,
    unitId: id,
    ...(termMonths ? { termMonths } : {}),
    ...(dayIndex !== null && dayIndex !== undefined ? { dayIndex } : {}),
    ...(startDate ? { startDate } : {}),
  };
  try {
    const breakdown = await AMLIAxiosClient.post(
      '/Pricing/GetQuoteSummaryInformationAsync',
      leaseOptions,
      {
        params
      }
    );

    return breakdown;

  } catch (e) {
    Sentry.captureException(e);
    console.log(e);
    return null;
  }
};
