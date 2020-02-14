import React from "react";
import RegionNeighborhoodView from "../../components/RegionNeighborhoodView";

import styles from "./styles.module.css";
import './index.css';

export default props => {
  if (!props.subtitle) {
    return null;
  }
  return (
    <RegionNeighborhoodView>
      <wrapper
        className={styles.wrapper}
        tabIndex={0}
        onKeyDown={e => {
          if (e && e.stopPropagation) {
            e.stopPropagation();
          }
          if (e.keyCode !== 13) {
            return null;
          }
          return props.onClick && props.onClick();
        }}
        onClick={() => props.onClick && props.onClick()}
      >
        <image />
        <title />
        <subtitle className={styles.subtitle}>{props.subtitle}</subtitle>
      </wrapper>
    </RegionNeighborhoodView>
  );
};
