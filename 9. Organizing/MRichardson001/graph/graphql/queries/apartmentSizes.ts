import AMLIAxiosClient from '../../helpers/amli-axios-client';
import CacheService from '../../helpers/cache-service';

const ttl = 60 * 60 * 24; // cache for 24 hours
const cache = new CacheService(ttl); // Create a new cache service instance

export default async (obj: any, args: any, context: any) => {
  const { propertyId } = args;
  const amliProm = cache.get(`apartmentSizes${propertyId}`, () =>
    AMLIAxiosClient.get(
      '/ListData/GetApartmentSizesAsync',
      {
        params: {
          propertyId
        }
      }
    )
  );
  const results = await amliProm;

  return {
      data: results
  };
};
