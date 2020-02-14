import React from "react";
import get from "lodash/get";
import ContentFactoidsView from "../../components/ContentFactoidsView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import { personaColorStyle } from "../../helpers/property/persona";

export default props => {

    const title = get(props, "data.primary.title");
    const subtitle = get(props, "data.primary.subtitle");
    const text_blurb = get(props, "data.primary.text_blurb");

    const image = BackgroundImageHandler(get(props, "data.primary.image"));
    const items = get(props, "data.items");
    const property = get(props, 'property') || get(props, 'page.data');
    const renderItems = () => {
        if (items && items.length > 0) {
            return items.map((item, index) => {
                return (
                    <fact-box key={`fact-box-${index}`}>
                        <fact>{item.fact}</fact>
                        <fact-description>{item.fact_description}</fact-description>
                    </fact-box>
                );
            });
        }
    };

    return (
        <ContentFactoidsView>
            <fact-container>
                <fact-body>
                    <fact-header>
                        <sub-title style={personaColorStyle(property, 'secondary')}>{subtitle}</sub-title>
                        <title style={personaColorStyle(property)}>{title}</title>
                        <text-blurb>{text_blurb}</text-blurb>
                    </fact-header>
                    <fact-box-container>{renderItems()}</fact-box-container>
                </fact-body>
            </fact-container>
            <image {...image} />
        </ContentFactoidsView>
    );
};
