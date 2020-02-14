import React from "react";
import get from "lodash/get";
import SpotlightNextStepsView from "../../components/SpotlightNextStepsView";
import { handlePrismicLink } from "../../helpers/link-helper";
import styles from "./style.module.css";
import { withRouter } from "react-router";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import GetPropertyFullRoute from "../../helpers/get-full-property-route";

export default withRouter(props => {
  const linkData = get(props, "slice.primary.link_url");
  const url = get(linkData, "url");
  const slug = get(linkData, "slug");
  const uid = get(linkData, "uid");
  const propertyUid = get(props, "property.uid");
  const property = get(props, "property");
  const appdata = get(props, "appData");
  const augmentedLinkData =
    !!url || !!slug || !!uid
      ? linkData
      : {
          url: `floorplans`
        };
  const link = handlePrismicLink(props, augmentedLinkData, {
    propertyData: props.property
  });
  const title = get(props, "slice.primary.title", "");
  const image = BackgroundImageHandler(
    get(props, "slice.primary.background_image")
  );

  return (
    <SpotlightNextStepsView>
      <container {...image}>
        <link-url className={styles.next} {...link}>
          <title>{title}</title>
        </link-url>
      </container>
    </SpotlightNextStepsView>
  );
});
