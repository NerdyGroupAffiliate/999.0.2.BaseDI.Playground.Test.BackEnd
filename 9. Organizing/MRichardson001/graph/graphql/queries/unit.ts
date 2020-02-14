import * as Sentry from '@sentry/node';
import initCms from '../../cms/init';
import AMLIAxiosClient from '../../helpers/amli-axios-client';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const { id, startDate } = args;
  const api = await initCms();

  const pricingParams: any = {
    unitId: id
  };

  if (!!startDate) {
    pricingParams.requestedStartDate = startDate;
  }

  const pricingProm: any = AMLIAxiosClient.get(
    '/Pricing/GetPricingModelByUnitIdAsync',
    {
      params: pricingParams
    }
  );

  const additionalPaymentProm: any = AMLIAxiosClient.get(
    '/Pricing/GetAllAdditionalPaymentInformationAsync',
    {
      params: pricingParams
    }
  );

  const amliUnitProm: any = AMLIAxiosClient.get(
    '/Data/GetCommunityUnitByUnitId',
    {
      params: {
        unitId: id
      }
    }
  );

  const cmsProm = api.query([
    Prismic.Predicates.at('document.type', 'unit'),
    Prismic.Predicates.at('my.unit.amli_id', +id)
  ]);

  try {
    const [
      amliUnit,
      unitPricing,
      additionalPayment,
      results
    ] = await Promise.all([
      amliUnitProm,
      pricingProm,
      additionalPaymentProm,
      cmsProm
    ]);

    let unitCms = null;
    if (results && results.results.length) {
      unitCms = results.results[0];
    }
    return {
      unit: {
        ...amliUnit,
        cms: unitCms
      },
      pricing: (unitPricing && unitPricing.PricingData) || [],
      leaseOptions: (unitPricing && unitPricing.LeaseOptions) || [],
      initialPaymentInfo: (unitPricing && unitPricing.InitialPaymentInfo) || {},
      additionalPayment: additionalPayment || [],
      QuotingDisplayStartDate: (unitPricing && unitPricing.QuotingDisplayStartDate),
      QuotingDisplayEndDate: (unitPricing && unitPricing.QuotingDisplayEndDate),
      NumberOfDaysDisplayed: (unitPricing && unitPricing.NumberOfDaysDisplayed) || 30,
    };
  } catch (e) {
    Sentry.captureException(e);
  }
};
