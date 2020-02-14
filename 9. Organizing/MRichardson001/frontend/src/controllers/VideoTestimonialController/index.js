import React from "react";
import get from "lodash/get";
import VideoTestimonialView from "../../components/VideoTestimonialView";
import ReactPlayer from "react-player";
import HighlightWords from "../../helpers/highlight-words/index";
import styles from "./styles.module.css";

export default props => {
  const persons_name = get(props, "slice.primary.persons_name");
  const testimonial = get(props, "slice.primary.testimonial");
  const position = get(props, "slice.primary.position");
  const video_url = get(props, "slice.primary.video_url.url");
  const highlightWords = get(props, "slice.primary.highlight_words");
  const highlightTestimonial = HighlightWords(
    testimonial,
    highlightWords,
    "blue",
    styles.highlight
  );

  return (
    <VideoTestimonialView>
      <testimonial>{highlightTestimonial}</testimonial>
      <name-and-position>{`${persons_name} ${position}`}</name-and-position>
      <video-widget>
        <ReactPlayer url={video_url} width="100%" height="100%" controls={true}/>
      </video-widget>
    </VideoTestimonialView>
  );
};
