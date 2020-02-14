import React, { useEffect, useState } from "react";
import { graphql } from "react-apollo";
import { withRouter } from "react-router";
import get from "lodash/get";
import DatePicker from "react-date-picker";
import { propertyAttributesQuery } from "../../graphql/queries/propertyAttributes";
import FloorplansConfigurationFilterView from "../../components/FloorplansConfigurationFilterView";
import FloorplanConfigurationOptionView from "../../components/FloorplanConfigurationOptionView";
import queryString from "query-string";

import "./index.css";
import styles from "./styles.module.css";
import { personaColorStyle } from "../../helpers/property/persona";
import { EventSearchFloorPlan } from "../../helpers/plugins/guestAnalytics";
import { canUseDOM } from "../../helpers/utils";

const beds = {
  0: "Studio",
  1: "1 Bedroom",
  2: "2 Bedroom",
  3: "3 Bedroom",
  4: "4 Bedroom",
  5: "5 Bedroom"
};

const moment = require("moment");

function FloorplansConfigurationFilter(props) {
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState(props.filters || {});

  useEffect(() => {
    const options = Object.keys(beds)
      .map(key =>
        +key >= attributes.minBeds && +key <= attributes.maxBeds
          ? {
              value: +key,
              label: beds[key]
            }
          : null
      )
      .filter(opt => !!opt);
    if (!!options && options.length) {
      setLocalFilters({ ...localFilters, size: options[0].value });
      props.setFilters({
        ...props.filters,
        ...localFilters,
        size: options[0].value,
      });
    }
    if(!!props.history.location.search) {
      const { size } = queryString.parse(props.history.location.search);
      if (!!size){
        setLocalFilters({ ...localFilters, size: +size });
        props.setFilters({
          ...props.filters,
          ...localFilters,
          size: +size,
          showAll: false,
        });
      }
    }
  }, [props.attributesQuery.propertyAttributes]);

  const attributes = get(props, "attributesQuery.propertyAttributes") || {};
  const loading = get(props, "attributesQuery.loading");
  if (loading) {
    return null;
  }

  const sitePlan = get(props, "property.data.site_plan.url");

  const selected = localFilters.size;
  const selectedDate = localFilters.date;

  const setFilters = newFilters => {
    // if (window && window.innerWidth < 992) {
    props.setFilters({ ...props.filters, ...newFilters });
    // }
    setLocalFilters({ ...localFilters, ...newFilters });
  };
  const options = Object.keys(beds)
    .map(key =>
      +key >= attributes.minBeds && +key <= attributes.maxBeds
        ? {
            value: +key,
            label: beds[key]
          }
        : null
    )
    .filter(opt => !!opt);
  const { showAll } = props.filters;

  const primaryColor = get(props, "property.data.primary_color");

  if (canUseDOM) {
    const { width } = document.body.getBoundingClientRect();
    const inputs = document.querySelectorAll('.react-date-picker input') || [];
    if (inputs && width < 480) {
      inputs.forEach( item => item.setAttribute("readonly", "readonly"));
      inputs.forEach( item => item.setAttribute("disabled", true));
    }
  }

  return (
    <FloorplansConfigurationFilterView>
      <configuration-list>
        {options.map(option => (
          <FloorplanConfigurationOptionView.Controller
            key={`option_${option.value}`}
            option={option.label}
            active={!showAll && option.value === selected}
            style={personaColorStyle(props.property)}
            onClick={e => {
              if (e) {
                e.preventDefault();
              }
              option.value === selected && !showAll
                ? setFilters({ showAll: true })
                : setFilters({
                    size: option.value,
                    showAll: false
                  });
                  const { property, filters } = props;
                  EventSearchFloorPlan(
                    property.data.amliPropertyId,
                    filters.date,
                    option.value
                  );
            }}
          />
        ))}
      </configuration-list>
      <move-in
        id="property-floorplans-datepicker"
        className={styles.moveIn}
        tabIndex={0}
        aria-label="Date Picker"
        // onBlur={() => setDatePickerOpen(false)}
        onClick={e => {
          e.preventDefault();
          if (e.stopPropagation()) {
            e.stopPropagation();
          }
          if (e.target && e.target && e.target.type === "button") {
            setDatePickerOpen(true);
          } else {
            setDatePickerOpen(!datePickerOpen);
          }
        }}
        onKeyDown={e => {
          if (canUseDOM && e.keyCode === 13 && !datePickerOpen) {
            setDatePickerOpen(true);
            document.querySelector('input[name="month"]').focus();
          } else if (e.keyCode === 13 && datePickerOpen){
            setDatePickerOpen(false);
          }
          if (e.keyCode === 27) {
            setDatePickerOpen(false)
          }
          if (canUseDOM && !datePickerOpen && e.keyCode === 9 && sitePlan) {
            e.preventDefault();
            document.getElementById('floorplans-site-plan-button').focus();
            setDatePickerOpen(false);
          } else if (canUseDOM && !datePickerOpen && e.keyCode === 9 && !sitePlan) {
            e.preventDefault();
            document.getElementById('floorplans-understanding-fees').focus();
            setDatePickerOpen(false);
          }
        }}
      >
        <move-in-date>
          <DatePicker
            calendarType="US"
            isOpen={datePickerOpen}
            minDate={new Date()}
            maxDate={moment().add(120, 'days').toDate()}
            className={styles.datepicker}
            calendarIcon={null}
            clearIcon={null}
            onKeyDown={e => {
              if (e.keyCode === 27) {
                setDatePickerOpen(false)
              }
              if (canUseDOM && datePickerOpen && e.keyCode === 9 && sitePlan) {
                e.preventDefault();
                document.getElementById('floorplans-site-plan-button').focus();
                setDatePickerOpen(false);
              } else if (canUseDOM && datePickerOpen && e.keyCode === 9 && !sitePlan) {
                e.preventDefault();
                document.getElementById('floorplans-understanding-fees').focus();
                setDatePickerOpen(false);
              }
            }}
            onChange={date => {
              setFilters({ date });
              setDatePickerOpen(false);
              const { property, filters } = props;
              EventSearchFloorPlan(
                property.data.amliPropertyId,
                date,
                filters.size
              );
            }}
            value={selectedDate}
          />
        </move-in-date>
      </move-in>
      <apply className={styles.apply}>
        {sitePlan ? (
          <site-plan-button
            id="floorplans-site-plan-button"
            className='property-page-site-plan-link-for-hover'
            href={sitePlan}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                e.preventDefault();
                if (window) {
                  window.open(sitePlan);
                }
              }
            }}
            onClick={e => {
              if (e) {
                e.preventDefault();
              }
              if (window) {
                window.open(sitePlan);
              }
            }}
          />
        ) : null}
      </apply>
      <fees-link
        id="floorplans-understanding-fees"
        className={`${styles.feesLink} property-page-fees-link-for-hover`}
        href="#understanding-fees"
        onClick={e => {
          if (e) {
            e.preventDefault();
          }
          if (document.querySelector(".af-class-policies-tabs")) {
            document.querySelector(".af-class-policies-tabs").scrollIntoView({
              behavior: "smooth"
            });
            document.querySelector(".af-class-policies-tabs .af-class-active").focus();
          }
        }}
      >
        Understanding Fees
      <style
          dangerouslySetInnerHTML={{
              __html: `\n.property-page-fees-link-for-hover:hover {\n  color: ${primaryColor};\n border-bottom: 1px solid ${primaryColor};}\n .property-page-site-plan-link-for-hover:hover{\n  background-color: ${primaryColor} !important;}\n`
          }}
      />
      </fees-link>
    </FloorplansConfigurationFilterView>
  );
}

export default withRouter(graphql(propertyAttributesQuery, {
  name: "attributesQuery",
  options: props => ({
    variables: {
      id: String(props.property.data.amli_id)
    }
  })
})(FloorplansConfigurationFilter));
