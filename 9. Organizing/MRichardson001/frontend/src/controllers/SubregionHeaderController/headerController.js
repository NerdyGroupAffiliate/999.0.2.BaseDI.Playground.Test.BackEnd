import React, { useRef, useState, useEffect } from "react";
import get from "lodash/get";
import RegionHeaderMapView from "../../components/RegionHeaderMapView";
import RegionResponsiveHeader from "../RegionResponsiveHeaderController/index";
import styles from './styles.module.css';
import MobileModal from "../PropertyModalController/MobileModal";

const defaultState = {
  mapCenter: null,
  zoom: 14,
  selectedPlace: null,
  showingInfoWindow: false,
  filter: {
    tab: "properties",
    minvalue: 0,
    maxvalue: 5000,
    minhousing: 0,
    maxhousing: 3,
    places: null,
    dirtySlider: false
  },
  selected: {
    subregion: null,
    property: null
  },
  subregions: null,
  properties: null,
  places: null,
  width: 0,
  height: 0,
  responsive: {
    view: "list",
    showFilter: false
  }
};

export default props => {
  const [state, setState] = useState(defaultState);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!state || !state.mapCenter) {
      const lat = get(props, "data.latitude");
      const lng = get(props, "data.longitude");
      setState({ ...state, mapCenter: { lat, lng } });
    }
  });

  useEffect(() => {
    if (!!state.properties && state.properties.length > 0) {
      return;
    }
    const appdataSubRegions = get(props, "appdata.subregions") || [];
    let subregion = appdataSubRegions.find(appSR => props.page.id === appSR.id);

    const tempProperties = (get(props, "appdata.properties") || []).filter(
      property => {
        let found = false;
        property.data["sub-regions"].forEach(sr => {
          if (subregion.id === sr["sub-region"].id) {
            found = true;
          }
        });
        return found;
      }
    );
    setState({
      ...state,
      properties: tempProperties || []
    });
  });

  const getSelectedProperty = () => {
    const selected = state.selected.property;
    const property = state.properties.find(pr => pr["id"] === selected);
    if (property) {
      return <MobileModal page={props.page} data={property} />
    }
  }

  const updateState = newState =>
    setState({
      ...state,
      ...newState
    });

  return (
    <div ref={containerRef}>
      <span className={styles.largeMap}>
        <RegionHeaderMapView
          {...props}
          mapData={state}
          updateState={updateState}
          subregion
        />
      </span>
      <span className={styles.mobileMap}>
        <RegionResponsiveHeader
          {...props}
          mapData={state}
          updateState={updateState}
          subregion
        />
      </span>

      {state.selected.property
              ? getSelectedProperty()
      : null}

    </div>
  );
};
