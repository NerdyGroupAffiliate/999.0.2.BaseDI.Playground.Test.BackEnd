import React from "react";
import get from "lodash/get";

import SpotlightCareersCtaView from "../../components/SpotlightCareersCtaView";
import FormatLink from "../../helpers/format-link-data";
import styles from './styles.module.css';

export default props => {
  const title = get(props, "slice.primary.title");

  const link_text = get(props, "slice.primary.link_text");
  const link_url = FormatLink(get(props, "slice.primary.link_url"));

  return (
    <SpotlightCareersCtaView>
        <title>{title}</title>

        <link-url {...link_url} className={styles.button}>
            <link-text className={styles.buttonText}>{link_text}</link-text>
            <link-arrow className={styles.buttonArrow} alt="" />
        </link-url>
    </SpotlightCareersCtaView>
  );
};


