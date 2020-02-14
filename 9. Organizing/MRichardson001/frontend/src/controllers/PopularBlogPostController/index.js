import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router";
import PopularBlogPostView from "../../components/PopularBlogPostView";
import CapitalizeFirsts from "../../helpers/capitalize-first-letter";
import styles from './styles.module.css';
import GetTagColors from "../../helpers/get-blog-post-tag-color";

const moment = require("moment");

const PopularBlogPost = props => {
  const { post } = props;
  const author = CapitalizeFirsts(get(post, "blogPost.author.slug"));
  const title = get(post, "blogPost.title");
  const summary = get(post, "blogPost.summary[0].text");
  const date = get(post, "blogPost.published_date");
  const formattedDate = moment(date).format("MMM Do, YYYY");
  const postTagColors = GetTagColors(get(post, "blogPost.blog_tags"), props.tags) || [];

  if(!post) {
    return null;
  }
  return (
    <PopularBlogPostView>
      <blog-post-wrapper onClick={() => props.history.push(`/blog/${post.blogPost.uid}`)}>
        <tag className={styles.tagsContainer}>
          {
            postTagColors.map((tag, index) =>
              <div
                key={index}
                className={["af-class-blog-card--tag", styles.blogTag].join(" ")}
                style={{backgroundColor: tag.tagColor || '#E5EDF8'}}
              >
                {CapitalizeFirsts(tag.tag)}
              </div>
            )
          }
        </tag>
        <author>{author}</author>
        <published-date>{formattedDate}</published-date>
        <title>{title}</title>
        <summary className={styles.summary}>{summary}</summary>
      </blog-post-wrapper>
    </PopularBlogPostView>
  )
}

export default withRouter(PopularBlogPost);
