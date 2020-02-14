import { get } from "lodash";
import React from "react";

import styles from './styles.module.css';
import ListDetailedView from "../../components/ListDetailedView";
import ValueListItemView from "../../components/ValueListItemView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";

import "./index.css";

export default props => {
  const blockBoldText = get(props, "data.primary.block_bold_text");
  const blockImage = BackgroundImageHandler(
    get(props, "data.primary.block_image")
  );
  const blockTextBlurb = get(props, "data.primary.block_text_blurb");
  const blockTitle = get(props, "data.primary.block_title");
  const listTitle = get(props, "data.primary.list_title");
  const valueListItems = get(props, "data.items", []);

  return (
    <ListDetailedView>
      <block-title className={styles.subtitle}>{blockTitle}</block-title>
      <block-bold-text className={styles.title}>{blockBoldText}</block-bold-text>
      <block-text-blurb>{blockTextBlurb}</block-text-blurb>
      <block-image {...blockImage} className={styles.image} />
      <list-title>{listTitle}</list-title>

      <valueListItemViewList0>
        {valueListItems.map(({ text_blurb, icon, title }, index) => (
          <ValueListItemView key={`list_item-${index}`}>
            <title>{title}</title>
            <description>{text_blurb}</description>
            <icon className={styles.icon} src={icon.url} alt={title} />
          </ValueListItemView>
        ))}
      </valueListItemViewList0>
    </ListDetailedView>
  );
};
