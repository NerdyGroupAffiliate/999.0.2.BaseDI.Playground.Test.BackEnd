import React from "react";
import get from "lodash/get";
import BookletReversedView from "../../components/BookletReversedView";

export default props => {
  const { slice } = props;
  // booklet reversed
  const title_2 = get(slice, "primary.title_2");
  const subtitle_2 = get(slice, "primary.subtitle_2");
  const text_blurb_2 = get(slice, "primary.text_blurb_2[0].text");
  const image_alt_text_2 = get(slice, "primary.image_alt_text_2");
  const image_2 = get(slice, "primary.image_2.url");

  return (
    <BookletReversedView>
      <sub-title-reversed> {subtitle_2} </sub-title-reversed>
      <title-reversed>{title_2}</title-reversed>
      <text-blurb-reversed>{text_blurb_2}</text-blurb-reversed>
      <image-reversed src={image_2} alt={image_alt_text_2} srcSet={image_2} />
    </BookletReversedView>
  );
};
