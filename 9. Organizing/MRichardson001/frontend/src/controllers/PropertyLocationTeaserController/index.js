import React, { useRef } from "react";
import { withRouter } from 'react-router-dom';
import { graphql } from "react-apollo";
import ArrowRight from "../../assets/icons/icon-arrow--long--right--dark.svg";
import { GoogleMap, LoadScriptNext } from "@react-google-maps/api";
import config from "../../config";

import get from "lodash/get";

import styles from './styles.module.css';
import './index.css';

import PropertyLocationTeaserView from "../../components/PropertyLocationTeaserView";
import CustomOverlayView from "../../helpers/custom-overlay";
import { mapOptions } from "./constants";
import { personaColorStyle } from "../../helpers/property/persona";
import { locationQuery } from "../../graphql/queries";



function PropertyLocationTeaserRaw(props) {

    const property = get(props, 'page');
    const uid = get(props, "page.uid");
    const link = `${props.location.pathname}/location`;
    const locationBool = !!get(props, "locationPageQuery.location.data")

    const lat = get(props, "page.data.latitude");
    const lng = get(props, "page.data.longitude");

    const maps = useRef(null);

    const slug = props.location.pathname.replace(`/${uid}`, "");

    return (
        <PropertyLocationTeaserView {...props} >
            <map-background
                className={styles.mapContainer}
                topelement={() =>
                        <GoogleMap
                            mapContainerClassName={styles.mapElement}
                            options={mapOptions}
                            clickableIcons={false}
                            ref={maps}
                            onClick={() => null}
                            defaultCenter={{ lat, lng }}
                            center={{ lat, lng }}
                            zoom={15}
                        >

                            {/* <Marker position={{ lat, lng }} /> */}
                            <CustomOverlayView
                                position={{ lat, lng }}
                                mapPaneName={CustomOverlayView.OVERLAY_MOUSE_TARGET}
                            >
                                <span className={styles.propertyIconContainer}>
                                <div className={styles.propertyLabel}>{property.data.name}</div>
                                <img
                                    src="/images/icon-property3x.png"
                                    alt="property"
                                    className={[styles.clickableImage, styles.propertyPin].join(" ")}
                                />
                                </span>
                            </CustomOverlayView>
                        </GoogleMap>
                }>
                <textbox-wrapper className={styles.textboxWrapper}>
                    <location style={personaColorStyle(property, 'secondary')} />
                    <tagline style={personaColorStyle(property)} />
                    <link-wrapper
                        href={locationBool ? link : slug}
                        onClick={e => {
                            if (e && e.preventDefault) {
                                e.preventDefault();
                            }
                            props.history.push(locationBool ? link : slug);
                            }}
                    >
                        <view-location
                            style={personaColorStyle(property, 'secondary')}
                            className={styles.viewLocation}
                        >
                            <div
                                style={personaColorStyle(property, 'secondary')}
                                className={styles.ViewLocationButton}
                            >
                            View Location
                            </div>
                            <img src={ArrowRight} alt="right-arrow" />
                        </view-location>
                    </link-wrapper>
                </textbox-wrapper>
            </map-background>
        </PropertyLocationTeaserView>
    );
}

const PropertyLocationTeaser = props =>


<LoadScriptNext
    id="script-loader"
    loadingElement={
        <div style={{ height: "700px", width: "100%"}} />
    }
    googleMapsApiKey={config.GOOGLE_MAPS_API_KEY}
    libraries={config.GOOGLE_MAPS_LIBRARIES}
>
<PropertyLocationTeaserRaw {...props} />
</LoadScriptNext>;

export default withRouter(
    graphql(locationQuery, {
      name: "locationPageQuery",
      skip: props =>
        !get(props, "page") &&
        !get(props, "property") &&
        !get(props, "property.property"),
      options: props => {
        const propertyId =
          get(props, "page.id") ||
          get(props, "property.id") ||
          get(props, "property.property.id");
        return {
          variables: {
            propertyPageId: propertyId
          }
        };
      }
    })(PropertyLocationTeaser));
