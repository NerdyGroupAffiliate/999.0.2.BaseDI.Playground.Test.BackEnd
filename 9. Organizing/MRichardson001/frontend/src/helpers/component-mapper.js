import controllers from "../controllers";
const camelCased = text =>
  text ? text.replace(/[-_]([a-z])/g, g => g[1].toUpperCase()) : "";
const capitalizeFirstLetter = text =>
  text ? `${text.charAt(0).toUpperCase()}${text.slice(1)}` : "";

export default type => {
  return controllers[`${capitalizeFirstLetter(camelCased(type))}`];
};
