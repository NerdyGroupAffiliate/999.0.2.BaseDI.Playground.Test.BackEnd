import React from "react";
import get from "lodash/get";
import PropertyLocationIntroView from "../../components/PropertyLocationIntroView";
import { canUseDOM } from '../../helpers/utils';

import styles from "./styles.module.css";
import Vehicle from "../../assets/icons/icon-location-vehicle.svg";
import Map from "../../assets/icons/map-pin.svg";
import Walk from "../../assets/icons/person-walking.svg";

import "./index.css";
import { personaBackgroundColorStyle } from "../../helpers/property/persona";

const renderNearByLists = (place, index) => {
  return (
    <near-by-li1 key={`near-by-places_${index}`}>
      <div className="location-distance-label">{place.location_name}</div>
      <div className="div-block-248" />
      <div className="div-block-247">
        <div className={["text-block-76", styles.nearbyItem].join(" ")}>{`${
          place.distance
        } mi`}</div>
        <div className={["text-block-76", styles.nearbyItem].join(" ")}>
        {
          place.walking_distance
            ? `${place.walking_distance} min`
            : "N/A"
        }
        </div>
        <div
          className={["text-block-76", "last-child", styles.nearbyItem].join(
            " "
          )}
        >{`${place.traffic_distance} min`}</div>
      </div>
    </near-by-li1>
  );
};

export default class PropertyLocationIntro extends React.Component {
  state = {
    subRegionName: null
  };
  componentDidMount = () => {
    this.findSubRegion();
  };

  findSubRegion = () => {
    const subregion_obj = get(
      this.props,
      "property.data.sub-regions[0].sub-region"
    );
    const subRegions = get(this.props, "appData.subregions", []);

    let filterRegion, subRegionImage, subRegionName, subRegionDescription;
    if (subregion_obj && subRegions.length > 0) {
      filterRegion = subRegions.filter(item => item.id === subregion_obj.id);

      if (filterRegion.length > 0 && filterRegion[0].data) {
        subRegionImage =
          filterRegion[0].data.primary_image &&
          filterRegion[0].data.primary_image.url;
        subRegionName = filterRegion[0].data.name;
        subRegionDescription = filterRegion[0].data.description;
      }
    }
    this.setState({ subRegionImage, subRegionName, subRegionDescription });
  };

  render() {
    const { props } = this;
    const { slice } = props;
    const highlight_attribute_icon_1 = get(
      slice,
      "primary.highlight_attribute_icon_1.url"
    );
    const highlight_attribute_icon_2 = get(
      slice,
      "primary.highlight_attribute_icon_2.url"
    );
    const highlight_attribute_icon_3 = get(
      slice,
      "primary.highlight_attribute_icon_3.url"
    );
    const highlight_attribute_text_1 = get(
      slice,
      "primary.highlight_attribute_text_1"
    );
    const highlight_attribute_text_2 = get(
      slice,
      "primary.highlight_attribute_text_2"
    );
    const highlight_attribute_text_3 = get(
      slice,
      "primary.highlight_attribute_text_3"
    );

    const score_number_1 = get(slice, "primary.score_number_1");
    const score_number_2 = get(slice, "primary.score_number_2");
    const score_title_1 = get(slice, "primary.score_title_1");
    const score_title_2 = get(slice, "primary.score_title_2");
    const subtitle = get(slice, "primary.subtitle");
    const property = get(props, "property") || get(props, "page.data");
    const locations = get(slice, "items", []);
    const title = get(slice, "primary.title");
    const subheader = get(slice, "primary.subheader") || 'Location';
    if (!score_number_1 && !score_number_2 && !locations) {
      return null;
    }

    const bgColor = get(property, "data.primary_color");
    let width = 1000;
    if (!!canUseDOM) {
      width = document.documentElement.clientWidth;
    }
    const backgroundColor =
      width > 767
        ? personaBackgroundColorStyle(property)
        : { background: "linear-gradient(" + bgColor + " 90%, white 10%)" };


    const highlightsCheck = 
    (highlight_attribute_icon_1 && highlight_attribute_text_1) ||
    (highlight_attribute_icon_2 && highlight_attribute_text_2) ||
    (highlight_attribute_icon_3 && highlight_attribute_text_3);
    const scoreCheck = 
    (score_number_1 && score_title_1) || 
    (score_number_2 && score_title_2);
    
    return (
      <PropertyLocationIntroView>
        <region-panel
          className={styles.regionPanelContainer}
          style={backgroundColor}
        >
          <text-wrapper
            topelement={() => (
              <h1>
                <span className="af-class-section-title af-class-white">{subheader}</span>
                <span className="section-tagline tagline-location-span">
                  {title ? title : this.state.subRegionName}
                </span>
              </h1>
            )}
          >
          <subregion-description>
            {" "}
            {subtitle || this.state.subRegionDescription}{" "}
          </subregion-description>
          <subregion-primary-image
            src={this.state.subRegionImage}
            srcSet={
              !!this.state.subRegionImage ? this.state.subRegionImage : null
            }
          />
          </text-wrapper>
        </region-panel>
        {!!highlightsCheck ?
        <benefits-container>
          {highlight_attribute_icon_1 && highlight_attribute_text_1 ?
          <benefit-1-wrapper>
            <highlight-attribute-icon-1 src={highlight_attribute_icon_1} />
            <highlight-attribute-text-1>
              {highlight_attribute_text_1}
            </highlight-attribute-text-1>
          </benefit-1-wrapper>
          : null}

        {highlight_attribute_icon_2 && highlight_attribute_text_2 ?
          <benefit-2-wrapper>
            <highlight-attribute-icon-2 src={highlight_attribute_icon_2} />
            <highlight-attribute-text-2>
              {highlight_attribute_text_2}
            </highlight-attribute-text-2>
          </benefit-2-wrapper>
          : null}

          {highlight_attribute_icon_3 && highlight_attribute_text_3 ?
          <benefit-3-wrapper>
            <highlight-attribute-icon-3 src={highlight_attribute_icon_3} />
            <highlight-attribute-text-3>
              {highlight_attribute_text_3}
            </highlight-attribute-text-3>
          </benefit-3-wrapper>
          : null}
        </benefits-container>
        : null}

        {!!scoreCheck?
        <scores-container
          style={
            !highlightsCheck ?
            {
              "width" : "100%",
              justifyContent: 'center',
            }
            : null
          }
        >
        {score_number_1 && score_title_1 ? 
          <score-1-wrapper className={styles.scoreWrapper}>
            <score-number-1>{score_number_1}</score-number-1>
            <score-title-1>{score_title_1}</score-title-1>
          </score-1-wrapper>
          : null}

        {score_number_2 && score_title_2 ? 
          <score-1-wrapper className={styles.scoreWrapper}>
            <score-number-1>{score_number_2}</score-number-1>
            <score-title-1>{score_title_2}</score-title-1>
          </score-1-wrapper>
          : null}
        </scores-container>
        : null}

        <near-by-list
          topelement={() => (
            <div className={styles.iconContainer}>
              <span className={styles.icon}>
                <img alt="Distance" src={Map} />
              </span>
              <span className={styles.icon}>
                <img alt="Walking distance" src={Walk} />
              </span>
              <span className={styles.icon}>
                <img alt="Public Transportation" src={Vehicle} />
              </span>
            </div>
          )}
        >
          {locations.map((place, index) => renderNearByLists(place, index))}
        </near-by-list>
      </PropertyLocationIntroView>
    );
  }
}
