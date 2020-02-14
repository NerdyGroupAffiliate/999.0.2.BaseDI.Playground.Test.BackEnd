import React, { useState } from "react";
import get from "lodash/get";
import ReactPlayer from "react-player";
import { withRouter } from "react-router";

import { handlePrismicLink } from "../../helpers/link-helper";
import ContentVideoTestimonialItemView from "../../components/ContentVideoTestimonialItemView";
import "./index.css";
import styles from "./styles.module.css";

export default withRouter(props => {
  const [modalIsOpen, toggleModal] = useState(false);

  const title = get(props, "item.title", "");
  const textBlurb = get(props, "item.text_blurb", "");
  const linkText = get(props, "item.link_text", "");
  const linkData = handlePrismicLink(props, get(props, "item.link_url"));
  const videoUrl = get(props, "item.video_url.url", "");
  return (
    <ContentVideoTestimonialItemView>
      <wrapper
        className={styles.wrapper}
        topelement={() => (
          <div
            className={[
              props.odd
                ? "af-class-content-video-testimonial-bg-blue-left"
                : "af-class-content-video-testimonial-bg-blue-right",
              styles.tiles
            ].join(" ")}
          />
        )}
      >
        <title className={styles.top}>{title}</title>
        <text-blurb className={styles.top}>{textBlurb}</text-blurb>
        {linkData && linkText ? (
          <link-url {...linkData} className={`${styles.top} ${styles.button}`}>
            <link-text className={`${styles.top}${styles.buttonText}`}>
              {linkText}
            </link-text>
          </link-url>
        ) : null}

        <video-widget
          style={{ padding: 0 }}
          className={styles.top}
          id={Math.floor(Math.random() * 16777215).toString(32)}
        >
          <div
            style={{
              cursor: "pointer",
              display: "inline-block",
              position: "relative"
            }}
            className={styles.top}
            onClick={() => toggleModal(true)}
          >
            <ReactPlayer url={videoUrl} className={styles.video} controls={true}/>
          </div>
        </video-widget>
      </wrapper>
    </ContentVideoTestimonialItemView>
  );
});
