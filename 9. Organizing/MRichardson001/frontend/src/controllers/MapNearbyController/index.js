import React from "react";
import MapNearbyView from "../../components/MapNearbyView";

import GroceriesIcon from "../../assets/icons/Groceries.svg";
import EntretainmentIcon from "../../assets/icons/Entertainment.svg";
import RestaurantsIcon from "../../assets/icons/Restaurants.svg";
import ShoppingIcon from "../../assets/icons/Shopping.svg";
import "./index.css";
import styles from "./styles.module.css";

export default function MapNearby(props) {
  if (!props || !props.subregion) {
    return null;
  }

  const clickCategory = places => {
    props.updateState({
      ...props.mapData,
      filter: {
        ...props.mapData.filter,
        places: props.mapData.filter.places === places ? null : places
      },
      places: null
    });
  };

  const { places } = props.mapData.filter;
  const activeColor = "#0D986D";
  return (
    <MapNearbyView>
      <wrapper className={styles.wrapper}>
        <restaurants
          tabIndex={0}
          aria-label="Restaurants"
          onKeyDown={e => e.keyCode === 13 && clickCategory("restaurants")}
          onClick={() => clickCategory("restaurants")}
          className={styles.interest}
        >
          <div
            className={styles.iconContainer}
            style={
              places === "restaurants" ? { backgroundColor: activeColor } : {}
            }
          >
            <img
              className={styles.icon}
              src={RestaurantsIcon}
              alt="restaurant"
            />
          </div>
          <span className={styles.label}>Restaurants</span>
        </restaurants>
        <groceries
          tabIndex={0}
          aria-label="Groceries"
          onKeyDown={e => e.keyCode === 13 && clickCategory("groceries")}
          onClick={() => clickCategory("groceries")}
          className={styles.interest}
        >
          <div
            className={styles.iconContainer}
            style={
              places === "groceries" ? { backgroundColor: activeColor } : {}
            }
          >
            <img className={styles.icon} src={GroceriesIcon} alt="groceries" />
          </div>
          <span className={styles.label}>Groceries</span>
        </groceries>
        <shopping
          tabIndex={0}
          aria-label="Shopping"
          onKeyDown={e => e.keyCode === 13 && clickCategory("shopping")}
          onClick={() => clickCategory("shopping")}
          className={styles.interest}
        >
          <div
            className={styles.iconContainer}
            style={
              places === "shopping" ? { backgroundColor: activeColor } : {}
            }
          >
            <img className={styles.icon} src={ShoppingIcon} alt="shopping" />
          </div>
          <span className={styles.label}>Shopping</span>
        </shopping>
        <entertainment
          tabIndex={0}
          aria-label="Entertainment"
          onKeyDown={e => e.keyCode === 13 && clickCategory("entertainment")}
          onClick={() => clickCategory("entertainment")}
          className={styles.interest}
        >
          <div
            className={styles.iconContainer}
            style={
              places === "entertainment" ? { backgroundColor: activeColor } : {}
            }
          >
            <img
              className={styles.icon}
              src={EntretainmentIcon}
              alt="entertainment"
            />
          </div>
          <span className={styles.label}>Entertainment</span>
        </entertainment>
      </wrapper>
    </MapNearbyView>
  );
}
