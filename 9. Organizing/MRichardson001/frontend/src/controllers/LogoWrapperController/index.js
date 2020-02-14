import React from "react";
import get from "lodash/get";
import LogoWrapperView from "../../components/LogoWrapperView";

import styles from "./styles.module.css";
import "./index.css";

function LogoWrapper(props) {
  if (!props || !props.data) {
    return null;
  }
  const image = get(props, "data.image");
  const title = get(props, "data.title");
  const subtitle = get(props, "data.text_blurb");
  return (
    <LogoWrapperView {...props}>
      <wrapper className={styles.container}>
        <image
          src={image.url}
          srcSet={null}
          className={styles.logo}
          alt={image.alt || title || "Logo"}
        />
        {title ? <title className={styles.title}>{title}</title> : null}
        {subtitle ? (
          <subtitle className={styles.subtitle}>{subtitle}</subtitle>
        ) : null}
      </wrapper>
    </LogoWrapperView>
  );
}

export default LogoWrapper;
