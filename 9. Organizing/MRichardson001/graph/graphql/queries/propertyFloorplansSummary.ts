import * as Sentry from '@sentry/node';
import initCms from '../../cms/init';
import AMLIAxiosClient from '../../helpers/amli-axios-client';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const { propertyId, amliPropertyId, moveInDate } = args;
  const api = await initCms();

  const amliProm = AMLIAxiosClient.get('/Units/GetAvailableByPropId', {
    params: {
      moveInDate,
      propertyId: amliPropertyId,
      returnUnits: true,
    }
  });
  const cmsProm = api.query([
    Prismic.Predicates.at('document.type', 'floor_plan'),
    Prismic.Predicates.at('my.floor_plan.properties.property', propertyId)
  ], { pageSize: 100000 });

  const output: any = [];
  try {
    const [amliFloorplans, results] = await Promise.all([amliProm, cmsProm]);

    if (results && results.results.length) {
      results.results.forEach((item: any) => {
        // @ts-ignore
        const index = amliFloorplans.floorplanSummaries.findIndex(
          (it: any) => String(it.floorplanId) === String(item.data.amli_id)
        );
        if (index !== undefined && index !== null && index > -1) {
          output.push({
            // @ts-ignore
            ...amliFloorplans.floorplanSummaries[index],
            cms: item
          });
        }
      });
    }

  } catch (e) {
    Sentry.captureException(e);
  }
  return output;
};
