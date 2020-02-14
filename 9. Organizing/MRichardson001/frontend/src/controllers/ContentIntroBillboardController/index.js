import React from 'react';
import get from "lodash/get";
import ContentIntroBillboardView from '../../components/ContentIntroBillboardView';
import BackgroundImageHandler from '../../helpers/components-data-handlers/background-image-handler';
import './index.css'

export default props => {
  const image = get(props, "data.primary.background_image");
  const title = get(props, "data.primary.title");
  const imageProps = BackgroundImageHandler(image);
  return (
    <ContentIntroBillboardView>
      <bg-image {...imageProps}>
        <title>{title}</title>
      </bg-image>
    </ContentIntroBillboardView>
  );
}
