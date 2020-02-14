import React from 'react';
import get from 'lodash/get';
import { withRouter } from "react-router-dom";
import ContentImageBlurbCtaView from '../../components/ContentImageBlurbCtaView';
import { handlePrismicLink } from "../../helpers/link-helper";
import styles from './styles.module.css';

export default withRouter((props) => {
    const { data } = props;
    const linkData = get(data, 'primary.cta_link1');
    const imageUrl = get(data, 'primary.image.url');
    const subtitle = get(data, 'primary.subtitle');
    const textBlurb = get(data, 'primary.text_blurb');
    const ctaText = get(data, 'primary.cta_text1');
    const link = handlePrismicLink(props, linkData);
    return (
        <ContentImageBlurbCtaView>
            <image
                className={styles.imageContainer}
                style={
                    imageUrl
                        ? { backgroundImage: `url(${data.primary.image.url})` }
                        : null
                }
            >
                <home-careers-container className={styles.homeCareersContainer}>
                    <subtitle className={styles.subtitle}>{subtitle}</subtitle>
                    <text-blurb className={styles.textBlurb}>{textBlurb}</text-blurb>

                    <link-url className={styles.button} {...link}>
                        <link-text className={styles.buttonText}>{ctaText}</link-text>
                        <link-arrow className={styles.buttonArrow} alt="" />
                    </link-url>
                </home-careers-container>
            </image>
        </ContentImageBlurbCtaView>
    );
});
