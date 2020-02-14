import GetTags from "./get-blog-post-tags";
import uniq from "lodash/uniq";

const GetRelatedBlogPosts = (tags, blogposts, pageId) => {
  let relatedBlogs = [];
  if (!tags || !blogposts) {
    return null;
  }
  blogposts.slice(0, 100).forEach(bp => {
    let bpTags = GetTags(bp.data.blog_tags);
    tags.forEach(tag =>
      bpTags.includes(tag) && bp.id !== pageId ?
        relatedBlogs.push(bp)
      : null
    );
  })
  return uniq(relatedBlogs);
}

export default GetRelatedBlogPosts;
