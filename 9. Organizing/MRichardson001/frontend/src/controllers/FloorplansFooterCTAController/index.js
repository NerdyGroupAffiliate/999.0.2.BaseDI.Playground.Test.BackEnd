import React from "react";
import { get, findIndex } from "lodash";
import { withRouter } from "react-router-dom";

import "./index.css"
import { handlePrismicLink } from "../../helpers/link-helper";

export default withRouter(props => {

  const { property } = props;

  let propertyContactCta;
  if (property && property.data && property.data.body) {
    const sliceIndex = findIndex(property.data.body, ['slice_type', 'property_contact_cta']);
    if (sliceIndex >= 0) {
      propertyContactCta = property.data.body[sliceIndex];
    }
  }

  if (!property || !propertyContactCta) {
    return null;
  }
  const title = get(propertyContactCta, "primary.title");
  const textBlub = get(propertyContactCta, "primary.text_blurb");
  const image = get(propertyContactCta, "primary.image.url");
  let link = get(propertyContactCta, "primary.link");
  const buttonText = get(propertyContactCta, "primary.button_text", "Schedule a Tour");
  const secondaryColor = get(property, "data.secondary_color");
  const goDark = get(property, "data.go_dark", "");
  link = handlePrismicLink(
      props,
      link,
      {
        property,
        propertyData: property
      },
      goDark !== "Yes" ? buttonText : "goDark"
    );

  return (
    <div className="floorplans-footer-cta-wrapper">
      <div
          className="floorplans-footer-cta-background-image"
          style={
            image
              ? {
                  backgroundImage: `linear-gradient(0deg, #000000, transparent, rgba(0, 0, 0, .8)), url(${image})`
                }
              : null
          }
      >
        <div className="floorplans-footer-cta-title">
          {title}
        </div>
        <div className="floorplans-footer-cta-subtitle">
          {textBlub}
        </div>
        <span
          className="floorplans-footer-cta-button-wrapper"
        >
          <a
            style={{backgroundColor: secondaryColor}}
            className="floorplans-footer-cta-button"
            {...link}
            >
            <img
                alt="Left Arrow"
                className="floorplans-footer-cta-button-arrow"
                src="/images/icon-arrow--right-no-shadow3x.png"
              />
            <span className="floorplans-footer-cta-button-text">{buttonText}</span>
          </a>
        </span>
      </div>
    </div>
  );
});
