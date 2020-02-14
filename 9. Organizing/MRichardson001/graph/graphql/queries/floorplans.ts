import * as Sentry from '@sentry/node';
import initCms from '../../cms/init';
import AMLIAxiosClient from '../../helpers/amli-axios-client';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const { propertyId, amliPropertyId } = args;
  const api = await initCms();

  const amliProm = AMLIAxiosClient.get(
    '/Data/GetCommunityFloorplanSummaryByPropertyId',
    {
      params: {
        propertyId: amliPropertyId
      }
    }
  );
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
        const index = amliFloorplans.findIndex(
          (it: any) => String(it.floorplanId) === String(item.data.amli_id)
        );
        if (index !== undefined && index !== null) {
          output.push({
            // @ts-ignore
            ...amliFloorplans[index],
            cms: item
          });
        }
      });
    }

  } catch (e) {
    Sentry.captureException(new Error(e));
  }
  return output;
};
