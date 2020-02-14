import React from "react";
import get from "lodash/get";
import ContentIntroImageView from "../../components/ContentIntroImageView";
import BackgroundImageHandler from '../../helpers/components-data-handlers/background-image-handler';

export default props => {
  const image = get(props, "data.primary.image", "");
  const image_title = get(props, "data.primary.title1", "");
  const imageProps = BackgroundImageHandler(image)
  return (
    <ContentIntroImageView {...props}>
      <bg-image {...imageProps}>
        <title>{image_title}</title>
      </bg-image>
    </ContentIntroImageView>
  );
};
