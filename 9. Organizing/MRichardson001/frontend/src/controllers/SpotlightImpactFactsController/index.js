import React from "react";
import get from "lodash/get";
import SpotlightImpactFactsView from "../../components/SpotlightImpactFactsView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import './index.css';

export default props => {
    const title = get(props, "data.primary.title");
    const subtitle = get(props, "data.primary.subtitle");
    const fact_1 = get(props, "data.primary.fact_1_title");
    const fact_2 = get(props, "data.primary.fact_2_title");
    const fact_3 = get(props, "data.primary.fact_3_title");
    const fact_4 = get(props, "data.primary.fact_4_title");
    const fact_blurb_1 = get(props, "data.primary.fact_blurb_1");
    const fact_blurb_2 = get(props, "data.primary.fact_blurb_2");
    const fact_blurb_3 = get(props, "data.primary.fact_blurb_3");
    const fact_blurb_4 = get(props, "data.primary.fact_blurb_4");

    const image = get(props, "data.primary.image");

    const imageProps = BackgroundImageHandler(image);
    const image_background = {
        style: {
            width: "100%",
            backgroundSize: "cover",
            ...imageProps.style
        }
    };

    return (
        <SpotlightImpactFactsView>
            <wrapper {...image_background}>
                <subtitle>{subtitle}</subtitle>
                <title>{title}</title>

                <factoid-list-wrapper>
                    { fact_1 ?
                    <div className="af-class-div-block-367">
                        { fact_1 ?
                            <div className="af-class-text-block-106">{fact_1}</div>
                        : null }
                        { fact_blurb_1 ?
                            <div className={ fact_1 ? 'af-class-text-block-107' : 'af-class-impact-factiod-statement'}>{fact_blurb_1}</div>
                        : null }
                    </div>
                    : null }

                    { fact_2 ?
                    <div className="af-class-div-block-367">
                        { fact_2 ?
                            <div className="af-class-text-block-106">{fact_2}</div>
                        : null }
                        { fact_blurb_2 ?
                            <div className={ fact_2 ? 'af-class-text-block-107' : 'af-class-impact-factiod-statement'}>{fact_blurb_2}</div>
                        : null }
                    </div>
                    : null }

                    { fact_3 ?
                    <div className="af-class-div-block-367">
                        { fact_3 ?
                            <div className="af-class-text-block-106">{fact_3}</div>
                        : null }
                        { fact_blurb_3 ?
                            <div className={ fact_3 ? 'af-class-text-block-107' : 'af-class-impact-factiod-statement'}>{fact_blurb_3}</div>
                        : null }
                    </div>
                    : null }

                    { fact_4 ?
                    <div className="af-class-div-block-367">
                        { fact_4 ?
                            <div className="af-class-text-block-106">{fact_4}</div>
                        : null }
                        { fact_blurb_4 ?
                            <div className={ fact_4 ? 'af-class-text-block-107' : 'af-class-impact-factiod-statement'}>{fact_blurb_4}</div>
                        : null }
                    </div>
                    : null }


                </factoid-list-wrapper>
            </wrapper>
        </SpotlightImpactFactsView>
    );
};
