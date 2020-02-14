import React from "react";
import { Route } from "react-router-dom";
import PageRenderer from "../page-renderer";
import GetPropertyFullRoute from "../get-full-property-route";

export const composeGrid = (property, data, nav) => {
  if (!property) {
    return null;
  }
  let routeParams = `/${property.uid}/floorplan/:amliId/unit/:unitId`;
  const propertyRoute = GetPropertyFullRoute(property, data);
  if (!!propertyRoute) {
    routeParams = `${propertyRoute}/${property.uid}/floorplan/:amliId/unit/:unitId`;
  }
  return (
    <Route
      key={`${property.id}_propertygrid-${Math.random()
        .toString(36)
        .substring(7)}`}
      path={routeParams}
      render={props => (
        <PageRenderer
          property={property}
          appdata={data}
          subroute="grid"
          nav={nav}
          {...props}
        />
      )}
      exact
    />
  );
};

export const composeProperty = (property, data, nav) => {
  if (!property) {
    return null;
  }
  const routeParams = [`/${property.uid}`];
  const propertyRoute = GetPropertyFullRoute(property, data);
  if (!!propertyRoute) {
    routeParams.push(`${propertyRoute}/${property.uid}`);
  }
  return (
    <Route
      key={`${property.id}_property-${Math.random()
        .toString(36)
        .substring(7)}`}
      path={routeParams}
      render={props => (
        <PageRenderer property={property} appdata={data} nav={nav} {...props} />
      )}
      exact
    />
  );
};

export const composeFloorplans = (property, data, nav) => {
  if (!property) {
    return null;
  }
  let routeParams = `/${property.uid}/floorplan/:amliId`;
  const propertyRoute = GetPropertyFullRoute(property, data);
  if (!!propertyRoute) {
    routeParams = `${propertyRoute}/${property.uid}/floorplan/:amliId`;
  }
  return (
    <Route
      key={`${property.id}_floorplan`}
      path={routeParams}
      render={props => (
        <PageRenderer
          property={property}
          subroute="floorplan"
          appdata={data}
          nav={nav}
          {...props}
        />
      )}
      exact
    />
  );
};

export const composePricing = (property, data, nav) => {
  if (!property) {
    return null;
  }
  const routeParams = [
    `/${property.uid}/floorplans`,
    ...(property.slugs || []).map(slug => `/${slug}/floorplans`)
  ];
  const propertyRoute = GetPropertyFullRoute(property, data);
  if (!!propertyRoute) {
    routeParams.push(`${propertyRoute}/${property.uid}/floorplans`);
  }
  return (
    <Route
      key={`${property.id}_floorplans-${Math.random()
        .toString(36)
        .substring(7)}`}
      path={routeParams}
      render={props => (
        <PageRenderer
          property={property}
          subroute="floorplans"
          appdata={data}
          nav={nav}
          {...props}
        />
      )}
      exact
    />
  );
};

export const composeLocation = (property, data, nav) => {
  if (!property) {
    return null;
  }
  const routeParams = [
    `/${property.uid}/location`,
    ...(property.slugs || []).map(slug => `/${slug}/location`)
  ]
  const propertyRoute = GetPropertyFullRoute(property, data);
  if (!!propertyRoute) {
    routeParams.push(`${propertyRoute}/${property.uid}/location`);
  }
  return (
    <Route
      key={`${property.id}_location-${Math.random()
        .toString(36)
        .substring(7)}`}
      path={routeParams}
      render={props => (
        <PageRenderer
          property={property}
          subroute="location"
          appdata={data}
          nav={nav}
          {...props}
        />
      )}
      exact
    />
  );
};

export const composeFurnished = (property, data, nav) => {
  if (!property) {
    return null;
  }
  const routeParams = [
    `/${property.uid}/short-term-furnished`,
    ...(property.slugs || []).map(slug => `/${slug}/short-term-furnished`)
  ]
  const propertyRoute = GetPropertyFullRoute(property, data);
  if (!!propertyRoute) {
    routeParams.push(`${propertyRoute}/${property.uid}/short-term-furnished`);
  }
  return (
    <Route
      key={`${property.id}_short_term_furnished-${Math.random()
        .toString(36)
        .substring(7)}`}
      path={routeParams}
      render={props => (
        <PageRenderer
          property={property}
          subroute="furnished"
          appdata={data}
          nav={nav}
          {...props}
        />
      )}
      exact
    />
  );
};

export const composeAmenities = (property, data, nav) => {
  if (!property) {
    return null;
  }
  const routeParams = [
    `/${property.uid}/amenities`,
    ...(property.slugs || []).map(slug => `/${slug}/amenities`)
  ]
  const propertyRoute = GetPropertyFullRoute(property, data);
  if (!!propertyRoute) {
    routeParams.push(`${propertyRoute}/${property.uid}/amenities`);
  }
  return (
    <Route
      key={`${property.id}_amenities-${Math.random()
        .toString(36)
        .substring(7)}`}
      path={routeParams}
      render={props => (
        <PageRenderer
          property={property}
          subroute="amenities"
          appdata={data}
          nav={nav}
          {...props}
        />
      )}
      exact
    />
  );
};

export const composeContact = (property, data, nav) => {
  if (!property) {
    return null;
  }
  const routeParams = [
    `/${property.uid}/contact`,
    ...(property.slugs || []).map(slug => `/${slug}/contact`)
  ]
  const propertyRoute = GetPropertyFullRoute(property, data);
  if (!!propertyRoute) {
    routeParams.push(`${propertyRoute}/${property.uid}/contact`);
  }
  return (
    <Route
      key={`${property.id}_contact-${Math.random()
        .toString(36)
        .substring(7)}`}
      path={routeParams}
      render={props => (
        <PageRenderer
          property={property}
          subroute="contact"
          appdata={data}
          nav={nav}
          {...props}
        />
      )}
      exact
    />
  );
};
