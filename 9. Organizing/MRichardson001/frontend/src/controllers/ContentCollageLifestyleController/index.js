import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import ContentCollageLifestyleView from "../../components/ContentCollageLifestyleView";
import { handlePrismicLink } from "../../helpers/link-helper";
import styles from './styles.module.css';
import "./index.css";

export default withRouter(props => {
  const { data } = props;
  const subtitle = get(data, "primary.subtitle");
  const titleLine1 = get(data, "primary.title_line_1");
  const titleLine2 = get(data, "primary.title_line_2");
  const textBlurb = get(data, "primary.text_blurb");
  const linkData = handlePrismicLink(props, get(data, "primary.link_url"));
  const linkText = get(data, "primary.link_text");
  const image1 = get(data, "primary.image_1.url");
  const image2 = get(data, "primary.image_2.url");
  const image3 = get(data, "primary.image_3.url");
  const imageText2 = get(data, "primary.image_alt_text_2");
  const imageText3 = get(data, "primary.image_alt_text_3");

  return (
    <ContentCollageLifestyleView>
      <subtitle>{subtitle}</subtitle>
      <title-line-1 className={styles.line1}>{titleLine1}</title-line-1>
      <title-line-2 className={styles.line2}>{titleLine2}</title-line-2>
      <text-blurb className={styles.textBlurb}>{textBlurb}</text-blurb>
      <link-url {...linkData} className={styles.button}>
        <link-text className={styles.buttonText}>{linkText}</link-text>
        <link-arrow className={styles.buttonArrow} alt="" />
      </link-url>
      <image-1
        className={styles.mainImage}
        style={image1 ? { backgroundImage: `url(${image1})` } : null}
      >
        {image2 ? (
          <image-2 src={image2} srcSet={image2} alt={imageText2} role="img" />
        ) : (
          <image-2 />
        )}
        {image3 ? (
          <image-3 src={image3} srcSet={image3} alt={imageText3} role="img" />
        ) : (
          <image-3 />
        )}
      </image-1>
    </ContentCollageLifestyleView>
  );
});
