import React, { useEffect } from "react";
import get from "lodash/get";
import RegionNavbar from "./Navbar";
import RegionHeaderList from "./List";
import RegionHeaderMap from "./Map";

export default function RegionResponsiveHeader(props) {
  useEffect(() => {
    const lat = get(props, "data.latitude");
    const lng = get(props, "data.longitude");
    if (!!lat && !!lng && !props.mapData.mapCenter) {
      props.updateState({ mapCenter: { lat, lng } });
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

    if (!props.mapData.subregions) {
      props.updateState({
        subregions: subregions.map(sr => ({
          ...sr,
          popup: false
        })),
        properties
      });
    }
  });
  return (
    <div>
      <RegionNavbar {...props} />
      {props.mapData.responsive.view === "list" ? (
        <RegionHeaderList {...props} />
      ) : (
        <RegionHeaderMap {...props} />
      )}
    </div>
  );
}
