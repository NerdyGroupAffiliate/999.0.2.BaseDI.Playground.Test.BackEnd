import React from "react";
import get from "lodash/get";
import RegionHeaderSliderView from "../../components/RegionHeaderSliderView";
import PropertyCardView from "../../components/PropertyCardView";
import NeighborhoodCardView from "../../components/NeighborhoodCardView";
import PropertyFilter from "../../helpers/map-property-filter";

export default props => {
  const {
    filter: { tab, dirtySlider },
    subregions,
    properties,
    selected: { property, subregion }
  } = props.mapData;

  const propertySort = (a, b) => {
    if (a.id === property) {
      return -1;
    } else if (b.id === property) {
      return 1;
    }

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

  const subregionSort = (a, b) => {
    if (a.id === subregion) {
      return -1;
    } else if (b.id === subregion) {
      return 1;
    }
    return a.data.name < b.data.name ? -1 : 1;
  };

  const filterOutZeroPriced = item =>
    !item.attributes || +item.attributes.minPrice > 0;

  return (
    <RegionHeaderSliderView {...props}>
      <propertyCardViewList1>
        {tab === "properties"
          ? (properties || [])
              .filter(filterOutZeroPriced)
              .sort(propertySort)
              .map(item => {
                if (!PropertyFilter(item, props.mapData.filter)) {
                  return null;
                } else {
                  return (
                    <PropertyCardView.Controller
                      key={`property-full-${item.uid}`}
                      data={item}
                      page={props.page}
                      mapData={props.mapData}
                      updateState={props.updateState}
                    />
                  );
                }
              })
          : null}
        {tab === "properties"
          ? (properties || [])
              .filter(it => !filterOutZeroPriced(it))
              .sort(propertySort)
              .map(item => {
                if (
                  dirtySlider &&
                  !PropertyFilter(item, props.mapData.filter)
                ) {
                  return null;
                } else {
                  return (
                    <PropertyCardView.Controller
                      key={`property-dev-${item.uid}`}
                      data={item}
                      page={props.page}
                      mapData={props.mapData}
                      updateState={props.updateState}
                    />
                  );
                }
              })
          : null}
        {tab === "neighborhoods"
          ? (subregions || [])
              .sort(subregionSort)
              .map(item => (
                <NeighborhoodCardView.Controller
                  key={`subregion-full-${item.uid}`}
                  data={item}
                  mapData={props.mapData}
                  updateState={props.updateState}
                />
              ))
          : null}
      </propertyCardViewList1>
    </RegionHeaderSliderView>
  );
};
