import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import ListCompactView from "../../components/ListCompactView";
import ListCompactItemController from '../../controllers/ListCompactItemController';
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import { handlePrismicLink } from "../../helpers/link-helper";
import MultiLineString from "../../helpers/mutli-line-string";
import styles from "./style.module.css";
import "./index.css";

export default withRouter((props) => {
    const { slice } = props;
    const image = get(slice, "primary.image");
    const imageProps = BackgroundImageHandler(image);
    const title = get(slice, "primary.title");
    const link_text = get(slice, "primary.link_text");
    const items = get(props, "data.items", []);
    const text_blurb = get(slice, "primary.text_blurb");
    const linkData = get(slice, "primary.link_url");
    const link = handlePrismicLink(props, linkData);

  return (
    <ListCompactView>
      <title className={styles.title}>{title}</title>
      <image  {...imageProps}></image>
      <text-blurb>{text_blurb}</text-blurb>
      <link-url className={styles.button} {...link}>
        <link-text className={styles.buttonText}>{MultiLineString(link_text)}</link-text>
        <link-arrow className={styles.buttonArrow} alt="" />
      </link-url>
      <list-wrapper>
          {items.map((item, key) => (
            <ListCompactItemController item={item} key={`${key}_compact`} />
          ))}
      </list-wrapper>
      <mobile-link-url className={styles.button} {...link}>
        <mobile-link-text className={styles.buttonText}>{MultiLineString(link_text)}</mobile-link-text>
        <mobile-link-arrow className={styles.buttonArrow} alt="" />
      </mobile-link-url>
    </ListCompactView>
  );
});
