import React from "react";
import get from "lodash/get";

import { GoogleMap, LoadScriptNext } from "@react-google-maps/api";
import config from "../../config";
import PropertyContactMapView from "../../components/PropertyContactMapView";
import PropertyContactMapItemView from "../../components/PropertyContactMapItemView";
import PropertyContactMapScheduleItemView from "../../components/PropertyContactMapScheduleItemView";
import { withRouter } from "react-router-dom";
import MultiLineString from "../../helpers/mutli-line-string";
import styles from "./styles.module.css";
import "./index.css";
import { mapOptions } from "./constants";
import {
  personaBackgroundColorStyle,
  personaColorStyle
} from "../../helpers/property/persona";
import usePhone from "../../helpers/hooks/usePhone";
import CustomOverlayView from "../../helpers/custom-overlay";
import Helmet from "react-helmet-async";

function PropertyContactMapRaw(props) {
  const [dniPhone, hrefPhone] = usePhone(
    get(props, "property.data.phone"),
    get(props, "property.data.entrataPropertyId"),
    props
  );

  const name = get(props, "property.data.name");
  const address = get(props, "property.data.address");
  const lat = get(props, "property.data.latitude");
  const lng = get(props, "property.data.longitude");
  const social = get(props, "property.data.social", []);
  const schedules = get(props, "property.data.schedule", []);
  const property = get(props, "property.data");

  return (
        <PropertyContactMapView>
          <container className={styles.container}>
            <map className={styles.mapContainer}>
            <LoadScriptNext
              id="script-loader"
              loadingElement={
                <div style={{ height: "600px", width: "100%"}} />
              }
              googleMapsApiKey={config.GOOGLE_MAPS_API_KEY}
              libraries={config.GOOGLE_MAPS_LIBRARIES}
            >
                <GoogleMap
                  mapContainerClassName={styles.mapElement}
                  options={mapOptions}
                  clickableIcons={false}
                  onClick={() => null}
                  defaultCenter={{ lat, lng }}
                  center={{ lat, lng }}
                  google={props.google}
                  zoom={15}
                >
                  <CustomOverlayView
                    position={{
                      lat,
                      lng
                    }}
                    mapPaneName={CustomOverlayView.OVERLAY_MOUSE_TARGET}
                  >
                    <div className={styles.clickableImage}>
                      <div className={styles.markerLabel}>{name}</div>
                      <div
                        className={styles.markerContainer}
                        style={personaBackgroundColorStyle(property)}
                      >
                        <div className={styles.markerIcon} />
                      </div>
                    </div>
                  </CustomOverlayView>
                </GoogleMap>
              </LoadScriptNext>
            </map>
            <info>
              <info-header style={personaBackgroundColorStyle(property)}>
                <subtitle>{name}</subtitle>
                <address className={styles.address}>
                  {MultiLineString(address)}
                </address>
              </info-header>
              <details>
                { schedules.length
                    ? <schedule>
                        <propertyContactMapScheduleItemViewList0>
                          {schedules.map((item, index) => (
                            <PropertyContactMapScheduleItemView.Controller
                              property={property}
                              key={`schedule-item-${index}`}
                              item={item}
                            />
                          ))}
                        </propertyContactMapScheduleItemViewList0>
                      </schedule>
                    : null
                  }
                {dniPhone ? (
                  <phone-container>
                    <phone-title style={personaColorStyle(property)}>
                      <h1 className={styles.phoneTitle}>
                        CONTACT US
                      </h1>
                    </phone-title>
                    <phone-number className={styles.phone}>
                      <a href={`tel:${dniPhone}`}>{dniPhone}</a>
                    </phone-number>
                  </phone-container>
                ) : null}
                <contact-title style={personaColorStyle(property)} />
                <contact-value
                  className={styles.contactUs}
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.keyCode !== 13) {
                      return;
                    }
                    if (e && e.preventDefault) {
                      e.preventDefault();
                    }
                    props.history.push({
                      pathname: "/contact",
                      search: `?topic=community&propertyUid=${props.property.uid}&propertyName=${property.name}`
                    });
                  }}
                  onClick={e => {
                    if (e && e.preventDefault) {
                      e.preventDefault();
                    }
                    props.history.push({
                      pathname: "/contact",
                      search: `?topic=community&propertyUid=${props.property.uid}&propertyName=${property.name}`
                    });
                  }}
                >
                  Contact Us
                  <svg
                    className={styles.buttonArrow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    viewBox="0 0 13.13 22.02"
                  >
                    <title>Arrow -- Right</title>
                    <g fill="#333333">
                      <polygon
                        points="0 19.82 2.19 22.02 13.13 11.01 2.19 0 0 2.2 8.68 11.01 0 19.82"
                        className="af-class-arrow--chevron"
                      />
                    </g>
                  </svg>
                </contact-value>
                <help-title style={personaColorStyle(property)} />
                { social.length && <follow-title style={personaColorStyle(property)} />}
                { social.length
                    ? <social>
                        <propertyContactMapItemViewList2>
                          {social.map((item, index) => (
                            <PropertyContactMapItemView.Controller
                              key={`social-network-${index}`}
                              item={item}
                            />
                          ))}
                        </propertyContactMapItemViewList2>
                      </social>
                    : null
                }
              </details>
            </info>
          </container>
        </PropertyContactMapView>
  );
}

const PropertyContactMap = props => <PropertyContactMapRaw {...props} />;
export default withRouter(props => (
  <React.Fragment>
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org/",
            "@type": "ApartmentComplex",
            "name": "${get(props, "property.data.name")}",
            "address": "${get(props, "property.data.address")}",
            "telephone":"${get(props, "property.data.phone")}",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Sunday"
                ],
                "opens": "12:00",
                "closes": "17:00"
              }
            ]
          }
        `}
      </script>
    </Helmet>
    <PropertyContactMap
      {...props}
      mapContainerClassName={styles.mapElement}
    />
  </React.Fragment>
));
