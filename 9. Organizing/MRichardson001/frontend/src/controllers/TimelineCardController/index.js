import React from "react";
import get from "lodash/get";
import TimelineCardView from "../../components/TimelineCardView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import styles from './styles.module.css';

export default props => {
  if (!props.items) {
    return null;
  }
  const image = BackgroundImageHandler(get(props, "items.image"));
  const tag = get(props, "items.tag");
  const text = get(props, "items.text_blurb");
  const date = get(props, "items.date");
  return (
    <TimelineCardView>
      <tag>{tag}</tag>
      <image {...image} className={styles.backgroundImage}/>
      <text className={styles.text}>{text}</text>
      {/* <author></author> */}
      <date>{date}</date>
    </TimelineCardView>
  );
};
