import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import ContentRetailShowcaseView from "../../components/ContentRetailShowcaseView";
import styles from './styles.module.css';
import "./index.css";
import { personaBackgroundColorStyle } from "../../helpers/property/persona";
import TextWritter from "../../helpers/text-writter";


export default withRouter(props => {
    const { data } = props;
    const image = BackgroundImageHandler(get(data, "primary.image"));
    const subtitle = get(data, "primary.subtitle");
    const title = get(data, "primary.title");
    const retailName1 = get(data, "primary.retail_name_1");
    const retailName2 = get(data, "primary.retail_name_2");
    const retailName3 = get(data, "primary.retail_name_3");
    const retailName4 = get(data, "primary.retail_name_4");
    const retailDesc1 = get(data, "primary.retail_description_1", []);
    const retailDesc2 = get(data, "primary.retail_description_2", []);
    const retailDesc3 = get(data, "primary.retail_description_3", []);
    const retailDesc4 = get(data, "primary.retail_description_4", []);
    const retailLogo1 = get(data, "primary.retail_logo_1.url");
    const retailLogo2 = get(data, "primary.retail_logo_2.url");
    const retailLogo3 = get(data, "primary.retail_logo_3.url");
    const retailLogo4 = get(data, "primary.retail_logo_4.url");
    const uid = get(props, "page.uid");
    const property = get(props, 'property') || get(props, 'page.data');
    const partnersTitle = get(data, "primary.retail_partners_title") || "You're In Good Company";

    return (
        <ContentRetailShowcaseView>
            <image {...image} className={styles.backgroundImage}>
                <title-container style={personaBackgroundColorStyle(property)}>
                    <subtitle>{subtitle}</subtitle>
                    <title>{title}</title>
                </title-container>
                <body-container style={personaBackgroundColorStyle(property)}>
                    <retail-items-wrapper>
                        {
                            retailName1 && retailDesc1
                                ?   <div className="af-class-p1-retail-item af-class-no-top-padding">
                                        <div className="af-class-text-block-103">
                                            {retailName1}
                                        </div>
                                        <div className="af-class-p1-retail-item-description rich-text-item-wrapper">
                                            {
                                                // We are checking the type because these fields
                                                // were originally a string and now they are rich text
                                                typeof retailDesc1 !== "string"
                                                    ? retailDesc1.map(item => TextWritter(item))
                                                    : retailDesc1
                                            }
                                        </div>
                                    </div>
                            : null
                        }
                        {
                            retailName2 && retailDesc2
                                ?   <div className="af-class-p1-retail-item af-class-no-top-padding">
                                        <div className="af-class-text-block-103">
                                            {retailName2}
                                        </div>
                                        <div className="af-class-p1-retail-item-description rich-text-item-wrapper">
                                            {
                                                // We are checking the type because these fields
                                                // were originally a string and now they are rich text
                                                typeof retailDesc2 !== "string"
                                                    ? retailDesc2.map(item => TextWritter(item))
                                                    : retailDesc2
                                            }
                                        </div>
                                    </div>
                            : null
                        }
                        {
                            retailName3 && retailDesc3
                                ?   <div className="af-class-p1-retail-item">
                                        <div className="af-class-text-block-103">
                                            {retailName3}
                                        </div>
                                        <div className="af-class-p1-retail-item-description rich-text-item-wrapper">
                                            {
                                                // We are checking the type because these fields
                                                // were originally a string and now they are rich text
                                                typeof retailDesc3 !== "string"
                                                    ? retailDesc3.map(item => TextWritter(item))
                                                    : retailDesc3
                                            }
                                        </div>
                                    </div>
                            : null
                        }
                        {
                            retailName4 && retailDesc4
                                ?   <div className="af-class-p1-retail-item">
                                        <div className="af-class-text-block-103">
                                            {retailName4}
                                        </div>
                                        <div className="af-class-p1-retail-item-description rich-text-item-wrapper">
                                            {
                                                // We are checking the type because these fields
                                                // were originally a string and now they are rich text
                                                typeof retailDesc4 !== "string"
                                                    ?  retailDesc4.map(item => TextWritter(item))
                                                    : retailDesc4
                                            }
                                        </div>
                                    </div>
                            : null
                        }
                    </retail-items-wrapper>
                </body-container>
                <row-container style={personaBackgroundColorStyle(property)}>
                    <link-url
                        href={`/contact?topic=retail&propertyUid=${uid}&propertyName=${property.name}&residentOption=interested`}
                        onClick={e => {
                            if (e && e.preventDefault) {
                                e.preventDefault();
                            }
                            props.history.push({
                                pathname: "/contact",
                                search: `?topic=retail&propertyUid=${uid}&propertyName=${property.name}&residentOption=interested`
                            });
                        }}
                    />
                </row-container>
                {
                    retailLogo1 || retailLogo2 || retailLogo3 || retailLogo4
                        ?   <partners-container style={personaBackgroundColorStyle(property)}>
                                <logo-list-title>{partnersTitle}</logo-list-title>
                                <retail-logo-list>
                                    {
                                        retailLogo1
                                            ?   <div className="af-class-logo-holder">
                                                    <img
                                                        className="retail-showcase-logo"
                                                        src={retailLogo1}
                                                        alt="Retail Logo"
                                                    />
                                                </div>
                                            : null
                                    }
                                    {
                                        retailLogo2
                                            ?   <div className="af-class-logo-holder">
                                                    <img
                                                        className="retail-showcase-logo"
                                                        src={retailLogo2}
                                                        alt="Retail Logo"
                                                    />
                                                </div>
                                            : null
                                    }
                                    {
                                        retailLogo3
                                            ?   <div className="af-class-logo-holder">
                                                    <img
                                                        className="retail-showcase-logo"
                                                        src={retailLogo3}
                                                        alt="Retail Logo"
                                                    />
                                                </div>
                                            : null
                                    }
                                    {
                                        retailLogo4
                                            ?   <div className="af-class-logo-holder">
                                                    <img
                                                        className="retail-showcase-logo"
                                                        src={retailLogo4}
                                                        alt="Retail Logo"
                                                    />
                                                </div>
                                            : null
                                    }
                                </retail-logo-list>
                            </partners-container>
                        : null
                }
            </image>
        </ContentRetailShowcaseView>
    );
});
