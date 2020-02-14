import React from "react";
import get from "lodash/get";
import CommunityContactsView from "../../components/CommunityContactsView"
import CommunityContactItemView from "../../components/CommunityContactItemView";
import "./index.css";

export default props => {
  const title = get(props, "slice.primary.title");
  const items = get(props, "slice.items");
  if (!items) {
    return null;
  }

  return (
    <CommunityContactsView>
      <title>{title}</title>
      <communityContactItemViewList0>
        {
          items.map((item, index) => (
            <CommunityContactItemView.Controller  key={index} item={item} />
          ))
          }
      </communityContactItemViewList0>
    </CommunityContactsView>
  )
}
