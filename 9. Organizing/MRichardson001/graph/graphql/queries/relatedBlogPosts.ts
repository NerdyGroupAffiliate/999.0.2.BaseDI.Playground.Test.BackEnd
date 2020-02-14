import initCms from '../../cms/init';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const { blogPostId } = args;
  const api = await initCms();


  const blogPostData = await api.query(Prismic.Predicates.at('document.id', String(blogPostId)));

  if (!blogPostData || !blogPostData.results) {
    return [];
  }

  const blogPost = blogPostData.results[0];
  const blogTags = (blogPost.data.blog_tags || []).map((btag: any) => btag.tag.slug);

  const tags = await api.query(Prismic.Predicates.at('document.type', 'tag'));

  const tagIds = ((tags.results || []).filter((tag: any) => {
    let match = false;
    tag.slugs.forEach((slug: string) => {
      if (blogTags.includes(slug)) {
        match = true;
      }
    });
    return match;
  }) || []).map((tg: any) => tg.id);

  const relatedBlogPostData = await api.query(
    [
      Prismic.Predicates.any('my.blog_post.blog_tags.tag', tagIds),
      Prismic.Predicates.not('document.id', String(blogPostId)),
    ],
    { orderings: '[my.blog_post.published_date desc]' }
  );

  return relatedBlogPostData.results ? relatedBlogPostData.results : [];

};
