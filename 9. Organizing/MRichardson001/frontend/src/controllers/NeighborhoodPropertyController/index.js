import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import NeighborhoodPropertyView from "../../components/NeighborhoodPropertyView";
import { propertyAttributesQuery } from "../../graphql/queries/propertyAttributes";
import { graphql } from "react-apollo";

import styles from "./styles.module.css";

function neighborhoodPropertyMobileModal(props) {
  const { property } = props;

  if (!property.data) {
    return null;
  }
  const name = get(property, "data.name");
  const pricing =
    get(props, "property.attributes.minPrice") ||
    get(props, "attributesQuery.propertyAttributes.minPrice");
  const minBeds =
    get(props, "property.attributes.minBeds") ||
    get(props, "attributesQuery.propertyAttributes.minBeds");
  const maxBeds =
    get(props, "property.attributes.maxBeds") ||
    get(props, "attributesQuery.propertyAttributes.maxBeds");

  const _renderConfiguration = (minBeds, maxBeds) => {
    if (minBeds === maxBeds) {
      return minBeds === 0 ? "Studio" : `${minBeds} Bedroom`;
    } else {
      return `${
        minBeds === 0 ? "Studio" : `${minBeds} Bedroom`
      } - ${maxBeds} Bedroom`;
    }
  };

  const getRoute = property => {
    const subregionUid = get(property, "data.sub-regions[0].sub-region.uid");
    if (subregionUid) {
      return `${props.location.pathname}/${subregionUid}-apartments/${
        property.uid
      }`;
    }
    return `/${property.uid}`;
  };
  const preLeaseDate = get(property, "data.pre-lease_start_date");
  const moveInDate = get(property, "data.move_in_date");

  return (
    <NeighborhoodPropertyView>
      <wrapper>
        <link
          href={getRoute(property)}
          onTouchStart={e => {
            if (e && e.stopPropagation) {
              e.stopPropagation();
            }
            props.history.push(getRoute(property));
          }}
          onMouseDown={e => {
            if (e && e.stopPropagation) {
              e.stopPropagation();
            }
            props.history.push(getRoute(property));
          }}
          className={styles.link}
        >
          <name>{name}</name>
          <configuration className={styles.configuration}>
            {minBeds !== undefined &&
            minBeds !== null &&
            (minBeds !== 0 || maxBeds !== 0 || pricing !== 0) ? (
              _renderConfiguration(minBeds, maxBeds)
            ) : (
              <div className="af-class-property-card-bedroom">
                <p style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "14px" }}>Move In Start Date:</span>
                  <span style={{ fontSize: "14px", color: "#787878" }}>
                    {moveInDate}
                  </span>
                </p>
              </div>
            )}
          </configuration>
          <pricing className={styles.pricing}>
            {pricing ? (
              `Starting at $${pricing}`
            ) : (
              <div className="af-class-property-card-bedroom">
                <p style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "14px" }}>
                    Pre-Lease Start Date:
                  </span>
                  <span style={{ fontSize: "14px", color: "#787878" }}>
                    {preLeaseDate}
                  </span>
                </p>
              </div>
            )}
          </pricing>
        </link>
      </wrapper>
    </NeighborhoodPropertyView>
  );
}

export default withRouter(
  graphql(propertyAttributesQuery, {
    name: "attributesQuery",
    options: props => ({
      variables: {
        id: String(props.property.data.amli_id)
      }
    })
  })(neighborhoodPropertyMobileModal)
);
