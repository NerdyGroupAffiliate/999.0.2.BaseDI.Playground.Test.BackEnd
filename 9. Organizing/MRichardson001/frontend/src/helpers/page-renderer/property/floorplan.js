import React, { useState, useEffect } from "react";
import { withRouter, generatePath } from "react-router";
import { get, split } from "lodash";
import PropertyFloorplanSliderView from "../../../components/PropertyFloorplanSliderView";
import PropertyFloorplanHeaderView from "../../../components/PropertyFloorplanHeaderView";

import "./index.css";
import FloorplanUnitItemView from "../../../components/FloorplanUnitItemView";
import { unitsQuery } from "../../../graphql/queries/unitsQuery";
import { floorplanQuery } from "../../../graphql/queries/floorplanQuery";
import { graphql, compose } from "react-apollo";
import FloorplanPoliciesView from "../../../components/FloorplanPoliciesView";
import FloorplanHeaderFilters from "../../../controllers/FloorplanHeaderFiltersController";
import Spinner from "../../../controllers/Spinner";
import { getPersonaColor } from "../../property/persona";
import { EventViewFloorPlan } from "../../plugins/guestAnalytics";
import GetParentRegion from "../../get-parent-region";
import TextWritter from "../../text-writter";
import styles from "../style.module.css";

const moment = require("moment");

const FloorplanSlicesFlat = function(props) {
  const [filters, setFilters] = useState({
    date: moment(get(props, "history.location.state.moveInDate")),
    startDate: moment(get(props, "history.location.state.moveInDate")),
    endDate: moment(get(props, "history.location.state.moveInDate")).add(
      6,
      "months"
    ),
    pets: null,
    priceMin: 0,
    priceMax: 0
  });
  const [HeaderFiltersOpen, setHeaderFiltersOpen] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  const floorplanDocId = get(props, "floorplanQuery.floorplan.cms.id", '');
  useEffect(() => {
    props.unitsQuery.refetch({
      propertyId: props.property.data.amli_id,
      pets: filters.pets,
      floorplanId: floorplanDocId,
      amliFloorplanId: props.match.params.amliId,
      moveInDate: filters.date.format("YYYY-MM-DD")
    });
    const { property, match } = props;
    EventViewFloorPlan(
      property.data.amli_id,
      match.params.amliId,
      filters.date.format("YYYY-MM-DD")
    );
  }, [filters.date, filters.pets]);

  useEffect(() => {
    const allUnits = get(props, "unitsQuery.units", []);
    let priceMax = 0;
    let priceMin = 0;

    (allUnits || []).forEach(unit => {
      if (unit.rent >= priceMax) {
        priceMax = unit.rent;
      }
      if (unit.rent <= priceMin || priceMin === 0) {
        priceMin = unit.rent;
      }
    });

    setNewFilters({
      priceMin,
      priceMax
    });
  }, [props]);

  const setNewFilters = newFilters => {
    setFilters({ ...filters, ...newFilters });
    if (!!newFilters.date && !filters.date.isSame(newFilters.date)) {
      props.history.replace({
        pathname: generatePath(props.match.path, {
          amliId: props.match.params.amliId
        }),
        state: {
          ...get(props, "history.location.state", {}),
          moveInDate: newFilters.date.toDate()
        }
      });
    }
  };

  const unitFilter = unit => {
    return (
      unit.rent <= filters.priceMax &&
      unit.rent >= filters.priceMin &&
      unit.rent >= filters.priceMin &&
      unit.affordableUnit === false
    );
  };

  const affordableUnitFilter = unit => {
    return unit.affordableUnit === true;
  };
  const { property, configs } = props;
  const primaryColor = getPersonaColor(props.property, "primary");

  const units = get(props, "unitsQuery.units") || [];
  const fullName = get(props, "floorplanQuery.floorplan.cms.data.name", "");
  const floorplanName = split(fullName, " - AMLI", 1);
  const parentRegion = GetParentRegion(property, configs.appdata);
  const regionData = props.configs.appdata.regions.find(
    reg => reg.uid === parentRegion.uid
  );
  const regionPolicy = get(
    regionData,
    "data.affordable_unit_program_policy",
    []
  ).map(ct => TextWritter(ct));
  const regularPricedUnits = units.filter(unitFilter);
  const affordableUnits = units.find(unit => unit.affordableUnit === true);

  return (
    <React.Fragment>
      <span className="floorplanRowContainer">
        <PropertyFloorplanSliderView.Controller
          floorplanId={floorplanDocId}
          filters={filters}
          setFilters={setNewFilters}
          floorplanName={floorplanName}
          {...props}
        />
        <span className="floorplanBodyContainer">
          <PropertyFloorplanHeaderView.Controller
            floorplanId={floorplanDocId}
            filtersOpen={HeaderFiltersOpen}
            setFiltersOpen={setHeaderFiltersOpen}
            filters={filters}
            setFilters={setNewFilters}
            {...props}
          />
          <FloorplanHeaderFilters
            filtersOpen={HeaderFiltersOpen}
            setFiltersOpen={setHeaderFiltersOpen}
            filters={filters}
            setFilters={setNewFilters}
            {...props}
          />
          {!props.unitsQuery || props.unitsQuery.loading ? (
            <Spinner propertyColor={primaryColor} />
          ) : (
            <React.Fragment>
              {!regularPricedUnits || regularPricedUnits.length === 0 ? (
                <div className={styles.affordablePolicyUnits}>
                  There are currently no units available at our standard market
                  rent rates.
                </div>
              ) : null}
              {units
                .filter(unitFilter)
                .slice(0, 5)
                .map(unit => (
                  <FloorplanUnitItemView.Controller
                    key={unit.unitId}
                    unit={unit}
                    filters={filters}
                    property={props.property}
                    floorplanName={floorplanName}
                  />
                ))}
              {affordableUnits ? (
                <div className={styles.affordablePolicyUnits}>
                  Select units are eligible for discounted rents as part of your
                  local affordable housing program. To see if you qualify for
                  this program click
                  <span
                    tabIndex={0}
                    className={styles.policyLink}
                    onClick={() => setShowPolicy(!showPolicy)}
                    onKeyDown={e => {
                      if (e.keyCode === 13) {
                        setShowPolicy(!showPolicy);
                      }
                      if (e.keyCode === 27) {
                        setShowPolicy(false);
                      }
                    }}
                  >
                    here
                  </span>
                  .
                  {showPolicy ? (
                    <div tabIndex={0} className={styles.policyModal}>
                      <svg
                        tabIndex={0}
                        width="17px"
                        height="17px"
                        viewBox="0 0 17 17"
                        version="1.1"
                        onClick={() => setShowPolicy(false)}
                        onKeyDown={e => {
                          if (e.keyCode === 13 || e.keyCode === 27) {
                            setShowPolicy(false);
                          }
                        }}
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <circle
                            fill={getPersonaColor(property, "primary")}
                            cx="8.5"
                            cy="8.5"
                            r="8.5"
                          />
                          <polygon
                            fill="#FFFFFF"
                            fill-rule="nonzero"
                            points="12 4 12.5 4.5 9 8 12.5 11.5 12 12 8.5 8.5 5 12 4.5 11.5 8 8 4.5 4.5 5 4 8.5 7.5"
                          />
                        </g>
                      </svg>
                      {regionPolicy}
                    </div>
                  ) : null}
                </div>
              ) : null}
              {units
                .filter(affordableUnitFilter)
                .slice(0, 2)
                .map(unit => (
                  <FloorplanUnitItemView.Controller
                    key={unit.unitId}
                    unit={unit}
                    filters={filters}
                    property={props.property}
                    floorplanName={floorplanName}
                  />
                ))}
            </React.Fragment>
          )}
        </span>
      </span>
      <FloorplanPoliciesView.Controller property={props.property} />
    </React.Fragment>
  );
};

export const FloorplanSlices = withRouter(
  compose(
    graphql(floorplanQuery, {
      name: "floorplanQuery",
      options: props => ({
        variables: {
          amliId: props.match.params.amliId
        }
      })
    }),
    graphql(unitsQuery, {
      name: "unitsQuery",
      options: props => {
        const dateFromRouter = get(props, "history.location.state.moveInDate");
        return ({
        variables: {
          propertyId: props.property.data.amli_id,
          floorplanId: get(props, "floorplanQuery.floorplan.cms.id", ''),
          amliFloorplanId: props.match.params.amliId,
          moveInDate: dateFromRouter
            ? moment(dateFromRouter).format("YYYY-MM-DD")
            : moment().format("YYYY-MM-DD"),
          pets: "any"
        }
      })
    }
    })
  )(FloorplanSlicesFlat)
);
