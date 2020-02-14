import React from "react";
import get from "lodash/get";
import ListBlocksView from "../../components/ListBlocksView";
import ExtraTextWithHighlightView from "../../components/ExtraTextWithHighlightView";
import ListBlocksItemController from '../../controllers/ListBlocksItemController';
import './index.css';

export default props => {
    const title = get(props, "slice.primary.title");
    const items = get(props, "data.items", []);
  return (
    <React.Fragment>
      <ListBlocksView>
        <title>{title}</title>
        <listBlocksItemViewList0>
            {items.map((item, key) => (
                  <ListBlocksItemController item={item} key={`${key}_compact`} />
            ))}
        </listBlocksItemViewList0>
      </ListBlocksView>
      <ExtraTextWithHighlightView.Controller {...props}/>
    </React.Fragment>
  );
};
