import initCms from '../../cms/init';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const { currentPage, searchVar, tag, region } = args;
  const api = await initCms();

  const authorQuery = [
    Prismic.Predicates.at('document.type', 'author'),
    Prismic.Predicates.fulltext('document', searchVar)
  ];

  const authors = await api.query(authorQuery,
    { pageSize: 100 }
  );

  const authorIds = (authors.results || []).map((author: any) => author.id);

  const query = authorIds && authorIds.length ?
    [
      Prismic.Predicates.any('my.blog_post.author', authorIds),
    ] :
    [
      Prismic.Predicates.at('document.type', 'blog_post'),
      Prismic.Predicates.fulltext('document', searchVar)
    ];

  if (!!tag) {
    query.push(
      Prismic.Predicates.at('my.blog_post.blog_tags.tag', tag),
    );
  }

  if (!!region) {
    query.push(
      Prismic.Predicates.at('my.blog_post.regions.region', region),
    );
  }

  const blogPostsProm = await api.query(query,
    { orderings: '[my.blog_post.published_date desc]', pageSize: 10, page: currentPage }
  );

  const output: any = [];
  try {

    const results = await blogPostsProm;
    const totalPages = results.total_pages;

    if (results && results.results.length) {
      results.results.forEach((item: any) => {
        output.push({
          blogPost: { ...item.data, uid: item.uid, id: item.id, totalPages }
        });
      });
    }

    return output;
  } catch (e) {
    console.log(e);
  }

};
