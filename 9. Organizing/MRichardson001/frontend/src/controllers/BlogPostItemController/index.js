import React from "react";
import get from "lodash/get";
import { withRouter } from 'react-router';
import BlogPostItemView from "../../components/BlogPostItemView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import CapitalizeFirsts from "../../helpers/capitalize-first-letter";
import "./index.css";
import GetTagColors from "../../helpers/get-blog-post-tag-color";

const moment = require("moment");

export default withRouter(props => {
  const { blogPost } = props;

  const defaultImage = {
  style: {
    backgroundImage: "url(/static/media/banner2x.3f321663.jpg)",
    backgroundPosition: "center center",
    backgroundSize: "cover"
    }
  };

  let image = BackgroundImageHandler(get(blogPost, "post_main_image"));

  if (!image.style){
    image = defaultImage
  };

  const link = get(blogPost, "uid");
  const author = CapitalizeFirsts(get(blogPost, "author.slug")) || "The AMLI Team";
  const date = get(blogPost, "published_date");
  const formattedDate = moment(date).format("MMM Do, YYYY");
  const title = get(blogPost, "title");
  const summary = get(blogPost, "summary[0].text");
  const postTagColors = GetTagColors(get(blogPost, "blog_tags"), props.tags) || [];

  return (
    <BlogPostItemView>
      <link
        href={`/blog/${link}`}
        onClick={e => {
          if (e && e.preventDefault) {
            e.preventDefault();
          }
          props.history.push(`/blog/${link}`);
        }}
      >
        <image {...image} />
        <tags-container>
          {postTagColors.map((tag, index) => (
            <div
              key={index} className="af-class-blog-card--tag"
              style={{backgroundColor: tag.tagColor || '#E5EDF8'}}
            >
              {CapitalizeFirsts(tag.tag)}
            </div>
          ))}
        </tags-container>
        <author>{author}</author>
        {date ? <published-date>{formattedDate}</published-date> : null}
        <title>{title}</title>
        {summary ? <summary>{summary}</summary> : null }
      </link>
    </BlogPostItemView>
  );
});
