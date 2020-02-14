import React from "react";
import get from "lodash/get";
import shuffle from "lodash/shuffle";
import flatten from "lodash/flatten";
import pick from "lodash/pick";
import { GoogleMap } from "@react-google-maps/api";
import debounce from "lodash/debounce";
import RegionMapView from "../../components/RegionMapView";
import RegionNeighborhoodView from "../../components/RegionNeighborhoodView";
import PropertyModalView from "../../components/PropertyModalView";
import NeighborhoodModalView from "../../components/NeighborhoodModalView";
import "./index.css";
import { withRouter } from "react-router";

import GroceriesIcon from "../../assets/icons/Groceries.svg";
import EntretainmentIcon from "../../assets/icons/Entertainment.svg";
import RestaurantsIcon from "../../assets/icons/Restaurants.svg";
import ShoppingIcon from "../../assets/icons/Shopping.svg";

/* eslint-disable import/first */
import stylesMod from "./styles.module.css";
const styles = stylesMod.locals || stylesMod;
import { mapOptions } from "./constants";
import CustomOverlayView from "../../helpers/custom-overlay";
import { placesFiller, gmapsPlacesFields } from "../../helpers/map-utils";
import PropertyFilter from "../../helpers/map-property-filter";
import { canUseDOM } from "../../helpers/utils";

const getIcon = type => {
  switch (type) {
    case "restaurants":
      return RestaurantsIcon;
    case "groceries":
      return GroceriesIcon;
    case "shopping":
      return ShoppingIcon;
    case "entertainment":
      return EntretainmentIcon;
    default:
      return null;
  }
};

class RegionMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.fetchingPlaces = false;
    this.state = {
      showZoom: true
    };
    this.debouncedPlaces = debounce(props => this._nearbyPlaces(props), 300);
  }

  componentWillReceiveProps(nextProps) {
    const places = get(nextProps, "mapData.filter.places");
    const currentPlaces = get(this.props, "mapData.filter.places");
    if (
      !!places &&
      places !== currentPlaces &&
      (!nextProps.mapData.places ||
        this.props.mapData.zoom !== nextProps.mapData.zoom) &&
      this.maps &&
      window &&
      window.google &&
      window.google.maps &&
      !this.fetchingPlaces
    ) {
      this.debouncedPlaces(nextProps);
    }
  }

  _nearbyPlaces = async (props = this.props) => {
    const places = get(props, "mapData.filter.places");
    const PlacesService = get(window, "google.maps.places.PlacesService");

    const PlacesServiceStatus = get(
      window,
      "google.maps.places.PlacesServiceStatus"
    );
    const bounds = this.maps.getBounds();
    const service = new PlacesService(this.maps);
    try {
      this.fetchingPlaces = true;
      const placesData = await Promise.all(
        placesFiller(places).map(
          type =>
            new Promise((resolve, reject) => {
              const request = {
                bounds: bounds,
                type: [type]
              };
              service.nearbySearch(request, (results, status) => {
                if (
                  status === PlacesServiceStatus.OK ||
                  status === PlacesServiceStatus.ZERO_RESULTS
                ) {
                  if (results && results.length) {
                    resolve(results);
                    return;
                  } else {
                    return resolve([]);
                  }
                }
                return resolve([]);
              });
            })
        )
      );

      this.props.updateState({
        places: (shuffle(flatten(placesData)) || [])
          .slice(0, 10)
          .map(pl => pick(pl, gmapsPlacesFields))
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.fetchingPlaces = false;
    }
  };

  _renderMapOverlay = (key, data, component) => (
    <CustomOverlayView
      key={`${key}_popup`}
      position={{
        lat: data.latitude,
        lng: data.longitude
      }}
      mapPaneName={CustomOverlayView.OVERLAY_MOUSE_TARGET}
    >
      {component}
    </CustomOverlayView>
  );

  _renderSubregionPanel2 = subregion => {
    const properties = this.props.mapData.properties.filter(pr => {
      let found = false;
      pr.data["sub-regions"].forEach(sr => {
        if (sr["sub-region"].uid === subregion.uid) {
          found = true;
        }
      });
      return found;
    });

    return this._renderMapOverlay(
      subregion.uid,
      subregion.data,
      <NeighborhoodModalView.Controller
        subregion={subregion}
        properties={properties}
        onClickClose={this.closeAll}
      />
    );
  };

  panTo = (location, type) => {
    if (!!canUseDOM) {
      const width = window.innerWidth;

      const mapContainer = document.getElementsByClassName(
        "region-map-container"
      )[1];
      const mapHeight = mapContainer
        ? mapContainer.getBoundingClientRect().height
        : null;
      const modalTranslate = 200;

      const propertyMarkerHeight = 26;
      const propertyMarkerYWhiteSpace = 4;
      const propertyMarkerXWhitespace = 9;

      const subregionMarkerHeight = 24;

      const propertyXAxis = propertyMarkerXWhitespace;
      const propertyYAxis =
        (mapHeight / 2 - modalTranslate) * -1 +
        (propertyMarkerHeight - propertyMarkerYWhiteSpace);

      const subregionXAxis = subregionMarkerHeight / 2;
      const subregionYAxis =
        (mapHeight / 2 - modalTranslate) * -1 + subregionMarkerHeight;

      if (this.maps && this.maps.panBy) {
        this.maps.panTo(location);
        if (type === "property") {
          width > 721 && width !== 0
            ? this.maps.panBy(150, 250)
            : this.maps.panBy(propertyXAxis, propertyYAxis);
        } else if (type === "subregion") {
          width > 721 && width !== 0
            ? this.maps.panBy(150, 250)
            : this.maps.panBy(subregionXAxis, subregionYAxis);
        } else {
          this.maps.panBy(170, 175);
        }
      }
    }
  };

  openRegion = (subregions, subregion) => {
    this.props.updateState({
      subregions: (subregions || []).map(sr => ({
        ...sr,
        popup: subregion.id === sr.id
      })),
      filter: {
        ...this.props.mapData.filter,
        tab: "neighborhoods"
      },
      selected: {
        property: null,
        subregion: subregion.id
      }
    });
    this.panTo(
      {
        lat: subregion.data.latitude,
        lng: subregion.data.longitude
      },
      "subregion"
    );
  };

  openProperty = (properties, property) => {
    this.setState({
      showZoom: false
    });
    this.props.updateState({
      properties: (properties || []).map(pr => ({
        ...pr,
        popup: property.id === pr.id
      })),
      filter: {
        ...this.props.mapData.filter,
        tab: "properties"
      },
      selected: {
        property: property.id,
        subregion: null
      }
    });
    this.panTo(
      {
        lat: property.data.latitude,
        lng: property.data.longitude
      },
      "property"
    );
  };

  closeAll = e => {
    this.props.updateState({
      subregions: (this.props.mapData.subregions || []).map(sr => ({
        ...sr,
        popup: false
      })),
      selected: {
        property: null,
        subregion: null
      },
      properties: (this.props.mapData.properties || []).map(sr => ({
        ...sr,
        popup: false
      }))
    });
    this.setState({
      showZoom: true
    });
  };

  _renderPlace = place =>
    this._renderMapOverlay(
      place.id,
      {
        // ...place,
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng()
      },
      <div className={styles.clickableImage}>
        <div className={styles.markerLabel}>{place.name}</div>
        <div className={styles.markerContainer}>
          <img
            className={styles.markerIcon}
            src={getIcon(this.props.mapData.filter.places)}
            alt={place.name}
          />
        </div>
      </div>
    );

  _renderSubregionIndicator = subregion => {
    const stateSubregion = (this.props.mapData.subregions || []).find(
      sr => sr.id === subregion.id
    );
    return stateSubregion
      ? this._renderMapOverlay(
          subregion.uid,
          subregion.data,
          this.props.mapData.zoom < 12 ? (
            <div
              className={styles.clickableImage}
              tabIndex={0}
              onKeyDown={e => {
                if (e && e.stopPropagation) {
                  e.stopPropagation();
                }
                if (e.keyCode !== 13) {
                  return null;
                }
                this.closeAll();
                this.openRegion(this.props.mapData.subregions, subregion);
              }}
              onClick={e => {
                if (e && e.stopPropagation) {
                  e.stopPropagation();
                }
                this.closeAll();
                this.openRegion(this.props.mapData.subregions, subregion);
              }}
            >
              <img
                src="/images/icon-neighborhood3x_1.png"
                alt="neighorhood"
                style={{ width: 24 }}
              />
            </div>
          ) : (
            <RegionNeighborhoodView.Controller
              onClick={e => {
                if (e && e.stopPropagation) {
                  e.stopPropagation();
                }
                this.closeAll();
                this.openRegion(this.props.mapData.subregions, subregion);
              }}
              title={subregion.data.name}
              subtitle={subregion.data.name}
            />
          )
        )
      : null;
  };

  _renderPropertyPanel = property => {
    return this._renderMapOverlay(
      property.uid,
      property.data,
      <PropertyModalView.Controller
        page={this.props.page}
        property={property}
        responsive={this.props.responsive}
        onClickClose={this.closeAll}
      />
    );
  };

  _renderPropertyIndicator = property => {
    const filters = get(this.props, "mapData.filter");
    if (!filters) {
      return null;
    }

    const isPropertyZeroPriced =
      !!property.attributes &&
      (+property.attributes.minprice === 0 ||
        +property.attributes.minPrice === 0);
    if (isPropertyZeroPriced) {
      if (filters.dirtySlider && !PropertyFilter(property, filters)) {
        return null;
      }
    } else if (!PropertyFilter(property, filters)) {
      return null;
    }

    return (
      <CustomOverlayView
        key={`property_${property.uid}`}
        position={{
          lat: property.data.latitude,
          lng: property.data.longitude
        }}
        mapPaneName={CustomOverlayView.OVERLAY_MOUSE_TARGET}
      >
        <span className={styles.propertyIconContainer}>
          <div className={styles.propertyLabel}>{property.data.name}</div>
          <img
            src="/images/icon-property3x.png"
            alt="property"
            className={[styles.clickableImage, styles.propertyPin].join(" ")}
            tabIndex={0}
            onKeyDown={e => {
              if (e && e.stopPropagation) {
                e.stopPropagation();
              }
              if (e.keyCode !== 13) {
                return null;
              }
              this.closeAll();
              this.openProperty(this.props.mapData.properties, property);
            }}
            onClick={e => {
              if (e && e.stopPropagation) {
                e.stopPropagation();
              }
              this.closeAll();
              this.openProperty(this.props.mapData.properties, property);
            }}
          />
        </span>
      </CustomOverlayView>
    );
  };

  render() {
    const title = get(this.props, "data.name");
    const subregions = get(this.props, "mapData.subregions") || [];
    const properties = get(this.props, "mapData.properties") || [];
    const { mapData } = this.props;
    const regionUid = get(this.props, "data.region.uid");
    const regionName = regionUid ? regionUid.replace(/-/g, " ") : null;

    if (!mapData.mapCenter) {
      return null;
    }
    let subregionPage = null;
    if (this.props.page.type === "sub-region") {
      subregionPage = true;
    }

    return (
      <RegionMapView {...this.props}>
        <wrapper
          className={`${styles.wrapper} ${
            subregionPage ? "subregion-page-map" : ""
          }`}
          topelement={() => (
            <div
              className={[styles.mapContainer, "region-map-container"].join(
                " "
              )}
            >
              <div className={styles.mapElement}>
                <GoogleMap
                  options={mapOptions}
                  mapContainerClassName={styles.mapContainer}
                  clickableIcons={false}
                  onLoad={map => (this.maps = map)}
                  onZoomChanged={() => {
                    if (this.maps && this.maps.getZoom) {
                      this.props.updateState({
                        zoom: this.maps.getZoom()
                      });
                    }
                  }}
                  onBoundsChanged={debounce(() => {
                    const places = get(this.props, "mapData.filter.places");
                    if (
                      !!places &&
                      this.maps &&
                      window &&
                      window.google &&
                      window.google.maps &&
                      !this.fetchingPlaces
                    ) {
                      this._nearbyPlaces(this.props);
                    }
                  }, 500)}
                  defaultCenter={mapData.mapCenter}
                  center={mapData.mapCenter}
                  google={this.props.google}
                  zoom={mapData.zoom}
                >
                  {subregions.map(sr => [
                    this._renderSubregionIndicator(sr),
                    sr.popup && this._renderSubregionPanel2(sr)
                  ])}
                  {properties.map(pr => [
                    this._renderPropertyIndicator(pr),
                    pr.popup && this._renderPropertyPanel(pr)
                  ])}
                  {(mapData.places || []).slice(0, 14).map(this._renderPlace)}
                </GoogleMap>
              </div>
            </div>
          )}
        >
          <title className={styles.title}>
            <style
              dangerouslySetInnerHTML={{
                __html: `\n div.gmnoprint > div:first-child {\n  display: ${
                  this.state.showZoom ? "block " : "none"
                }\n}\n`
              }}
            />
            <span className={["af-class-seo-title", styles.subtitle].join(" ")}>
              Apartments
            </span>
            {subregionPage ? (
              <a
                className={[
                  "af-class-breadcrumb-container af-class-blur af-class-light-bg",
                  styles.breadcrumbs
                ].join(" ")}
                href={`/apartments/${regionUid}`}
                onClick={e => {
                  if (e && e.preventDefault) {
                    e.preventDefault();
                  }
                  this.props.history.push(`/apartments/${regionUid}`);
                }}
              >
                <span className={styles.svg}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 91.92 155.56"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html: "#breadcrumb-arrow{fill:#ffffff!important;}"
                        }}
                      />
                    </defs>
                    <title>Chevron</title>
                    <g data-name="Layer 2">
                      <g data-name="Layer 1">
                        <polygon
                          id="breadcrumb-arrow"
                          className="af-class-cls-1"
                          points="28.28 77.78 91.92 14.14 77.78 0 14.14 63.64 0 77.78 14.14 91.92 77.78 155.56 91.92 141.42 28.28 77.78"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
                {regionName}
              </a>
            ) : null}
            {title}
          </title>

          {/*<zoom-in
            className={styles.zoomButton}
            alt="Zoom in"
            tabIndex={0}
            onKeyDown={e =>
              e.keyCode === 13 &&
              this.props.updateState({ zoom: mapData.zoom + 1 })
            }
            onClick={() => this.props.updateState({ zoom: mapData.zoom + 1 })}
          />
          <zoom-out
            className={styles.zoomButton}
            alt="Zoom out"
            tabIndex={0}
            onKeyDown={e =>
              e.keyCode === 13 &&
              this.props.updateState({ zoom: mapData.zoom - 1 })
            }
            onClick={() => this.props.updateState({ zoom: mapData.zoom - 1 })}
          />*/}
        </wrapper>
      </RegionMapView>
    );
  }
}

export default withRouter(props => <RegionMap {...props} />);
