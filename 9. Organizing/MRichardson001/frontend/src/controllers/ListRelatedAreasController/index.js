import React from "react";
import get from "lodash/get";

import ListRelatedAreasView from "../../components/ListRelatedAreasView";
import CapitalizeFirsts from "../../helpers/capitalize-first-letter";

import styles from "./styles.module.css";
import { withRouter } from "react-router";
import GetPropertyFullRoute from "../../helpers/get-full-property-route";

const ListRelatedAreas = props => {
  const { data } = props;
  const subtitle = get(data, "subtitle");
  const title = get(data, "title");
  const textBlurb = get(data, "text_blurb");
  const regions = get(data, "regions") || [];
  const subregions = get(data, "sub-regions") || [];
  const zipcodes = get(data, "zipcodes") || [];
  const hasRegions = get(regions, "[0].region.uid");
  const hasSubregions = get(subregions, "[0].sub-region.uid");
  const hasZipcodes = get(zipcodes, "[0].zipcode");

  let properties = [];
  if (hasSubregions) {
    const subregionsuid = subregions.map(sr => sr["sub-region"].uid);
    properties = get(props, "appdata.properties").filter(
      prop =>
        prop.data["sub-regions"].filter(sr =>
          subregionsuid.includes(sr["sub-region"].uid)
        ).length > 0
    );
  }

  const hasProperties = properties.length > 0;

  if (!hasRegions && !hasSubregions && !hasZipcodes) {
    return null;
  }
  const getZipCodeRoute = zipcode => {
    const property = props.appdata.properties.find( property => property.uid === zipcode.zipcode_url.slug);
    const fullRoute = `${GetPropertyFullRoute(property, props.appdata)}/${zipcode.zipcode_url.slug}`;
    return fullRoute
  }
  return (
    <ListRelatedAreasView>
      <subtitle>{subtitle}</subtitle>
      <title>{title}</title>
      <text-blurb>
        {textBlurb
          ? textBlurb
          : `Check out these other regions around ${data.name}.`}
      </text-blurb>
      {hasRegions ? (
        <cities-list
          className={
            hasSubregions || hasZipcodes ? styles.areaColumn : styles.onlyColumn
          }
        >
          <h6 className="af-class-related-areas-location-title">
            neighborhoods
          </h6>
          {subregions.map(subregion => (
            <div
              tabIndex={0}
              onKeyDown={e =>
                e.keyCode === 13 &&
                props.history.push(`${props.location.pathname}/${get(subregion, "sub-region.uid")}-apartments`)
              }
              onClick={() =>
                props.history.push(`${props.location.pathname}/${get(subregion, "sub-region.uid")}-apartments`)
              }
              key={`neighborhoodsList_${get(subregion, "sub-region.uid")}`}
              className={["af-class-hood-text-link", styles.link].join(" ")}
            >
              {CapitalizeFirsts(get(subregion, "sub-region.uid"))}
            </div>
          ))}
        </cities-list>
      ) : null}
      {hasProperties ? (
        <neighborhoods-list
          className={
            hasRegions || hasZipcodes ? styles.areaColumn : styles.onlyColumn
          }
          style={{ border: "none" }}
        >
          <h6 className="af-class-related-areas-location-title">communities</h6>
          {properties.map(property => (
            <div
              tabIndex={0}
              onKeyDown={e =>
                e.keyCode === 13 && props.history.push(`${GetPropertyFullRoute(property, props.appdata)}/${property.uid}`)
              }
              onClick={() => props.history.push(`${GetPropertyFullRoute(property, props.appdata)}/${property.uid}`)}
              key={`neighborhoodsList_${property.uid}`}
              className={["af-class-hood-text-link", styles.link].join(" ")}
            >
              {CapitalizeFirsts(property.data.name)}
            </div>
          ))}
        </neighborhoods-list>
      ) : null}
      {hasZipcodes ? (
        <zipcodes-list
          className={
            hasRegions || hasSubregions ? styles.areaColumn : styles.onlyColumn
          }
        >
          <h6 className="af-class-related-areas-location-title">zip codes</h6>
          {zipcodes.map(zipcode => (
            <div
              tabIndex={0}
              onKeyDown={e =>
                e.keyCode === 13 &&
                props.history.push(getZipCodeRoute(zipcode))
              }
              onClick={() => props.history.push(getZipCodeRoute(zipcode))}
              key={`zipcodesList_${zipcode.zipcode}`}
              className={["af-class-zipcode-text-link", styles.link].join(" ")}
            >
              {zipcode.zipcode}
            </div>
          ))}
        </zipcodes-list>
      ) : null}
    </ListRelatedAreasView>
  );
};

export default withRouter(ListRelatedAreas);
