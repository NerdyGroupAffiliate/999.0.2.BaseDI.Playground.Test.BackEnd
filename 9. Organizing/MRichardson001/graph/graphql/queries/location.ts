import initCms from '../../cms/init';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const { propertyPageId } = args;
  const api = await initCms();

  const locations = await api.query([
    Prismic.Predicates.at('my.location_page.property', propertyPageId)
  ]);

  let location: any = null;
  if (locations && locations.results.length) {
    location = locations.results[0];
  }

  return location;
};
