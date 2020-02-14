import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import PropertyPreLeaseView from "../../components/PropertyPreLeaseView";
import MultiLineString from "../../helpers/mutli-line-string";
import CapitalizeFirsts from "../../helpers/capitalize-first-letter";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import styles from './styles.module.css';
import "./index.css";
import { personaColorStyle } from "../../helpers/property/persona";
import TextWritter from "../../helpers/text-writter";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Instagram from "../../assets/icons/instagram.png";

export default withRouter(props => {
    const name = get(props, "page.name");
    const number = get(props, "page.phone");
    const about = get(props, "page.about_blurb", []);
    const address = get(props, "page.address");
    const devDate = get(props, "page.development_start_date");
    const preLeaseDate = get(props, "page.pre-lease_start_date");
    const moveInDate = get(props, "page.move_in_date");
    const regionUrl = get(props, "parentRegion.uid");
    const regionName = CapitalizeFirsts(get(props, "parentRegion.slug"));
    const subregionUrl = get(props, "page.sub-regions[0].sub-region.slug");
    const subregionName = CapitalizeFirsts(get(props, "page.sub-regions[0].sub-region.uid"));
    const backgroundImage = BackgroundImageHandler(get(props, "page.primary_property_image"));
    const property = get(props, 'property') || get(props, 'page.data');
    const social = get(property, "data.social" || []);
    const region = {
        name: regionName,
        uid: regionUrl
    };
    const subregion = {
        uid: subregionUrl,
        data: {
            name: subregionName,
            region: {
                uid: regionUrl
            }
        }
    };

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
        { label: "AMLI Home", value: "" },
        region ? { label: region.name, value: `/apartments/${region.uid}` } : null,
        subRegionBreadCrumb
            ? {
              label: subRegionBreadCrumb.data.name,
              value: `/apartments/${get(subRegionBreadCrumb, "data.region.uid")}/${subRegionBreadCrumb.uid}-apartments`
             }
            : null ,
        {
            label: `${name} Apartments`,
            value: props.location.pathname.replace(`/${props.route}`, "")
        }
        ].filter(item => !!item && !!item.label);

    return (
        <PropertyPreLeaseView>
            <background-image
                {...backgroundImage}
                topelement={() =>
                    <div
                    {...backgroundImage}
                    className={styles.mobileHeaderImage}
                    />
                }
            >
                <property-name style={personaColorStyle(property)}>{name}</property-name>
                <address className={styles.address}>{MultiLineString(address)}</address>
                <phone-number className={styles.phoneNumber}>
                    {number ? number : null}
                    <wrapper className={social.length > 0 ? styles.socialWrapper : styles.displayNone}>
                    {social.length > 0 ?
                    social.map((item, index) => (
                        <a
                            href={item.url.url}
                            key={`social-network-${index}`}
                            className={styles.container}
                            tabIndex={0}
                            onKeyDown={e =>{
                                if (e && e.preventDefault){
                                    e.preventDefault();
                                }
                                e.keyCode === 13 && window && item.url && item.url.url && window.open(item.url.url);
                            }}
                            onClick={e =>{
                                if (e && e.preventDefault){
                                    e.preventDefault();
                                }
                                window && item.url && item.url.url && window.open(item.url.url);
                            }}
                        >
                            {item.network === "Facebook"
                            ? <img alt={`${item.network} Icon`} src={Facebook}></img>
                            : null}
                            {item.network === "Twitter"
                            ? <img alt={`${item.network} Icon`} src={Twitter}></img>
                            : null}
                            {item.network === "Instagram"
                            ? <img alt={`${item.network} Icon`} src={Instagram}></img>
                            : null}
                        </a>
                        ))
                    : null }
                    </wrapper>
                </phone-number>
                <about>{about.map(item => TextWritter(item))}</about>
                {devDate && <dev-start-date className={styles.singleline}>Started {devDate}</dev-start-date>}
                {preLeaseDate && <prelease-start-date className={styles.singleline}>Starts {preLeaseDate}</prelease-start-date>}
                {moveInDate && <opening-date className={styles.singleline}>Starts {moveInDate}</opening-date>}
                <progress-bar className={styles.progressBar}></progress-bar>
                <breadcrumb-container className={styles.breadCrumbContainer}>
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
                </breadcrumb-container>
            </background-image>
        </PropertyPreLeaseView>
    );
});
