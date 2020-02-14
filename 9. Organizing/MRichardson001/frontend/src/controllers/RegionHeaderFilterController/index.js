import React from "react";
import RegionHeaderFilterView from "../../components/RegionHeaderFilterView";
import styles from "./styles.module.css";
import "./index.css";

export default props => {
  if (!props.mapData) {
    return null;
  }
  const {
    filter: { tab }
  } = props.mapData;
  const { updateState, subregion } = props;
  return (
    <RegionHeaderFilterView {...props}>
      <properties-button
        className={`${
          tab === "properties" && !subregion
            ? `${styles.active} ${styles["active-left"]}`
            : styles.inactive
        } ${styles.tabButton} ${subregion && styles.subregionTab}`}
        tabIndex={0}
        onKeyDown={e =>
          e.keyCode === 13 &&
          !subregion &&
          updateState({
            filter: { ...props.mapData.filter, tab: "properties" }
          })
        }
        onClick={() =>
          !subregion &&
          updateState({
            filter: { ...props.mapData.filter, tab: "properties" }
          })
        }
      />
      <neighborhoods-button
        className={`${
          tab === "neighborhoods"
            ? `${styles.active} ${styles["active-right"]}`
            : styles.inactive
        } ${styles.tabButton}`}
        tabIndex={0}
        onKeyDown={e =>
          e.keyCode === 13 &&
          updateState({
            filter: { ...props.mapData.filter, tab: "neighborhoods" }
          })
        }
        onClick={() =>
          updateState({
            filter: { ...props.mapData.filter, tab: "neighborhoods" }
          })
        }
      >
        {subregion ? (
          <style
            dangerouslySetInnerHTML={{
              __html: `
              .af-class-toggle-container {
                width: 100% !important;
                border: none !important;
                background-color: transparent !important;
              }
              .af-class-div-block-34 {
                position: relative !important;
              }`
            }}
          />
        ) : null}
      </neighborhoods-button>
    </RegionHeaderFilterView>
  );
};
