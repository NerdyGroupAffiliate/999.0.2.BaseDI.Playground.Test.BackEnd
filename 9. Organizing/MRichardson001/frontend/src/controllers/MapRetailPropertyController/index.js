import React from "react";
import { graphql, compose } from "react-apollo";
import get from "lodash/get";
import { propertyAttributesQuery } from "../../graphql/queries/propertyAttributes";
import { withRouter } from "react-router-dom";
import styles from "./styles.module.css";
import GetPropertyFullRoute from "../../helpers/get-full-property-route";

const MapRetailProperty = props => {
  const {
    property: {
      uid,
      data: { name, address, primary_property_image, retail_space_sqft }
    }
  } = props;
  const units = get(
    props,
    "property.data.residential_unit_count"
  );
  return (
    <div className={styles.property}>
      <div className={styles.imageWrapper}>
        <img
          src={primary_property_image.url}
          className={styles.image}
          alt={primary_property_image.alt || "Property"}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{address}</p>
        <h4 className={styles.unitsPhrase}>Number of Residential Units</h4>
        <p className={styles.unitsCount}>{units || 0}</p>
        <h4 className={styles.sqftPhrase}>Retail Space Available (sqft)</h4>
        <p className={styles.sqftCount}>
          {retail_space_sqft ? retail_space_sqft.toLocaleString() || 0 : ""}
        </p>

        <a
          href={`${GetPropertyFullRoute(props.property, props.appdata)}/${uid}`}
          className={styles.viewProperty}
          onClick={e => {
            if (e && e.preventDefault) {
              e.preventDefault();
            }
            props.history.push(`${GetPropertyFullRoute(props.property, props.appdata)}/${uid}`);
          }}
        >
          View Property
        </a>
      </div>
    </div>
  );
};

export default compose(
  graphql(propertyAttributesQuery, {
    name: "attributesQuery",
    options: props => ({
      variables: {
        id: String(props.property.data.amli_id)
      }
    })
  })
)(withRouter(MapRetailProperty));
