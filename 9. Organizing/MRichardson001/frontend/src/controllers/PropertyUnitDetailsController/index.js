import React from "react";
import get from "lodash/get";
import PropertyUnitDetailsView from "../../components/PropertyUnitDetailsView";
import PropertyUnitFeatureView from "../../components/PropertyUnitFeatureView";

import styles from './styles.module.css';
import { personaColorStyle } from "../../helpers/property/persona";

// @TODO: add features
function PropertyUnitDetails(props) {
  if (!props.detailsOpen) {
    return null;
  }
  const amenities = get(props, "unit.amenities", []).filter(
    amn => !!amn.isVisible && !!amn.displayName
  );

  return (
    <PropertyUnitDetailsView {...props}>
      <details className={styles.container}>
        <features>
          <unit-features style={personaColorStyle(props.property)} />
          <propertyUnitFeatureViewList0>
            {amenities.map((feature, indx) => (
              <PropertyUnitFeatureView key={`feature_${indx}`} {...props}>
                <value>{feature.displayName}</value>
              </PropertyUnitFeatureView>
            ))}
          </propertyUnitFeatureViewList0>
        </features>
      </details>
    </PropertyUnitDetailsView>
  );
}

export default PropertyUnitDetails;
