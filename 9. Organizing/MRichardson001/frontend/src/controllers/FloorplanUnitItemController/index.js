import React, { useState } from "react";
import { withRouter } from "react-router";
import get from "lodash/get";
import FloorplanUnitItemView from "../../components/FloorplanUnitItemView";
import { formatDollar } from "../../helpers/utils";

import Cat from "../../assets/icons/icon-cat.svg";
import Dog from "../../assets/icons/icon-dog.svg";
import Info from "../../assets/icons/help.png";
import "./index.css";
import styles from "./styles.module.css";
import { personaColorStyle } from "../../helpers/property/persona";
import usePhone from "../../helpers/hooks/usePhone";

const moment = require("moment");

const renderPets = pets => {
  switch (pets) {
    case "Cats": {
      return (
        <span className={styles.row}>
          <img src={Cat} alt="cat" />
        </span>
      );
    }
    case "Dogs": {
      return (
        <span className={styles.row}>
          <img src={Dog} alt="dog" />
        </span>
      );
    }
    case "No": {
      return <span className={styles.row}>Not allowed</span>;
    }
    default: {
      return (
        <span className={styles.row}>
          <img src={Cat} alt="cat" />
          <img src={Dog} alt="dog" />
        </span>
      );
    }
  }
};

const getFirstAvailableDate = props => {
  let availableOn =
    props.unit && props.unit.rpAvailableDate
      ? moment(props.unit.rpAvailableDate)
      : moment();

  if (availableOn.isBefore(moment())) {
    availableOn = moment();
  }
  return availableOn.clone().toDate();
};

const getStartDate = props => {
  let availableOn =
    props.unit && props.unit.rpAvailableDate
      ? moment(props.unit.rpAvailableDate)
      : moment();
  if (availableOn.isBefore(moment())) {
    availableOn = moment();
  }
  const selectedDate = props.filters.date;
  const isMoreThan30 = selectedDate.diff(availableOn, "days") > 28;
  const isBeforeAvailable = availableOn.isAfter(selectedDate);
  if (isBeforeAvailable) {
    return availableOn.clone().toDate();
  } else if (isMoreThan30) {
    return availableOn
      .clone()
      .add(28, "days")
      .toDate();
  }
  return selectedDate.clone().toDate();
};
function FloorplanUnitItem(props) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [showPetsDisclaimer, setShowPetsDisclaimer] = useState(false);
  const [showAvailableDisclaimer, setShowAvailableDisclaimer] = useState(false);
  const [showPriceDisclaimer, setShowPriceDisclaimer] = useState(false);

  const { unit } = props;
  const isAffordable = get(props, "unit.affordableUnit");
  const navParams = props.match.params;
  const property = get(props, "property") || get(props, "page.data");
  const [dniPhone, hrefPhone] = usePhone(
    get(property, "data.phone"),
    get(property, "data.entrataPropertyId"),
    props
  );

  const sqfeet = get(props, 'unit.squareFeet');


  const quotingStartDate = get(props, 'unit.pricing.QuotingDisplayStartDate');
  const quotingEndDate = get(props, 'unit.pricing.QuotingDisplayEndDate');
  return (
    <FloorplanUnitItemView detailsOpen={detailsOpen} {...props}>
      <name className={styles.name}>
        {unit.buildingNumber} - {unit.prismicUnitNumber}
      </name>
      <pets>
        <pets-label className={styles.petsLabelWrapper}>
          Pets
          <div className={styles.disclaimerContainer}>
            <img
              tabIndex={0}
              onClick={() => setShowPetsDisclaimer(!showPetsDisclaimer)}
              onBlur={() => setShowPetsDisclaimer(false)}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  setShowPetsDisclaimer(!showPetsDisclaimer);
                }
                if (e.keyCode === 27) {
                  setShowPetsDisclaimer(false);
                }
              }}
              className={styles.infoIcon}
              src={Info}
              alt="more info"
            />
            <div
              className={[
                showPetsDisclaimer ? styles.showPetsDisclaimer : "",
                styles.disclaimerText,
                styles.petsDisclaimerText
              ].join(" ")}
            >
              <p>
                - Restrictions apply, including quantity, size, and breed. There
                is a limit of 2 animals per apartment.
              </p>
              <p>
                - In general, only common, domestic, nonaggressive animals will
                be accepted. No exotic animals (such as reptiles, ferrets, pot
                belly pigs) are permitted.
              </p>
              <p>
                - Birds, if permitted, must be caged at all times. Fish tanks,
                if permitted, may not exceed 40 gallons and must be properly
                supported.
              </p>
              <p>- Restriction will not be applied to assistance animals.</p>
              <p>
                - Dogs, if permitted: at a minimum, residents will not be
                allowed to have a dog that is a Pit Bull, Rottweiler, Doberman,
                Bull Terrier, Chow-Chow, and any dog that manager believes, in
                its sole discretion, is a cross breed of or related to any of
                these breeds.
              </p>
              <p>
                - We may also restrict any breed that becomes known as
                aggressive, in our sole discretion. Other animals may be
                excluded. We may require the removal of any animal that shows
                aggressive behavior. Animal rules apply to all animals at the
                Community, including those animals that are visiting or are
                temporary.
              </p>
            </div>
            <div
              className={[
                showPetsDisclaimer ? styles.showPetsDisclaimer : "",
                styles.toolTipArrow
              ].join(" ")}
            />
          </div>
        </pets-label>
        <pets-value>{renderPets(unit.pets)}</pets-value>
      </pets>
      <floor>
        <floor-value>{unit.floor.toLocaleString()}</floor-value>
      </floor>
      <movein>
        <movein-label className={styles.moveInlabelWrapper}>
          Available
          <div className={styles.disclaimerContainer}>
            <img
              tabIndex={0}
              onClick={() =>
                setShowAvailableDisclaimer(!showAvailableDisclaimer)
              }
              onBlur={() => setShowAvailableDisclaimer(false)}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  setShowAvailableDisclaimer(!showAvailableDisclaimer);
                }
                if (e.keyCode === 27) {
                  setShowAvailableDisclaimer(false);
                }
              }}
              className={styles.infoIcon}
              src={Info}
              alt="more info"
            />
            <div
              className={[
                showAvailableDisclaimer ? styles.showAvailableDisclaimer : "",
                styles.disclaimerText,
                styles.availableDisclaimerText
              ].join(" ")}
            >
              Availability of units is subject to change without notice.
            </div>
            <div
              className={[
                showAvailableDisclaimer ? styles.showAvailableDisclaimer : "",
                styles.toolTipArrow
              ].join(" ")}
            />
          </div>
        </movein-label>
        <movein-value>
          {moment(quotingStartDate).isBefore(moment())
            ? "Now"
            : moment(quotingStartDate).format("MMM Do")}
          {quotingEndDate ? ` - ${moment(quotingEndDate).format("MMM Do")}` : null}
        </movein-value>
      </movein>
      <lease>
        <lease-value />
      </lease>
      {!sqfeet && unit.sqftMax !== unit.sqftMin ? (
        <sqft>
          <sqft-max>{unit.sqftMax}</sqft-max>
          <sqft-min>{unit.sqftMin}</sqft-min>
        </sqft>
      ) : (
        <sqft className={`unit${unit.prismicUnitNumber}`}>
          <sqft-max>
            {sqfeet || unit.sqftMax}
            <style
              dangerouslySetInnerHTML={{
                __html: `\n .unit${
                  unit.prismicUnitNumber
                } .af-class-div-block-215 > div:nth-child(1) {\n  display: none;\n}\n`
              }}
            />
          </sqft-max>
        </sqft>
      )}
      {!isAffordable ? (
        <price>
          <price-label className={styles.labelWrapper}>
            Starting at
            <div className={styles.disclaimerContainer}>
              <img
                tabIndex={0}
                onClick={() => setShowPriceDisclaimer(!showPriceDisclaimer)}
                onBlur={() => setShowPriceDisclaimer(false)}
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    setShowPriceDisclaimer(!showPriceDisclaimer);
                  }
                  if (e.keyCode === 27) {
                    setShowPriceDisclaimer(false);
                  }
                }}
                className={styles.infoIcon}
                src={Info}
                alt="more info"
              />
              <div
                className={[
                  showPriceDisclaimer ? styles.showPriceDisclaimer : "",
                  styles.disclaimerText,
                  styles.priceDisclaimerText
                ].join(" ")}
              >
                <p>
                  - Quoted rent is for base apartment rent only for new
                  residents on a 12-month lease term.
                </p>
                <p>
                  - Additional rent or related fees and costs are excluded (such
                  as, animals, garages, utilities, etc.).
                </p>
                <p>
                  - Pricing may vary based on floor plan, unit availability and
                  term of lease. Conditions, terms, rental rates and
                  availability are subject to change without notice.
                </p>
                <p>
                  - Qualification for any concession or other rent special may
                  be subject to other terms and conditions.
                </p>
                <p>- Contact the management office for details.</p>
              </div>
              <div
                className={[
                  showPriceDisclaimer ? styles.showPriceDisclaimer : "",
                  styles.toolTipArrow
                ].join(" ")}
              />
            </div>
          </price-label>
          <price-value>${formatDollar(unit.rent, 0)}</price-value>
        </price>
      ) : null}
      <toggle-info
        className={styles.toggle}
        tabIndex={0}
        onKeyDown={e => e.keyCode === 13 && setDetailsOpen(!detailsOpen)}
        onClick={() => setDetailsOpen(!detailsOpen)}
      >
        <toggle-label>{detailsOpen ? "Close" : "Show"}</toggle-label>
        <toggle-icon
          className={[
            styles.toggleIcon,
            !detailsOpen ? styles.detailsOpen : ""
          ].join(" ")}
        />
      </toggle-info>
      <quote
        className={styles.quote}
        tabIndex={isAffordable ? "" : 0}
        onKeyDown={e => {
          if (!isAffordable) {
            e.keyCode === 13 &&
              props.history.push(
                `${navParams.amliId}/unit/${unit.unitId}`,
                {
                  startDate: getStartDate(props),
                  availableDate: getFirstAvailableDate(props),
                  quotingEndDate
                }
              );
          }
        }}
        onClick={() => {
          if (!isAffordable) {
            props.history.push(
              `${navParams.amliId}/unit/${unit.unitId}`,
              {
                startDate: getStartDate(props),
                availableDate: getFirstAvailableDate(props),
                quotingEndDate
              }
            );
          }
        }}
      >
        <quote-label style={personaColorStyle(property)}>
          {isAffordable ? (
            <a href={hrefPhone} style={personaColorStyle(property)}>
              Contact Office
            </a>
          ) : (
            "Get Quote"
          )}
        </quote-label>
      </quote>
    </FloorplanUnitItemView>
  );
}

export default withRouter(FloorplanUnitItem);
