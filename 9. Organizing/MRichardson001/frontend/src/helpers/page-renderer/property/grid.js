import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { compose, graphql, withApollo } from "react-apollo";
import Modal from "react-responsive-modal";
import get from "lodash/get";
import debounce from "lodash/debounce";
import UnitGridStickyCardView from "../../../components/UnitGridStickyCardView";
import UnitLeaseGridView from "../../../components/UnitLeaseGridView";
import Spinner from "../../../controllers/Spinner";

import "./index.css";
import { floorplanQuery } from "../../../graphql/queries/floorplanQuery";
import { unitQuery } from "../../../graphql/queries/unitQuery";
import UnitGridStickySummaryBarView from "../../../components/UnitGridStickySummaryBarView";
import { getPersonaColor } from "../../property/persona";
import { unitPaymentBreakdownQuery } from "../../../graphql/queries/unitPaymentBreakdown";
const moment = require("moment");

const GridSlicesFlat = function(props) {
  const availableDate = get(props, "location.state.availableDate")
    ? moment(props.location.state.availableDate)
    : null;
  const startDate = get(props, "location.state.startDate")
    ? moment(props.location.state.startDate)
    : moment();
  const quotingEndDate = get(props, "unitQuery.unit.QuotingDisplayEndDate");
  const quotingDays = get(props, "unitQuery.unit.NumberOfDaysDisplayed", 28);

  if (
    startDate.diff(
      quotingEndDate
        ? moment(quotingEndDate)
        : (availableDate || moment()).clone().add(quotingDays, "days"),
      "days"
    ) > -5
  ) {
    startDate.subtract(
      Math.max(
        5,
        (availableDate || moment())
          .clone()
          .add(quotingDays, "days")
          .diff(startDate, "days")
      ),
      "days"
    );
  }
  const endDate = startDate.clone().add(5, "days");
  const [filters, setFilters] = useState({
    availableDate,
    startDate,
    endDate
  });

  const [selected, setSelected] = useState(
    get(props, "location.state.startDate")
      ? moment(props.location.state.startDate)
      : null
  );
  const [minTerm, setMinTerm] = useState(-1);
  const [selectedTerm, setSelectedTerm] = useState(null);

  const [options, setOptions] = useState({
    applicant: {
      QuantitySelected: 1
    },
    dogs: {
      QuantitySelected: 0
    },
    cats: {
      QuantitySelected: 0
    },
    storage: [],
    parking: [],
    other: []
  });
  const [applyData, setApplyData] = useState({
    url: '#',
    quoteId: ''
  });
  const [uiOptions, setUiOptions] = useState({
    showPaymentBreakdown: true,
    isSaving: false,
    buttonsActive: false,
    text: "Saving Quote. This may take up to 10 seconds."
  });
  const [breakdown, setBreakdown] = useState({});

  useEffect(
    debounce(async () => {
      try {
        const pricingLocal = get(props, "unitQuery.unit.pricing", []);
        const startDate = (selected || moment()).clone().startOf("day");
        const dayInfo = pricingLocal.find(it =>
          moment(it.QuoteDateDisplay, "ddd MM/DD/YYYY").isSame(startDate)
        );

        if (!dayInfo) {
          return;
        }

        if (!selectedTerm || selectedTerm === 0) {
          return;
        }
        const brkd = await props.client.query({
          query: unitPaymentBreakdownQuery,
          variables: {
            id: get(props, "match.params.unitId"),
            termMonths: selectedTerm,
            startDate: (selected || moment()).clone().format("MM-DD-YYYY"),
            dayIndex: dayInfo.Day,
            leaseOptions: [
              options.dogs,
              options.cats,
              options.applicant,
              ...options.storage,
              ...options.parking,
              ...options.other
            ]
          },
          fetchPolicy: "network-only"
        });
        setBreakdown(brkd.data.unitPaymentBreakdown);
      } catch (e) {
        console.log(e);
      }
    }, 200),
    [selectedTerm, selected, options]
  );

  useEffect(() => {
    props.client.query({
      query: unitQuery,
      name: "unitQuery",
      variables: {
        id: props.match.params.unitId,
        startDate: moment(filters.startDate).format("MM-DD-YYYY")
      }
    });
  }, [filters]);

  const primaryColor = getPersonaColor(props.property, "primary");
  useEffect(() => {
    const QuotingDisplayStartDate = get(
      props,
      "unitQuery.unit.QuotingDisplayStartDate"
    );
    if (!selected && !!QuotingDisplayStartDate) {
      setSelected(moment(QuotingDisplayStartDate));
    }
    if (!filters.availableDate && !!QuotingDisplayStartDate) {
      setFilters({
        ...filters,
        availableDate: moment(QuotingDisplayStartDate)
      });
    }
    const pricingLocal = get(props, "unitQuery.unit.pricing", []);
    if (pricingLocal.length > 0) {
      setMinTerm(pricingLocal[0].Pricing[0].Term);
    }
  });

  const loading = props.unitQuery.loading || props.floorplanQuery.loading;

  return (
    <React.Fragment>
      <Modal
        open={uiOptions.isSaving}
        onClose={() => null}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        classNames={{
          closeButton: "floorplan-grid__overlay-close"
        }}
        center
      >
        {!uiOptions.buttonsActive && <Spinner propertyColor={primaryColor} /> }
        <h5>{uiOptions.text}</h5>
        {
          uiOptions.buttonsActive &&
            <div className="buttonWrapper">
              <a
                className="viewQuotesButton"
                href="/account"
                onClick={e => {
                  if (e && e.preventDefault) {
                    e.preventDefault()
                  }
                  props.history.push('/account')
                }}
              >
                View Account
              </a>
              <a
                className="proceedButton"
                href={applyData.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setUiOptions({ isSaving: false })
                  props.history.push(`/quote/${applyData.quoteId}`)}
                }
              >
                Proceed
              </a>
            </div>
        }
      </Modal>
      {loading ? (
        <span className="gridRowContainer">
          <Spinner propertyColor={primaryColor} />
        </span>
      ) : (
        <span className="gridRowContainer">
          <span className="gridStickyContainer">
            <UnitGridStickyCardView.Controller {...props} />
          </span>
          <span className="gridGridContainer">
            <UnitLeaseGridView.Controller
              {...props}
              filters={filters}
              setFilters={setFilters}
              options={options}
              setOptions={setOptions}
              daysToDisplay={quotingDays}
              selected={selected}
              setSelected={setSelected}
              uiOptions={uiOptions}
              setUiOptions={setUiOptions}
              selectedTerm={selectedTerm}
              setSelectedTerm={setSelectedTerm}
              minTerm={minTerm}
              breakdown={breakdown}
            />
          </span>
        </span>
      )}
      <UnitGridStickySummaryBarView.Controller
        {...props}
        filters={filters}
        options={options}
        selected={selected}
        uiOptions={uiOptions}
        setUiOptions={setUiOptions}
        setApplyData={setApplyData}
        selectedTerm={selectedTerm}
        minTerm={minTerm}
        breakdown={breakdown}
      />
    </React.Fragment>
  );
};

export const GridSlices = withApollo(
  withRouter(
    compose(
      graphql(floorplanQuery, {
        name: "floorplanQuery",
        options: props => ({
          variables: {
            amliId: props.match.params.amliId,
            id: props.match.params.floorplanId
          }
        })
      }),
      graphql(unitQuery, {
        name: "unitQuery",
        options: props => {
          const variables = {
            id: props.match.params.unitId
          };
          if (!!get(props, "location.state.startDate")) {
            variables.startDate = moment(
              get(props, "location.state.startDate")
            ).format("MM-DD-YYYY");
          }
          return {
            variables
          };
        }
      })
    )(GridSlicesFlat)
  )
);
