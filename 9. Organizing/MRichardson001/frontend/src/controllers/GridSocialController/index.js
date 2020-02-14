import React from "react";
import get from "lodash/get";
import GridSocialView from "../../components/GridSocialView";
import GridSocialCardView from "../../components/GridSocialCardView";
import GridSocialCardTaglineView from "../../components/GridSocialCardTaglineView";

import styles from './styles.module.css';
import "./index.css";
import GridSocialCardTaglineTitleView from "../../components/GridSocialCardTaglineTitleView";
import GridSocialCardSocialView from "../../components/GridSocialCardSocialView";

function GridCardRenderer(props) {
  switch (props.item.card_type) {
    case "Image":
      return <GridSocialCardView.Controller {...props} />;
    case "Bold Text":
      return <GridSocialCardTaglineView.Controller {...props} />;
    case "Title and blurb":
      return <GridSocialCardTaglineTitleView.Controller {...props} />;
    case "Facebook":
    case "Instagram":
    case "Twitter":
      return <GridSocialCardSocialView.Controller {...props} />;
    default:
      return null;
  }
}

function GridSocial(props) {
  const items = get(props, "data.items", []);
  return (
    <GridSocialView {...props}>
      <wrapper className={styles.wrapper}>
        <container className={styles.container}>
          {items.map((item, index) => (
            <GridCardRenderer item={item} index={index} key={`item_${index}`} />
          ))}
        </container>
      </wrapper>
    </GridSocialView>
  );
}

export default GridSocial;
