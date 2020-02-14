import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import ContentWithFactView from "../../components/ContentWithFactView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import styles from './styles.module.css';
import HighlightWords from "../../helpers/highlight-words";
import TextWritter from "../../helpers/text-writter";
import { handlePrismicLink } from "../../helpers/link-helper";
import './index.css'

export default withRouter(props => {
    const image = get(props, "slice.primary.image");
    const imageProps = BackgroundImageHandler(image);
    const titleValue = get(props, "slice.primary.title", "");
    const titleHighlighedWord = get(props, "slice.primary.title_highlight_word", "");
    const title = HighlightWords(
        titleValue || "Greener.",
        titleHighlighedWord,
        "green"
    );
    const body = get(props, "slice.primary.body1", []).map(bd => TextWritter(bd));
    const fact = get(props, "slice.primary.fact", "");
    const link_text = get(props, "slice.primary.link_text", "");
    const linkData = handlePrismicLink(props, get(props, "slice.primary.link_url"));
    return (
        <ContentWithFactView>
            <image {...imageProps} />
            <title className={styles.title}>{title}</title>
            <body>
            <span>{body}</span>
            </body>
            <fact>{<div className={styles.section_tagline}>{fact}</div>}</fact>
            <link-url {...linkData} className={styles.button}>
                <link-text className={styles.buttonText}>{link_text}</link-text>
                <link-arrow className={styles.buttonArrow} alt="" />
            </link-url>
        </ContentWithFactView>
    );
});
