import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import SpotlightTourView from "../../components/SpotlightTourView";
import styles from "./styles.module.css";
import { handlePrismicLink } from "../../helpers/link-helper";
import { personaColorStyle } from "../../helpers/property/persona";

export default withRouter(props => {
  const { data } = props;
  const property = get(props, "property") || get(props, "page.data");
  const linkText = get(data, "primary.link_text");
  const linkData = handlePrismicLink(props, get(data, "primary.link_url"), {
    property,
    propertyData: get(props, "page")
  }, linkText);
  const image = get(data, "primary.background_image.url");
  const subtitle = get(data, "primary.subtitle");
  const title = get(data, "primary.title");
  const textBlurb = get(data, "primary.text_blurb");

  return (
    <SpotlightTourView>
      <background-image
        style={image ? { backgroundImage: `url(${image})` } : null}
      >
        <subtitle className={styles.subtitle}>{subtitle}</subtitle>
        <title style={personaColorStyle(property)}>{title}</title>
        <text-blurb>{textBlurb}</text-blurb>
        <link-url
          style={{ backgroundColor: property.secondary_color }}
          {...linkData}
          className={styles.button}
        >
          <link-text className={styles.buttonText}>{linkText}</link-text>
          <link-arrow className={styles.buttonArrow} alt="" />
        </link-url>
      </background-image>
    </SpotlightTourView>
  );
});
