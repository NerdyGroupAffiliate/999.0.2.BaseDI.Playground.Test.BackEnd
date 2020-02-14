import initCms from '../../cms/init';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const { featuedPost, popularPosts } = args;

  const api = await initCms();

  const featuredQuery = featuedPost ? [
    Prismic.Predicates.at('document.type', 'blog_post'),
    Prismic.Predicates.any('my.blog_post.uid', [featuedPost])
  ] :
    [Prismic.Predicates.at('document.type', 'blog_post')];

  const featuedPostProm = await api.query(featuredQuery, { pageSize: 1, orderings: '[my.blog_post.published_date desc]' });

  const popularPostsProm = await api.query([
    Prismic.Predicates.at('document.type', 'blog_post'),
    Prismic.Predicates.any('my.blog_post.uid', popularPosts)
  ]);

  const output: any = [];

  try {

    const featued = await featuedPostProm;
    const popular = await popularPostsProm;

    if (featued && featued.results.length) {
      featued.results.forEach((item: any) => {
        output.push({
          blogPost: { ...item.data, uid: item.uid, id: item.id, type: 'featured' }
        });
      });
    }
    if (popular && popular.results.length) {
      popular.results.forEach((item: any) => {
        output.push({
          blogPost: { ...item.data, uid: item.uid, id: item.id, type: 'popular' }
        });
      });
    }

    return output;
  } catch (e) {
    console.log(e);
  }

};
