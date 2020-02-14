import React from "react";

import ListFaqItemView from "../../components/ListFaqItemView";
import ListFaqItemExpandedView from "../../components/ListFaqItemExpandedView";

import "./index.css";

export default props => {
  const { faq, setSelectedItem , selected, itemIndex} = props;

  return (
    <React.Fragment>
      {selected ? (
        <ListFaqItemExpandedView.Controller
          {...props}
          faq={faq}
          selected={selected}
          onSelect={setSelectedItem}
          itemIndex={itemIndex}
        />
      ) : (
        <ListFaqItemView.Controller
          faq={faq}
          selected={selected}
          onSelect={setSelectedItem}
          itemIndex={itemIndex}
        />
      )}
    </React.Fragment>
  );
}
