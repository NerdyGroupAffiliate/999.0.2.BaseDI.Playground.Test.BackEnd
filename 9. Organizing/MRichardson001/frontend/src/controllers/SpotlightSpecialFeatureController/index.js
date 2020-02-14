import React from "react";
import { withRouter } from "react-router";
import get from "lodash/get";
import SpotlightSpecialFeatureView from "../../components/SpotlightSpecialFeatureView";
import { handlePrismicLink } from "../../helpers/link-helper";
import MultiLineString from "../../helpers/mutli-line-string";
import { personaBackgroundColorStyle } from "../../helpers/property/persona";
import styles from "./styles.module.css";
import "./index.css";

export default withRouter(props => {
  const { slice } = props;
  const image1 = get(slice, "primary.image_1.url");
  const title = get(slice, "primary.title");
  const textBlurb = get(slice, "primary.text_blurb[0].text");
  const linkText = get(slice, "primary.link_text");
  const property = get(props, "property") || get(props, "page.data");
  const linkData = handlePrismicLink(
    props,
    get(slice, "primary.link_url"),
    { propertyData: get(props, "page") },
    linkText
  );
  const image2 = get(slice, "primary.image_2.url");

  return (
    <SpotlightSpecialFeatureView>
      <image-1 style={image1 ? { backgroundImage: `url(${image1})` } : null} />
      <center-wrapper
        className={styles.textWrapper}
        style={personaBackgroundColorStyle(property)}
      >
        <title>
          <h2 className="af-class-property-sub-section-tagline af-class-white">
            {MultiLineString(title)}
          </h2>
        </title>
        <text-blurb>{textBlurb}</text-blurb>
        {linkText ? (
          <link-url {...linkData}>
            <link-text style={{color: 'white'}}>
              {linkText}
            </link-text>
          </link-url>
        ) : null}
      </center-wrapper>
      <image-2 style={image2 ? { backgroundImage: `url(${image2})` } : null} />
    </SpotlightSpecialFeatureView>
  );
});
