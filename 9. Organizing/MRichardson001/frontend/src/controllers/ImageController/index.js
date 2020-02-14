import React from "react";
import get from "lodash/get";
import ImageView from "../../components/ImageView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import "./index.css"

export default props => {
  const headerImage = BackgroundImageHandler(get(props, "page.header_image") || get(props, "page.data.header_image"));
  const headerTitle = get(props, "page.header_title") || get(props, "page.data.header_title");
  const uid = get(props, "page.uid") || get(props, "page.data.uid");

  return(
    <ImageView>
      <header-image className={uid === 'sustainability' ? 'sustainability' : null}{...headerImage}>
        {
          headerTitle ?
            <header-title>{headerTitle}</header-title>
          : null
        }
      </header-image>
    </ImageView>
  );
};
