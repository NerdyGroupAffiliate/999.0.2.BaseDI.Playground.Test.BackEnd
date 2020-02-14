import React from "react";
import get from "lodash/get";
import SustainabilityHighlightsView from "../../components/SustainabilityHighlightsView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";

import styles from './styles.module.css';
import './index.css'
import { personaColorStyle } from "../../helpers/property/persona";

export default props => {
    const image = get(props, "data.primary.image");
    const title = get(props, "data.primary.title");
    const subtitle = get(props, "data.primary.subtitle");
    const text_blurb = get(props, "data.primary.text_blurb");
    const imageProps = BackgroundImageHandler(image);
    const items = get(props, "data.items");
    const leed = get(props, "data.primary.leed_level1", '') || '';
    const leed_logo = get(props, "slice.primary.leed_logo.url");
    const property = get(props, 'property') || get(props, 'page.data');

    return (
        <SustainabilityHighlightsView>
            <image {...imageProps} />
            <subtitle style={personaColorStyle(property, 'secondary')}>{subtitle}</subtitle>
            <title style={personaColorStyle(property)}>{title}</title>
            <text-blurb>{text_blurb}</text-blurb>
            <list>
                {items.map((item, index) => (
                    <li
                        key={`highlight_${index}`}
                        className="af-class-phase-1-sustainable-list-item"
                    >
                        <div className={styles.text}>{item.highlight}</div>
                    </li>
                ))}
            </list>
            {leed && leed.toLowerCase() !== "none" && !leed_logo ? (
                <leed-logo
                    className={styles.leedLogo}
                    src={`./images/leed-${leed.toLowerCase()}.png`}
                    srcSet={`./images/leed-${leed.toLowerCase()}.png`}
                    alt={`LEED Logo ${leed}`}
                />
            ) : null}
            {!!leed_logo ? (
                <leed-logo
                    className={styles.leedLogo}
                    src={leed_logo}
                    srcSet={leed_logo}
                    alt="LEED Logo" />
            ) : null}
        </SustainabilityHighlightsView>
    );
};
