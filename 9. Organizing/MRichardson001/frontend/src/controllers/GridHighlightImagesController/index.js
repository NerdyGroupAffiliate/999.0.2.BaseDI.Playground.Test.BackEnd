import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router";
import GridHighlightImagesView from "../../components/GridHighlightImagesView";
import MultiLineString from "../../helpers/mutli-line-string";
import styles from "./styles.module.css";
import "./index.css";
import { personaColorStyle } from "../../helpers/property/persona";
import { handlePrismicLink } from "../../helpers/link-helper";

class GridHighlightImages extends React.Component {
  render() {
    const { data } = this.props;
    const subtitle = get(data, "primary.subtitle");
    const title = get(data, "primary.title");
    const image1 = get(data, "primary.image_1.url");
    const image2 = get(data, "primary.image_2.url");
    const image3 = get(data, "primary.image_3.url");
    const image4 = get(data, "primary.image_4.url");
    const imageTagline1 = get(data, "primary.image_tagline_1");
    const imageTagline2 = get(data, "primary.image_tagline_2");
    const imageTagline3 = get(data, "primary.image_tagline_3");
    const imageTagline4 = get(data, "primary.image_tagline_4");
    const linkImage = get(data, "primary.link_background_image.url");
    const property =
      get(this.props, "property") || get(this.props, "page.data");
    const linkData = handlePrismicLink(
      this.props,
      get(data, "primary.link_url"),
      { propertyData: get(this.props, "page") }
    );

    const linkText = get(data, "primary.link_text");

    return (
      <GridHighlightImagesView>
        <subtitle style={personaColorStyle(property, "secondary")}>
          {subtitle}
        </subtitle>
        <title className={styles.title} style={personaColorStyle(property)}>
          {title}
        </title>
        <image-1
          className={styles.image}
          style={image1 ? { backgroundImage: `url(${image1})` } : null}
        >
          <image-tagline-1 className={styles.text}>
            {imageTagline1}
          </image-tagline-1>
        </image-1>
        <image-2
          className={styles.image}
          style={image2 ? { backgroundImage: `url(${image2})` } : null}
        >
          <image-tagline-2 className={styles.text}>
            {imageTagline2}
          </image-tagline-2>
        </image-2>
        <image-3
          className={styles.image}
          style={image3 ? { backgroundImage: `url(${image3})` } : null}
        >
          <image-tagline-3 className={styles.text}>
            {imageTagline3}
          </image-tagline-3>
        </image-3>
        <image-4
          className={styles.image}
          style={image4 ? { backgroundImage: `url(${image4})` } : null}
        >
          <image-tagline-4 className={styles.text}>
            {imageTagline4}
          </image-tagline-4>
        </image-4>
        <link-background-image
          style={
            linkImage
              ? {
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${linkImage})`
                }
              : null
          }
        >
          <link-url className={styles.button} {...linkData}>
            <link-text
              style={personaColorStyle(property)}
              className={styles.buttonText}
            >
              {MultiLineString(linkText)}
            </link-text>
            <link-arrow className={styles.buttonArrow} alt="" />
          </link-url>
        </link-background-image>
      </GridHighlightImagesView>
    );
  }
}

export default withRouter(GridHighlightImages);
