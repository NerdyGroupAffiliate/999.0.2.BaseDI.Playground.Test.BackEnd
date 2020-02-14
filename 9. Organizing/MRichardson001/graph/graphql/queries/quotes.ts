import * as Sentry from '@sentry/node';
import initCms from '../../cms/init';
import AMLIAxiosClient from '../../helpers/amli-axios-client';
import { ensureNonExpiredToken } from '../../middleware/jwt';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default ensureNonExpiredToken(async (obj: any, args: any, context: any) => {
  const {
    req: {
      headers: { authorization }
    }
  } = context;
  try {
    const quotesAmli: any = await AMLIAxiosClient.get(
      '/Quote/GetExtendedQuotesAsync?expiredQuoteRange=30',
      {
        headers: {
          authorization: `Bearer ${authorization}`
        }
      }
    );

    const unitIds =
      (quotesAmli || []).map((quote: any) => quote.unitId);

    const floorplanIds = (quotesAmli || []).map(
      (quote: any) =>
        quote && quote.floorPlan && quote.floorPlan.floorPlanId ?
          quote.floorPlan.floorPlanId : undefined
    ).filter((it: string) => !!it);

    // const propertyIds = (quotesAmli || []).map(
    //   (quote: any) =>
    //     quote && quote.property && quote.property.propertyId ?
    //       quote.property.propertyId : undefined
    // ).filter((it: string) => !!it);

    const api = await initCms();

    if (unitIds.length > 0) {
      const unitsData = await api.query(
        Prismic.Predicates.any('my.unit.amli_id', unitIds)
      );
      if (unitsData && unitsData.results.length) {
        unitsData.results.forEach((unit: any) => {
          const indexes = quotesAmli.map(
            (quote: any, index: number) =>
              quote && quote.unitId === unit.data.amli_id ? index : -1
          );
          indexes.forEach((index: number) => {
            if (index > -1) {
              quotesAmli[index].unit = {
                ...quotesAmli[index].unit,
                ...unit
              };
            }
          });
        });
      }
    }

    if (floorplanIds.length > 0) {
      const floorplanData = await api.query(
        Prismic.Predicates.any('my.floor_plan.amli_id', floorplanIds)
      );
      if (floorplanData && floorplanData.results.length) {
        floorplanData.results.forEach((floorplan: any) => {
          const indexes = quotesAmli.map(
            (quote: any, index: number) =>
              quote && quote.floorPlan && quote.floorPlan.floorPlanId === floorplan.data.amli_id ? index : -1
          );
          indexes.forEach((index: number) => {
            if (index > -1) {
              quotesAmli[index].floorPlan = {
                ...quotesAmli[index].floorPlan,
                ...floorplan
              };
            }
          });
        });
      }
    }

    // if (propertyIds.length > 0) {
    //   const propertyData = await api.query(
    //     Prismic.Predicates.any('my.property.amli_id', propertyIds)
    //   );
    //   if (propertyData && propertyData.results.length) {
    //     propertyData.results.forEach((property: any) => {
    //       const index = quotesAmli.findIndex(
    //         (quote: any) =>
    //           quote && quote.property && quote.property.floorPlanId === property.data.amli_id
    //       );
    //       if (index > -1) {
    //         quotesAmli[index].property = {
    //           ...quotesAmli[index].property,
    //           ...property
    //         };
    //       }
    //     });
    //   }
    // }

    return quotesAmli.filter((quote: any) =>
      quote &&
      quote.floorPlan && quote.floorPlan.data &&
      quote.unit
    );
  } catch (e) {
    if ((e && e.response && e.response.status === 404) || (e && e.status && e.status === 404)) {
      return [];
    } else {
      Sentry.captureException(e);
      console.log(e);
    }
  }
});
