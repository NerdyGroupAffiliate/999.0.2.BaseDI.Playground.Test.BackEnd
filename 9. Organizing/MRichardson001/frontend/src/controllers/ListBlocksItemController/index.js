import React, { useState } from "react";
import get from "lodash/get";
import ListBlocksItemView from "../../components/ListBlocksItemView";

import styles from "./styles.module.css";

export default ({ item }) => {
  const [isHovered, setHover] = useState(false);
  const icon = get(item, "icon.url");
  const blurb = get(item, "text_blurb");

  return (
    <ListBlocksItemView>
      <item-wrapper
        className={styles.wrapper}
        tabIndex={0}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <icon src={icon} alt="" className={isHovered ? styles.invisible : ""} />
        <title className={isHovered ? styles.hoveredTitle : ""}>
          {item.title}
          <p
            className={[styles.blurb, !isHovered ? styles.invisible : ""].join(
              " "
            )}
          >
            {blurb}
          </p>
        </title>
      </item-wrapper>
    </ListBlocksItemView>
  );
};
