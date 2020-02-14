import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import SpotlightBillboardListView from "../../components/SpotlightBillboardListView";
import SpotlightBillboardListItemView from "../../components/SpotlightBillboardListItemView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import { handlePrismicLink } from "../../helpers/link-helper";
import styles from './styles.module.css';
import "./index.css";

export default withRouter((props) => {
  const title = get(props, "slice.primary.title");
  const text_blurb = get(props, "slice.primary.text_blurb");
  const image = get(props, "slice.primary.background_image");
  const imageProps = BackgroundImageHandler(image);
  const items = get(props, "slice.items", []);
  const linkData = get(props, "slice.primary.cta_url");
  const linkText = get(props, "slice.primary.cta_text1");
  const link = handlePrismicLink(props, linkData);

  return (
    <SpotlightBillboardListView>
      <background-image {...imageProps}>
        <content-wrapper>
          <title>{title}</title>
          <text-blurb>{text_blurb}</text-blurb>
          <spotlightBillboardListItemViewList0>
            {items.map((item, key) => (
              <SpotlightBillboardListItemView.Controller
                item={item}
                key={`${key}_spotlight`}
              />
            ))}
          </spotlightBillboardListItemViewList0>
          <cta-link className={styles.button} {...link}>
            <cta-text className={styles.buttonText}>{linkText}</cta-text>
            <cta-arrow className={styles.buttonArrow} alt="" />
          </cta-link>
        </content-wrapper>
      </background-image>
    </SpotlightBillboardListView>
  );
});
