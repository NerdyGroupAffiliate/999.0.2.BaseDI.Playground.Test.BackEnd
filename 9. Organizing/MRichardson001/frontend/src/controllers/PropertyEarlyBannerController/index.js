import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import PropertyEarlyBannerView from "../../components/PropertyEarlyBannerView";
import MultiLineString from "../../helpers/mutli-line-string";
import styles from './styles.module.css';
import './index.css'
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import { personaColorStyle } from "../../helpers/property/persona";
import TextWritter from "../../helpers/text-writter";

function PropertyEarlyBanner(props) {
    const address = get(props, "property.data.address");
    const textBlurb = get(props, "page.about_blurb", []);
    const propertyName = get(props, "page.name");
    const image = BackgroundImageHandler(get(props, "property.data.primary_property_image"));
    const region = get(props, "appdata.regions", []).find(
        rg => rg.uid === props.parentRegion.uid
    );
    const subregionUid = (props.page["sub-regions"] || []).length
        ? (props.page["sub-regions"] || [])[0]["sub-region"].uid
        : null;
    const subregion = subregionUid
        ? get(props, "appdata.subregions", []).find(sr => sr.uid === subregionUid)
        : null;

    const property = get(props, 'property') || get(props, 'page.data');

    let subRegionBreadCrumb;
    const referralPage = get(props, "referralPage");
    if (!!referralPage && referralPage.type === "sub-region" && referralPage.data.region.uid === region.uid) {
      subRegionBreadCrumb = referralPage;
    } else if (!!referralPage && referralPage.type !== "sub-region"){
      subRegionBreadCrumb = null
    } else {
      subRegionBreadCrumb = subregion
    }
    const breadcrumbs = [
        { label: "AMLI Home", value: "/" },
        region ? { label: region.data.name, value: `/apartments/${region.uid}` } : null,
        subRegionBreadCrumb
            ? {
              label: subRegionBreadCrumb.data.name,
              value: `/apartments/${get(subRegionBreadCrumb, "data.region.uid")}/${subRegionBreadCrumb.uid}-apartments`
             }
            : null ,
        {
            label: `${propertyName} Apartments`,
            value: props.location.pathname
        }
        ].filter(item => !!item && !!item.label);
    return (
        <PropertyEarlyBannerView {...props}>
            <container {...image} className={styles.container}>
                <title style={personaColorStyle(property)}>
                    {subregion ? (
                        <p className={styles.subtitle}
                           style={personaColorStyle(property, 'secondary')}>{subregion.data.name} apartments</p>
                    ) : null}
                    <p style={personaColorStyle(property)}>{MultiLineString(address)}</p>
                </title>
                <body>{textBlurb.map(item => TextWritter(item))}</body>
                <breadcrumbs className={styles.breadcrumbs}>
                    {breadcrumbs
                        .filter(itm => !!itm.label)
                        .map((item, index) => (
                        <span
                            key={`link_${index}`}
                            className={styles.crunchContainer}
                        >
                            {index !== 0 && (
                            <div className="af-class-breadcrumb-divider" />
                            )}
                            <a
                            href={item.value}
                            onClick={e => {
                                if (!!e && !!e.preventDefault) {
                                e.preventDefault();
                                }
                                props.history.push(item.value);
                            }}
                            className="af-class-phase-2-breadcrumb-link"
                            >
                            {item.label}
                            </a>
                        </span>
                        ))}
                </breadcrumbs>
            </container>
        </PropertyEarlyBannerView>
    );
}

export default withRouter(PropertyEarlyBanner);
