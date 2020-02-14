import * as Sentry from '@sentry/node';
import initCms from '../../cms/init';
import { findEntrataIdByAmliId } from '../../helpers/propertyIds';
// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const api = await initCms();

  const { id } = args;
  try {
    const results = await api.query(Prismic.Predicates.at('document.id', id));
    const amliId = results.results[0].amli_id;
    const entrata_id = await findEntrataIdByAmliId(amliId);
    return { ...results.results[0], entrata_id };
  } catch (e) {
    Sentry.captureException(e);
  }
};
