import React from "react";
import get from "lodash/get";
import {
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
  FacebookShareButton,
  FacebookIcon
} from "react-share";
import BlogPostShareRowView from "../../components/BlogPostShareRowView";
import styles from './styles.module.css';
import { canUseDOM } from "../../helpers/utils";
import pushSocialData from "../../helpers/push-social-data";

export default props => {
  const blogTitle = get(props, "page.data.title");
  const mainImageUrl = get(props, "page.data.post_main_image.url");
  const socialImage = get(props, "page.data.social_share_image.url");
  const pageUid = get(props, "page.uid");

  let url = `https://amli.com/blog/${pageUid}`;

  if (process.browser && canUseDOM) {
    url = get(window, "location.href", `https://amli.com/blog/${pageUid}`);
  }
  return (
    <BlogPostShareRowView>
      <social-share-icons-wrapper className={styles.iconWrapper}>
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
      </social-share-icons-wrapper>
    </BlogPostShareRowView>
  )
}
