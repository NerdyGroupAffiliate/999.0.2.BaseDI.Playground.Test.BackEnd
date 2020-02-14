function getPropertyDataFromAppData(appData, propertyId) {
  if (!propertyId) {
    return null;
  }
  const properties = appData.properties;
  return properties.find(
    property =>
      property.id === propertyId || property.data.amli_id === propertyId
  );
}

export default getPropertyDataFromAppData;
