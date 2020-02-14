import React from "react";
import get from "lodash/get";
import GridSocialCardTaglineTitleView from "../../components/GridSocialCardTaglineTitleView";

import styles from './styles.module.css';

function GridSocialCardTaglineTitle(props) {
  const text = get(props, "item.blurb");
  const title = get(props, "item.title");
  const url = get(props, "item.social_url.url");
  const uid = get(props, "item.social_url.uid");
  return (
    <GridSocialCardTaglineTitleView>
      <wrapper 
        className={styles.button} 
        href={url || uid ? url || '/' + uid : null}
        >
        <title>{title}</title>
        <description>{text}</description>
        {
        url || uid ?
          <button >
            <label />
            <arrow alt="" />
          </button>
        : null
        }
      </wrapper>
    </GridSocialCardTaglineTitleView>
  );
}

export default GridSocialCardTaglineTitle;
