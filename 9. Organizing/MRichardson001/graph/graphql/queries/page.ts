import { flatten, get } from 'lodash';
import initCms from '../../cms/init';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const { id } = args;
  const api = await initCms();

  const pages = await api.query(
    Prismic.Predicates.any('my.standard_page.uid', [String(id)]),
    { pageSize: 100000 }
  );
  let page: any = null;
  if (pages && pages.results.length) {
    page = pages.results[0];
  }

  return page;
};
