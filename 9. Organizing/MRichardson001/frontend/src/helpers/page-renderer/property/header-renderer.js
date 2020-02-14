function PropertyHeaderRender(property, configs) {
  const pagesWithNoHeader = ["floorplan", "grid"];

  const subroute = configs.subroute;
  let Header;

  if (subroute && pagesWithNoHeader.includes(subroute)) {
    return null;
  }

  let header = property.data.header;
  if (header) {
    let headerName = header.trim().replace(/[,\s-:]+/g, "");
    if (headerName === "PropertyFull") {
      headerName = "PropertyHeader";
    }
    if (headerName === "PropertyHeader" && configs && configs.subroute) {
      headerName = "PropertySubPageHeader";
    }
    try {
      Header = require(`../../../controllers/${headerName}Controller`);
    } catch (e) {
      try {
        Header = require(`../../../controllers/${headerName}Controller`);
      } catch (e) {
        try {
          Header = require(`../../../components/${headerName}View`);
        } catch (e) {
          Header = null;
        }
      }
    }
  }
  if (Header && Header.default) {
    Header = Header.default;
  }
  return Header;
}

export default PropertyHeaderRender;
