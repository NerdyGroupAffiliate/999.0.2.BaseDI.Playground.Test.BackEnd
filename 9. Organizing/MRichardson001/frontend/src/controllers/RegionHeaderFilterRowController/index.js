import React, { useState, useEffect } from "react";
import Range from "rc-slider/lib/Range";
import "rc-slider/assets/index.css";
import RegionHeaderFilterRowView from "../../components/RegionHeaderFilterRowView";
import { formatDollar } from "../../helpers/utils";
import { EventSearchApartment } from "../../helpers/plugins/guestAnalytics.js";
import styles from "./styles.module.css";
import "./index.css";
import { get } from "lodash";

const greyBackground = {
  backgroundColor: "#d2d2d2"
};
const dotStyle = {
  width: 14,
  height: 14,
  borderRadius: "50%",
  backgroundColor: "#7ba4da",
  border: "none",
  boxShadow: "#7ba4da"
};

export default function RegionHeaderFilterRow(props) {
  const [regionMinValue, setRegionMinValue] = useState(
    props.mapData.filter.minvalue
  );
  const [regionMaxValue, setRegionMaxValue] = useState(
    props.mapData.filter.maxvalue
  );

  useEffect(() => {
    if (props.mapData.filter.maxvalue >= regionMaxValue) {
      setRegionMaxValue(props.mapData.filter.maxvalue);
    }
    if (
      regionMinValue === 0 ||
      props.mapData.filter.minvalue <= regionMinValue
    ) {
      setRegionMinValue(props.mapData.filter.minvalue);
    }
  }, [props.mapData.filter]);

  const {
    filter: { tab, minvalue, maxvalue, minhousing, maxhousing }
  } = props.mapData;
  const { updateState } = props;
  if (tab !== "properties") {
    return null;
  }
  return (
    <RegionHeaderFilterRowView>
      {tab === "properties" ? (
        <min-value>{`$${formatDollar(minvalue)}`}</min-value>
      ) : null}
      {tab === "properties" ? (
        <max-value>{`$${formatDollar(maxvalue)}`}</max-value>
      ) : null}
      {tab === "properties" ? (
        <value-slider className={styles.sliderContainer}>
          <Range
            trackStyle={[greyBackground]}
            handleStyle={[dotStyle, dotStyle]}
            activeDotStyle={dotStyle}
            step={100}
            dotStyle={dotStyle}
            railStyle={greyBackground}
            onAfterChange={() => {
              updateState({
                filter: {
                  ...props.mapData.filter,
                  dirtySlider: true
                }
              });
            }}
            onChange={([min, max]) => {
              updateState({
                filter: {
                  ...props.mapData.filter,
                  minvalue: min,
                  maxvalue: max
                }
              });
              const { data, type, uid } = props.page;
              const { regions } = props.appdata;
              EventSearchApartment(
                data.amli_id ||
                  get(
                    regions.find(x => x.uid === data.region.uid),
                    "data.amli_id"
                  ),
                type === "sub-region" ? uid : null,
                min,
                max,
                minhousing,
                maxhousing
              );
            }}
            min={regionMinValue}
            max={regionMaxValue}
            value={[minvalue, maxvalue]}
          />
        </value-slider>
      ) : null}
      {tab === "properties" ? (
        <min-housing>{minhousing || "Studio"}</min-housing>
      ) : null}
      {tab === "properties" ? <max-housing>{maxhousing}</max-housing> : null}
      {tab === "properties" ? (
        <housing-slider className={styles.sliderContainer}>
          <Range
            onChange={([min, max]) => {
              updateState({
                filter: {
                  ...props.mapData.filter,
                  minhousing: min,
                  maxhousing: max
                }
              });
              const { data, type, uid } = props.page;
              const { regions } = props.appdata;
              EventSearchApartment(
                data.amli_id ||
                  get(
                    regions.find(x => x.uid === data.region.uid),
                    "data.amli_id"
                  ),
                type === "sub-region" ? uid : null,
                minvalue,
                maxvalue,
                min,
                max
              );
            }}
            handleStyle={[dotStyle, dotStyle]}
            dotStyle={dotStyle}
            activeDotStyle={dotStyle}
            trackStyle={[greyBackground]}
            railStyle={greyBackground}
            min={0}
            max={3}
            value={[minhousing, maxhousing]}
          />
        </housing-slider>
      ) : null}
    </RegionHeaderFilterRowView>
  );
}
