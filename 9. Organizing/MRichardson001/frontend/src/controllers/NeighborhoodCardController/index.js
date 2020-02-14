import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router";
import NeighborhoodCardView from "../../components/NeighborhoodCardView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";

import styles from './styles.module.css';

export default withRouter(props => {
  if (!props || !props.data) {
    return null;
  }

  const title = get(props, "data.data.name");
  const description = get(props, "data.data.description");
  const uid = get(props, "data.uid");
  const image = BackgroundImageHandler(get(props, "data.data.primary_image"));

  const buttonLabel = title ? `Explore ${title}` : null;
  return (
    <NeighborhoodCardView>
      <title-container
        {...image}
        className={styles.image}
        onClick={() => props.history.push(`${props.location.pathname}/${uid}-apartments`)}
      >
        <title>{title}</title>
      </title-container>
      <body>{description}</body>
      <button
        onClick={() => props.history.push(`${props.location.pathname}/${uid}-apartments`)}
        className={styles.button}
      >
        <button-label>
          <a
            href={`${props.location.pathname}/${uid}-apartments`}
            onClick={e => {
              if (e) {
                e.stopPropagation();
                e.preventDefault();
              }
              props.history.push(`${props.location.pathname}/${uid}-apartments`);
            }}
            className={styles.link}
          >
            {buttonLabel}
          </a>
        </button-label>
      </button>
    </NeighborhoodCardView>
  );
});
