import React from "react";
import get from "lodash/get";
import CardWithFactView from "../../components/CardWithFactView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import styles from './styles.module.css';
import "./index.css";

export default props => {
  const title = get(props, "slice.primary.title");
  const subtitle = get(props, "slice.primary.subtitle");
  const text_blurb = get(props, "slice.primary.text_blurb");
  const image = get(props, "slice.primary.image");
  const imageProps = BackgroundImageHandler(image);

  return (
    <CardWithFactView>
      <image {...imageProps} className={styles.backgroundImage} topelement={() => (
        <div {...imageProps} className={styles.mobileImage}></div>
      )}>
        {
          subtitle ?
            <subtitle>{subtitle}</subtitle>
          : null
        }
        <title className={subtitle ? '' : 'af-class-section-tagline white'}>{title}</title>
        <text-blurb>{text_blurb}</text-blurb>
      </image>
    </CardWithFactView>
  );
};
