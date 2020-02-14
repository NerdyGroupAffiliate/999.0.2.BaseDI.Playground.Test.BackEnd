import React from "react";
import get from "lodash/get";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import ListHighlightsWithPictureView from "../../components/ListHighlightsWithPictureView";
import HighlightWithPictureItemView from "../../components/HighlightWithPictureItemView";
import { personaColorStyle } from "../../helpers/property/persona";

export default props => {
    const { data } = props;
    const items = get(data, "items");
    const subtitle = get(data, "primary.subtitle");
    const title = get(data, "primary.title");
    const image = BackgroundImageHandler(get(data, "primary.image"));
    const property = get(props, 'property') || get(props, 'page.data');
    return (
        <ListHighlightsWithPictureView {...props}>
            <subtitle style={personaColorStyle(property, 'secondary')}>{subtitle}</subtitle>
            <title style={personaColorStyle(property)}>{title}</title>
            <highlightWithPictureItemViewList0>
                {items ?
                    items.map((item, index) => (
                        <HighlightWithPictureItemView.Controller key={index} item={item} />
                    ))
                    :
                    <HighlightWithPictureItemView.Controller />
                }
            </highlightWithPictureItemViewList0>
            <image {...image} />
        </ListHighlightsWithPictureView>
    );
};
