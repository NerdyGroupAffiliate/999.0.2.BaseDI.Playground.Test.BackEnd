import initCms from '../../cms/init';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const { id } = args;
  const api = await initCms();

  let author = await api.query(
    Prismic.Predicates.at('document.id', String(id))
  );
  if (author && author.results) {
    author = author.results[0];
  }

  return author;
};
