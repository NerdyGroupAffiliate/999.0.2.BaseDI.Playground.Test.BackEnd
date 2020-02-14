import React, { useState } from "react";
import get from "lodash/get";
import { withRouter } from "react-router";
import DatePicker from "react-date-picker";
import PropertyFloorplanHeaderView from "../../components/PropertyFloorplanHeaderView";
import styles from "./styles.module.css";
import {
  personaColorStyle,
  getPersonaColor
} from "../../helpers/property/persona";
import GetPropertyFullRoute from "../../helpers/get-full-property-route";
import { canUseDOM } from "../../helpers/utils";

const moment = require("moment");

function PropertyFloorplanHeader(props) {
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const property = get(props, "property") || get(props, "page.data");
  const uid = property.uid;

  if (canUseDOM) {
    const { width } = document.body.getBoundingClientRect();
    const inputs = document.querySelectorAll('.react-date-picker input') || [];
    if (inputs && width < 480) {
      inputs.forEach( item => item.setAttribute("readonly", "readonly"));
      inputs.forEach( item => item.setAttribute("disabled", true));
    }
  }

  return (
    <PropertyFloorplanHeaderView>
      <back
        tabIndex={0}
        onKeyDown={e =>
          e.keyCode === 13 &&
          props.history.push(`${GetPropertyFullRoute(property, props.appdata)}/${uid}/floorplans`, {
            moveInDate: props.filters.date.toDate()
          })
        }
        className={styles.back}
        onClick={() =>
          props.history.push(`${GetPropertyFullRoute(property, props.appdata)}/${uid}/floorplans`, {
            moveInDate: props.filters.date.toDate()
          })
        }
      />
      <title className={styles.title} style={personaColorStyle(property)}>
        {props.property.data.name} Available Units
      </title>
      <date-picker
        id="unit-availability-datepicker"
        className={styles.movein}
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
        tabIndex={0}
        onKeyDown={e => {
          if (canUseDOM && e.keyCode === 13 && !datePickerOpen) {
            setDatePickerOpen(true);
            document.querySelector('input[name="month"]').focus();
          } else if (e.keyCode === 13 && datePickerOpen){
            setDatePickerOpen(false);
          }
          if (e.keyCode === 27) {
            setDatePickerOpen(false);
          }
          if (canUseDOM && !datePickerOpen && e.keyCode === 9) {
            e.preventDefault();
            document.getElementById('unit-availability-filters').focus();
            setDatePickerOpen(false);
          }
        }}
      >
        <calendar-icon />
        <date>
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
              if (canUseDOM && datePickerOpen && e.keyCode === 9) {
                e.preventDefault();
                document.getElementById('unit-availability-filters').focus();
                setDatePickerOpen(false);
              }
            }}
            onChange={date => {
              props.setFilters({ ...props.filters, date: moment(date) });
              setDatePickerOpen(false);
            }}
            value={props.filters.date.clone().toDate()}
          />
        </date>
      </date-picker>
      <filters
        className={styles.filter}
        id="unit-availability-filters"
        tabIndex={0}
        onKeyDown={e =>
          e.keyCode === 13 && props.setFiltersOpen(!props.filtersOpen)
        }
        onClick={() => props.setFiltersOpen(!props.filtersOpen)}
      >
        <filter-label className={styles.filterLabel}>
          {props.filtersOpen ? "CLOSE" : "FILTERS"}
        </filter-label>
        {props.filtersOpen ? (
          <filter-icon className={styles.iconHolder}>
            <svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
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
          </filter-icon>
        ) : (
          <filter-icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146 94">
              <g data-name="Layer 2">
                <g data-name="Layer 1">
                  <line
                    className="cls-2"
                    fill="none"
                    stroke={getPersonaColor(property, "primary")}
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="6px"
                    x1="3"
                    y1="14"
                    x2="143"
                    y2="14"
                  />
                  <line
                    className="cls-2"
                    fill="none"
                    stroke={getPersonaColor(property, "primary")}
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="6px"
                    x1="143"
                    y1="80"
                    x2="3"
                    y2="80"
                  />
                </g>
              </g>
            </svg>
          </filter-icon>
        )}
      </filters>
    </PropertyFloorplanHeaderView>
  );
}

export default withRouter(PropertyFloorplanHeader);
