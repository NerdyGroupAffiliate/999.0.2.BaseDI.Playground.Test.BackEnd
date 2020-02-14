import React from "react";
import LocationMapPoiBarView from "../../../components/LocationMapPoiBarView";
import PropertyLocationMapView from "../../../components/PropertyLocationMapView";
import InterestBarItem from "./InterestBarItem";
import PropertyLocationMap from "./Map";
import styles from "../styles.module.css";
import { get } from "lodash";
import { amenitiesQuery } from "../../../graphql/queries/amenitiesQuery";
import { graphql } from "react-apollo";
import "./index.css";

function MapWrapper(props) {
  if (!props.amenitiesQuery || props.amenitiesQuery.loading) {
    return null;
  }

  const perks = get(
    get(props, "amenitiesQuery.amenities.data.body", []).find(
      bodyItem => bodyItem.slice_type === "list_perks"
    ),
    "items",
    []
  )
    .filter(item => !!item.latitude && !!item.longitude)
    .map((perk, index) => ({
      ...perk,
      id: `perk_${index}`,
      text: perk.perk_text,
      logo: perk.perk_image ? perk.perk_image.url : null,
      website: perk.perk_url
    }));

  const hasPerks = !!perks && perks.length > 0;

  function clickCategory(places) {
    props.updateState({
      filter: {
        ...props.mapData.filter,
        places: props.mapData.filter.places === places ? null : places
      },
      places: null
    });
  }

  const selected = get(props, "mapData.filter.places");
  const primaryColor = get(props, "property.data.primary_color");

  return (
    <React.Fragment>
      <PropertyLocationMapView {...props}>
        <wrapper
          className={styles.wrapper}
          topelement={() => (
            <PropertyLocationMap
              {...props}
              perks={perks}
            />
          )}
        />
      </PropertyLocationMapView>
      <LocationMapPoiBarView {...props}>
        <wrapper topelement={() => (
            <div style={{backgroundColor: primaryColor ? primaryColor : "#008d94"}} className={styles.poiHeader}>WHAT'S NEARBY</div>
          )}>
          {hasPerks ? (
            <perks
              tabIndex={0}
              onKeyDown={e => e.keyCode === 13 && clickCategory("perks")}
              onClick={() => clickCategory("perks")}
              className={styles.interest}
            >
              <InterestBarItem
                title="AMLI Perks"
                places="perks"
                selected={selected}
              />
            </perks>
          ) : null}
          <transit
            tabIndex={0}
            onKeyDown={e => e.keyCode === 13 && clickCategory("transportation")}
            onClick={() => clickCategory("transportation")}
            className={styles.interest}
          >
            <InterestBarItem
              title="Transportation"
              places="transportation"
              selected={selected}
            />
          </transit>
          <key-buildings
            tabIndex={0}
            onKeyDown={e => e.keyCode === 13 && clickCategory("shopping")}
            onClick={() => clickCategory("shopping")}
            className={styles.interest}
          >
            <InterestBarItem
              title="Shopping"
              places="shopping"
              selected={selected}
            />
          </key-buildings>
          <entertainment
            tabIndex={0}
            onKeyDown={e => e.keyCode === 13 && clickCategory("entertainment")}
            onClick={() => clickCategory("entertainment")}
            className={styles.interest}
          >
            <InterestBarItem
              title="Entertainment"
              places="entertainment"
              selected={selected}
            />
          </entertainment>
          <restaurants
            tabIndex={0}
            onKeyDown={e => e.keyCode === 13 && clickCategory("restaurants")}
            onClick={() => clickCategory("restaurants")}
            className={styles.interest}
          >
            <InterestBarItem
              title="Restaurants"
              places="restaurants"
              selected={selected}
            />
          </restaurants>
        </wrapper>
      </LocationMapPoiBarView>
    </React.Fragment>
  );
}

export default graphql(amenitiesQuery, {
  name: "amenitiesQuery",
  options: props => ({
    variables: {
      propertyPageId: props.property.id
    }
  })
})(MapWrapper);
