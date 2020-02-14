import * as Sentry from '@sentry/node';
import { get } from 'lodash';
import initCms from '../../cms/init';
import AMLIAxiosClient from '../../helpers/amli-axios-client';
import { findEntrataIdByAmliId } from '../../helpers/propertyIds';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  let propertiesAmli: any;
  try {
    propertiesAmli = await AMLIAxiosClient.get('/Data/GetAllActiveProperties');
  } catch (e) {
    Sentry.captureException(e);
  }

  const api = await initCms();
  const results = await api.query(
    Prismic.Predicates.any(
      'my.property.amli_id',
      (propertiesAmli || []).map((property: any) => String(property.propertyId))
    )
  );
  const properties: any[] = [];
  if (results && results.results.length) {
    for (const property of results.results) {
      const entrata_id = await findEntrataIdByAmliId(
        get(property, 'data.amli_id')
      );
      const entry = {
        id: property.id,
        amli_id: get(property, 'data.amli_id'),
        name: get(property, 'data.name[0].text'),
        description: get(property, 'data.basic_description[0].text'),
        image: get(property, 'data.image.url'),
        entrata_id
      };
      properties.push(entry);
    }
  }
  return properties;
};

