import { get } from "lodash";
import React from "react";
import ContentIntroDescriptiveView from "../../components/ContentIntroDescriptiveView";
import HighlightWords from "../../helpers/highlight-words/index";
import styles from './styles.module.css';
import './index.css';


export default props => {
  const title = get(props, "data.primary.title", "");
  const titleHighlightedWord = get(props, "data.primary.highlight_word", "");
  const textBlurb = get(props, "data.primary.text_blurb", "");
  const titleHighlighted = HighlightWords(
    title,
    titleHighlightedWord,
    "blue",
    styles.highlight
  );


  return (
    <ContentIntroDescriptiveView>
      <title className={styles.title}>{titleHighlighted}</title>
      <text-blurb className={styles.textBlurb}>{textBlurb}</text-blurb>
    </ContentIntroDescriptiveView>
  );
};
