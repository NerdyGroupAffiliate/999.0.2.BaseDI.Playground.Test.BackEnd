import React from "react";
import { withRouter } from "react-router-dom";
import get from "lodash/get";
import CardsPointsOfInterestDetailView from "../../components/CardsPointsOfInterestDetailView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import { handlePrismicLink } from "../../helpers/link-helper";
import styles from './styles.module.css';
import "./index.css"

export default withRouter(props => {
    const { slice } = props;
    const image1 = BackgroundImageHandler(get(slice, "primary.point_image_1"));
    const image2 = BackgroundImageHandler(get(slice, "primary.point_image_2"));
    const image3 = BackgroundImageHandler(get(slice, "primary.point_image_3"));
    const title = get(slice, "primary.title");
    const text_blurb = get(slice, "primary.text_blurb");
    const point_tag_1 = get(slice, "primary.point_tag_1");
    const point_tag_2 = get(slice, "primary.point_tag_2");
    const point_tag_3 = get(slice, "primary.point_tag_3");
    const point_title_1 = get(slice, "primary.point_title_1");
    const point_title_2 = get(slice, "primary.point_title_2");
    const point_title_3 = get(slice, "primary.point_title_3");
    const point_fact_1 = get(slice, "primary.point_fact_1");
    const point_fact_2 = get(slice, "primary.point_fact_2");
    const point_fact_3 = get(slice, "primary.point_fact_3");
    const point_link_1 =
        handlePrismicLink(
            props,
            get(slice, "primary.point_fact_link_1")
        );
    const point_link_2 =
        handlePrismicLink(
            props,
            get(slice, "primary.point_fact_link_2")
        );
    const point_link_3 =
        handlePrismicLink(
            props,
            get(slice, "primary.point_fact_link_3")
        );
    const point_blurb_1 = get(slice, "primary.point_blurb_1");
    const point_blurb_2 = get(slice, "primary.point_blurb_2");
    const point_blurb_3 = get(slice, "primary.point_blurb_3");
    const pageType = get(props, 'page.type');

    return (
        <CardsPointsOfInterestDetailView {...props}>
            <title>{title}</title>
            <text-blurb>{text_blurb}</text-blurb>
            <point-image-1 {...image1} className={`
                ${styles.bgImage}
                ${pageType === 'region' ? 'region' : ''}
            `}>
                <point-tag-1>{point_tag_1}</point-tag-1>
            </point-image-1>
            <point-title-1>{point_title_1}</point-title-1>
            <point-fact-1
                {...point_link_1}
                className={point_link_1.href ? styles.hasLink : null}
            >
                {point_fact_1}
            </point-fact-1>
            <point-blurb-1>{point_blurb_1}</point-blurb-1>

            <point-image-2 {...image2} className={`
                ${styles.bgImage}
                ${pageType === 'region' ? 'region' : ''}
            `}>
                <point-tag-2>{point_tag_2}</point-tag-2>
            </point-image-2>
            <point-title-2>{point_title_2}</point-title-2>
            <point-fact-2
                {...point_link_2}
                className={point_link_2.href ? styles.hasLink : null}
            >
                {point_fact_2}
            </point-fact-2>
            <point-blurb-2>{point_blurb_2}</point-blurb-2>

            <point-image-3 {...image3} className={`
                ${styles.bgImage}
                ${pageType === 'region' ? 'region' : ''}
            `}>
                <point-tag-3>{point_tag_3}</point-tag-3>
            </point-image-3>
            <point-title-3>{point_title_3}</point-title-3>
            <point-fact-3
                {...point_link_3}
                className={point_link_3.href ? styles.hasLink : null}
            >
                {point_fact_3}
            </point-fact-3>
            <point-blurb-3>{point_blurb_3}</point-blurb-3>
        </CardsPointsOfInterestDetailView>
    );
});
