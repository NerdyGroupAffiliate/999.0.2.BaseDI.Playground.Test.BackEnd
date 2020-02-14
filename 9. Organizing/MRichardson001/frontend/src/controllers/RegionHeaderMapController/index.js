import React from "react";
import get from "lodash/get";
import throttle from "lodash/throttle";
import RegionHeaderMapView from "../../components/RegionHeaderMapView";
import RegionResponsiveHeader from "../RegionResponsiveHeaderController";
import Helmet from "react-helmet-async";
import styles from "./styles.module.css";
import "./index.css";
import MobileModal from "../PropertyModalController/MobileModal";
import NeighborhoodModalControllerMobile from "../NeighborhoodModalControllerMobile";
class RegionHeaderMap extends React.Component {
  state = {
    mapCenter: null,
    zoom: 10,
    selectedPlace: null,
    showingInfoWindow: false,
    filter: {
      tab: "properties",
      minvalue: 0,
      maxvalue: 0,
      minhousing: 0,
      maxhousing: 3,
      dirtySlider: false
    },
    selected: {
      subregion: null,
      property: null
    },
    subregions: null,
    properties: null,
    width: 0,
    height: 0,
    responsive: {
      view: "list",
      showFilter: false
    }
  };
  sizeListener = null;

  async componentDidMount() {
    await this.setInitState(this.props);
    this.throttledMeasure = throttle(this.measure, 16);
    if (!this.sizeListener && !!window) {
      this.sizeListener = window.addEventListener(
        "resize",
        this.throttledMeasure
      );
    }
    this.measure();
  }

  async componentWillReceiveProps(nextProps) {
    await this.setInitState(nextProps);
  }

  componentWillUnmount() {
    if (!!this.sizeListener && !!window) {
      window.removeEventListener("resize");
    }
  }

  measure = () => {
    if (this.div) {
      const { width } = this.div.getBoundingClientRect();
      const zoom = get(this.props, "data.map_zoom_level") || 11;
      const zoomAmount = width >= 1441 ? zoom : zoom - 1;
      if (this.state.zoom !== zoomAmount) {
        this.setState({ zoom: zoomAmount });
      }
    }
  };

  setInitState = async props => {
    const lat = get(props, "data.latitude");
    const lng = get(props, "data.longitude");
    const zoom = get(props, "data.map_zoom_level", 11);
    if (!!lat && !!lng && !this.state.mapCenter) {
      await this.updateState({ mapCenter: { lat, lng } });
    }
    let subregions = get(props, "relatedSubRegions") || [];
    const appdataSubRegions = get(props, "appdata.subregions") || [];
    subregions = subregions
      .map(sub => appdataSubRegions.find(appSR => sub.id === appSR.id))
      .filter(sb => !!sb);
    const properties = (get(props, "appdata.properties") || []).filter(
      property => {
        let found = false;
        property.data["sub-regions"].forEach(sr => {
          if (!!subregions.find(sub => sub.id === sr["sub-region"].id)) {
            found = true;
          }
        });
        return found;
      }
    );
    if (!this.state.subregions) {
      await this.updateState({
        subregions: subregions.map(sr => ({
          ...sr,
          popup: false
        })),
        properties,
        zoom
      });
    } else {
      const newProperties =
        this.state.properties && this.state.properties.length
          ? this.state.properties
          : properties;
      await this.updateState({
        properties: newProperties.map(property => {
          const foundProp = properties.find(pr => pr.id === property.id);
          if (!!foundProp) {
            return {
              ...property,
              data: foundProp.data
            };
          }
          return property;
        })
      });
    }
  };

  updateState = stateUpdate => {
    return this.setState(stateUpdate);
  };

  render() {
    let subregions = get(this.props, "relatedSubRegions") || [];
    const appdataSubRegions = get(this.props, "appdata.subregions") || [];
    subregions = subregions
      .map(sub => appdataSubRegions.find(appSR => sub.id === appSR.id))
      .filter(sb => !!sb);
    const properties = (get(this.props, "appdata.properties") || []).filter(
      property => {
        let found = false;
        property.data["sub-regions"].forEach(sr => {
          if (!!subregions.find(sub => sub.id === sr["sub-region"].id)) {
            found = true;
          }
        });
        return found;
      }
    );

    const getSelectedProperty = () => {
      const selected = this.state.selected.property;
      const property = properties.find(pr => pr["id"] === selected);
      if (property) {
        return <MobileModal page={this.props.page} data={property} />;
      }
    };
    const getSelectedSubregion = () => {
      const selected = this.state.selected.subregion;
      const subregion = subregions.find(sr => sr["id"] === selected);

      const propertiesForModal = properties.filter(pr => {
        let found = false;
        pr.data["sub-regions"].forEach(sr => {
          if (sr["sub-region"].uid === subregion.uid) {
            found = true;
          }
        });
        return found;
      });
      if (subregion) {
        return (
          <div className={styles.wrapper}>
            <div className={styles.whiteTriangle} />
            <div className={styles.whiteBar}>
              <div className={styles.grayBar} />
            </div>
            <NeighborhoodModalControllerMobile
              subregion={subregion}
              properties={propertiesForModal}
            />
          </div>
        );
      }
    };
    return (
      <React.Fragment>
        <Helmet>
          {properties.map((prop, index) => (
            <script type="application/ld+json" key={`scheme-property-${index}`}>
              {`{
                      "@context": "http://schema.org/",
                      "@type": "ApartmentComplex",
                      "name": "${prop.data.name}",
                      "address": "${prop.data.address}",
                      "telephone":"${prop.data.phone}",
                      "photo": {
                        "@type": "ImageObject",
                        "url": "${prop.data.primary_property_image.url ||
                          "../../assets/images/header-jumbo.jpeg"}"
                      }
                    }`}
            </script>
          ))}
        </Helmet>
        <div ref={elem => (this.div = elem)}>
          <span className={styles.largeMap}>
            <RegionHeaderMapView
              {...this.props}
              mapData={this.state}
              updateState={this.updateState}
            />
          </span>
          <span className={styles.mobileMap}>
            <RegionResponsiveHeader
              {...this.props}
              mapData={this.state}
              updateState={this.updateState}
            />
          </span>
          {this.state.selected.property ? getSelectedProperty() : null}
          {this.state.selected.subregion ? getSelectedSubregion() : null}
        </div>
      </React.Fragment>
    );
  }
}

export default RegionHeaderMap;
