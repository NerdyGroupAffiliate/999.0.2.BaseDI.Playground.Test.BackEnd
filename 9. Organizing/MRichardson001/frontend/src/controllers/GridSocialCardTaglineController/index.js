import React from "react";
import get from "lodash/get";
import GridSocialCardTaglineView from "../../components/GridSocialCardTaglineView";
import HighlightWords from "../../helpers/highlight-words/index";

import styles from './styles.module.css';

function GridSocialCardTagline(props) {
  const text = get(props, "item.bold_text");
  const words = get(props, "item.bold_text_highlight_words", "");
  const url = get(props, "item.social_url.url");
  const uid = get(props, "item.social_url.uid");
  return (
    <GridSocialCardTaglineView>
      <wrapper 
        className={url || uid ? styles.button : styles.noButton} 
        href={url || uid ? url || '/' + uid : null}
      >
        <description>
          {HighlightWords(text, words, "green", styles.highlights)}
        </description>
        {
          url || uid ?
            <button>
              <label />
              <arrow alt="" />
            </button>
          : null
        }
      </wrapper>
    </GridSocialCardTaglineView>
  );
}

export default GridSocialCardTagline;
