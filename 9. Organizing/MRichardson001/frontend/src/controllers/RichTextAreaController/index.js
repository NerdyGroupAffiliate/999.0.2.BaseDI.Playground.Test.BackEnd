import React from "react";
import get from "lodash/get";
import RichTextAreaView from "../../components/RichTextAreaView";
import PrismicDom from "prismic-dom";
import "./index.css";
import styles from './styles.module.css';

function RichTextArea(props) {
  const items = get(props, "slice.primary.text", []);
  const body = PrismicDom.RichText.asHtml(items);
  return (
    <RichTextAreaView>
      <wrapper>
        <div className={styles.bodyContainer} dangerouslySetInnerHTML={{ __html: body }} />
      </wrapper>
    </RichTextAreaView>
  );
}

export default RichTextArea;
