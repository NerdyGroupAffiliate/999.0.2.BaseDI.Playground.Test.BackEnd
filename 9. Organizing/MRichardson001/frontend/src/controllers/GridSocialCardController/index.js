import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router";
import GridSocialCardView from "../../components/GridSocialCardView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import styles from './styles.module.css';

function GridSocialCard(props) {
  const image = BackgroundImageHandler(get(props, "item.image"));
  const url = get(props, "item.social_url.url");

  return (
    <GridSocialCardView>
      <wrapper
        {...image}
        aria-label="Social Link"
        href={url || `/not-set-${props.index}`}
        className={styles.clickable}
        onClick={e => {
          if (e && e.preventDefault) {
            e.preventDefault();
          }
          props.history.push(url);
        }}
      />
    </GridSocialCardView>
  );
}

export default withRouter(GridSocialCard);
