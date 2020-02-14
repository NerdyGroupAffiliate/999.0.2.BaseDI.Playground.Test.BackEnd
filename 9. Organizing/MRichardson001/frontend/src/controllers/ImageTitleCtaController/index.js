import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import ImageTitleCtaView from "../../components/ImageTitleCtaView";
import styles from './styles.module.css';
import HighlightWords from "../../helpers/highlight-words";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import { handlePrismicLink } from "../../helpers/link-helper";
import "./index.css";

export default withRouter((props) => {
  const { page } = props;
  const linkData = get(page, "cta_link");
  const uid = get(page, "uid") || '';
  const headerImage = BackgroundImageHandler(get(page, "header_image"));
  const headerTitle = get(page, "header_title");
  const highlightedWords = get(page, "header_title_highlight_words");
  const ctaText = get(page, "cta_text");
  const link = handlePrismicLink(props, linkData);

  return (
    <ImageTitleCtaView>
      <header-image
        className={uid}
        {...headerImage}
      >
        <header-title>
            {HighlightWords(headerTitle, highlightedWords, "yellow", styles.highlight)}
        </header-title>
        <cta-link className={styles.button} {...link}>
          <cta-text className={styles.buttonText}>
            {ctaText}
          </cta-text>
          <cta-arrow className={styles.buttonArrow} alt="" />
        </cta-link>
      </header-image>
    </ImageTitleCtaView>
  );
});
