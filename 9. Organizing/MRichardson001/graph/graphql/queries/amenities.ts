import * as Sentry from '@sentry/node';
import initCms from '../../cms/init';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const { propertyPageId } = args;
  const api = await initCms();
  try {
    const amenitiesData = await api.query([
      Prismic.Predicates.at('my.amenities_page.property', propertyPageId)
    ]);


    let amenities: any = null;
    if (amenitiesData && amenitiesData.results.length) {
      amenities = amenitiesData.results[0];
    }

    return amenities;
  } catch (e) {
    Sentry.captureException(e);
    return [];
  }
};
