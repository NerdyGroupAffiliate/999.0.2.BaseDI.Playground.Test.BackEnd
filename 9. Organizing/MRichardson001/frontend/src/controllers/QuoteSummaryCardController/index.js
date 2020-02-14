import React, { useState, useEffect } from "react";

import get from "lodash/get";
import { withRouter } from "react-router-dom";
import QuoteSummaryCardView from "../../components/QuoteSummaryCardView";
import placeholderImage from "../../assets/images/floorplan-placeholder@2x.jpg";
import styles from "./styles.module.css";
import { formatDollar, canUseDOM } from "../../helpers/utils";
import getPropertyDataFromAppData from "../../helpers/property/getDataFromProps";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import MultiLineString from "../../helpers/mutli-line-string";
import usePhone from "../../helpers/hooks/usePhone";
import "./index.css";
import { applyWithQuote } from "../../helpers/property/apply";

const moment = require("moment");

function QuoteSummaryCard(props) {
  const {
    quote: {
      leaseTerm,
      startDate,
      totalRent,
      unit,
      floorPlan,
      quoteId,
      realPageQuoteId,
      quoteExpirationDate
    }
  } = props;
  const [applyLink, setApplyLink] = useState(null);

  const isExpired = moment(quoteExpirationDate).isBefore(moment());
  const property = getPropertyDataFromAppData(
    props.appdata,
    get(props, "quote.property.propertyId")
  );
  const floorPlanName = get(floorPlan, "data.name").split(" - AMLI")[0];
  const floorPlanImage = get(floorPlan, "data.main_image.url");
  const unitName = get(unit, "data.unit_number");
  const imageProps = BackgroundImageHandler(
    get(property, "data.primary_property_image")
  );
  const beds = get(unit, "bedrooms");
  const baths = get(unit, "bathrooms");
  const sqft = get(unit, "squareFeet");
  const floor = get(unit, "floor");
  const amli_id = get(props, "quote.property.propertyId");
  const prismicProperty = get(props, "appdata.properties").find(
    prop => prop.data.amli_id === amli_id
  );

  const [dniPhone, hrefPhone] = usePhone(
    get(property, "data.phone"),
    get(property, "data.entrataPropertyId"),
    props
  );
  let fullRoute;
  const getFullRoute = () => {
    const subregionUid = get(property, "data.sub-regions[0].sub-region.uid");
    if (subregionUid) {
      const region =
        props.appdata.regions.find(reg =>
            reg.data["sub-regions"].find(sr =>
                sr["sub-region"].uid === subregionUid
          ));
          if (region) {
            fullRoute = `/apartments/${region.uid}/${subregionUid}-apartments`
            return fullRoute
          }
    }
    return null
  }
  useEffect(() => {
    if (!applyLink) {
      getLinkObject();
    }
   }, [])

   const getLinkObject = async e => {
     if (props && props.client && props.quote && realPageQuoteId) {
       const linkData = await applyWithQuote(props.client, realPageQuoteId, true);
       setApplyLink(linkData);
     }
   }

  return (
    <QuoteSummaryCardView>
      <property>
        <property-image {...imageProps} className={styles.propertyImage} />
        <property-details>
          {property && property.data && (
            <property-name
              tabIndex={0}
              className={styles.propertyName}
              onClick={() => props.history.push(`${getFullRoute()}/${prismicProperty.uid}`)}
              onKeyDown={e => e.keyCode === 13 && props.history.push(`${getFullRoute()}/${prismicProperty.uid}`)}
            >
              {property.data.name}
            </property-name>
          )}
          {property && property.data && (
            <property-address href={null} className={styles.notClickableLink}>
              {MultiLineString(property.data.address)}
            </property-address>
          )}
          {dniPhone ? (
            <property-phone href={hrefPhone} className={styles.clickableLink}>
              {dniPhone}
            </property-phone>
          ) : null}
        </property-details>
      </property>
      <floorplan-detials>
        <floorplan-name>{floorPlanName}</floorplan-name>
        <unit-name className={styles.unitName}>{unitName}</unit-name>
        {floorPlanImage ? (
          <plant-image src={floorPlanImage} className={styles.plant} />
        ) : (
          <plant-image
            src={placeholderImage}
            alt="Images Coming Soon"
            className={styles.plant}
          />
        )}
        {beds ? (
          <beds className={styles.beds}>
            {+beds === 0 ? "Studio" : `${+beds} Bedroom${+beds > 1 ? "s" : ""}`}
          </beds>
        ) : null}
        {baths ? (
          <baths className={styles.baths}>{`${parseFloat(baths)} Bath${
            parseFloat(baths) > 1 || parseFloat(baths) === 0 ? "s" : ""
          }`}</baths>
        ) : null}
        {sqft ? (
          <sqft className={styles.sqft}>
            {sqft ? sqft.toLocaleString() : ""} sqft
          </sqft>
        ) : null}
        {floor ? <floor className={styles.floor}>Floor {floor.toLocaleString()}</floor> : null}
        {!isExpired ? (
          <quote-data-container>
            <lease-container className={styles.quoteDataItem}>
              <lease-period>{leaseTerm} Months</lease-period>
            </lease-container>
            <move-in-container className={styles.quoteDataItem}>
              <move-in-date>
                {moment(startDate).format("MM/DD/YY")}
              </move-in-date>
            </move-in-container>
            {!props.detailsPage ? (
              <monthly-container className={styles.quoteDataItem}>
                <monthly>${formatDollar(totalRent, 0)}</monthly>
              </monthly-container>
            ) : null}
          </quote-data-container>
        ) : (
          <quote-data-container
            topelement={() => {
              if (isExpired) {
                return (
                  <div className={styles.expiredContainer}>
                    <span className={styles.expired}>Quote Expired</span>
                  </div>
                );
              }
              return null;
            }}
          />
        )}
        {!props.detailsPage ? (
          <details-container className={styles.bottomContainer}>
            {!isExpired ? (
              <view-details-container>
                <view-details
                  className={styles.details}
                  tabIndex={0}
                  onKeyDown={e =>
                    e.keyCode === 13 && props.history.push(`/quote/${quoteId}`)
                  }
                  onClick={e => {
                    if (e) {
                      e.preventDefault();
                    }
                    props.history.push(`/quote/${quoteId}`);
                  }}
                >
                  <div className="af-class-link--text">View Quote Details</div>
                  <svg
                    className={styles.buttonArrow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="8px"
                    height="13px"
                    viewBox="0 0 13.13 22.02"
                  >
                    <g fill="#018094">
                      <polygon
                        points="0 19.82 2.19 22.02 13.13 11.01 2.19 0 0 2.2 8.68 11.01 0 19.82"
                        className="af-class-arrow--chevron"
                      />
                    </g>
                  </svg>
                </view-details>
              </view-details-container>
            ) : null}

            <apply
              href={
                isExpired
                  ? `${getFullRoute()}/${property.uid}/floorplans`
                  : applyLink ? applyLink.href : "#"
              }
              onClick={async e => {
                if (e && e.preventDefault) {
                  e.preventDefault();
                }
                if (isExpired) {
                  props.history.push(`${getFullRoute()}/${property.uid}/floorplans`);
                } else {
                  if (canUseDOM && applyLink && applyLink.href) {
                    window.open(applyLink.href)
                  }
                }
              }}
              className={styles.apply}
            >
              {isExpired ? "Renew" : "Apply"}
            </apply>
          </details-container>
        ) : null}
      </floorplan-detials>
    </QuoteSummaryCardView>
  );
}

export default withRouter(QuoteSummaryCard);
