import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import SpotlightCareerView from "../../components/SpotlightCareerView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import { handlePrismicLink } from "../../helpers/link-helper";
import styles from './styles.module.css';
import "./index.css";

export default withRouter((props) => {
    const title = get(props, "slice.primary.title");
    const linkText = get(props, "slice.primary.link_text");
    const image = get(props, "slice.primary.background_image");
    const imageProps = BackgroundImageHandler(image);
    const linkData = get(props, "slice.primary.link_url");
    const link = handlePrismicLink(props, linkData);

  return (
    <SpotlightCareerView>
        <background-image  {...imageProps} className={styles.backgroundImage}>
            <title className={styles.sectionTagline}>{title}</title>
            <link-url {...link} className={styles.button}>
                <link-text className={styles.buttonText}>{linkText}</link-text>
                <link-arrow className={styles.buttonArrow} alt="" />
            </link-url>
        </background-image>
    </SpotlightCareerView>
  );
});
