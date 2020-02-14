import React, { useState } from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import Helmet from "react-helmet-async";
import FloorplansConfigurationFilterView from "../../../components/FloorplansConfigurationFilterView";
import FloorplansCardContainerView from "../../../components/FloorplansCardContainerView";
import FloorplansSpecialSpotlightView from "../../../components/FloorplansSpecialSpotlightView";
import FloorplanPoliciesView from "../../../components/FloorplanPoliciesView";
import FloorplansFooterCTAController from "../../../controllers/FloorplansFooterCTAController";
import GetParentRegion from "../../get-parent-region";
import TextWritter from "../../text-writter";
import styles from "../style.module.css";
import { getPersonaColor } from "../../property/persona";
import { ExtractMetaProperty } from '../../extract-meta';

export const FloorplansMeta = ({ page }) => {
  const meta = ExtractMetaProperty(get(page, "data"), 'floorplan');
  return (
    <Helmet>
      {meta}
    </Helmet>
  );
};

export const FloorplansSlices = withRouter(function(props) {
  const [filters, setFilters] = useState({
    size: 0,
    date: get(props, "history.location.state.moveInDate", new Date()),
    showAll: true
  });
  const [showPolicy, setShowPolicy] = useState(false);

  const { property, configs } = props;
  const specials = get(property, "data.specials");
  const hasAfforableUnits = get(property, "data.has_affordable_units", "");
  const parentRegion = GetParentRegion(property, configs.appdata);
  const regionData = configs.appdata.regions.find(
    reg => reg.uid === parentRegion.uid
  );
  const regionPolicy = get(
    regionData,
    "data.affordable_unit_program_policy",
    []
  ).map(ct => TextWritter(ct));

  const updateFilter = newFilters => {
    setFilters({ ...filters, ...newFilters });
    if (
      !!newFilters.date &&
      filters.date.getTime() !== newFilters.date.getTime()
    ) {
      props.history.replace({
        pathname: props.match.url,
        state: {
          ...get(props, "history.location.state", {}),
          moveInDate: newFilters.date
        }
      });
    }
  };

  return (
    <span>
      <FloorplansConfigurationFilterView.Controller
        property={property}
        filters={filters}
        setFilters={updateFilter}
      />
      {specials && specials[0] && specials[0].special_text ? (
        <FloorplansSpecialSpotlightView.Controller
          property={property}
          filters={filters}
        />
      ) : null}
      <FloorplansCardContainerView.Controller
        property={property}
        filters={filters}
        setFilters={updateFilter}
      />
      {hasAfforableUnits === "Yes" ? (
        <div className={styles.affordablePolicy}>
          *Select units are eligible for discounted rents as part of your local
          affordable housing program. To see if you qualify for this program
          click
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
          {showPolicy && regionPolicy.length > 0 ? (
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
      <FloorplanPoliciesView.Controller property={property} />
      <FloorplansFooterCTAController property={property} />
    </span>
  );
});
