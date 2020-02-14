import React from "react";
import get from "lodash/get";
import HighlightWithPictureItemView from "../../components/HighlightWithPictureItemView";
import styles from './styles.module.css';

export default props => {
  const text = get(props, "item.highlight");
  return (
    <HighlightWithPictureItemView>
      <highlight-text className={styles.text}>{text}</highlight-text>
      <background-circle className={styles.circle}/>
    </HighlightWithPictureItemView>
  )
}
