import React, { useState, useEffect } from "react";
import Range from "rc-slider/lib/Range";
import get from "lodash/get";
import "rc-slider/assets/index.css";
import styles from "./styles.module.css";
import "./index.css";
import { formatDollar } from "../../helpers/utils";
import Checkbox from "./checkbox";
import {
  getPersonaColor,
  personaBackgroundColorStyle
} from "../../helpers/property/persona";

const moment = require("moment");

function convertPetFilterToCheckboxes(petOption) {
  return {
    cats: ["cats", "both"].includes(petOption),
    dogs: ["dogs", "both"].includes(petOption)
  };
}

function convertCheckboxToPetFilterOption(cats, dogs) {
  if (!cats && !dogs) {
    return "any";
  } else if (!cats && dogs) {
    return "dogs";
  } else if (!dogs && cats) {
    return "cats";
  }
  return "both";
}

function FloorplanHeaderFilters(props) {
  const [priceMin, setPriceMin] = useState(props.filters.priceMin);
  const [priceMax, setPriceMax] = useState(props.filters.priceMax);
  const [unitPriceMin, setUnitPriceMin] = useState(props.filters.priceMin);
  const [unitPriceMax, setUnitPriceMax] = useState(props.filters.priceMax);
  const [pets, setPets] = useState(props.filters.pets);
  const [minDateOpen, setMinDateOpen] = useState(false);
  const [minDate, setMinDate] = useState(props.filters.startDate.toDate());
  const [maxDateOpen, setMaxDateOpen] = useState(false);
  const [maxDate, setMaxDate] = useState(
    props.filters.startDate.add(6, "months").toDate()
  );

  useEffect(() => {
    if (priceMax !== 0 && priceMax >= unitPriceMax) {
      setUnitPriceMax(priceMax);
    }
    if (unitPriceMin === 0 || priceMin <= unitPriceMin) {
      setUnitPriceMin(priceMin);
    }
  }, [priceMin, priceMax]);

  useEffect(() => {
    if (props.filters.priceMax >= priceMax) {
      setPriceMax(props.filters.priceMax);
    }
    if (props.filters.priceMin !== 0 || props.filters.priceMin <= priceMin) {
      setPriceMin(props.filters.priceMin);
    }
  }, [props.filters]);

  const petsCheckbox = convertPetFilterToCheckboxes(pets);

  const property = get(props, "property");
  const greyBackground = {
    backgroundColor: "#d2d2d2"
  };
  const dotStyle = {
    width: 14,
    height: 14,
    borderRadius: "50%",
    backgroundColor: `${getPersonaColor(property, "primary")}`,
    border: "none",
    boxShadow: "#7ba4da"
  };
  if (!props.filtersOpen) {
    return null;
  }

  return (
    <span className={styles.container}>
      <div className={styles.sliderContainer}>
        <span className={styles.priceLabel}>Price</span>
        <span className={styles.prices}>
          <span>${formatDollar(priceMin, 0)}</span>
          <span>${formatDollar(priceMax, 0)}</span>
        </span>
        <Range
          trackStyle={[greyBackground]}
          handleStyle={[dotStyle, dotStyle]}
          activeDotStyle={dotStyle}
          step={25}
          dotStyle={dotStyle}
          railStyle={greyBackground}
          onChange={([min, max]) => {
            setPriceMin(min);
            setPriceMax(max);
          }}
          min={unitPriceMin}
          max={unitPriceMax}
          value={[priceMin, priceMax]}
        />
      </div>
      <div className={styles.petsContainer}>
        <span className={styles.priceLabel}>Pets</span>
        <div className={styles.petsRow}>
          <Checkbox
            label="Cats"
            onChange={cats => {
              setPets(
                convertCheckboxToPetFilterOption(cats, petsCheckbox.dogs)
              );
            }}
            color={getPersonaColor(property, "primary")}
            isChecked={petsCheckbox.cats}
          />
          <Checkbox
            label="Dogs"
            onChange={dogs => {
              setPets(
                convertCheckboxToPetFilterOption(petsCheckbox.cats, dogs)
              );
            }}
            color={getPersonaColor(property, "primary")}
            isChecked={petsCheckbox.dogs}
          />
        </div>
      </div>
      <span className={styles.horizontalLine} />
      <button
        tabIndex={0}
        style={personaBackgroundColorStyle(property)}
        className={styles.button}
        onClick={() => {
          props.setFilters({
            priceMin,
            priceMax,
            startDate: moment(minDate),
            endDate: moment(maxDate),
            date: moment(minDate),
            pets
          });
          props.setFiltersOpen(false);
        }}
      >
        View Results
      </button>
    </span>
  );
}

export default FloorplanHeaderFilters;
