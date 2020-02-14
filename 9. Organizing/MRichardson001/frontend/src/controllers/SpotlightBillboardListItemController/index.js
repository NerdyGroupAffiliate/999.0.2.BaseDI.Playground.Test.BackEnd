import React from "react";

import SpotlightBillboardListItemView from "../../components/SpotlightBillboardListItemView";
import "./index.css";

export default props => {
  const { item } = props;
  if (!item) {
    return null;
  }
  return (
    <SpotlightBillboardListItemView>
      <item>{item.spotlight_items}</item>
    </SpotlightBillboardListItemView>
  );
};
