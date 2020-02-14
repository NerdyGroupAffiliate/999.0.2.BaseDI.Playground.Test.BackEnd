import React from 'react';
import get from "lodash/get";
import ContentCollagePointOfInterestView from '../../components/ContentCollagePointOfInterestView';
import BackgroundImageHandler from '../../helpers/components-data-handlers/background-image-handler';
import MultiLineString from "../../helpers/mutli-line-string";
import styles from './styles.module.css';
import './index.css';

export default props => {

    const subtitle_1 = get(props, "data.primary.subtitle_1");
    const subtitle_2 = get(props, "data.primary.subtitle_2");
    const text_blurb_1 = get(props, "data.primary.text_blurb_1");
    const text_blurb_2 = get(props, "data.primary.text_blurb_2");
    const image_1 = get(props, "data.primary.image_1");
    const image_2 = get(props, "data.primary.image_2");
    const imageOneProps = BackgroundImageHandler(image_1)
    const imageTwoProps = BackgroundImageHandler(image_2);
    
    return (
        
        <ContentCollagePointOfInterestView>
           
            <subtitle-1>{subtitle_1}</subtitle-1>

            <text-blurb-1>{MultiLineString(text_blurb_1)}</text-blurb-1>
            <image-1 className={styles.image1} {...imageOneProps}></image-1>
            <image-2 className={styles.image2}{...imageTwoProps}></image-2>
            <subtitle-2>{subtitle_2}</subtitle-2>
            <text-blurb-2>{text_blurb_2}</text-blurb-2>

        </ContentCollagePointOfInterestView>
    );
}

