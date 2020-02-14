import React from "react";
import get from "lodash/get";
import ListItem from "./ListItem";
import style from "./list.module.css";

export default function RegionHeaderList(props) {
  if (
    !props.mapData ||
    !props.mapData.subregions ||
    !props.mapData.properties
  ) {
    return null;
  }

  const propertySort = (a, b) => {
    if (
      a.attributes &&
      b.attributes &&
      a.attributes.displayOrder !== null &&
      a.attributes.displayOrder !== undefined &&
      b.attributes.displayOrder !== null &&
      b.attributes.displayOrder !== undefined
    ) {
      return a.attributes.displayOrder - b.attributes.displayOrder;
    }

    const currentlyLeasingA = get(a, "data.currently_leasing", "No") === "Yes";
    const currentlyLeasingB = get(b, "data.currently_leasing", "No") === "Yes";

    if (currentlyLeasingA !== currentlyLeasingB) {
      return currentlyLeasingA && !currentlyLeasingB ? -1 : 1;
    }

    const availableUnitsPercentA = get(a, "attributes.availablePercent", 0);
    const availableUnitsPercentB = get(a, "attributes.availablePercent", 0);

    if (availableUnitsPercentA !== availableUnitsPercentB) {
      return availableUnitsPercentA - availableUnitsPercentB > 0 ? -1 : 1;
    }

    const aTag = get(a, "attributes.propertyTag", "");
    const bTag = get(a, "attributes.propertyTag", "");

    return aTag < bTag ? -1 : 1;
  };

  const filterOutZeroPriced = item =>
    !item.attributes || +item.attributes.minPrice > 0;

  const properties = props.mapData.properties
    .filter(filterOutZeroPriced)
    .sort(propertySort);
  const devProperties = props.mapData.properties
    .filter(it => !filterOutZeroPriced(it))
    .sort(propertySort);
  const items = [...properties, ...devProperties, ...props.mapData.subregions];
  const filters = get(props, "mapData.filter");

  return (
    <div className={style.container}>
      {items.map(item => (
        <ListItem
          page={props.page}
          data={item}
          key={item.id}
          filters={filters}
        />
      ))}
    </div>
  );
}
