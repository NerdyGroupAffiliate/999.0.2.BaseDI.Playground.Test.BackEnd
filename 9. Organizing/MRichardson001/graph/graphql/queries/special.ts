import initCms from '../../cms/init';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const { specialId } = args;
  if (!specialId) {
    return null;
  }
  const api = await initCms();

  const specials = await api.query([
    Prismic.Predicates.at('document.id', specialId)
  ], { pageSize: 100000 });

  let special: any = null;
  if (specials && specials.results.length) {
    special = specials.results[0];
  }

  return special;
};
