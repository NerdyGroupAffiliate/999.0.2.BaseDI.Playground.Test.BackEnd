import React, { useEffect, useState } from "react";
import { graphql, compose } from "react-apollo";
import FloorplansCardContainerView from "../../components/FloorplansCardContainerView";
import FloorplansFloorplanCardView from "../../components/FloorplansFloorplanCardView";
import { propertyFloorplansSummary } from "../../graphql/queries/propertyFloorplansSummary";
import get from "lodash/get";
import styles from "./styles.module.css";
import { propertyAttributesQuery } from "../../graphql/queries/propertyAttributes";
import defaultBanner from "../../assets/images/default-floorplan-banner.jpg";
import Spinner from "../Spinner";

const moment = require("moment");

const beds = {
  0: "Studio",
  1: "1 Bedroom",
  2: "2 Bedroom",
  3: "3 Bedroom",
  4: "4 Bedroom",
  5: "5 Bedroom"
};

const renderSizeTitle = size =>
  !size ? size : size === 0 ? "Studios" : `${size} Bedroom`;

function FloorplansCardContainer(props) {
  const interiorImages = get(props, "property.data.interior", []);
  const [isRefetching, setRefething] = useState(false);
  useEffect(() => {
    if (
      props.propertyFloorplansSummary &&
      !props.propertyFloorplansSummary.loading
    ) {
      setRefething(true);
      props.propertyFloorplansSummary
        .refetch({
          amliPropertyId: props.property.data.amli_id,
          propertyId: props.property.id,
          moveInDate: moment(props.filters.date).format("YYYY-MM-DD")
        })
        .then(() => setRefething(false));
    }
  }, [props.filters.date]);

  const floorplans =
    get(props, "propertyFloorplansSummary.propertyFloorplansSummary") || [];
  const loading = get(props, "propertyFloorplansSummary.loading", false);
  const size = get(props, "filters.size");
  const showAll = get(props, "filters.showAll");
  const min = get(props, "attributesQuery.propertyAttributes.minBeds");
  const max = get(props, "attributesQuery.propertyAttributes.maxBeds");
  const allSizes = Object.keys(beds).filter(key => key >= min && key <= max);
  const primaryColor = get(props, "property.data.primary_color");
  const allAvailableSizes = allSizes
    .map(size =>
      floorplans.filter(
        fp =>
          (fp.bedroomMax === +size || fp.bedroomMin === +size) &&
          fp.isFloorplanActive
      ).length > 0
        ? size
        : null
    )
    .filter(it => !!it);

  return (
    <React.Fragment>
      {loading || isRefetching ? (
        <Spinner propertyColor={primaryColor} />
      ) : null}
      {!loading &&
        !isRefetching &&
        (showAll ? (
          allAvailableSizes.map((floorplanSize, index) => (
            <FloorplansCardContainerView key={`card-container-${index}`}>
              <banner
                className={styles.banner}
                src={
                  interiorImages[floorplanSize]
                    ? interiorImages[floorplanSize].image.url
                    : defaultBanner
                }
                alt={
                  interiorImages[floorplanSize]
                    ? interiorImages[floorplanSize].caption
                    : "AMLI Interior"
                }
                srcSet={
                  interiorImages[floorplanSize]
                    ? interiorImages[floorplanSize].image.url
                    : defaultBanner
                }
              />
              <title className={styles.title}>
                {renderSizeTitle(+floorplanSize)}
              </title>
              <floorplan-grid className={styles.grid}>
                <floorplansFloorplanCardViewList0>
                  {floorplans
                    .filter(
                      fp =>
                        (fp.bedroomMax === +floorplanSize ||
                          fp.bedroomMin === +floorplanSize) &&
                        fp.isFloorplanActive
                    )
                    .sort((a, b) => +a.displayOrder - +b.displayOrder)
                    .map(floorplan => (
                      <FloorplansFloorplanCardView.Controller
                        floorplan={floorplan}
                        key={floorplan.floorplanId}
                        moveInDate={props.filters.date}
                        property={props.property}
                        size={floorplanSize}
                      />
                    ))}
                </floorplansFloorplanCardViewList0>
              </floorplan-grid>
            </FloorplansCardContainerView>
          ))
        ) : (
          <FloorplansCardContainerView>
            <banner
              className={styles.banner}
              src={interiorImages[size].image.url}
              alt={interiorImages[size].caption}
              srcSet={interiorImages[size].image.url}
            />
            <title className={styles.title}>{renderSizeTitle(size)}</title>
            <floorplan-grid className={styles.grid}>
              <floorplansFloorplanCardViewList0>
                {floorplans
                  .sort((a, b) => +a.displayOrder - +b.displayOrder)
                  .filter(
                    fp =>
                      (fp.bedroomMax === +size || fp.bedroomMin === +size) &&
                      fp.isFloorplanActive
                  )
                  .map(floorplan => (
                    <FloorplansFloorplanCardView.Controller
                      floorplan={floorplan}
                      key={floorplan.floorplanId}
                      moveInDate={props.filters.date}
                      property={props.property}
                      size={size}
                    />
                  ))}
              </floorplansFloorplanCardViewList0>
            </floorplan-grid>
          </FloorplansCardContainerView>
        ))}
    </React.Fragment>
  );
}

export default compose(
  graphql(propertyFloorplansSummary, {
    name: "propertyFloorplansSummary",
    skip: props =>
      !props.property || !props.property.data || !props.property.data.amli_id,
    options: props => ({
      variables: {
        amliPropertyId: props.property.data.amli_id,
        propertyId: props.property.id,
        moveInDate: moment(props.filters.date).format("YYYY-MM-DD")
      }
    })
  }),
  graphql(propertyAttributesQuery, {
    name: "attributesQuery",
    options: props => ({
      variables: {
        id: String(props.property.data.amli_id)
      }
    })
  })
)(FloorplansCardContainer);
