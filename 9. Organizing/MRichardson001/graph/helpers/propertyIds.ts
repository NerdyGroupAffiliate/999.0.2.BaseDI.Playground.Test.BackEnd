import * as Sentry from '@sentry/node';
import AMLIAxiosClient from './amli-axios-client';
import CacheService from './cache-service';

const ttl = 60 * 60 * 12; // cache for 12 hours
const cache = new CacheService(ttl); // Create a new cache service instance

export const findEntrataIdByAmliId = async (id: string) => {
  const data = await cache.get('propertyIds', () =>
    AMLIAxiosClient.get('/Entrata/GetPropertyIdModelsAsync')
  );
  const item = data.find((itm: any) => itm.amliPropertyId === id);
  return item ? item.entrataPropertyId : null;
};

export const findIdsByAmliId = async (id: string) => {
  const data = await cache.get('propertyIds', () =>
    AMLIAxiosClient.get('/Entrata/GetPropertyIdModelsAsync')
  );
  return data.find((item: any) => item.amliPropertyId === id);
};

export const getPropertiesIds = async () => {
  try {
    const data = await cache.get('propertyIds', () =>
      AMLIAxiosClient.get('/Entrata/GetPropertyIdModelsAsync')
    );
    return data;
  } catch (e) {
    Sentry.captureException(e);
    return [];
  }
};
