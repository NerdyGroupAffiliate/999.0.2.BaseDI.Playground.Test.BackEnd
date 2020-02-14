import React, { Component } from "react";

import { GoogleMap, InfoWindow, OverlayView, LoadScriptNext } from "@react-google-maps/api";
import ReactDOM from "react-dom";
import { get, sortBy, throttle } from "lodash";
import uniqBy from "lodash/uniqBy";
import { withRouter } from "react-router-dom";
import config from "../../config";
import mapStyles from "./mapStyles";
import MapRetailProperty from "../MapRetailPropertyController";
import downArrow from "../../assets/images/down-arrow.png";
import styles from "./styles.module.css";
import "./index.css";
import "./styles.css";

// TODO: MapRetailController can extends MapPortfolioController or create abstract base class
class MapRetailController extends Component {
  state = {
    selectedLocation: null,
    selectedLocationIdx: null,
    width: null
  };

  mapInstance = null;
  markersRef = [];
  markers = [];
  regions = [];

  componentDidMount = () => {
    this.parentNode = ReactDOM.findDOMNode(this).parentNode;
    this.regions = sortBy(get(this.props, "slice.items", []), [
      "region.uid"
    ]).map(reg => reg.region.uid).filter(rg => !!rg);
    // this.mapInstance = this.mapNode.context[MAP];
    //   .map(this.getRegion)
    //   .filter((reg) => !!reg);

    this.markers = this.regions.map(regUid => {
      const region = this.props.appdata.regions.find(reg => reg.uid === regUid);
      if (!region) {
        return null;
      }
      let sqft = 0;
      (
        this.getProperties(
          this.props.appdata.regions.find(
            rg => rg.uid === regUid
          )
        ) || []
      ).forEach(prop => (sqft += prop.data.retail_space_sqft));
      return {
        position: { lat: region.data.latitude, lng: region.data.longitude },
        region_uid: region.uid,
        data: region.data,
        sqft: sqft
      };
    }).filter(reg => !!reg && reg.sqft !== 0);

    this.throttledMeasure = throttle(this.measure, 16);
    if (!this.sizeListener && !!window) {
      this.sizeListener = window.addEventListener(
        "resize",
        this.throttledMeasure
      );
    }
    this.measure();

    if (this.regions.length > 0 && this.state.width > 479) {
      this.handleMarkerClick(this.regions[0].uid, 0);
    }

    setTimeout(() => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) =>
          this.handleLocation(latitude, longitude),
        () => this.handleLocation(39.8333333, -98.585522) // Default USA center
      );
    }, 1000);
  };

  componentWillUnmount() {
    window.removeEventListener("resize");
    this.sizeListener = undefined;
  }

  measure = () => {
    const currentWidth = this.state.width;

    if (this.parentNode) {
      const { width } = this.parentNode.getBoundingClientRect();

      if (currentWidth > 479 && width <= 479) {
        this.setState({
          selectedLocation: null,
          selectedLocationIdx: null
        });
      } else if (
        currentWidth < 479 &&
        width >= 479 &&
        !this.state.selectedLocationIdx
      ) {
        this.handleMarkerClick(this.regions[0].uid || this.regions[0], 0);
      }
      this.setState({ width: width });
    }
  };

  handleLocation = (lat, lng) => {
    const { google } = window;
    if (!google) {
      return;
    }
    // Default USA center
    const position = new google.maps.LatLng(lat, lng);

    if (this.markers.length > 0) {
      const nearestMarker = this.markers.reduce((prev, curr) => {
        const currentLatLng = new google.maps.LatLng(
          curr.position.lat,
          curr.position.lng
        );

        const cpos = google.maps.geometry.spherical.computeDistanceBetween(
          position,
          currentLatLng
        );

        const prevLatLng = new google.maps.LatLng(
          prev.position.lat,
          prev.position.lng
        );

        const ppos = google.maps.geometry.spherical.computeDistanceBetween(
          position,
          prevLatLng
        );

        return cpos < ppos ? curr : prev;
      });

      const nearestMarkerIdx = this.markers.indexOf(nearestMarker);

      if (nearestMarkerIdx > -1 && this.state.width > 479) {
        this.handleMarkerClick(nearestMarker.region_uid, nearestMarkerIdx);
      }
    }
  };

  handleMobileButtonClick = (regionuid, idx) => {
    if (
      idx === this.state.selectedLocationIdx &&
      regionuid === this.state.selectedLocation.uid
    ) {
      this.setState({
        selectedLocation: null,
        selectedLocationIdx: null
      });
    } else {
      this.setState({
        selectedLocationIdx: idx,
        selectedLocation: this.props.appdata.regions.find(
          reg => reg.uid === regionuid
        )
      }, function() {
        document.querySelector(`.mobile-region-${idx}`).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    }

  };

  handleMarkerClick = (regionuid, idx) => {
    this.setState({
      selectedLocationIdx: idx,
      selectedLocation: this.props.appdata.regions.find(
        reg => reg.uid === regionuid
      )
    });
  };

  onMapMounted = ref => {
    this.mapInstance = ref;
  };

  onMarkerMounted = (ref, idx) => {
    this.markersRef[idx] = ref;
  };

  getRegion = ({ region }) => {
    const regions = get(this.props, "appdata.regions", []);
    return regions.find(reg => reg.uid === region.uid);
  };

  getSubregion = subregion =>
    (this.props.appdata.subregions || []).find(sr => sr.uid === subregion.uid);

  getPropertiesSR = (subregions = []) =>
    uniqBy(
      (this.props.appdata.properties || [])
        .map(pr =>
          pr.data["sub-regions"].findIndex(sr =>
            subregions.includes(sr["sub-region"].uid)
          ) > -1
            ? pr
            : null
        )
        .filter(pr => !!pr),
      "uid"
    );

  getProperties = location => {
    if (!location || !location.data) {
      return [];
    }
    const subregions = location.data["sub-regions"]
      .map(sr => sr["sub-region"].uid)
      .filter(sr => !!sr);

    return this.getPropertiesSR(subregions);
  };

  render() {
    const { selectedLocationIdx, selectedLocation, width = {} } = this.state;
    const title = get(this.props, "slice.primary.title");
    const subtitle = get(this.props, "slice.primary.subtitle");
    const text_blurb = get(this.props, "slice.primary.text_blurb");

    const selectedLocationName = get(
      selectedLocation,
      "data.name",
      "Austin, TX"
    );

    const selectedLocationDescription = get(
      get(this.props, "slice.items", []).find(item => {
        return (
          !!item &&
          !!item.region &&
          !!item.region.uid &&
          !!selectedLocation &&
          !!selectedLocation.uid &&
          item.region.uid === selectedLocation.uid
        );
      }),
      "text_blurb"
    );
    const properties = this.getProperties(selectedLocation);

    let zoom = 4;
    width < 1000 ? zoom = 3 : zoom = 4;

    return (
      <div className={styles.wrapper}>
        <div className={styles.mapWrapper}>
          <MapWrapper zoom={zoom}>
            {this.markers.map((marker, idx) => {
              let sqft = 0;
              (
                this.getProperties(
                  this.props.appdata.regions.find(
                    rg => rg.uid === marker.region_uid
                  )
                ) || []
              ).forEach(prop => (sqft += prop.data.retail_space_sqft));
              return (
                <OverlayView
                  onLoad={ref => this.onMarkerMounted(ref, idx)}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  position={marker.position}
                  key={`marker_${idx}`}
                  options={{
                    labelAnchor: { x: 0, y: 0 }
                  }}
                >
                  <div
                     onClick={() => this.handleMarkerClick(marker.region_uid, idx)}
                  >
                    <div
                      className={`map-retail-marker ${
                          selectedLocationIdx === idx ? "selected" : ""
                        }`}
                      onClick={() => this.handleMarkerClick(marker.region_uid, idx)}
                    >
                      <div
                        tabIndex={0}
                        role="link"
                        className={styles.marker}
                        onKeyDown={e =>
                          e.keyCode === 13 &&
                          this.handleMarkerClick(marker.region_uid, idx)
                        }
                        onClick={() => this.handleMarkerClick(marker.region_uid, idx)}
                      />
                    </div>
                    <InfoWindow position={marker.position} zIndex={1}>
                      <a
                        className={styles.window}
                        href={`#${marker.region_uid}`}
                        onClick={e => {
                          if (e) {
                            e.preventDefault();
                          }
                          this.handleMarkerClick(marker.region_uid, idx);
                        }}
                      >
                        <div className={styles.name}>{marker.data.name}</div>
                        <div>
                          <span className={styles.sqft}>{sqft ? sqft.toLocaleString() : ''}</span>
                          <span className={styles.unitLabel}>sqft</span>
                        </div>
                      </a>
                    </InfoWindow>
                  </div>
                </OverlayView>
              );
            })}
          </MapWrapper>

          <div className={styles.introduction}>
            <h2 className={styles.slogan}>{subtitle}</h2>
            <div className={styles.title}>{title}</div>

            <p className={styles.description}>{text_blurb}</p>
          </div>
        </div>

        {width < 479 ? (
          this.markers.map((region, idx) => {
            let sqft = 0;
            (
              this.getProperties(
                this.props.appdata.regions.find(
                  rg => rg.uid === region.region_uid
                )
              ) || []
            ).forEach(prop => (sqft += prop.data.retail_space_sqft));
            return (
              <div key={idx} className={styles.mobileWrapper}>
                <div
                  onClick={() =>
                      this.handleMobileButtonClick(region.region_uid, idx)
                  }
                  className={`${styles.mobileRegionButton} ${
                    selectedLocationIdx === idx
                      ? "mobile-region-button-selected"
                      : ""
                  } mobile-region-${idx}`}

                >
                  <p className={styles.mobileRegionName}>{region.data.name}</p>
                  <p className={styles.mobileRegionSqft}>
                    {sqft ? sqft.toLocaleString() : ''} <span>sqft</span>
                  </p>
                  <img
                    src={downArrow}
                    alt="down arrow"
                    className={styles.mobileRegionArrow}
                  />
                </div>
                <div
                  className={`${styles.location} ${
                    selectedLocationIdx === idx
                      ? "mobile-region-location-selected"
                      : ""
                  }`}
                >
                  <div className={styles.locationInnerContainer}>
                    <p className={styles.locationDescription}>
                      {selectedLocationDescription}
                    </p>
                    <p className={styles.locationPartner}>
                      Want to be a partner?{" "}
                      <a
                        className={styles.locationPartnerLink}
                        href="/contact?topic=retail"
                        onClick={e => {
                          if (e && e.preventDefault) {
                            e.preventDefault();
                          }
                          this.props.history.push({
                            pathname: "/contact",
                            search: "?topic=retail"
                          });
                        }}
                      >
                        Contact us >
                      </a>
                    </p>
                    <div className={styles.locationWrapper}>
                      {properties.filter(item => item.data.retail_space_sqft).map(property => (
                        <MapRetailProperty
                          {...this.props}
                          property={property}
                          key={`property_${property.uid}`}
                        />
                      ))}
                    </div>
                    <p className={styles.finePrint}>
                      {" "}
                      Swipe to view all retail opportunities in the region.
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className={styles.location}>
            <div className={styles.locationInnerContainer}>
              <h2 className={styles.locationName}>{selectedLocationName}</h2>
              <p className={styles.locationDescription}>
                {selectedLocationDescription}
              </p>
              <p className={styles.locationPartner}>
                Want to be a partner?{" "}
                <a
                  className={styles.locationPartnerLink}
                  href="/contact?topic=retail"
                  onClick={e => {
                    if (e && e.preventDefault) {
                      e.preventDefault();
                    }
                    this.props.history.push({
                      pathname: "/contact",
                      search: "?topic=retail"
                    });
                  }}
                >
                  Contact us >
                </a>
              </p>
              <div className={styles.locationWrapper}>
                {properties.filter(item => item.data.retail_space_sqft).map(property => (
                  <MapRetailProperty
                    {...this.props}
                    property={property}
                    key={`property_${property.uid}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const Map = props => <GoogleMap mapContainerStyle={{height: '100%'}} {...props} />;

const MapWrapper = props => (
  <LoadScriptNext
    id="script-loader"
    loadingElement={
      <div style={{ height: "700px", width: "100%"}} />
    }
    googleMapsApiKey={config.GOOGLE_MAPS_API_KEY}
    libraries={config.GOOGLE_MAPS_LIBRARIES}
  >
    <Map
      {...props}
      options={{
        disableDefaultUI: true,
        scrollwheel: false,
        styles: mapStyles
      }}
      center={{ lat: 39.8333333, lng: -98.585522 }}
      mapContainerClass={styles.mapContainer}
    />
  </LoadScriptNext>
);

export default withRouter(MapRetailController);
