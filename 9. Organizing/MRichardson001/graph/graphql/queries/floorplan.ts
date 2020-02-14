import ReviewPush from 'reviewpush-node';
import initCms from '../../cms/init';
import config from '../../config';

const rp = new ReviewPush(config.reviewpush);

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const { id, amliId } = args;
  const api = await initCms();

  const floorplanProm = api.query([
    Prismic.Predicates.at('document.type', 'floor_plan'),
    Prismic.Predicates.at('my.floor_plan.amli_id', +amliId)
  ], { pageSize: 100000 });

  const results = await floorplanProm;
  let floorplan: any = null;

  if (results && results.results.length) {
    results.results.forEach((item: any) => {
      floorplan = {
        cms: item
      };
    });
  }

  return floorplan;
};
