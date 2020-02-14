import React from "react";
import get from "lodash/get";
import PropertyIntroductionWithFloorplansView from "../../components/PropertyIntroductionWithFloorplansView";
import FloorplanCardListView from "../../components/FloorplanCardListView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import { getFadedPersonaColor, personaColorStyle } from "../../helpers/property/persona";
import "./index.css";
import CapitalizeFirsts from "../../helpers/capitalize-first-letter";
import styles from "./styles.module.css";

export default props => {
    const { data } = props;
    const subtitle = get(props, "slice.primary.subtitle");
    const bigImage = BackgroundImageHandler(get(data, "primary.big_image"));
    const smallImage = get(data, "primary.small_image.url");
    const altText = get(data, "primary.small_image.small_image_alt_text");
    const title = get(props, "page.data.tagline");
    const textBlurb = get(props, "page.data.about_blurb[0].text");
    const property = get(props, 'property') || get(props, 'page.data');
    const thirdColor = getFadedPersonaColor(property, 'primary', 0.2);
    const subregionName = CapitalizeFirsts(get(props, "page.data.sub-regions[0].sub-region.slug", ""));

    return (
        <PropertyIntroductionWithFloorplansView {...props}>
            <subtitle style={personaColorStyle(property, 'secondary')}>{subtitle || subregionName}</subtitle>
            <title style={personaColorStyle(property)}>{title}</title>
            <text-blurb>{textBlurb}</text-blurb>
            {
                smallImage ?
                <small-image
                src={smallImage}
                srcSet={smallImage}
                alt={altText ? altText : 'AMLI Apartment Lounge'}
                />
                : <small-image />
            }
            <big-image {...bigImage} />
            <body-wrapper style={{backgroundColor: thirdColor}}>
                <empty  />
                <title-wrapper>
                    <lower-subtitle style={personaColorStyle(property, 'secondary')}></lower-subtitle>
                    <lower-title className={styles.lowerTitle} style={personaColorStyle(property)}></lower-title>
                </title-wrapper>
                <FloorplanCardListView.Controller data={data} {...props} />
            </body-wrapper>
        </PropertyIntroductionWithFloorplansView>
    );
};
