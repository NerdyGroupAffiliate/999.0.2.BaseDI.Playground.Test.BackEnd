import React from "react";
import get from "lodash/get";
import HighlightItemView from "../../components/HighlightItemView";
import "./index.css";

export default props => {
  const highlightIcon = get(props, "data.highlight_icon.url");
  const highlightText = get(props, "data.highlight_blurb");
  const highlightTitle = get(props, "data.highlight_title");

  return (
    <HighlightItemView>
       {highlightIcon ? <highlight-image src={highlightIcon} srcSet={highlightIcon}/> : null }
       <highlight-title>{highlightTitle}</highlight-title>
       {
         highlightText ?
          <highlight-text>{highlightText}</highlight-text>
        : null
       }
    </HighlightItemView>
  );
};
