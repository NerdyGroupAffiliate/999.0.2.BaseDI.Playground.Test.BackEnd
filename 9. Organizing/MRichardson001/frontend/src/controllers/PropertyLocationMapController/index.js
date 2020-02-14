import { get, throttle } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import PropertyMap from "./components/MapWrapper";

const defaultState = {
  mapCenter: null,
  zoom: 16,
  showingInfoWindow: false,
  iconName: null,
  filter: {
    tab: "properties",
    minvalue: 700,
    maxvalue: 5000,
    minhousing: 0,
    maxhousing: 5,
    places: null,
    dirtySlider: false
  },
  selected: {
    property: null,
    place: null
  },
  properties: null,
  places: null,
  width: 0,
  height: 0,
  responsive: {
    view: "list",
    showFilter: false
  }
};

function FloorplanLocationMap(props) {
  const [state, setState] = useState(defaultState);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
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

    const properties = get(props, "appData.properties") || [];
    setState({ ...state, properties: properties });
  });

  useEffect(() => {
    const measure = throttle(() => {
      if (containerRef && containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setWidth(width);
        setHeight(height);
      }
    }, 16);
    if (width === 0) {
      measure();
    }
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [width]);

  const updateState = newState =>
    setState({
      ...state,
      ...newState
    });

  return (
    <div ref={containerRef}>
      <PropertyMap
        {...props}
        mapData={state}
        updateState={updateState}
        data={props.property.data}
      />
    </div>
  );
}

export default FloorplanLocationMap;
