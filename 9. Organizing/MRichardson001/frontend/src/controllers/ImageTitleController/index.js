import React from 'react';
import get from 'lodash/get';
import ImageTitleView from '../../components/ImageTitleView';
import HighlightWords from '../../helpers/highlight-words';
import BackgroundImageHandler from '../../helpers/components-data-handlers/background-image-handler';
import styles from './styles.module.css';
import "./index.css";

export default (props) => {
  const { page } = props;
  const headerImage = BackgroundImageHandler(get(page, 'header_image'));
  const headerTitle = get(page, 'header_title');
  const highlightedWords = get(page, 'header_title_highlight_words');

    return(
      <ImageTitleView>
        <header-image {...headerImage}>
          <header-title className={styles.title}>
            {HighlightWords(headerTitle, highlightedWords, 'yellow', styles.highlight)}
          </header-title>
        </header-image>
      </ImageTitleView>
    );
  };
