import React from "react";
import RegionMapView from "../../components/RegionMapView";

export default function RegionHeaderMap(props) {
  return <RegionMapView.Controller {...props} responsive />;
}
