import React, { useState } from "react";
import styles from "./navbar.module.css";
import FilterRow from "./FilterRow";
import get from 'lodash/get';
import Map from "../../assets/icons/map.jpg";
import List from "../../assets/icons/list.svg";
import Filter from "../../assets/icons/filter.svg";
import FilterClose from "../../assets/icons/filter-close@3x.png";
import { withRouter } from "react-router";

export default withRouter(function RegionNavbar(props) {
  const [baseMinValue,  setBaseMinValue] = useState(0);
  const [baseMaxValue, setBaseMaxValue] = useState(0);

  const setItem = (name, newVal) => {
    props.updateState({
      responsive: {
        ...props.mapData.responsive,
        [name]: newVal
      }
    });
  };
  let subregionPage = null;
  if (props.page.type === "sub-region") {
    subregionPage = true;
  }
  const regionUid = get (props, 'data.region.uid');
  const regionName = regionUid ? regionUid.replace(/-/g," ") : null;
  const { view, showFilter } = props.mapData.responsive;
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div
          className={styles.left}
          onClick={() => setItem("view", view === "list" ? "map" : "list")}
        >
          <div className={styles.iconTitle}>
            {view === "list" ? "Map" : "List"}
          </div>
          <div>
            <img
              className={styles.icon}
              src={view === "list" ? Map : List}
              alt={view === "list" ? "Map" : "List"}
            />
          </div>
        </div>
        <div className={styles.headerWrapper}>
          {subregionPage
              ?
              <a
                className={['af-class-breadcrumb-container af-class-blur af-class-light-bg', styles.breadcrumbs].join(" ")}
                href={`/apartments/${regionUid}`}
                onClick={e => {
                  if (e && e.preventDefault) {
                    e.preventDefault();
                  }
                  props.history.push(`/apartments/${regionUid}`)
                }}
              >
                <span className={styles.svg}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 91.92 155.56"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html: " .af-class-cls-1{fill:#3f3f3f!important;}"
                        }}
                      />
                    </defs>
                    <title>Chevron</title>
                    <g data-name="Layer 2">
                      <g data-name="Layer 1">
                        <polygon
                          className="af-class-cls-1"
                          points="28.28 77.78 91.92 14.14 77.78 0 14.14 63.64 0 77.78 14.14 91.92 77.78 155.56 91.92 141.42 28.28 77.78"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
                {regionName}
              </a>
              : null}
            <h2 className={styles.title}>{props.data.name}</h2>
          </div>
        <div
          onClick={() => setItem("showFilter", !showFilter)}
          className={styles.right}
        >
          <div className={styles.iconTitle}>Filter</div>
          <div>
            <img
              className={styles.icon}
              src={showFilter ? FilterClose : Filter}
              alt="filter"
            />
          </div>
        </div>
      </div>
      {
        showFilter &&
          <FilterRow
            navBarMin={baseMinValue}
            setNavBarMin={setBaseMinValue}
            navBarMax={baseMaxValue}
            setNavBarMax={setBaseMaxValue}
            {...props}
            />
      }
    </React.Fragment>
  );
});
