import React, { Component } from "react";
import { GoogleMap, OverlayView, LoadScriptNext } from "@react-google-maps/api";
import { withRouter } from "react-router-dom";
import get from "lodash/get";
import uniqBy from "lodash/uniqBy";
import config from "../../config";

import mapStyles from "./mapStyles";

import styles from "./styles.module.css";
import "./styles.css";

class MapPortfolioController extends Component {
  state = {
    selectedLocation: null,
    selectedLocationIdx: null
  };

  markersRef = [];
  markers = [];
  regions = [];

  componentDidMount = () => {
    this.regions = get(this.props, "slice.items", [])
      .map(this.getRegion)
      .filter(reg => !!reg);
    this.markers = this.regions.map(region => ({
      position: { lat: region.data.latitude, lng: region.data.longitude },
      region_uid: region.uid
    }));
    if (this.regions.length > 0) {
      this.handleMarkerClick(this.regions[0].uid, 0);
    }
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) =>
          this.handleLocation(latitude, longitude),
        () => this.handleLocation(39.8333333, -98.585522) // Default USA center
      );
    }, 3000);
  };

  handleLocation = (lat, lng) => {
    const { google } = window;

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

      if (nearestMarkerIdx > -1) {
        this.handleMarkerClick(nearestMarker.region_uid, nearestMarkerIdx);
      }
    }
  };

  handleMarkerClick = (regionuid, idx) => {
    this.setState({
      selectedLocationIdx: idx,
      selectedLocation: this.regions.find(reg => reg.uid === regionuid)
    });
  };

  onMarkerMounted = (ref, idx) => {
    this.markersRef[idx] = ref;
  };

  getRegion = ({ region }) =>
    (this.props.appdata.regions || []).find(reg => reg.uid === region.uid);

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
    if (!location) {
      return [];
    }
    const subregions = location.data["sub-regions"]
      .map(sr => sr["sub-region"].uid)
      .filter(sr => !!sr);

    return this.getPropertiesSR(subregions);
  };

  render() {
    const { selectedLocationIdx, selectedLocation = {} } = this.state;
    const title = get(this.props, "slice.primary.title");
    const subtitle = get(this.props, "slice.primary.subtitle");
    const text_blurb = get(this.props, "slice.primary.text_blurb");
    const selectedName = get(selectedLocation, "data.name");
    const selectedImage = get(
      selectedLocation,
      "data.home_page_hover_image",
      {}
    );

    const selectedRegUnits = get(
      selectedLocation,
      "data.residential_unit_count",
      0
    );
    const selectedRegProperties = this.getProperties(selectedLocation);
    let zoom = 4;
    let mapLat = 39.8333333;
    if (!!this.mapRef) {
      const { width } = this.mapRef.getBoundingClientRect();
      width < 600 ? (zoom = 3) : (zoom = 4);
      width < 600 ? (mapLat = 51.8333333) : (mapLat = 39.8333333);
    }
    return (
      <div className={styles.wrapper}>
        <div className={styles.map} ref={elem => (this.mapRef = elem)}>
          <MapWrapper
            style={{ height: 700 }}
            zoom={zoom}
            center={{ lat: mapLat, lng: -98.585522 }}
          >
            {this.markers.map((marker, idx) => (
              <OverlayView
                onLoad={ref => this.onMarkerMounted(ref, idx)}
                position={marker.position}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                options={{
                  labelAnchor: { x: 0, y: 0 }
                }}
                key={`marker_${idx}`}
              >
                <div
                  className={`pulse ${
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
                    onClick={() =>
                      this.handleMarkerClick(marker.region_uid, idx)
                    }
                  />
                </div>
              </OverlayView>
            ))}
          </MapWrapper>

          <div className={styles.introduction}>
            <h2 className={styles.slogan}>{subtitle}</h2>
            <div className={styles.title}>{title}</div>

            <p className={styles.description}>{text_blurb}</p>
          </div>
        </div>

        <div className={styles.location}>
          {selectedLocation && (
            <div className={styles.locationInnerContainer}>
              <img
                className={styles.locationImage}
                src={selectedImage.url}
                alt={selectedImage.alt || "Selected Location"}
              />

              <div className={styles.locationContentWrapper}>
                <span>
                  <div className={styles.locationName}>{selectedName}</div>

                  <div className={styles.locationCount}>
                    {selectedRegUnits ? selectedRegUnits.toLocaleString() : 0}{" "}
                    Homes
                  </div>
                </span>
                <span>
                  <div>
                    <div className={styles.locationCommunitiesCount}>
                      {(selectedRegProperties || []).length} Communities:
                    </div>

                    <div className={styles.locationCommunities}>
                      {(selectedRegProperties || [])
                        .sort((a, b) => a.data.name.localeCompare(b.data.name))
                        .map((community, index) => (
                          <div
                            className={styles.locationCommunity}
                            key={`community_${index}`}
                          >
                            {community.data.header !== "Property: Full"
                              ? `${community.data.name}*`
                              : community.data.name}
                          </div>
                        ))}
                    </div>
                    <div className={styles.disclaimer}>*Under Development</div>
                  </div>
                </span>
                <a
                  className={styles.exploreRegion}
                  href={`/apartments/${selectedLocation.uid}`}
                  onClick={e => {
                    if (e && e.preventDefault){
                      e.preventDefault();
                    }
                    this.props.history.push(`/apartments/${selectedLocation.uid}`)
                  }}
                >
                  <span className={styles.exploreArrow}>
                    <img
                      src="/images/right-arrow.svg"
                      className="af-class-boss-right-arrow"
                      alt="explore arrow"
                    />
                  </span>
                  <span className={styles.exploreLabel}>Explore Region</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const Map = props => (
  <GoogleMap mapContainerStyle={{ height: 700 }} {...props} />
);

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
        styles: mapStyles,
        draggable: false
      }}
      mapContainerClassName={styles.mapContainer}
    />
  </LoadScriptNext>
);

export default withRouter(MapPortfolioController);
