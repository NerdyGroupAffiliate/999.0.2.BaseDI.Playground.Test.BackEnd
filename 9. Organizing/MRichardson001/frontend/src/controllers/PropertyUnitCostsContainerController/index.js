import React from "react";
import get from "lodash/get";

import { withRouter } from "react-router";
import PropertyUnitCostsContainerView from "../../components/PropertyUnitCostsContainerView";
import PropertyUnitCostTableView from "../../components/PropertyUnitCostTableView";

import styles from "./styles.module.css";
import { formatDollar } from "../../helpers/utils";
import { personaBackgroundColorStyle } from "../../helpers/property/persona";
import { processLeaseOptions } from "../../helpers/components-data-handlers/lease-options-handler";

const moment = require("moment");

const optional = ["ANIMAL", "STORAGE", "PARKING"];

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

function PropertyUnitCostsContainer(props) {
  const baseRent = get(props, "unit.rent");
  // const rawCosts = processLeaseOptions(get(props, "unit.pricing.LeaseOptions"));
  const leaseOptions = get(props, "unit.pricing.LeaseOptions", []);
  const isAffordable = get(props, "unit.affordableUnit");
  const DueImmediately = get(props, "unit.pricing.InitialPaymentInfo.DueImmediately", []);
  const DueOnApproval = get(props, "unit.pricing.InitialPaymentInfo.DueOnApproval", []);
  const quotingEndDate = get(props, 'unit.pricing.QuotingDisplayEndDate');
  const costs = [
    {
      label: "Upfront Costs",
      items: [...DueImmediately, ...DueOnApproval]
        .map(fee => ({
          title: fee.Description,
          description: fee.Description,
          price: fee.ExtendedAmount
        }))
    },
    {
      label: "Monthly Costs",
      items: [
        { title: "Base Rent", Description: "", price: baseRent },
        ...leaseOptions
          .filter(
            lo =>
              !optional.includes(lo.Category) &&
              lo.MinimumCount == 1 &&
              lo.MaximumCount == 1
          )
          .map(rent => ({
            title: rent.Name,
            description: rent.Description,
            price: rent.Rent || rent.Fee
          }))
      ]
    }
  ];
  const monthlyCostsIndex = costs.findIndex(it => it.label === "Monthly Costs");
  if (isAffordable && monthlyCostsIndex > -1) {
    costs.splice(monthlyCostsIndex, 1);
  }

  const navParams = props.match.params;

  return (
    <PropertyUnitCostsContainerView {...props}>
      <wrapper>
        <propertyUnitCostTableViewList0>
          {costs.map((cost, index) => (
            <div
              className={index > 0 ? styles.childCost : ""}
              key={`cost_ ${index}`}
            >
              <PropertyUnitCostTableView.Controller
                {...props}
                title={cost.label}
                label={cost.label}
                value={`$${formatDollar(
                  cost.items.reduce((a, b) => a + b.price, 0),
                  0
                )}`}
                items={cost.items}
              />
            </div>
          ))}
        </propertyUnitCostTableViewList0>
        {!isAffordable ? (
          <get-quote
            href={`${navParams.amliId}/unit/${props.unit.unitId}`}
            className={styles.getquote}
            style={personaBackgroundColorStyle(props.property)}
            onKeyDown={e => {
              if (e) {
                e.preventDefault();
              }
              e.keyCode === 13 &&
                props.history.push(`${navParams.amliId}/unit/${props.unit.unitId}`,
                  {
                    startDate: getStartDate(props),
                    availableDate: getFirstAvailableDate(props),
                    quotingEndDate
                  }
                );
            }}
            onClick={e => {
              if (e) {
                e.preventDefault();
              }
              props.history.push(`${navParams.amliId}/unit/${props.unit.unitId}`,
                {
                  startDate: getStartDate(props),
                  availableDate: getFirstAvailableDate(props),
                  quotingEndDate
                }
              );
            }}
          />
        ) : null}
      </wrapper>
    </PropertyUnitCostsContainerView>
  );
}

export default withRouter(PropertyUnitCostsContainer);
