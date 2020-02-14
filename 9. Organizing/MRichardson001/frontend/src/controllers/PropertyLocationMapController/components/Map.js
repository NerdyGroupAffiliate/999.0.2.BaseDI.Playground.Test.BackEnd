import React from "react";
import { get, debounce, flatten, shuffle, pick } from "lodash";
import { placesFiller, getIcon, mapOptions, gmapsPlacesFields } from "../../../helpers/map-utils";
import { GoogleMap, LoadScriptNext} from "@react-google-maps/api";
import styles from "../styles.module.css";
import LocationRetailModalView from "../../../components/LocationRetailModalView";
import PropertyModalView from "../../../components/PropertyModalView";
import CustomOverlayView from "../../../helpers/custom-overlay";
import PropertyFilter from "../../../helpers/map-property-filter";
import config from "../../../config";
import { canUseDOM } from "../../../helpers/utils";
import "./index.css";

const exlusionTypes = [];
const competitorsFilter = place =>
  !!place &&
  !!place.types &&
  !!place.types.every(type => !exlusionTypes.includes(type));

class PropertyLocationMap extends React.Component {
  componentWillReceiveProps(nextProps) {
    const places = get(nextProps, "mapData.filter.places");

    if (
      !!places &&
      (!nextProps.mapData.places ||
        this.props.mapData.zoom !== nextProps.mapData.zoom) &&
      this.maps &&
      window &&
      window.google &&
      window.google.maps
    ) {

      const property = {
        lat: nextProps.property.data.latitude,
        lng: nextProps.property.data.longitude
      };

      this.maps.panTo(property);
      this._nearbyPlaces(nextProps);
    }
  }

  _updateNearby = (props = this.props) => {
    const places = get(props, "mapData.filter.places");
    if (
      !!places &&
      this.maps &&
      window &&
      window.google &&
      window.google.maps
    ) {
      this._nearbyPlaces(props);
    }
  };

  _nearbyPlaces = async (props = this.props) => {
    const selectedPlace = get(props, "mapData.filter.places");
    const PlacesService = get(window, "google.maps.places.PlacesService");

    if (selectedPlace === "perks") {
      if (!!props.perks) {
        this.props.updateState({
          places: this.props.perks,
          filter: { ...this.props.filter, places: "perks" }
        });
      }
      return true;
    }
    const PlacesServiceStatus = get(
      window,
      "google.maps.places.PlacesServiceStatus"
    );
    const bounds = this.maps.getBounds();
    const service = new PlacesService(
      this.maps
    );
    try {
      const placesData = await Promise.all(
        placesFiller(selectedPlace).map(
          type =>
          new Promise((resolve, reject) => {
              const request = {
                bounds: bounds,
                type: [type]
              };
              if (type === "restaurant") {
                request['minPriceLevel'] = 3;
                request['maxPriceLevel'] = 4;
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
                reject();
              });
            })
        )
      );
      await this.props.updateState({
        places: (shuffle(flatten(placesData)) || [])
          .filter(competitorsFilter)
          .slice(0, 10)
          .map(pl => pick(pl, gmapsPlacesFields))
      });
    } catch (e) {
      console.log(e);
    }
  };

  _renderPropertyIndicator = property => {
    const filters = get(this.props, "mapData.filter");
    if (!filters) {
      return null;
    }

    if (!PropertyFilter(property, filters)) {
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
        <img
          src="/images/icon-property3x.png"
          alt="property"
          tabIndex={0}
          onKeyDown={e => {
            if (e && e.stopPropagation) {
              e.stopPropagation();
            }
            if (e.keyCode !== 13) {
              return;
            }
            this.openProperty(this.props.mapData.properties, property);
          }}
          onClick={e => {
            if (e && e.stopPropagation) {
              e.stopPropagation();
            }
            this.openProperty(this.props.mapData.properties, property);
          }}
          className={styles.clickableImage}
          style={{
            width: 32,
            height: 32
          }}
        />
      </CustomOverlayView>
    );
  };

  panTo = (location, type) => {
    if (this.maps && this.maps.panBy) {
      this.maps.panTo(location);
      if (type === "property") {
        this.maps.panBy(150, 250);
      } else {
        this.maps.panBy(170, 175);
      }
    }
  };
  _renderMapOverlay = (key, data, component, type = "property") => {
    if (type === "property") {
      return (
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
    }

    return (
      <CustomOverlayView
        key={`${key}_popup`}
        position={{
          lat: data.latitude || this._getLatLong(data).latitude,
          lng: data.longitude || this._getLatLong(data).longitude
        }}
        mapPaneName={CustomOverlayView.OVERLAY_MOUSE_TARGET}
      >
        {component}
      </CustomOverlayView>
    );
  };

  openProperty = (properties, property) => {
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

  openPlace = (places, place) => {
    this.props.updateState({
      places: (places || []).map(pl => ({
        ...pl,
        popup: place.id === pl.id
      })),
      filter: {
        ...this.props.mapData.filter,
        tab: "places"
      },
      selected: {
        place: place.id
      }
    });
    this.panTo(
      {
        lat: place.latitude || this._getLatLong(place).latitude,
        lng: place.longitude || this._getLatLong(place).longitude
      },
      "place"
    );
    if (!!canUseDOM && !!place.perk_text) {
      window.dataLayer.push({
        event:  'clickedPerkIcon',
        propertyLocationMapProperty: this.props.data ? this.props.data.name : null,
       });
    }
  };

  _renderPlacePanel = place => {
    const closePanel = evt => {
      this.props.updateState({
        places: (this.props.mapData.places || []).map(pl => ({
          ...pl,
          popup: false
        }))
      });
    };
    return this._renderMapOverlay(
      place.id,
      place,
      <LocationRetailModalView.Controller
        place={place}
        mapContext={this.maps.context}
        closePanel={closePanel}
      />,
      "place"
    );
  };
  _renderPropertyPanel = property => {
    return this._renderMapOverlay(
      property.uid,
      property.data,
      <PropertyModalView.Controller
        property={property}
        responsive={this.props.mapData.responsive}
      />
    );
  };

  _renderPlaceImage = (key_name = "perks", place) => {
    return (
      <img
        className={styles.markerIcon}
        src={getIcon(key_name)}
        alt={place.name}
        onClick={e => {
          if (e && e.stopPropagation) {
            e.stopPropagation();
          }
          this.openPlace(this.props.mapData.places, place);
        }}
        style={{
          width: 32,
          height: 32
        }}
      />
    );
  };

  _renderPlace = place => {
    return this._renderMapOverlay(
      place.id,
      {
        ...place,
        latitude: place.latitude || this._getLatLong(place).latitude,
        longitude: place.longitude || this._getLatLong(place).longitude
      },
      <div className={styles.clickableImage}>
        <div className={styles.markerLabel}>{place.name}</div>
        <div className={styles.markerContainer}>
          {this._renderPlaceImage(this.props.mapData.filter.places, place)}
        </div>
      </div>
    );
  };

  closeAll = e => {
    if (e && e.wa && e.wa.preventDefault) {
      e.wa.preventDefault();
    }
    this.props.updateState({
      selected: {
        property: null,
        place: null
      },
      properties: (this.props.mapData.properties || []).map(pr => ({
        ...pr,
        popup: false
      })),
      places: (this.props.mapData.places || []).map(pl => ({
        ...pl,
        popup: false
      }))
    });
  };

  _closePopup = () => {
    this.props.updateState({
      filter: { place: null, ...this.mapData.props.filter }
    });
  };
  _getLatLong(place, key) {
    return {
      latitude: place.geometry.location.lat(),
      longitude: place.geometry.location.lng()
    };
  }

  render() {
    const { mapData } = this.props;
    const properties = (get(this.props, "mapData.properties") || []).filter(
      item => item.id === this.props.property.id
    );

    if (!mapData.mapCenter) {
      return null;
    }
    return (
      <LoadScriptNext
        id="script-loader"
        loadingElement={
          <div style={{ height: "800px", width: "100%"}} />
        }
        googleMapsApiKey={config.GOOGLE_MAPS_API_KEY}
        libraries={config.GOOGLE_MAPS_LIBRARIES}
      >
        <GoogleMap
          mapContainerClassName={styles.mapContainer}
          options={mapOptions}
          clickableIcons={false}
          onClick={this.closeAll}
          defaultCenter={mapData.mapCenter}
          center={mapData.mapCenter}
          google={this.props.google}
          zoom={mapData.zoom}
          onLoad={map => (this.maps = map)}
          onZoomChanged={() => {
            const selectedPlace = get(this.props, "mapData.filter.places");

            if (selectedPlace !== "perks" && this.maps && this.maps.getZoom) {
              this.props.updateState({
                zoom: this.maps.getZoom()
              });
            }
          }}
          onBoundsChanged={debounce(() => {
            if (this.maps) {
              this.props.updatePropertyMapState({
                maps: this.maps
              });
            }
          }, 500)}
        >
          {(mapData.places || [])
            .filter(place => place.popup)
            .map(this._renderPlacePanel)}
          {(mapData.places || []).map(this._renderPlace)}
          {properties.map(this._renderPropertyIndicator)}
          {properties.map(pr => pr.popup && this._renderPropertyPanel(pr))}
        </GoogleMap>
      </LoadScriptNext>
    );
  }
}

export default props => <PropertyLocationMap {...props} />;
