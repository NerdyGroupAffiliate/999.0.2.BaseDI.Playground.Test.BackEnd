import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router";
import {
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
  FacebookShareButton,
  FacebookIcon
} from "react-share";
import BlogPostHeaderView from "../../components/BlogPostHeaderView";
import BackArrow from "../../assets/icons/back-arrow.svg";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import CapitalizeFirsts from "../../helpers/capitalize-first-letter";
import styles from "./styles.module.css";
import "./index.css";
import GetTagColors from "../../helpers/get-blog-post-tag-color";
import { canUseDOM } from "../../helpers/utils";
import GtmTimer from "../../helpers/gtm-timer";
import pushSocialData from "../../helpers/push-social-data";

const moment = require("moment");

function BlogPostHeader(props) {
  const headerImage = BackgroundImageHandler(
    get(props, "page.data.post_main_image")
  );
  const mainImageUrl = get(props, "page.data.post_main_image.url");
  const socialImage = get(props, "page.data.social_share_image.url");
  const postTagColors = GetTagColors(get(props, "blogPostQuery.blogPost.data.blog_tags"), props.tags) || [];
  const blogTitle = get(props, "page.data.page_title") || get(props, "page.data.title") ;
  const author = get(props, "authorQuery.author.data.name") || "The AMLI Team";
  const date = get(props, "page.data.published_date");
  const formattedDate = moment(date).format("MMM Do, YYYY");
  const pageUid = get(props, "page.uid");
  const mainAlt = get(props, "page.data.post_main_image_alt", "");
  let url = `https://amli.com/blog/${pageUid}`;
  if (process.browser && canUseDOM) {
    url = get(window, "location.href", `https://amli.com/blog/${pageUid}`);
  }

  GtmTimer(
    { event: "interactWithBlogPost", blogTitle: blogTitle },
    120000
  );

  const renderPhotoCredits = (text) => {
    if (!text) {
      return null;
    }
    const textArray = text.split("|");
    return <div className={styles.photoCredits}>
              {textArray[0]}
              {textArray[2]
                ? <a
                    href={textArray[2].trim()}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {textArray[1]}
                  </a>
                : textArray[1]
              }
            </div>
  }
  return (
    <BlogPostHeaderView>
      <header-image {...headerImage} className={styles.headerImage}>
        {renderPhotoCredits(mainAlt)}
      </header-image>
      <back-to-home-link
        className={styles.backToHome}
        onClick={() => props.history.push("/blog")}
      >
        <link-arrow className={styles.arrow}>
          <img src={BackArrow} alt="Back Arrow" />
        </link-arrow>
      </back-to-home-link>
      <tag className={styles.tagsContainer}>
        {postTagColors.map((tag, index) => (
          <div
            key={index}
            className={["af-class-blog-card--tag", styles.blogTag].join(" ")}
            style={{backgroundColor: tag.tagColor || '#E5EDF8'}}
          >
            {CapitalizeFirsts(tag.tag)}
          </div>
        ))}
      </tag>
      <blog-title>{blogTitle}</blog-title>
      <author>{author}</author>
      <date>{formattedDate}</date>
      <social-media-share>
        <div className={styles.iconWrapper}>
          <div onClick={() => pushSocialData('Facebook', blogTitle)}>
            <FacebookShareButton className={styles.shareButton} quote={blogTitle} url={url} >
              <FacebookIcon size={40} round={true} className={styles.shareIcon}/>
            </FacebookShareButton>
          </div>
          <div onClick={() => pushSocialData('Twitter', blogTitle)}>
          <TwitterShareButton title={blogTitle} url={url}>
            <TwitterIcon size={40} className={styles.shareIcon} round={true}  />
          </TwitterShareButton>
          </div>
          <div onClick={() => pushSocialData('Pintrest', blogTitle)}>
            <PinterestShareButton media={socialImage || mainImageUrl} url={url}>
              <PinterestIcon
                size={40}
                round={true}
                className={styles.shareIcon}
              />
            </PinterestShareButton>
          </div>
        </div>
      </social-media-share>
    </BlogPostHeaderView>
  );
}

export default withRouter(BlogPostHeader);
