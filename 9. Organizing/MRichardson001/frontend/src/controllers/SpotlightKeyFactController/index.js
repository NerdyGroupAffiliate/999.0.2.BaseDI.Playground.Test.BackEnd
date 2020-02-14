import React from "react";
import get from "lodash/get";
import SpotlightKeyFactView from "../../components/SpotlightKeyFactView";
import styles from './styles.module.css'
import './index.css';

export default props => {
  const { data } = props;
  const backgroundImage = get(data, "primary.background_image.url");
  const factImage = get(data, "primary.key_fact_image.url");
  const factImageAlt = get(data, "primary.key_fact_alt_text");

  return (
    <SpotlightKeyFactView>
      <background-image className={styles.keyFactImage} style={ backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : null }>
        { factImage ? <key-fact-image src={factImage} srcSet={factImage} alt={factImageAlt}/> : null }
      </background-image>
    </SpotlightKeyFactView>
  );
};
