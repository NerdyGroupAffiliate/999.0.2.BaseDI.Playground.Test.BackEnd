import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import ContentImageAndRichBlurbCtaView from "../../components/ContentImageAndRichBlurbCtaView";
import { handlePrismicLink } from "../../helpers/link-helper";
import MultiLineString from "../../helpers/mutli-line-string";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import styles from './styles.module.css';
import './index.css';

export default withRouter((props) => {
  const { data } = props;
  const pageName = get(props, "page.uid", "");
  const linkData = get(data, "primary.cta_link1");
  const link = handlePrismicLink(props, linkData);
  const image = BackgroundImageHandler(get(data, "primary.image"));
  const subtitle = get(data, "primary.subtitle");
  const title = get(data, "primary.title[0].text");
  const textBlurb = get(data, "primary.text_blurb[0].text");
  const ctaText = get(data, "primary.cta_text1");

  return (
    <ContentImageAndRichBlurbCtaView>
      <wrapper className=
        {`
        ${pageName !== 'home' ? 'other-page-wrapper' : ''}
        ${pageName === 'sustainability' ? 'sustainability-page-wrapper' : ''}
        `}
      >
          <image
            className={pageName !== 'home' ? styles.otherImage : styles.image}
            {...image}
          />
        { subtitle ?
            <subtitle className={styles.subtitle}>{subtitle}</subtitle>
            : null
          }
        <title className={pageName === 'home' ? styles.title : ''}>
          {MultiLineString(title)}
        </title>
        <text-blurb>{textBlurb}</text-blurb>
        <link-url
          {...link}
          className={styles.button}
          >
          <link-text className={styles.buttonText}>{ctaText}</link-text>
          <link-arrow className={styles.buttonArrow} alt="" />
        </link-url>
      </wrapper>
    </ContentImageAndRichBlurbCtaView>
  )
});
