import React from "react";
import get from "lodash/get";
import CardsHighlightActivityView from "../../components/CardsHighlightActivityView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import styles from './styles.module.css';
import './index.css'

export default props => {
  const { slice } = props;

  const title = get(slice, "primary.title");
  const text_blurb = get(slice, "primary.text_blurb");
  const main_image = BackgroundImageHandler(
    get(slice, "primary.main_image")
  );

  const activity_title_1 = get(slice, "primary.activity_title_1");
  const activity_text_blurb_1 = get(
    slice,
    "primary.activity_text_blurb_1[0].text"
  );
  const activity_image_alt_text_1 = get(
    slice,
    "primary.activity_image_alt_text_1"
  );
  const activity_image_1 = get(slice, "primary.activity_image_1.url");

  const activity_title_2 = get(slice, "primary.activity_title_2");
  const activity_text_blurb_2 = get(
    slice,
    "primary.activity_text_blurb_2[0].text"
  );
  const activity_image_alt_text_2 = get(
    slice,
    "primary.activity_image_alt_text_2"
  );
  const activity_image_2 = get(slice, "primary.activity_image_2.url");

  return (
    <CardsHighlightActivityView>
      <wrapper {...main_image} />
      <title>{title}</title>
      <text-blurb className={styles.text_blurb}>{text_blurb}</text-blurb>

      <activity-title-1>{activity_title_1}</activity-title-1>
      <activity-text-blurb-1>{activity_text_blurb_1}</activity-text-blurb-1>
      <activity-image-1
        src={activity_image_1}
        srcSet={activity_image_1}
        alt={activity_image_alt_text_1}
      />

      <activity-title-2>{activity_title_2}</activity-title-2>
      <activity-text-blurb-2>{activity_text_blurb_2}</activity-text-blurb-2>
      <activity-image-2
        src={activity_image_2}
        srcSet={activity_image_2}
        alt={activity_image_alt_text_2}
      />
    </CardsHighlightActivityView>
  );
};
