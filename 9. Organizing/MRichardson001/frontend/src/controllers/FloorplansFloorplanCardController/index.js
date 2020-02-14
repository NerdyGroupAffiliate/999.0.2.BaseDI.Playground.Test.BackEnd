import React, { useState } from "react";

import get from "lodash/get";
import endsWith from "lodash/endsWith";
import { withRouter } from "react-router";
import FloorplansFloorplanCardView from "../../components/FloorplansFloorplanCardView";
import { formatDollar } from "../../helpers/utils";
import ArrowRight from "../../assets/icons/icon-arrow--long--right--dark.svg";
import placeholderImage from "../../assets/images/floorplan-placeholder@2x.jpg";
import BathLogo from "../../assets/icons/Bath3x.png";
import styles from "./styles.module.css";
import ProcessFloorplanName from "../../helpers/process-floorplan-name";
import {
  personaBackgroundColorStyle,
  personaColorStyle
} from "../../helpers/property/persona";
import { getQuote } from "../../helpers/property/get-quote";
import Helmet from "react-helmet-async";
import Info from "../../assets/icons/help.png";
import "./index.css";
import pageOpener from "../../helpers/page-opener";
import usePhone from "../../helpers/hooks/usePhone";

function FloorplansFloorplanCard(props) {
  const { floorplan, property, moveInDate, size } = props;
  const name = get(floorplan, "cms.data.name");
  const image = get(floorplan, "cms.data.main_image.url");
  const primaryColor = get(props, "property.data.primary_color");
  const entrataLink = getQuote(property.data, floorplan, moveInDate);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const regularUnitCount = get(floorplan, "returnedRegularUnitCount");
  const affordableUnitCount = get(floorplan, "returnedAffordableUnitCount");
  const allFloorPlanUnitsAreAffordable = get(floorplan, "allFloorPlanUnitsAreAffordable");
  const hasAffordableUnits = get(property, "data.has_affordable_units");
  const totalAvailableUnits = regularUnitCount + affordableUnitCount;
  const goDark = get(property, "data.go_dark", "");
  const [dniPhone, hrefPhone] = usePhone(
    get(property, "data.phone"),
    get(property, "data.entrataPropertyId"),
    props
  );

  let onlyAffordableUnits;
  if (allFloorPlanUnitsAreAffordable) {
    onlyAffordableUnits = true;
  }

  return (
    <React.Fragment>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org/",
              "@type": "Apartment",
              "name": "${floorplan.floorplanName}",
              "image": "${image ? image : placeholderImage}",
              "numberOfRooms": "${floorplan.bedroomMax}",
              "floorsize": {
                "@type": "QuantitativeValue",
                "minValue": "${floorplan.sqftMin}",
                "maxValue": "${floorplan.sqFtMax}",
                "unitCode": "sqft"
              }
            }
          `}
        </script>
      </Helmet>
      <FloorplansFloorplanCardView>
        <wrapper className={styles.wrapper}>
          <card-header
            className={styles.cardHeader}
            style={personaBackgroundColorStyle(props.property)}
          >
            <name className={styles.name}>{ProcessFloorplanName(floorplan.floorplanName, floorplan.cms)}</name>
            {
              !onlyAffordableUnits && goDark !== "Yes"
                ?
                <price-wrapper className={styles.priceWrapper}>
                  <price-label/>
                  <price className={styles.price}>
                    ${formatDollar(floorplan.priceMin, 0)}
                  <div className={styles.disclaimerContainer}>
                    <img
                      tabIndex={0}
                      onClick={() => setShowDisclaimer(!showDisclaimer)}
                      onBlur={() => setShowDisclaimer(false)}
                      onKeyDown={e => {
                        if (e.keyCode === 13) {
                          setShowDisclaimer(!showDisclaimer)
                        }
                        if (e.keyCode === 27) {
                          setShowDisclaimer(false)
                        }
                      }}
                      src={Info}
                      alt="more info"
                      />
                    <div
                      className={[
                        showDisclaimer
                        ? styles.showDisclaimer
                        : '',
                        styles.priceDisclaimer
                      ].join(" ")}
                      >
                      ”Starting at” reflects pricing for the lowest rent of an available unit within this floorplan. If there is no availability, the starting price reflects the current market rate.
                    </div>
                    <div
                      className={[
                        showDisclaimer
                        ? styles.showDisclaimer
                        : '',
                        styles.toolTipArrow
                      ].join(" ")}
                      />
                  </div>
                  </price>
                </price-wrapper>
               : null
            }
          </card-header>
          {image ? (
            <image src={image} alt={name} className={styles.plant} />
          ) : (
            <image
              src={placeholderImage}
              alt="Images Coming Soon"
              className={styles.plant}
            />
          )}
          <beds className={styles.beds}>
            {size === "0"
              ? "Studio"
              : `${size} Bed`}
          </beds>
          <bath-logo>
            <img
              src={BathLogo}
              alt="bathtub icon"
              className={styles.bathLogo}
            />
          </bath-logo>
          <bath className={styles.baths}>{`${
            floorplan.bathroomMin
          } Bath`}</bath>
          {
            floorplan.sqftMin !== floorplan.sqFtMax ?
              <min-sqft className={styles.sqftmin}>
                {floorplan.sqftMin ? floorplan.sqftMin.toLocaleString() : ""}
              </min-sqft> :
            null
          }
          {
            floorplan.sqftMin !== floorplan.sqFtMax ?
              <sqft-arrow className={styles.rightArrow}>
                <img src={ArrowRight} alt="right-arrow" />
              </sqft-arrow> :
            null
          }
          <max-sqft className={styles.sqftmax}>
            {floorplan.sqFtMax ? floorplan.sqFtMax.toLocaleString() : ""}
          </max-sqft>
          <bottom-container style={goDark === "Yes" ? {justifyContent: 'flex-end'} : null}>
            {
              goDark !== "Yes"
                ? <available-units className={styles.availableLabel}>
                    <span className={styles.available}>
                      {totalAvailableUnits} Available Unit{(totalAvailableUnits > 1 || totalAvailableUnits === 0) ? 's': ''}
                    </span>
                    {
                      affordableUnitCount > 0
                        ? <span className={styles.asterisk}>*</span>
                        : null
                    }
                  </available-units>
                : null
            }
            { goDark !== "Yes" && totalAvailableUnits > 0 ? (
              <view
                className={styles.view}
                style={personaColorStyle(props.property)}
              >
                <a
                  style={{ color: primaryColor }}
                  href={ entrataLink ? entrataLink : `floorplan/${floorplan.floorplanId}`}
                  onClick={e => {
                    if (e) {
                      e.preventDefault();
                    }
                    if (entrataLink){
                      pageOpener(entrataLink);
                    } else {
                      props.history.push(
                        `floorplan/${floorplan.floorplanId}`,
                        {
                          moveInDate: props.moveInDate,
                          floorplan: floorplan.floorplanName
                        }
                      );
                    }
                  }}
                >
                  Get Quote
                </a>
                <svg
                  className={styles.buttonArrow}
                  xmlns="http://www.w3.org/2000/svg"
                  width="8px"
                  height="13px"
                  viewBox="0 0 13.13 22.02"
                >
                  <g fill={primaryColor}>
                    <polygon
                      points="0 19.82 2.19 22.02 13.13 11.01 2.19 0 0 2.2 8.68 11.01 0 19.82"
                      className="af-class-arrow--chevron"
                    />
                  </g>
                </svg>
              </view>
            ) : goDark === "Yes"
              ? <view
                  className={styles.view}
                  style={personaColorStyle(props.property)}
                >
                  <a
                    style={{ color: primaryColor }}
                    href={hrefPhone}
                  >
                    Contact Office
                  </a>
                </view>
              : null
            }
          </bottom-container>
        </wrapper>
      </FloorplansFloorplanCardView>
    </React.Fragment>
  );
}

export default withRouter(FloorplansFloorplanCard);
