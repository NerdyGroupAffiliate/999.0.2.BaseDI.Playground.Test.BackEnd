import React from "react";
import get from "lodash/get";
import CardsContentOffsetView from "../../components/CardsContentOffsetView";
import "./index.css";


export default props => {
    const { slice } = props;

    const title_1 = get(slice, "primary.title_1");
    const text_blurb_1 = get(slice, "primary.text_blurb_1");
    const image_alt_text_1 = get(slice, "primary.image_alt_text_1");
    const image_1 = get(slice, "primary.image_1.url");


    // cards content offset reversed
    const title_2 = get(slice, "primary.title_2");
    const text_blurb_2 = get(slice, "primary.text_blurb_2");
    const image_alt_text_2 = get(slice, "primary.image_alt_text_2");
    const image_2 = get(slice, "primary.image_2.url");


    return (
        <CardsContentOffsetView>

            <image-1 src={image_1} srcSet={image_1} alt={image_alt_text_1} />
            <title-1>{title_1}</title-1>
            <text-blurb-1>{text_blurb_1}</text-blurb-1>

            <title-2>{title_2}</title-2>
            <text-blurb-2>{text_blurb_2}</text-blurb-2>
            <image-2 src={image_2} srcSet={image_2} alt={image_alt_text_2} />

        </CardsContentOffsetView>
    );
};
