import initCms from '../../cms/init';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const { region } = args;
  const api = await initCms();

  const query =
    [
      Prismic.Predicates.at('document.type', 'blog_post'),
      Prismic.Predicates.at('my.blog_post.regions.region', region)
    ];


  const blogPostsProm = await api.query(query,
    { orderings: '[my.blog_post.published_date desc]', pageSize: 10, page: 1 }
  );

  const output: any = [];

  try {

    const results = await blogPostsProm;

    if (results && results.results.length) {
      results.results.forEach((item: any) => {
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
