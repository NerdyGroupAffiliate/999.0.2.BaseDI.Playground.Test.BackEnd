import get from "lodash/get";
import GetPropertyFullRoute from "./get-full-property-route";

const FormatLink = (link, appdata = {}) => {
  if (!link) {
    return null;
  }
  const linkType = get(link, "link_type");
  const target = get(link, "target");
  const url = get(link, "url");
  const slug = get(link, "slug");
  const uid = get(link, "uid");
  const isBroken = get(link, "isBroken");

  let linkData = null;

  if (linkType === "Web") {
    linkData = {
      href: url,
      target: target
    };
  } else if (linkType === "Document") {
    if (!isBroken && link.type === "property" && appdata.properties) {
      const property = appdata.properties.find( pr => pr.id === link.id);
      const href = `${GetPropertyFullRoute(property, appdata)}/${property.uid}`;
      linkData = {
        href: href
      };
    } else {
      const href = isBroken ? "/not-found" : uid || slug;
      linkData = {
        href: href
      };
    }
  } else {
    linkData = {
      href: url
    };
  }
  return linkData;
};

export default FormatLink;
