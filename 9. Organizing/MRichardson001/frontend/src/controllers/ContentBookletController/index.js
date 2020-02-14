import React from "react";
import get from "lodash/get";
import ContentBookletView from "../../components/ContentBookletView";
import BookletReversedView from "../../components/BookletReversedView";
import "./index.css";
import styles from "./styles.module.css"


export default props => {
    const { slice } = props;

    const title = get(slice, "primary.title_1");
    const subtitle = get(slice, "primary.subtitle_1");
    const text_blurb = get(slice, "primary.text_blurb_1[0].text");
    const image_alt_text_1 = get(slice, "primary.image_alt_text_1");
    const image = get(slice, "primary.image_1.url");


    // booklet reversed
    const title_2 = get(slice, "primary.title_2");
    const subtitle_2 = get(slice, "primary.subtitle_2");
    const text_blurb_2 = get(slice, "primary.text_blurb_2[0].text");
    const image_alt_text_2 = get(slice, "primary.image_alt_text_2");
    const image_2 = get(slice, "primary.image_2.url");


    return (
        <div className={styles.contentBookletWrapper}>
            <ContentBookletView>
                <sub-title> {subtitle} </sub-title>
                <title>{title}</title>
                <text-blurb-1>{text_blurb}</text-blurb-1>
                <image-1 src={image} alt={image_alt_text_1} srcSet={image} />
            </ContentBookletView>

            <BookletReversedView>
                <sub-title-reversed> {subtitle_2} </sub-title-reversed>
                <title-reversed>{title_2}</title-reversed>
                <text-blurb-reversed>{text_blurb_2}</text-blurb-reversed>
                <image-reversed src={image_2} alt={image_alt_text_2} srcSet={image_2} />
            </BookletReversedView>

        </div>

    );
};
