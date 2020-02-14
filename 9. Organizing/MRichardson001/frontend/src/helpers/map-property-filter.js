const PropertyFilter = (property, filters) =>
  !property.attributes ||
  (property.attributes.maxPrice >= filters.minvalue &&
    property.attributes.minPrice <= filters.maxvalue &&
    (property.attributes.maxBeds >= filters.minhousing &&
      (property.attributes.maxBeds <= filters.maxhousing ||
      property.attributes.minBeds >= filters.minhousing)));

export default PropertyFilter;
