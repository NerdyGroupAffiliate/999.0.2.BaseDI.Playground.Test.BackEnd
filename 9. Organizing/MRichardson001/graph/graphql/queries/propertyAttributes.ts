// @ts-ignore
import * as Sentry from '@sentry/node';
import { get } from 'lodash';
import ReviewPush from 'reviewpush-node';
import config from '../../config';
import AMLIAxiosClient from '../../helpers/amli-axios-client';
import CacheService from '../../helpers/cache-service';
import getReviewsFromEmbeddedFeed from '../../helpers/embedded-feed-axios';

const rp = new ReviewPush(config.reviewpush);
const ttl = 60 * 60 * 1; // cache for 1 hours
const cache = new CacheService(ttl); // Create a new cache service instance

export default async (obj: any, args: any, context: any) => {
  const { id } = args;

  const amlirPropertyAttributesProm: any = AMLIAxiosClient.get(
    '/Data/GetCommunitySummaryByPropertyId',
    {
      params: {
        propertyId: id
      }
    }
  );

  const amliReviewProm: any = AMLIAxiosClient.get(
    '/Data/GetReviewPushLocationIdByPropertyId',
    {
      params: {
        propertyId: id
      }
    }
  );

  let amliPropertyAttributes;
  let amliReviewPushId;

  try {
    amliReviewPushId = await cache.get(`reviewpush_property_id_${id}`, () => amliReviewProm);
  } catch (e) {
    console.log('Could not fetch reviewpush data');
  }

  try {
    amliPropertyAttributes = await amlirPropertyAttributesProm;
    const data = await getReviewsFromEmbeddedFeed(amliReviewPushId);
    const bedrooms = JSON.parse(amliPropertyAttributes.bedrooms).Bedrooms;

    if (data) {
      const summary = {
        minPrice: amliPropertyAttributes.minMarketRent,
        maxPrice: amliPropertyAttributes.maxMarketRent,
        minBeds: bedrooms.length > 0 ? Math.min(...bedrooms) : 0,
        maxBeds: bedrooms.length > 0 ? Math.max(...bedrooms) : 0,
        reviews: {
          rating: data.ratingValue,
          rating_weighted: data.ratingValue,
          reviews: data.reviewCount
        },
        availabeUnitCount: amliPropertyAttributes.availableUnitCount,
        availablePercent: amliPropertyAttributes.availablePercent,
        propertyTag: amliPropertyAttributes.propertyTag,
        displayOrder: amliPropertyAttributes.displayOrder
      };
      return summary;
    }
    return await getDataFromReviewPushApi(amliPropertyAttributes, amliReviewPushId, bedrooms);
  } catch (e) {
    Sentry.captureException(e);
  }
};

async function getDataFromReviewPushApi(amliPropertyAttributes: any, amliReviewPushId: any, bedrooms: any) {
  const options = {
    id: amliReviewPushId
  };

  let reviews = [];
  try {
    const reviewPushData = await rp.Locations.get(options);
    reviews = get(reviewPushData, 'data.attributes.aggregate', []);
  } catch (e) {
    console.log('Could not fetch reviewpush data');
  }
  const summary = {
    minPrice: amliPropertyAttributes.minMarketRent,
    maxPrice: amliPropertyAttributes.maxMarketRent,
    minBeds: bedrooms.length > 0 ? Math.min(...bedrooms) : 0,
    maxBeds: bedrooms.length > 0 ? Math.max(...bedrooms) : 0,
    reviews,
    availabeUnitCount: amliPropertyAttributes.availableUnitCount,
    availablePercent: amliPropertyAttributes.availablePercent,
    propertyTag: amliPropertyAttributes.propertyTag,
    displayOrder: amliPropertyAttributes.displayOrder
  };

  return summary;
}
