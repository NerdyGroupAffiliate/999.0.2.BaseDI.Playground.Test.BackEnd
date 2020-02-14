import React, { useState, useEffect } from "react";

import LocationRetailModalView from "../../components/LocationRetailModalView";
import { get } from "lodash";

import styles from './styles.module.css';


const defaultState = { place: null };
export default function LocationRetailModalController(props) {
  const [state, setState] = useState(defaultState);
  if (!props || !props.place) {
    return null;
  }

  useEffect(() => {
    if (!state.place && !props.place.placeId) {
      setState({ place: props.place });
    }
    if (!state.place && props.mapContext) {
      const PlacesService = get(window, "google.maps.places.PlacesService");
      const PlacesServiceStatus = get(
        window,
        "google.maps.places.PlacesServiceStatus"
      );

      const service = new PlacesService(
        props.mapContext.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      );
      const request = {
        placeId: props.place.place_id
      };

      service.getDetails(request, (result, status) => {
        if (status === PlacesServiceStatus.OK) {
          if (result) {
            setState({ place: result });
          }
        }
      });
    }
  });

  const { place } = state;

  if (place) {
    const formatted_address = get(place, "formatted_address");
    const website = get(place, "website");
    const logo = get(place, "photos[0].getUrl", () => null)();
    const name = get(place, "name");
    return (
      <LocationRetailModalView>
        <retail-modal-wrapper
          className={[
            !place.logo && !logo
              ?  styles.noLogo
              : '',
            !website
              ? styles.noWebsite
              : '',
            styles.wrapper,
          ].join(" ")}
        >
          {place.logo || logo ? (
            <logo
              srcSet={null}
              className={styles.logoPlace}
              src={place.logo || logo}
            />
          ) : null}
          {formatted_address ? <address>{formatted_address}</address> : null}
          {place.text || name ? (
            <description>{place.text || name}</description>
          ) : null}
          {!!website ? (
            <website>
              <a
                className={`af-class-text-block-116 ${styles.linktag}`}
                href={website.url || website}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
                <svg
                  className={styles.buttonArrow}
                  xmlns="http://www.w3.org/2000/svg"
                  width="8px"
                  height="13px"
                  viewBox="0 0 13.13 22.02"
                >
                  <g fill="#b47208">
                    <polygon
                      points="0 19.82 2.19 22.02 13.13 11.01 2.19 0 0 2.2 8.68 11.01 0 19.82"
                      className="af-class-arrow--chevron"
                    />
                  </g>
                </svg>
              </a>
            </website>
          ) : null}
          <close className={styles.link} onClick={props.closePanel} />
        </retail-modal-wrapper>
      </LocationRetailModalView>
    );
  }

  return null;
}
