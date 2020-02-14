import React, { useState, useEffect } from "react";
import GetParentRegion from "../get-parent-region";
import { bodyBuilder, HOCgetter } from "./property/index";
import componentMapper from "../component-mapper";
import PropertyHeaderRender from "./property/header-renderer";
import PropertyNavRender from "./property/nav-renderer";
import { ViewCapture, EventViewProperty } from "../plugins/guestAnalytics.js";
import { canUseDOM } from "../../helpers/utils";
import { get } from "lodash";
import { FloorplansMeta } from "./property/floorplans";
import { ContactMeta } from "./property/contact";

const propertyStates = { maps: null };
export default function _propertyRenderer({
  property,
  preview,
  components,
  configs,
  refresh,
  ...props
}) {
  const [mapState, setMapState] = useState(propertyStates);
  let referralPage;
  if (canUseDOM){
      try {
        referralPage = JSON.parse(localStorage.getItem("referralPage"));
      } catch (e) {
        console.log(e)
      }
  }
  const updatePropertyMapState = newMapState =>
    setMapState({ ...mapState, ...newMapState });
  useEffect(() => {
    ViewCapture("Property/Floor/Unit"); //this is the only place that needs debounce in guestAnalytics.js
    EventViewProperty(get(property, "data.amliPropertyId"));
  }, []);
  let Header = PropertyHeaderRender(property, configs);
  const Nav = PropertyNavRender(property, configs);

  let Body, Slices, HOC;
  let Components = components;
  if (configs && configs.subroute) {
    configs = { ...configs, mapState, updatePropertyMapState };
    Body = bodyBuilder[configs.subroute];
    HOC = HOCgetter[configs.subroute];
  } else {
    Slices = (property.data.body || []).map((slice, index) => {
      const Component = componentMapper(slice.slice_type);
      if (!Component) {
        return null;
      }

      return (
        <Component
          key={`${slice.slice_type}_${index}`}
          data={slice}
          slice={slice}
          page={property}
        />
      );
    });
    HOC = HOCgetter.overview;
  }
  Components = {
    ...Components
  };

  if (HOC) {
    Header = HOC(Header);
  }

  const hasSpecificMeta =
    configs.subroute && ["floorplans", "contact"].includes(configs.subroute);
  let SpecificMeta = undefined;
  if(hasSpecificMeta) {
    SpecificMeta = configs.subroute === "floorplans" ? FloorplansMeta : ContactMeta;
  }
  return (
    <div className={configs.styles.container}>
      {hasSpecificMeta ? <SpecificMeta page={property} /> : !!Components.Metadata ? <Components.Metadata page={property} /> : null}
      {Nav ? (
        <Nav
          onMeasure={(width, height) =>
            configs.updateSize("nav", width, height)
          }
          links={configs.headerNav}
          page={property}
          homepage={configs.navigation === "Home Page"}
          route={configs.subroute}
          mapState={mapState}
        />
      ) : null}
      {Header ? (
        <Header
          referralPage={referralPage}
          links={configs.headerNav}
          page={property.data}
          property={property}
          parentRegion={GetParentRegion(property, configs.appdata)}
          sizes={configs.state.size}
          route={configs.subroute}
          appdata={configs.appdata}
        />
      ) : null}
      {!!Body && (
        <Body
          property={property}
          preview={preview}
          configs={configs}
          appdata={configs.appdata}
        />
      )}
      {!!Slices && Slices}
      {Components.Footer ? (
        <Components.Footer
          links={configs.footerNav}
          data={property}
          page={property}
        />
      ) : null}
    </div>
  );
}
