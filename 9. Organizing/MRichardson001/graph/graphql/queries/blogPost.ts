import initCms from '../../cms/init';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const { blogPostId } = args;
  const api = await initCms();

  const blogPostData = await api.query(Prismic.Predicates.at('document.id', String(blogPostId)));

  if (!blogPostData || !blogPostData.results) {
    return null;
  }

  return blogPostData.results[0];

};
