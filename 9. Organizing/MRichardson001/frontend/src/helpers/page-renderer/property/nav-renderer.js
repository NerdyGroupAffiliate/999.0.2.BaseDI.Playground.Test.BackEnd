function PropertyNavRender(property, configs) {

  let Nav;
  const header = property.data.header.trim().replace(/[,\s-:]+/g, "");
  if (header === "PropertyEarlyDevelopment") {
    try {
      Nav = require(`../../../controllers/NavigationHeaderController`);
    } catch (e) {
      try {
        Nav = require(`../../../components/NavigationHeaderView`);
      } catch (err) {
        Nav = null;
      }
    }
  } else {
    try {
      Nav = require(`../../../controllers/PropertyFullController`);
    } catch (e) {
      try {
        Nav = require(`../../../components/PropertyFullView`);
      } catch (err) {
        Nav = null;
      }
    }
  }
  if (Nav && Nav.default) {
    Nav = Nav.default;
  }

  return Nav;
}

export default PropertyNavRender;
