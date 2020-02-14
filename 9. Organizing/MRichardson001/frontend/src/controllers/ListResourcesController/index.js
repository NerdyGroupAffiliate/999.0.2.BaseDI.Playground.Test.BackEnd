import React from "react";
import get from "lodash/get";
import ListResourcesView from "../../components/ListResourcesView";
import { withRouter } from "react-router";
import styles from "./styles.module.css";
import "./index.css";
import {
  personaBackgroundColorStyle,
  personaColorStyle
} from "../../helpers/property/persona";
import { handlePrismicLink } from "../../helpers/link-helper";

export default withRouter(props => {
  const title = get(props, "slice.primary.title");
  const subtitle = get(props, "slice.primary.subtitle");
  const resources = get(props, "slice.items", []);

  const alignResources = index => {
    if (resources.length > 4 && index + 1 > resources.length / 2 && index > 2) {
      return true;
    } else if (resources.length === 4 && index > 1) {
      return true;
    }
    return null;
  };
  const findHanger = index => {
    if (resources.length === 3 && index === resources.length - 1) {
      return true;
    }
    return null;
  };

  return (
    <ListResourcesView>
      <header-container
        className={styles.headerContainer}
        style={personaBackgroundColorStyle(props.property)}
      >
        <subtitle>{subtitle}</subtitle>
        <title className={styles.title}>{title}</title>
      </header-container>
      <resource-list className={resources.length > 4 ? styles.listWrapper : ""}>
        {resources.map((resource, index) => (
          <div
            className={[
              "af-class-div-block-166",
              resources.length === 3 || resources.length > 4
                ? styles.overload
                : "",
              alignResources(index) ? styles.oddResource : "",
              resource.resource_image.url ? "" : styles.noImage,
              findHanger(index) ? styles.hanger : ""
            ].join(" ")}
            key={`resource_${index}`}
          >
            <div className="af-class-div-block-164">
              <div className="af-class-div-block-165" />
              <img
                src={resource.resource_image.url}
                alt={resource.resource_image_alt_text || ""}
                className="af-class-image-31"
              />
              <h4 className="af-class-heading-20">{resource.resource_title}</h4>
              <div className="af-class-paragraph">
                {resource.resource_text_blurb}
              </div>
              {resource.resource_link.url || resource.resource_link.slug ? (
                <a
                  href={
                    resource.resource_link.url
                      ? resource.resource_link.url
                      : `/${resource.resource_link.slug}`
                  }
                  className={[
                    "af-class-amenities-resource-link",
                    styles.link
                  ].join(" ")}
                  style={personaColorStyle(props.property)}
                  {...handlePrismicLink(props, resource.resource_link, {
                    propertyData: props.property
                  })}
                >
                  Learn more
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </resource-list>
    </ListResourcesView>
  );
});
