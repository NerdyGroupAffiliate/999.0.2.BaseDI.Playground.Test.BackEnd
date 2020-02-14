import React, { useState } from "react";
import get from "lodash/get";
import { withRouter } from "react-router";
import Helmet from "react-helmet-async";
import FloorplanCardView from "../../components/FloorplanCardView";
import ProcessFloorplanName from "../../helpers/process-floorplan-name";
import placeholderImage from "../../assets/images/floorplan-placeholder@2x.jpg";
import Info from "../../assets/icons/help.png";
import styles from "./styles.module.css";
import "./index.css";

function FloorplanCard(props) {
  const { data } = props;

  const name = get(data, "floorplanName");
  const price = get(data, "priceMin");
  const beds = get(data, "bedroomMax");
  const baths = get(data, "bathroomMin");
  const sqftMin = get(data, "sqftMin");
  const sqftMax = get(data, "sqFtMax");
  const path = get(props, "location.pathname");
  const mainImage = get(data, "cms.data.main_image.url");
  const mainImageAlt = get(data, "cms.data.main_image.alt");
  const primaryColor = get(props, "property.data.primary_color");
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const goDark = get(props, "property.data.go_dark", "");

  if (!data.floorplanId) {
    return null;
  }

  return (
    <React.Fragment>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org/",
              "@type": "Apartment",
              "name": "${name}",
              "image": "${mainImage}",
              "numberOfRooms": "${beds}",
              "floorsize": {
                "@type": "QuantitativeValue",
                "minValue": "${sqftMin}",
                "maxValue": "${sqftMax}",
                "unitCode": "sqft"
              }
            }
          `}
        </script>
      </Helmet>
      <FloorplanCardView>
        <floorplan-card-container
          style={{ borderBottom: `5px solid ${primaryColor}` }}
          className={`${styles.card} ${name.toLowerCase().replace(/ /gi, '-')}`}
        >
          <card-header
            className={styles.cardHeader}
            style={{ background: primaryColor }}
            topelement={() => goDark !== "Yes" && (
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
                  className={styles.infoIcon} src={Info} alt="more info"
                />
                <div
                  className={[
                    showDisclaimer
                      ? styles.showDisclaimer
                      : '',
                    styles.priceDisclaimer
                  ].join(" ")}
                >
                  Starting at reflects pricing for the lowest rent offered for the respective floorplan. Units may or may not be available at this “Starting at” price listed. Availability can be found on the Floorplans &amp; Pricing page.
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
            )}
          >
            <floorplan-name>{ProcessFloorplanName(name, data.cms)}</floorplan-name>
            { goDark !== "Yes" && <starting className="what"/> }
            { goDark !== "Yes" && <floorplan-price>${price}</floorplan-price> }
          </card-header>
          <floorplan-image
            src={mainImage || placeholderImage}
            alt={mainImageAlt || "Images Coming Soon"}
          />
          <floorplan-bedrooms-text>
            {beds === 0 ? "Studio" : `${beds} Bedroom`}
          </floorplan-bedrooms-text>
          <floorplan-bathrooms-text>{baths} Bath</floorplan-bathrooms-text>

          {sqftMin !== sqftMax ?
          <floorplan-sqft-min>{sqftMin ? sqftMin.toLocaleString() : ''}</floorplan-sqft-min>
          : null}

          {sqftMin !== sqftMax ?
          <floorplan-sqft-max>{sqftMax ? sqftMax.toLocaleString() : ''}</floorplan-sqft-max>
          : null}

          {sqftMin === sqftMax ?
          <floorplan-sqft-max>
            {sqftMax ? sqftMax.toLocaleString() : ''}
            <style dangerouslySetInnerHTML={{__html: `\n .${name.toLowerCase().replace(/ /gi, '-')} .af-class-property-floorplan-size-arrow{\n  display: none;\n}\n` }} />
          </floorplan-sqft-max>
          : null}

          <floorplan-button className={styles.button}>
            <floorplan-button-text className={`${styles.buttonText}`}>
              <a
                style={{ color: primaryColor || "#333" }}
                href={`${path}/floorplans?size=${beds}`}
                onClick={e => {
                  if (e) {
                    e.preventDefault();
                  }
                  props.history.push(`${path}/floorplans?size=${beds}`);
                }}
              >
                View {beds === 0 ? "Studio" : `${beds} BR`} Floor Plans
              </a>
              <svg
                className={styles.buttonArrow}
                xmlns="http://www.w3.org/2000/svg"
                width="8px"
                height="13px"
                viewBox="0 0 13.13 22.02"
              >
                <g fill={primaryColor || "#333"}>
                  <polygon
                    points="0 19.82 2.19 22.02 13.13 11.01 2.19 0 0 2.2 8.68 11.01 0 19.82"
                    className="af-class-arrow--chevron"
                  />
                </g>
              </svg>
            </floorplan-button-text>
          </floorplan-button>
        </floorplan-card-container>
      </FloorplanCardView>
    </React.Fragment>
  );
}

export default withRouter(FloorplanCard);
