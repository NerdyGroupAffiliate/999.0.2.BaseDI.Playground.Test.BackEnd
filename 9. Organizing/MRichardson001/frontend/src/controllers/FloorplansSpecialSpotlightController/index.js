import React from "react";
import get from "lodash/get";
import FloorplansSpecialSpotlightView from "../../components/FloorplansSpecialSpotlightView";
import styles from './styles.module.css';
import "./index.css";

const moment = require("moment");

function FloorplansSpecialSpotlight(props) {
  const text = get(props, "property.data.specials[0].special_text");
  const date = get(props, "property.data.specials[0].expiration_date");
  const formattedDate = moment(date).format("MM/DD/YY");
  const phone = get(props, "property.data.phone");

  if (moment(date).isBefore(new Date())) {
    return (
      null
    );
  }

  return (
    <FloorplansSpecialSpotlightView>
      <image
        src="/images/spotlight-tour-kitchen2x.jpg"
        srcSet="/images/spotlight-tour-kitchen2x-p-500.jpeg 500w, /images/spotlight-tour-kitchen2x-p-1080.jpeg 1080w, /images/spotlight-tour-kitchen2x-p-2000.jpeg 2000w, /images/spotlight-tour-kitchen2x-p-2600.jpeg 2600w, /images/spotlight-tour-kitchen2x.jpg 2636w"
        alt="kitchen"
      />
      <icon />
      <special-text>Current Special</special-text>
      {text ? <text className={styles.text}>{text}</text> : null}
      {date ? <date className={styles.date}>Exp. {formattedDate}</date> : null}
      <cta
        href={`tel:${phone}`}
        className={styles.cta}
      />
    </FloorplansSpecialSpotlightView>
  );
}

export default FloorplansSpecialSpotlight;
