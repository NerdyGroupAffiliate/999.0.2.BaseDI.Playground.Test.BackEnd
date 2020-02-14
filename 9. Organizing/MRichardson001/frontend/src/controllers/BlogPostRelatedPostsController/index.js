import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router";
import BlogPostRelatedPostsView from "../../components/BlogPostRelatedPostsView";
import CapitalizeFirsts from "../../helpers/capitalize-first-letter";
import "./index.css";
import GetTagColors from "../../helpers/get-blog-post-tag-color";
const moment = require("moment");

export default withRouter(props => {
  const items = get(props, "relatedPosts").slice(0, 4);
  
  return (
    <BlogPostRelatedPostsView>
      <blog-posts-wrapper className="related-blog-wrapper">
        {items.map((item, index) => (
          <a
            href={`/blog/${item.uid}`}
            onClick={e => {
              if (e && e.preventDefault) {
                e.preventDefault();
              }
              props.history.push(`/blog/${item.uid}`);
            }}
            className="related-blog-item-wrapper"
          >
            <div
              key={`blog-item-${index}`}
              className="af-class-blog-card--small related blog-page"
            >
              <div className="af-class-blog-card--tag container">
                {GetTagColors(item.data.blog_tags, props.tags).slice(0, 2).map((itemTag, index) => (
                  <div
                    key={`item-tag-${index}`}
                    className="af-class-blog-card--tag"
                    style={{backgroundColor: itemTag.tagColor || '#E5EDF8'}}
                  >
                    {itemTag.tag.replace(/-/g," ")}
                  </div>
                ))}
              </div>
              <div className="af-class-blog-card--publish-info">
                <div className="af-class-text-block-89">
                  By
                  <span className="af-class-author">
                    {CapitalizeFirsts(item.data.author.slug) || "The AMLI Team"}
                  </span>
                </div>
                <div className="af-class-blog-card--date">
                  {moment(item.data.published_date).format("MMM Do, YYYY")}
                </div>
              </div>
              <h3 className="af-class-blog-card--small-title">
                {item.data.title}
              </h3>
            </div>
          </a>
        ))}
      </blog-posts-wrapper>
    </BlogPostRelatedPostsView>
  );
});
