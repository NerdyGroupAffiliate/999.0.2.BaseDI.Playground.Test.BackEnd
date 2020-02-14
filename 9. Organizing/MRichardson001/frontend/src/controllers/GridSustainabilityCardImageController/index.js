import React from "react";
import get from "lodash/get";
import GridSustainabilityCardImageView from "../../components/GridSustainabilityCardImageView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";

function GridSustainabilityCardImage(props) {
  if (!props || !props.card || !props.card.image) {
    return null;
  }
  const alt = get(props, "card.image_alt_text");
  return (
    <GridSustainabilityCardImageView>
      <image
        tabIndex={0}
        {...BackgroundImageHandler(props.card.image)}
        alt={alt || ""}
      />
    </GridSustainabilityCardImageView>
  );
}

export default GridSustainabilityCardImage;
