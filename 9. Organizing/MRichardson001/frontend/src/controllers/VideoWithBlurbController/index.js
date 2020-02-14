import React from "react";
import ReactPlayer from 'react-player';
import get from "lodash/get";
import VideoWithBlurbView from "../../components/VideoWithBlurbView";
import './index.css';
import styles from './styles.module.css';

export default props => {
    const { slice } = props;
    const title = get(slice, "primary.title");
    const text_blurb = get(slice, "primary.text_blurb");
    const video_url = get(slice, "primary.video_url.url");

    return (
        <VideoWithBlurbView>
            <title className={styles.title}>{title}</title>
            <text-blurb className={styles.text_blurb}>{text_blurb}</text-blurb>
            <i-frame-video>
                <ReactPlayer 
                    controls={true} 
                    url={video_url} 
                    width='100%' 
                    height='100%'
                />
            </i-frame-video>
        </VideoWithBlurbView>
    );
};