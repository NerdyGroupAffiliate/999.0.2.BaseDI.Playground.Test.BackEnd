import React from "react";
import get from "lodash/get";
import HighlightsWrapperView from "../../components/HighlightsWrapperView";
import HighlightItemView from "../../components/HighlightItemView";

export default props => {
  const { data } = props;
  const highlights = get(data, "items");

  return (
    <HighlightsWrapperView {...props}>
      <highlightItemViewList0>
        {highlights.map((highlight, index) => (
          <HighlightItemView.Controller key={`highlight_item_${index}`} data={highlight}/>
        ))}
      </highlightItemViewList0>
    </HighlightsWrapperView>
  );
};
