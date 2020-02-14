import * as Sentry from '@sentry/node';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { get } from 'lodash';
import Config from '../config';
import CacheService from './cache-service';

const ttl = 60 * 60 * 24; // cache for 24 hours
const cache = new CacheService(ttl); // Create a new cache service instance

function getReviewsFromEmbeddedFeed(id: string) {
    return cache.get(`reviewpush_${id}`, () =>
    embeddedFeedAPICall(id)
 );
}

function embeddedFeedAPICall(id: string) {
    return new Promise((resolve) => {
        const url  = Config.embedded_feed.url + id + '?server=true';
        axios.get(url, {timeout: 3000})
        .then(resp => {
            resolve(scrapeHTML(resp.data));
        })
        .catch(err => {
            Sentry.captureException(err);
            resolve(false);
        });
    });
}

function scrapeHTML(html: any) {
    try {
        const $ = cheerio.load(html);
        const ratingValue = parseFloat($('span[itemprop="ratingValue"]')[0].children[0].data!);
        const reviewCount = parseFloat($('span[itemprop="reviewCount"]')[0].children[0].data!);
        const pulledReviews: any = [];
        $('div.review').each((i, element) => {
            const reviewData = {
                id: i,
                review: '',
                rating: '',
            };
            element.children.forEach(child  => {
                if (get(child, 'next.children[0].parent.attribs.class') !== undefined) {
                    switch (child.next.children[0].parent.attribs.class) {
                        case 'review-text':
                            reviewData['review'] = get(child, 'next.children[0].data');
                            break;
                        case 'review-rating':
                            reviewData['rating'] = get(child, 'next.children[0].next.firstChild.data');
                            break;
                        default:
                            break;
                    }
                }
            });
            if ((!!reviewData['rating'] && reviewData['rating'] !== '') &&
                (!!reviewData['review'] && reviewData['review'] !== '')) {
                pulledReviews.push(reviewData);
            }
        });

        if (!pulledReviews.length) {
            console.log('EmbeddedFeed feed html is returning blank data');
            Sentry.captureException(`EmbeddedFeed feed is returning blank data from html`);
            return false;
        }

        const reviews = pulledReviews.filter((rv: any) => rv.rating > 1);
        const ratings = reviews.map((r: any) => +r.rating);
        const topRating = reviews.find((e: any) => {
            return +e.rating === Math.max(...ratings);
        });
        const topIndex = reviews.indexOf(topRating);
        reviews.splice(topIndex, 1);
        reviews.unshift(topRating);

        return {ratingValue, reviewCount, reviews};
    } catch (err) {
        Sentry.captureException(err);
        return false;
    }
}

export default getReviewsFromEmbeddedFeed;
