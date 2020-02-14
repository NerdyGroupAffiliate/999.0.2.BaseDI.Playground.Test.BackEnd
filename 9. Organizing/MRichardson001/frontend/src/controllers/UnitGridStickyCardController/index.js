import React, { useEffect } from "react";
import get from "lodash/get";
import UnitGridStickyCardView from "../../components/UnitGridStickyCardView";
import placeholderImage from "../../assets/images/floorplan-placeholder@2x.jpg";
import styles from "./styles.module.css";
import "./index.css";
import { EventViewUnit } from "../../helpers/plugins/guestAnalytics";

// const getFloorplanImages = props => {
//   const main_image = get(
//     props,
//     "floorplanQuery.floorplan.cms.data.main_image.url"
//   );
//   const images = get(props, "floorplanQuery.floorplan.cms.data.images", [])
//     .filter(img => !!img && !!img.image && !!img.image.url)
//     .map(img => img.image.url);
//   if (main_image) {
//     images.unshift(main_image);
//   }
//   return images;
// };

function UnitGridStickyCard(props) {
  if (props.floorplanQuery.loading || props.unitQuery.loading) {
    return null;
  }

  const floorplanImage = get(
    props,
    "floorplanQuery.floorplan.cms.data.main_image.url"
  );
  const floorplanName = get(props, "floorplanQuery.floorplan.cms.data.name");
  const floorplan_name = floorplanName.replace(
    ` - ${props.property.data.name}`,
    ""
  );
  const unit = get(props, "unitQuery.unit");
  const unit_name = get(unit, "unit.cms.data.unit_number");
  const unit_image = get(unit, "unit.cms.data.images")
    ? get(unit, "unit.cms.data.images")[0]
    : null;
  const unit_type = get(unit, "unit.unitType", {});
  const unit_sqft = get(unit, "unit.sqft");
  const unit_floor = get(unit, "unit.floor");
  useEffect(() => {
    const { amliPropertyId } = props.property.data;
    const { amliId, unitId } = props.match.params;
    const { sqft } = get(props, 'unitQuery.unit.unit', {});
    const { bedrooms } = get(props, 'unitQuery.unit.unit.unitType', {});
    EventViewUnit(
      amliPropertyId,
      amliId,
      unitId,
      sqft,
      bedrooms
    );
  }, [])
  return (
    <UnitGridStickyCardView>
      <floorplan-name>{floorplan_name}</floorplan-name>
      <unit-name>{unit_name}</unit-name>
      <unit-image
        className={styles.unitImage}
        src={floorplanImage || get(unit_image, "image.url") || placeholderImage}
      />
      {unit_type.bedrooms !== undefined || unit_type.bedroom !== null ? (
        <unit-beds>
          {unit_type.bedrooms === 0
            ? "Studio"
            : `${unit_type.bedrooms} Bedroom`}
        </unit-beds>
      ) : (
        <unit-beds />
      )}
      {unit_type.bathrooms !== undefined || unit_type.bathrooms !== null ? (
        <unit-baths>{`${unit_type.bathrooms} Bath`}</unit-baths>
      ) : (
        <unit-baths />
      )}
      <unit-area>{`${
        unit_sqft ? unit_sqft.toLocaleString() : ""
      } sqft`}</unit-area>
      {unit_floor ? (
        <unit-floor className={styles.floor}>Floor {unit_floor.toLocaleString()}</unit-floor>
      ) : (
        <unit_floor />
      )}
      <back-container
        className={styles.backContainer}
        tabIndex={0}
        onKeyDown={e => e.keyCode === 13 && props.history.goBack()}
        onClick={() => props.history.goBack()}
      >
        <back-label>Floor Plans</back-label>
        <back-icon />
      </back-container>
    </UnitGridStickyCardView>
  );
}

export default UnitGridStickyCard;
