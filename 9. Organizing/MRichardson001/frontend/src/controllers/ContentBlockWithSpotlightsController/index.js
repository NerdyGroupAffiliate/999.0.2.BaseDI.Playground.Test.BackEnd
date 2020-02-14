import React from "react";
import get from "lodash/get";
import ContentBlockWithSpotlightsView from "../../components/ContentBlockWithSpotlightsView";
import TextWritter from "../../helpers/text-writter/index";
import styles from "./styles.module.css";
import "./index.css";

export default props => {
  const title = get(props, "slice.primary.title");
  const top_body = get(props, "slice.primary.top_body", []);
  const main_body = get(props, "slice.primary.main_body", []);
  const img = get(props, "slice.primary.image");
  const imageUrl = get(img, "url");
  const imageAltText = get(img, "alt");

  const event_title_1 = get(props, "slice.primary.event_title_1");
  const event_description_1 = get(props, "slice.primary.event_description_1");

  const event_title_2 = get(props, "slice.primary.event_title_2");
  const event_description_2 = get(props, "slice.primary.event_description_2");

  const event_title_3 = get(props, "slice.primary.event_title_3");
  const event_description_3 = get(props, "slice.primary.event_description_3");
  return (
    <ContentBlockWithSpotlightsView>
      <top-text-wrapper
        className={styles.topWrapper}
        topelement={() => (
          <img
            className={styles.mobileImage}
            src={imageUrl}
            srcSet={imageUrl}
            alt={imageAltText || "AMLI Speaking Engagement"}
          />
        )}
      >
        <title>{title}</title>
        <top-body>{top_body.map(tb => TextWritter(tb))}</top-body>
      </top-text-wrapper>

      <main-body>
        <span>
          {main_body.map((item, index) => (
            <span key={`rich-text-block-${index}`}>{TextWritter(item)}</span>
          ))}
        </span>
      </main-body>

      <image
        className={styles.mainImage}
        src={imageUrl}
        srcSet={null}
        alt={imageAltText || ""}
        style={{ objectFit: "cover" }}
      />

      <event-title-1 className={styles.eventTitle}>
        {event_title_1}
      </event-title-1>
      <event-description-1>{event_description_1}</event-description-1>

      <event-title-2 className={styles.eventTitle}>
        {event_title_2}
      </event-title-2>
      <event-description-2>{event_description_2}</event-description-2>

      <event-title-3 className={styles.eventTitle}>
        {event_title_3}
      </event-title-3>
      <event-description-3>{event_description_3}</event-description-3>
    </ContentBlockWithSpotlightsView>
  );
};
