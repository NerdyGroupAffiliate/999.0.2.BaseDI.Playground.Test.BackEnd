import React from "react";
import get from "lodash/get";
import ExtraTextWithHighlightView from "../../components/ExtraTextWithHighlightView";
import HighlightWords from "../../helpers/highlight-words";

export default props => {
  const subtitle = HighlightWords(
    get(props, "slice.primary.subtitle"),
    get(props, "slice.primary.subtitle_highlight_word"),
    "blue"
  )
  return (
    <ExtraTextWithHighlightView>
      <subtitle>{subtitle}</subtitle>
    </ExtraTextWithHighlightView>
  )
};
