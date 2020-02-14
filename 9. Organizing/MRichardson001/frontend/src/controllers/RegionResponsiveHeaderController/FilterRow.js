import React, { useState, useEffect } from "react";
import "rc-slider/assets/index.css";
import Range from "rc-slider/lib/Range";
import styles from "./filterrow.module.css";
import { formatDollar } from "../../helpers/utils";
import { EventSearchApartment } from "../../helpers/plugins/guestAnalytics";
import { get } from 'lodash';

const greyBackground = {
  backgroundColor: "#d2d2d2",
  width: "100%"
};
const dotStyle = {
  width: 14,
  height: 14,
  borderRadius: "50%",
  backgroundColor: "#7ba4da",
  border: "none",
  boxShadow: "#7ba4da"
};

export default function FilterRow(props) {
  const [minvalue, setMinValue] = useState(props.mapData.filter.minvalue);
  const [maxvalue, setMaxValue] = useState(props.mapData.filter.maxvalue);
  const [minhousing, setMinHousing] = useState(props.mapData.filter.minhousing);
  const [maxhousing, setMaxHousing] = useState(props.mapData.filter.maxhousing);
  const [regionMinValue, setRegionMinValue] = useState(props.mapData.filter.minvalue);
  const [regionMaxValue, setRegionMaxValue] = useState(props.mapData.filter.maxvalue);
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
  },[props.mapData.filter]);

  useEffect(()=> {
    if (props.navBarMin === 0) {
      props.setNavBarMin(regionMinValue);
    }
    if (props.navBarMax === 0) {
      props.setNavBarMax(regionMaxValue);
    }
  }, [regionMinValue, regionMaxValue])
  return (
    <div className={styles.container}>
      <div className={styles.rangesRow}>
        <div className={`${styles.rangeContainer} ${styles.leftRange}`}>
          <div className={styles.rangeWrapper}>
            <h3 className={styles.rangeTitle}>Price</h3>
            <div className={styles.valuesRow}>
              <span className={styles.valueLabel}>{`$${formatDollar(
                minvalue
              )}`}</span>
              <span className={styles.valueLabel}>{`$${formatDollar(
                maxvalue
              )}`}</span>
            </div>

            <Range
              trackStyle={[greyBackground]}
              handleStyle={[dotStyle, dotStyle]}
              activeDotStyle={dotStyle}
              step={100}
              dotStyle={dotStyle}
              railStyle={greyBackground}
              onChange={([min, max]) => {
                setMinValue(min);
                setMaxValue(max);
              }}
              min={props.navBarMin}
              max={props.navBarMax}
              value={[minvalue, maxvalue]}
            />
          </div>
        </div>
        <div className={styles.rangeContainer}>
          <div className={styles.rangeWrapper}>
            <h3 className={styles.rangeTitle}>beds</h3>
            <div className={styles.valuesRow}>
              <span className={styles.valueLabel}>
                {minhousing === 0 ? "Studio" : minhousing}
              </span>
              <span className={styles.valueLabel}>
                {maxhousing === 0 ? "Studio" : maxhousing}
              </span>
            </div>
            <Range
              trackStyle={[greyBackground]}
              handleStyle={[dotStyle, dotStyle]}
              activeDotStyle={dotStyle}
              step={1}
              dotStyle={dotStyle}
              railStyle={greyBackground}
              onChange={([min, max]) => {
                setMinHousing(min);
                setMaxHousing(max);
              }}
              min={0}
              max={3}
              value={[minhousing, maxhousing]}
            />
          </div>
        </div>
      </div>
      <div>
        <button
          className={styles.results}
          onClick={() => {
            const { data, type, uid } = props.page;
            const { regions } = props.appdata;
            EventSearchApartment(
              data.amli_id || get(regions.find( x => x.uid === data.region.uid), "data.amli_id"),
              type === "sub-region" ? uid : null ,
              minhousing,
              maxhousing,
              minvalue,
              maxvalue
            );
            props.updateState({
              filter: {
                ...props.mapData.filter,
                minvalue,
                maxvalue,
                minhousing,
                maxhousing,
                dirtySlider: true
              },
              responsive: {
                ...props.mapData.responsive,
                showFilter: false
              }
            });
          }}
        >
          View Results
        </button>
      </div>
    </div>
  );
}
