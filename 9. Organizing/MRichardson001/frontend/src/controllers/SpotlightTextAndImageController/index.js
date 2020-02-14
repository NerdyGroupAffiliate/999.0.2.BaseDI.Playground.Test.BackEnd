import React from "react";
import { withRouter } from "react-router";
import get from "lodash/get";
import SpotlightTextAndImageView from "../../components/SpotlightTextAndImageView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import { handlePrismicLink } from "../../helpers/link-helper";
import styles from './styles.module.css';
import "./index.css";

export default withRouter(props => {
  const { slice } = props;
  const text_blurb = get(slice, "primary.text_blurb");
  const title = get(slice, "primary.text");
  const imageSrc = get(slice, "primary.image.url");
  const image = BackgroundImageHandler(get(slice, "primary.image"));
  const linkText = get(slice, "primary.link_text");
  const linkData = get(slice, "primary.link_url");
  const link = handlePrismicLink(props, linkData);

  return (
    <SpotlightTextAndImageView>
      <title>{title}</title>
      <text-blurb className={styles.textBlurb}>
        {text_blurb}
        {
          linkText && (linkData.url || linkData.slug) ?
          <a
            className={`
              af-class-button
              af-class-boss
              af-class-yellow
              af-class-no-margin
              w-inline-block
              ${styles.button}
            `}
            {...link}
          >
            <div className={`af-class-boos-button-label ${styles.buttonText}`}>
              {linkText}
            </div>
            <img
              src="/images/right-arrow.svg"
              alt=""
              className={`af-class-boss-right-arrow ${styles.buttonArrow}`}
            />
          </a>
          : null
        }
        </text-blurb>
      <image style={{backgroundImage: "none"}} className={styles.imageWrapper}>
        <img className={styles.image} src={imageSrc} srcSet={imageSrc} alt="AMLI Team Posing With Balloons" />
      </image>
    </SpotlightTextAndImageView>
  );
});


