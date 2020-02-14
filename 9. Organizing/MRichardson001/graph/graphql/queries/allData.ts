import initCms from '../../cms/init';
import { getPropertiesIds } from '../../helpers/propertyIds';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const api = await initCms();

  const pagesPromise = api.query(
    Prismic.Predicates.at('document.type', 'standard_page'),
    { pageSize: 3000 }
  );
  const regionPromise = api.query(
    Prismic.Predicates.at('document.type', 'region'),
    { pageSize: 3000 }
  );

  const subregionPromise = api.query(
    Prismic.Predicates.at('document.type', 'sub-region'),
    { pageSize: 3000 }
  );

  const propertiesPromise = api.query(
    Prismic.Predicates.at('document.type', 'property'),
    { pageSize: 3000 }
  );

  const amenitiesPromise = api.query(
    Prismic.Predicates.at('document.type', 'amenities_page'),
    { pageSize: 3000 }
  );
  const locationPromise = api.query(
    Prismic.Predicates.at('document.type', 'location_page'),
    { pageSize: 3000 }
  );
  const furnishedPromise = api.query(
    Prismic.Predicates.at('document.type', 'short_term_furnished'),
    { pageSize: 3000 }
  );

  const query = [Prismic.Predicates.at('document.type', 'blog_post')];
  const blogPostsProm = await api.query(query, { pageSize: 100, orderings: '[my.blog_post.published_date desc]' });

  const allBlogPosts: any = [];

  const getPaginatedResults = async () => {
    if (blogPostsProm && blogPostsProm.results) {
      allBlogPosts.push(...blogPostsProm.results);
      let currentPage = 1;
      while (currentPage < blogPostsProm.total_pages) {
        currentPage++;
        const getData = async () => {
          const blogPosts = await api.query(query, { pageSize: 100, page: currentPage, orderings: '[my.blog_post.published_date desc]' });
          if (blogPosts && blogPosts.results) {
            allBlogPosts.push(...blogPosts.results);
          }
          return allBlogPosts;
        };
        await getData.apply(currentPage);
      }
      return allBlogPosts;
    }
  };

  const blogListPagesPromise = api.query(
    Prismic.Predicates.at('document.type', 'blog_list_page'),
    { pageSize: 3000 }
  );
  const tagsPromise = api.query(Prismic.Predicates.at('document.type', 'tag'), {
    pageSize: 3000
  });

  const [
    pages,
    regions,
    subregions,
    properties,
    bloglistpages,
    tags,
    blogposts,
    propertiesIds,
    amenities,
    location,
    furnished
  ] = await Promise.all([
    pagesPromise,
    regionPromise,
    subregionPromise,
    propertiesPromise,
    blogListPagesPromise,
    tagsPromise,
    getPaginatedResults(),
    getPropertiesIds(),
    amenitiesPromise,
    locationPromise,
    furnishedPromise,
  ]);

  const rawPages: any = [
    ...((pages && pages.results) || []),
    ...((regions && regions.results) || []),
    ...((subregions && subregions.results) || []),
    ...((properties && properties.results) || []),
    ...((blogposts) || []),
    ...((bloglistpages && bloglistpages.results) || []),
    ...((amenities && amenities.results) || []),
    ...((furnished && furnished.results) || []),
    ...((location && location.results) || [])
  ];

  const pagesProcessed: any = [];

  if (tags && tags.results) {
    tags.results.forEach((tag: any) => {
      const newTag = {
        id: tag.id,
        uid: tag.slugs[0],
        data: tag.data,
        slugs: tag.slugs,
        type: tag.type,
        tag_color: tag.data.tag_color
      };
      pagesProcessed.push(newTag);
    });
  }
  if (rawPages && rawPages.length) {
    rawPages.forEach((pageData: any) => {
      const idsData =
        pageData.type === 'property'
          ? (propertiesIds || []).find(
            (item: any) => item.amliPropertyId === pageData.data.amli_id
          )
          : {};
      const entry = {
        id: pageData.id,
        uid: pageData.uid,
        data: { ...pageData.data, ...idsData },
        slugs: pageData.slugs,
        type: pageData.type
      };
      pagesProcessed.push(entry);
    });
  }

  return pagesProcessed;
};
