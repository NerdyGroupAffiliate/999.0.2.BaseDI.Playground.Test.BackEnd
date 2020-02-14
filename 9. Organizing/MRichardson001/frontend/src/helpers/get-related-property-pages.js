import get from "lodash/get";

export const getRelatedAmenitiesPage = (propertyId, appdata) => {
  const item = get(appdata, "amenities", []).find(
    page => page.data.property.id === propertyId
  );
  return item;
};

export const getRelatedFurnishedPage = (propertyId, appdata) => {
  const item = get(appdata, "furnished", []).find(
    page => page.data.property.id === propertyId
  );
  return item;
};

export const getRelatedLocationPage = (propertyId, appdata) => {
  const item = get(appdata, "location", []).find(
    page => page.data.property.id === propertyId
  );
  return item;
};
