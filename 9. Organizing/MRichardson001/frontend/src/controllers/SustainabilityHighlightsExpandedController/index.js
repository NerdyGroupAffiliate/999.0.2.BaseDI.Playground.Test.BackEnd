import React from "react";
import get from "lodash/get";
import SustainabilityHighlightsExpandedView from "../../components/SustainabilityHighlightsExpandedView";
import HighlightsWrapperView from "../../components/HighlightsWrapperView";
import { personaColorStyle } from "../../helpers/property/persona";
import styles from './styles.module.css';
import "./index.css";

export default props => {
    const { data } = props;
    const mainImage = get(data, "primary.main_image.url");
    const mainImageAlt = get(data, "primary.main_image_alt_text");
    const subtitle = get(data, "primary.subtitle");
    const title = get(data, "primary.title");
    const textBlurb = get(data, "primary.text_blurb");
    const secondaryImage = get(data, "primary.secondary_image.url");
    const secondaryImageAlt = get(data, "primary.secondary_image_alt_text");
    const leed = get(data, "primary.leed_level1");
    const highlights = get(data, "items") || [];
    const leed_logo = get(props, "slice.primary.leed_logo1.url");
    const property = get(props, 'property') || get(props, 'page.data');

    return (
        <SustainabilityHighlightsExpandedView {...props}>
            {mainImage ? (
                <main-image className={styles.mainImage} src={mainImage} srcSet={mainImage} alt={mainImageAlt || ""} />
            ) : (
                <main-image alt="" />
            )}
            <subtitle style={personaColorStyle(property, 'secondary')}>{subtitle}</subtitle>
            <title style={personaColorStyle(property)}>{title}</title>
            <text-blurb>{textBlurb}</text-blurb>
            {leed && leed.toLowerCase() !== "none" && !leed_logo ? (
                <leed-logo
                    className={styles.logo}
                    src={`./images/leed-${leed.toLowerCase()}.png`}
                    srcSet={`./images/leed-${leed.toLowerCase()}.png`}
                    alt={`LEED Logo ${leed}`}
                />
            ) : null}
            {!!leed_logo ? (
                <leed-logo
                    className={styles.logo}
                    src={leed_logo}
                    srcSet={leed_logo}
                    alt="LEED Logo"
                />
            ) : null}
            {secondaryImage ? (
                <secondary-image
                    src={secondaryImage}
                    srcSet={secondaryImage}
                    alt={secondaryImageAlt || ""}
                />
            ) : (
                <secondary-image />
            )}
            <HighlightsWrapperView.Controller data={highlights} />
        </SustainabilityHighlightsExpandedView>
    );
};
