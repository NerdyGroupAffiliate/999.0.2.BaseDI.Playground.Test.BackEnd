import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import PropertyContactCtaView from "../../components/PropertyContactCtaView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import { handlePrismicLink } from "../../helpers/link-helper";
import styles from './styles.module.css';
import './index.css';

export default withRouter(props => {
  const image = BackgroundImageHandler(get(props, "slice.primary.image"));
  const subtitle = get(props, "slice.primary.subtitle");
  const title = get(props, "slice.primary.title");
  const textBlurb = get(props, "slice.primary.text_blurb") || "";
  const buttonText = get(props, "slice.primary.button_text", "Schedule a Tour");
  const property = get(props, "page") || get(props, 'property');
  const goDark = get(property, "data.go_dark", "");


  const secondaryColor =
    get(props, "page.data.secondary_color") ||
    get(props, "page.secondary_color") ||
    get(props, "property.data.secondary_color");

  const route = get(props, "route");
  const isShortTerm = route === 'furnished';
  const showContact = get(property, "data.contact_us_available", '')
  let link = get(props, "slice.primary.link");

  link = handlePrismicLink(props, link, {
      property,
      propertyData: property
    },
      isShortTerm
        ? "short-term-housing"
        : goDark === "Yes"
        ? "goDark"
        : buttonText
    );
  if (showContact === "No") {
    return null;
  }

  return (
    <PropertyContactCtaView>
      <image className={styles.image} {...image}>
        <subtitle>
          <h2 className={styles.subtitle}>{subtitle}</h2>
        </subtitle>
        <title
          className={textBlurb ? "" : styles.extraSpace}
        >
          {title}
        </title>
        {textBlurb ? <text-blurb>{textBlurb}</text-blurb> : null}
        <cta-link
          style={{ backgroundColor: secondaryColor }}
          {...link}
          className={styles.button}
        >
          <cta-text className={styles.buttonText}>{buttonText}</cta-text>
          <cta-arrow src="/images/icon-arrow--right-no-shadow3x.png" className={styles.buttonArrow} alt="" />
        </cta-link>`
      </image>
    </PropertyContactCtaView>
  );
});
