import * as Sentry from '@sentry/node';
import * as moment from 'moment';
import ReviewPush from 'reviewpush-node';
import config from '../../config';
import AMLIAxiosClient from '../../helpers/amli-axios-client';
import getReviewsFromEmbeddedFeed from '../../helpers/embedded-feed-axios';

const rp = new ReviewPush(config.reviewpush);
const empty = {
  edges: [],
  pages: {
    current: 0,
    pages: 0,
    items: 0
  }
};

export default async (obj: any, args: any, context: any) => {
  const { id, limit, cursor = null } = args;
  let amliPropertyLocationId: any;
  try {
    amliPropertyLocationId = await AMLIAxiosClient.get(
      '/Data/GetReviewPushLocationIdByPropertyId',
      {
        params: {
          propertyId: id
        }
      }
    );
  } catch (e) {
    Sentry.captureException(e);
  }

  if (!amliPropertyLocationId) {
    return empty;
  }

  try {
      const data = await getReviewsFromEmbeddedFeed(amliPropertyLocationId);
      if (data) {
        return {  edges: data.reviews };
      }
      return await getDataFromReviewPushApi(amliPropertyLocationId, limit, cursor);
      } catch (e) {
        Sentry.captureException(e);
        return empty;
      }
  };

async function getDataFromReviewPushApi(amliPropertyLocationId: any, limit: any, cursor: any) {
  const options = {
    location_id: amliPropertyLocationId,
    limit,
    added_before: cursor
  };

  if (!cursor) {
    delete options.added_before;
  }

  const reviews = await rp.Reviews.get(options);

  if (!reviews || !reviews.data || !reviews.data.length) {
    return empty;
  }
  const filteredReviews = reviews.data.filter(
    (rv: any) => rv.attributes.rating > 1
  );

  const ratings = filteredReviews.map((r: any) => r.attributes.rating);
  const topRating = filteredReviews.find((e: any) => {
    return e.attributes.rating === Math.max(...ratings);
  });
  const topIndex = filteredReviews.indexOf(topRating);
  filteredReviews.splice(topIndex, 1);
  filteredReviews.unshift(topRating);

  const processedReviews = filteredReviews.map((rv: any) => ({
    id: rv.id,
    ...rv.attributes
  }));

  let newCursor = reviews.data.sort((a: any, b: any) =>
    moment(
      `${a.attributes.review_date}${
        a.attributes.review_time ? ` ${a.attributes.review_time}` : ''
      }`
    ).diff(
      moment(
        `${b.attributes.review_date}${
          b.attributes.review_time ? ` ${b.attributes.review_time}` : ''
        }`
      )
    )
  )[0];
  newCursor = `${newCursor.attributes.review_date}${
    newCursor.attributes.review_time
      ? ` ${newCursor.attributes.review_time}`
      : ''
  }`;

  return {
    edges: processedReviews,
    pages: {
      cursor: newCursor,
      current: reviews.meta.pagination.current_page,
      pages: reviews.meta.pagination.total_pages,
      items: reviews.meta.pagination.total
    }
  };
}
