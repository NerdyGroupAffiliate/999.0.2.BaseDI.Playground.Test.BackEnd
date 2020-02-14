import initCms from '../../cms/init';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const { propertyPageId } = args;
  const api = await initCms();

  const query = [Prismic.Predicates.at('document.type', 'blog_post')];

  if (!!propertyPageId) {
    query.push(
      Prismic.Predicates.at('my.blog_post.properties.property', propertyPageId)
    );
  }

  const blogPostsProm = await api.query(query, { pageSize: 100, orderings: '[my.blog_post.published_date desc]'  });

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

  const output: any = [];
  try {
  const results = await getPaginatedResults();

  if (results && results.length) {
    results.forEach((item: any) => {
      output.push({
        blogPost: { ...item.data, uid: item.uid, id: item.id }
      });
    });
  }

  return output;
  } catch (e) {
    console.log(e);
  }

};
