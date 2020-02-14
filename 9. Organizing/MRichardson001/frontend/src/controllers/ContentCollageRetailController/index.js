import { get } from "lodash";
import React from "react";

import ContentCollageRetailView from "../../components/ContentCollageRetailView";
import RetailCollageNumberItemView from "../../components/RetailCollageNumberItemView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";

import styles from './styles.module.css';
import "./index.css";

export default props => {
  const title = get(props, "data.primary.title");
  const textBlurb = get(props, "data.primary.text_blurb");
  const image1 = BackgroundImageHandler(get(props, "data.primary.image_1"));
  const image2 = BackgroundImageHandler(get(props, "data.primary.image_2"));
  const image3 = BackgroundImageHandler(get(props, "data.primary.image_3"));
  const retailCollageNumberItems = get(props, "data.items", []);

  return (
    <ContentCollageRetailView>
      <title className={styles.title}>{title}</title>
      <text-blurb>
        <div>{textBlurb}</div>
        <div {...image1} className={styles.mobileImage}></div>
      </text-blurb>
      <image-1 className={styles.image1} {...image1} />
      <image-2 className={styles.image2}{...image2} />
      <image-3 className={styles.image3}{...image3} />

      <retailCollageNumberItemViewList0>
        {retailCollageNumberItems.map((retailCollageNumberItem, key) => (
          <RetailCollageNumberItemView key={key}>
            <title>{retailCollageNumberItem.fact_title}</title>
            <description>
              {retailCollageNumberItem.fact_description1}
            </description>
          </RetailCollageNumberItemView>
        ))}
      </retailCollageNumberItemViewList0>
    </ContentCollageRetailView>
  );
};
