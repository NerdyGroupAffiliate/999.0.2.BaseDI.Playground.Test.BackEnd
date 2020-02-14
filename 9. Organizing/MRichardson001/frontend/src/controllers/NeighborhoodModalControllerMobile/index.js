import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import NeighborhoodModalView from "../../components/NeighborhoodModalView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";

import styles from "./styles.module.css";
import NeighborhoodPropertyView from "../../components/NeighborhoodPropertyView";

  export default withRouter(props => {
    if (!props || !props.subregion) {
      return null;
    }
  const name = get(props, "subregion.data.name");
  const image = BackgroundImageHandler(
    get(props, "subregion.data.primary_image")
  );
  const uid = get(props, "subregion.uid");

  const { properties = [] } = props;

  return (
    <NeighborhoodModalView>
      <wrapper className={styles.wrapper}>
        <header-container className={styles.header} {...image}>
          <name>{name}</name>
        </header-container>
        <explore
          href={`${props.location.pathname}/${uid}-apartments`}
          tabIndex={0}
          onKeyDown={e => {
            if (e && e.stopPropagation) {
              e.stopPropagation();
              e.preventDefault();
            }
            props.history.push(`${props.location.pathname}/${uid}-apartments`);
          }}
          onTouchStart={e => {
            if (e && e.stopPropagation) {
              e.stopPropagation();
              e.preventDefault();
            }
            props.history.push(`${props.location.pathname}/${uid}-apartments`);
          }}
          onMouseDown={e => {
            if (e && e.stopPropagation) {
              e.stopPropagation();
              e.preventDefault();
            }
            props.history.push(`${props.location.pathname}/${uid}-apartments`);
          }}
          className={styles.explore}
        >Explore {name}</explore>
        <neighborhoodPropertyViewList0>
          <div className={styles.listContainer}>
            {properties.map(item => (
              <NeighborhoodPropertyView.Controller
                property={item}
                key={item.id.name}
              />
            ))}
          </div>
        </neighborhoodPropertyViewList0>
      </wrapper>
    </NeighborhoodModalView>
  );
});
