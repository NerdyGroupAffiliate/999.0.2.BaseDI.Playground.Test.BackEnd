import { get } from "lodash";
import React from "react";

import SpotlightThreePointsView from "../../components/SpotlightThreePointsView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import TextWritter from "../../helpers/text-writter";

import styles from "./styles.module.css";
import "./index.css";

export default props => {
  const title = get(props, "data.primary.title");
  const pointText1 = !!get(props, "data.primary.point_text_1")
    ? TextWritter(get(props, "data.primary.point_text_1", [null])[0])
    : null;
  const pointImage1 = BackgroundImageHandler(
    get(props, "data.primary.point_image_1")
  );
  const pointText2 = !!get(props, "data.primary.point_text_2")
    ? TextWritter(get(props, "data.primary.point_text_2", [null])[0])
    : null;
  const pointImage2 = get(props, "data.primary.point_image_2");
  const pointText3 = !!get(props, "data.primary.point_text_3")
    ? TextWritter(get(props, "data.primary.point_text_3", [null])[0])
    : null;
  const pointImage3 = get(props, "data.primary.point_image_3");

  return (
    <SpotlightThreePointsView>
      <title className={styles.title}>{title}</title>
      <point-text-1 className={styles.paragraph}>{pointText1}</point-text-1>
      <point-image-1
        {...pointImage1}
        alt={pointImage1.alt || "Point of interest 1"}
      />
      <point-text-2 className={styles.paragraph}>{pointText2}</point-text-2>
      {pointImage2 ? (
        <point-image-2
          src={pointImage2.url}
          className={styles.image2}
          alt={pointImage2.alt || "Point of interest 2"}
        />
      ) : (
        <point-image-2 />
      )}
      <point-text-3 className={styles.paragraph}>{pointText3}</point-text-3>
      {pointImage3 ? (
        <point-image-3
          src={pointImage3.url}
          alt={pointImage3.alt || "Point of interest 3"}
        />
      ) : (
        <point-image-3 />
      )}
    </SpotlightThreePointsView>
  );
};
