import React, { useEffect, useState } from "react";
import get from "lodash/get";
import UnitLeaseTableView from "../../components/UnitLeaseTableView";
import Spinner from "../Spinner";
import styles from "./styles.module.css";
import { formatDollar } from "../../helpers/utils";
import "./index.css";
import {
  getFadedPersonaColor,
  getPersonaColor,
  personaBackgroundColorStyle
} from "../../helpers/property/persona";

const moment = require("moment");

function firstRowCellRenderer(start, col) {
  if (!col) {
    return null;
  }
  return (
    <span>
      {start
        .clone()
        .add(col - 1, "days")
        .format("DD ddd")}
    </span>
  );
}

function firstColCellRenderer(row, minTerm) {
  if (!row) {
    return null;
  }
  return <span>{row + minTerm - 1} Mo</span>;
}

function renderCell(
  startDate,
  row,
  minTerm,
  col,
  pricingData,
  isCheapest = false,
  highlighted = false,
  selected = false
) {
  if (!row || !col) {
    return null;
  }

  const date = startDate.clone().add(col - 1, "days");

  const priceItem = pricingData.find(item =>
    moment(item.QuoteDateDisplay, "ddd MM/DD/YYYY").isSame(date, "day")
  );

  if (!priceItem) {
    return null;
  }
  const price = priceItem.Pricing.find(item => item.Term === minTerm + row - 1);
  if (!price) {
    return null;
  }
  if (!isCheapest && !selected) {
    return <span>${formatDollar(price.TotalCost, 0)}</span>;
  }
  return (
    <div className={styles.cheapest}>
      <span>${formatDollar(price.TotalCost, 0)}</span>
      {isCheapest && !selected && (
        <span
          className={[
            styles.cheapestTag,
            highlighted ? styles.cellHighlighted : ""
          ].join(" ")}
        >
          LOWEST
        </span>
      )}
      {selected && (
        <span
          className={[
            styles.selectedTag,
            highlighted ? styles.cellHighlighted : ""
          ].join(" ")}
        >
          Monthly Rent
        </span>
      )}
    </div>
  );
}

function UnitLeaseTable(props) {
  const [hovered, setHovered] = useState(null);
  const [maxTerm, setMaxTerm] = useState(-1);

  const [selected, setSelected] = useState({
    x: props.selected
      ? (props.selected || moment()).diff(props.filters.startDate, "days") + 1
      : -1,
    y: props.selectedTerm ? props.selectedTerm - props.minTerm + 1 : -1
  });

  const [minPriceItem, setMinPriceItem] = useState({
    x: null,
    y: null,
    price: 0
  });

  useEffect(() => {
    const pricingLocal = get(props, "unitQuery.unit.pricing", []);
    let defaultTerm = null;
    if (pricingLocal.length > 0) {
      defaultTerm =
        pricingLocal[0].Pricing[pricingLocal[0].Pricing.length - 1].Term > 11
          ? 12
          : pricingLocal[0].Pricing[0].Term;
    }
    if (!props.selectedTerm) {
      props.setSelectedTerm(defaultTerm);
    }
    setSelected({
      x:
        props.selected &&
        Math.ceil(
          (props.selected || moment()).diff(props.filters.startDate, "hours") /
            24
        ) + 1
          ? Math.ceil(
              (props.selected || moment()).diff(
                props.filters.startDate,
                "hours"
              ) / 24
            ) + 1
          : -1,
      y:
        (props.selectedTerm ? props.selectedTerm : defaultTerm) -
        props.minTerm +
        1
    });
  }, [props.selectedTerm, props.selected, props.filters.startDate]);

  useEffect(() => {
    const pricingLocal = get(props, "unitQuery.unit.pricing", []);
    if (pricingLocal.length > 0) {
      setMaxTerm(
        pricingLocal[0].Pricing[pricingLocal[0].Pricing.length - 1].Term
      );
    }
    let minPrice = {
      x: -1,
      y: -1,
      price: -1,
      date: null
    };
    pricingLocal.forEach(daily => {
      const date = moment(daily.QuoteDateDisplay, "ddd MM/DD/YYYY");
      daily.Pricing.forEach(price => {
        if (
          minPrice.price === -1 ||
          (price.TotalCost < minPrice.price &&
            date.isAfter(props.filters.startDate.clone().subtract(1, "day")) &&
            date.isBefore(props.filters.endDate.clone().add(1, "day")))
        ) {
          minPrice = {
            x: date.diff(props.filters.startDate, "days") + 1,
            y: price.Term - pricingLocal[0].Pricing[0].Term + 1,
            price: price.TotalCost,
            date
          };
        }
      });
    });
    setMinPriceItem(minPrice);
    if (minPrice.y >= 0) {
      // if(!props.selectedTerm) {
      //   props.setSelectedTerm(minPrice.y + 2);
      // }
      if (!props.selected) {
        props.setSelected(props.filters.startDate);
      }
      setSelected({
        x:
          props.selected && !props.selected.isBefore(props.filters.startDate)
            ? props.selected.diff(props.filters.startDate, "days") + 1
            : -1,
        y: props.selectedTerm
          ? props.selectedTerm - props.minTerm + 1
          : minPrice.y
      });
    }
  }, [props.filters.startDate]);

  const {
    filters: { startDate, endDate },
    minTerm
  } = props;
  const primaryColor = getPersonaColor(props.property, "primary");
  const numItems = endDate.diff(startDate, "days");
  const pricing = get(props, "unitQuery.unit.pricing", []);
  if (!props.unitQuery || props.unitQuery.loading) {
    return <Spinner propertyColor={primaryColor} />;
  }

  return (
    <UnitLeaseTableView>
      <wrapper>
        <div className={styles.calendar}>
          {Array.apply(null, { length: maxTerm - minTerm + 2 }).map(
            (item, indexV) => (
              <div
                className={[
                  styles.calendarRow,
                  indexV === 0 ? styles.firstRow : ""
                ].join(" ")}
                key={`row_${indexV}`}
              >
                {Array.apply(null, { length: numItems + 2 }).map(
                  (it, indexH) => {
                    const priceItem = pricing.find(item =>
                      moment(item.QuoteDateDisplay, "ddd MM/DD/YYYY").isSame(
                        startDate.clone().add(indexH - 1, "days"),
                        "day"
                      )
                    );
                    return (
                      <div
                        key={`row_${indexV}_col_${indexH}`}
                        style={{
                          ...(!priceItem && indexH > 0
                            ? { display: "none" }
                            : {}),
                          ...((hovered &&
                            ((indexV === 0 && indexH === hovered.x) ||
                              (indexH === 0 && indexV === hovered.y))) ||
                          (hovered &&
                            ((indexV === 0 && indexH === hovered.x) ||
                              (indexH === 0 && indexV === hovered.y))) ||
                          (hovered &&
                            indexV === hovered.y &&
                            indexH === hovered.x)
                            ? personaBackgroundColorStyle(props.property)
                            : {}),
                          ...(selected &&
                          selected.x === indexH &&
                          selected.y === indexV
                            ? {
                                boxShadow: `0px 0px 0px 2px ${getPersonaColor(
                                  props.property
                                )} inset`
                              }
                            : {}),
                          ...(indexV > 0 &&
                          indexH > 0 &&
                          hovered &&
                          ((indexH === hovered.x && indexV < hovered.y) ||
                            (indexV === hovered.y && indexH < hovered.x))
                            ? {
                                backgroundColor: getFadedPersonaColor(
                                  props.property,
                                  "primary",
                                  0.035
                                )
                              }
                            : {})
                        }}
                        className={[
                          styles.calendarCell,
                          indexV === 0 ? styles.firstRow : "",
                          indexH === 0 ? styles.firstCol : "",
                          indexV > 0 && indexH > 0 ? styles.centerRows : "",
                          indexH === numItems + 1 && indexV > 0
                            ? styles.lastCol
                            : "",
                          indexV === maxTerm - 2 && indexH > 0
                            ? styles.lastRow
                            : "",
                          indexV > 0 &&
                          indexH > 0 &&
                          hovered &&
                          ((indexH === hovered.x && indexV < hovered.y) ||
                            (indexV === hovered.y && indexH < hovered.x))
                            ? styles.highlighted
                            : "",
                          hovered &&
                          ((indexV === 0 && indexH === hovered.x) ||
                            (indexH === 0 && indexV === hovered.y))
                            ? styles.strongHighlight
                            : "",
                          hovered &&
                          indexV === hovered.y &&
                          indexH === hovered.x
                            ? styles.strongHighlight
                            : "",
                          selected &&
                          selected.x === indexH &&
                          selected.y === indexV
                            ? styles.selectedCell
                            : "",
                          selected && selected.y === indexV
                            ? styles.larger
                            : "",
                          minPriceItem.y && minPriceItem.y === indexV
                            ? styles.larger
                            : ""
                        ].join(" ")}
                        onMouseEnter={() =>
                          indexV &&
                          indexH &&
                          setHovered({ x: indexH, y: indexV })
                        }
                        onMouseLeave={() => setHovered(null)}
                        tabIndex={indexH > 0 && indexV > 0 ? 0 : -1}
                        onKeyDown={e => {
                          if (indexH > 0 && indexV > 0 && e.keyCode === 13) {
                            const date = startDate
                              .clone()
                              .add(indexH - 1, "days");

                            const priceItem = pricing.find(item =>
                              moment(
                                item.QuoteDateDisplay,
                                "ddd MM/DD/YYYY"
                              ).isSame(date, "day")
                            );
                            if (!priceItem) {
                              return;
                            }
                            props.setSelected(
                              startDate.clone().add(indexH - 1, "days")
                            );
                            props.setSelectedTerm(indexV + props.minTerm - 1);
                          }
                        }}
                        onClick={() => {
                          if (indexH > 0 && indexV > 0) {
                            const date = startDate
                              .clone()
                              .add(indexH - 1, "days");

                            const priceItem = pricing.find(item =>
                              moment(
                                item.QuoteDateDisplay,
                                "ddd MM/DD/YYYY"
                              ).isSame(date, "day")
                            );
                            if (!priceItem) {
                              return;
                            }
                            props.setSelected(
                              startDate.clone().add(indexH - 1, "days")
                            );
                            props.setSelectedTerm(indexV + props.minTerm - 1);
                          }
                        }}
                      >
                        {indexV === 0
                          ? firstRowCellRenderer(startDate, indexH)
                          : null}
                        {indexH === 0
                          ? firstColCellRenderer(indexV, minTerm)
                          : null}
                        {renderCell(
                          startDate,
                          indexV,
                          minTerm,
                          indexH,
                          pricing,
                          minPriceItem.x === indexH &&
                            minPriceItem.y === indexV,
                          hovered &&
                            indexV === hovered.y &&
                            indexH === hovered.x,
                          selected &&
                            selected.x === indexH &&
                            selected.y === indexV
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            )
          )}
        </div>
      </wrapper>
    </UnitLeaseTableView>
  );
}

export default UnitLeaseTable;
