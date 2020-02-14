import React, { useEffect } from "react";
import get from "lodash/get";
import UnitLeaseDatePickerView from "../../components/UnitLeaseDatePickerView";
import styles from "./styles.module.css";
import "./index.css";

const moment = require("moment");

const updateDateLeft = props => {
  let startDate = props.filters.startDate.clone().subtract(5, "days");
  let availableDate = props.filters.availableDate.clone();
  let endDate = props.filters.endDate.clone().subtract(5, "days");
  if (startDate.diff(moment().subtract(5, "days"), "days") <= 0) {
    startDate = moment();
    endDate = startDate.clone().add(5, "days");
  } else if (startDate.diff(availableDate, "days") <= 0) {
    startDate = availableDate;
    endDate = availableDate.clone().add(5, "days");
  } else {
    endDate = startDate.clone().add(5, "days");
  }
  props.setFilters({
    ...props.filters,
    startDate,
    endDate
  });
};

const updateDateRight = props => {
  const { daysToDisplay } = props;
  let startDate = props.filters.endDate.clone();
  let endDate = props.filters.endDate.clone().add(5, "days");
  if (
    endDate.diff(
      props.filters.availableDate.clone().add(daysToDisplay, "days"),
      "days"
    ) >= 0
  ) {
    endDate = props.filters.availableDate.clone().add(daysToDisplay, "days");
    startDate = endDate.clone().subtract(5, "days");
  }
  props.setFilters({
    ...props.filters,
    startDate,
    endDate
  });
};

function UnitLeaseDatePicker(props) {
  useEffect(() => {
    const { daysToDisplay } = props;
    const pricingLocal = get(props, "unitQuery.unit.pricing", []);
    let daysWithoutData = 0;
    const auxDate = props.filters.startDate.clone();
    if (props.filters.endDate.diff(props.filters.startDate, "days") > 5) {
      return;
    }
    while (auxDate.isBefore(props.filters.endDate)) {
      const data = pricingLocal.find(daily =>
        auxDate.isSame(moment(daily.QuoteDateDisplay, "ddd MM/DD/YYYY"), "day")
      );
      if (!!data) {
        if (!data.Pricing || !data.Pricing.length || !data.Pricing[0].Term) {
          daysWithoutData++;
        }
      } else {
        daysWithoutData++;
      }
      auxDate.add(1, "day");
    }
    // let newStartDate = props.filters.startDate.clone();
    let newEndDate = props.filters.endDate.clone();
    const availableDate = get(props, "location.state.availableDate")
      ? moment(props.location.state.availableDate)
      : props.filters.availableDate || moment();
    if (
      availableDate
        .clone()
        .add(daysToDisplay, "days")
        .isBefore(newEndDate.clone().add(daysWithoutData))
    ) {
      newEndDate = availableDate.clone().add(daysToDisplay, "days");
    } else {
      newEndDate.add(daysWithoutData, "days");
    }

    const newStartDate = props.filters.startDate.isBefore(availableDate)
      ? availableDate.clone()
      : props.filters.startDate;
    if (newEndDate.diff(newStartDate, 'days') < 5) {
      newEndDate.add(5 - newEndDate.diff(newStartDate, 'days'), 'days');
    }
    props.setFilters({
      ...props.filters,
      startDate: newStartDate,
      endDate: newEndDate
    });
  }, [props.filters.startDate, props.filters.availableDate]);

  return (
    <UnitLeaseDatePickerView>
      <wrapper className={styles.wrapper}>
        <left-arrow
          className={styles.button}
          tabIndex={0}
          onKeyDown={e => {
            if (e.keyCode !== 13) {
              return;
            }
            updateDateLeft(props);
          }}
          onClick={() => {
            updateDateLeft(props);
          }}
        />
        <datepicker>
          <start-date className={[styles.date, styles.startDate].join(" ")}>
            {props.filters.startDate.format("MMM DD")}
          </start-date>
          <middle-arrow className={styles.arrow} />
          <end-date className={[styles.date, styles.endDate].join(" ")}>
            {props.filters.endDate.format("MMM DD")}
          </end-date>
        </datepicker>
        <right-arrow
          className={styles.button}
          tabIndex={0}
          onKeyDown={e => {
            if (e.keyCode !== 13) {
              return;
            }
            updateDateRight(props);
          }}
          onClick={() => {
            updateDateRight(props);
          }}
        />
      </wrapper>
    </UnitLeaseDatePickerView>
  );
}

export default UnitLeaseDatePicker;
