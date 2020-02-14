import { get } from "lodash";
import React from "react";
import { withRouter } from "react-router-dom";
import { handlePrismicLink } from "../../helpers/link-helper";
import CertificationsBlockView from "../../components/CertificationsBlockView";
import CertificationsListItemView from "../../components/CertificationsListItemView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import styles from './styles.module.css';
import "./index.css";

export default withRouter(props => {
  const image = get(props, "data.primary.image");
  const imageStyle = BackgroundImageHandler(image);
  const textBlurb = get(props, "data.primary.text_blurb");
  const title = get(props, "data.primary.title", "title");
  const certificationsListItems = get(props, "data.items", []);
  const link_text = get(props, "data.primary.link_text");
  const linkData = get(props, "data.primary.link_url");
  const link = handlePrismicLink(props, linkData);

  return (
    <CertificationsBlockView>
      <title>{title}</title>
      <text-blurb>{textBlurb}</text-blurb>
      <image {...imageStyle} />
      {image && <link src={image.url} />}

      <certificationsListItemViewList0>
        {certificationsListItems.map((item, key) => (
          <CertificationsListItemView key={key}>
            <icon src={item.icon.url} alt={item.icon_alt_text || 'certification logo'} />
            <title>{item.title}</title>
            <text-blurb>{item.text_blurb}</text-blurb>
          </CertificationsListItemView>
        ))}
      </certificationsListItemViewList0>
      {linkData ? (
        <link-url {...link} className={styles.button} >
          <link-text className={styles.buttonText}>{link_text}</link-text>
          <link-arrow className={styles.buttonArrow} alt="" />
        </link-url>
      ) : null}
    </CertificationsBlockView>
  );
});
