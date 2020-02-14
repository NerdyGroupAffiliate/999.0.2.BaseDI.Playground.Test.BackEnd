import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { get } from "lodash";
import { Carousel } from "react-responsive-carousel";
import { withRouter } from "react-router-dom";
import { canUseDOM } from "../../helpers/utils";

import SliderPropertyShowcaseView from "../../components/SliderPropertyShowcaseView";

import styles from "./style.module.css";
import "./index.css";
import SliderPropertyListItemView from "../../components/SliderPropertyListItemView";
import GetPropertyFullRoute from "../../helpers/get-full-property-route";

const settings = {
  showThumbs: false,
  showArrows: false,
  showIndicators: false,
  infiniteLoop: true,
  showStatus: false,
  centerMode: true,
  centerSlidePercentage: 90,
  swipeScrollTolerance: 20
};

const fields = {
  planned_use: "Planned Use",
  timing: "Timing",
  construction_firm: "Construction Firm",
  architect: "Architect",
  leed_level: "Planned Leed Level",
  development_start_date: "Start Date",
  move_in_date: "Move In Date",
};

export default withRouter(
  class Slider extends React.Component {
    state = {
      selected: 0,
      items: 0
    };

    componentDidMount() {
      this.setItems(this.props);
    }

    componentWillReceiveProps(nextProps) {
      this.setItems(nextProps);
    }

    incrementSelected = () => {
      const properties = this.getProperties();

      this.setState({
        selected: (this.state.selected + 1) % properties.length
      });
    };

    decrementSelected = () => {
      const properties = this.getProperties();

      this.setState({
        selected:
          (this.state.selected + properties.length - 1) % properties.length
      });
    };

    getProperties = () => {
      return get(this.props, "data.items", []);
    };

    setItems = () => {
      const properties = this.getProperties();
      this.setState({ items: properties.length });
    };

    render() {
      const uid = get(this.props, "page.uid");
      const title = get(this.props, "data.primary.title", "");
      const subtitle = get(this.props, "data.primary.subtitle", "");
      // const mainImage = get(
      //   this.props,
      //   "property.data.primary_property_image",
      //   ""
      // );
      if (!!canUseDOM){
        const developmentCarousel = document.getElementById('development-carousel');
        if (developmentCarousel){
          document.getElementById('development-carousel').addEventListener('touchmove', e => {
            document.body.style.overflow = "hidden";
          })
        }
      }
      const properties = this.getProperties()
        .map(prop => prop.property)
        .map(prop =>
          !this.props.appdata
            ? prop
            : this.props.appdata.properties.find(item => item.uid === prop.uid)
        );
      if (!properties || !properties.length) {
        return null;
      }
      let selectedProperty = properties[this.state.selected];

      const data = selectedProperty ? selectedProperty.data || {} : {};

      return (
        <SliderPropertyShowcaseView {...this.props}>
          <title>{data.name}</title>
          <subtitle className={styles.subtitle}>
            <span>{subtitle}</span>
          </subtitle>
          <list>
            <sliderPropertyListItemViewList0>
              {Object.keys(fields).map((field, index) =>
                !!data && !!data[field] ? (
                  <SliderPropertyListItemView.Controller
                    key={`field_${index}`}
                    label={fields[field]}
                    value={data[field]}
                  />
                ) : null
              )}
              {data &&
                data["sub-regions"] &&
                data["sub-regions"].length &&
                !!this.props.appdata.subregions.find(
                  sr => sr.uid === data["sub-regions"][0]["sub-region"].uid
                ) && (
                  <SliderPropertyListItemView.Controller
                    key="field_neighborhood"
                    label="Neighborhood"
                    value={
                      this.props.appdata.subregions.find(
                        sr =>
                          sr.uid === data["sub-regions"][0]["sub-region"].uid
                      ).data.name
                    }
                  />
                )}
            </sliderPropertyListItemViewList0>
            <a
              href={`${GetPropertyFullRoute(selectedProperty, this.props.appdata)}/${selectedProperty.uid}`}
              className="af-class-button af-class-boss af-class-yellow af-class-w-inline-block tour"
              onKeyDown={e =>
                e.keyCode === 13 &&
                this.props.history.push(`${GetPropertyFullRoute(selectedProperty, this.props.appdata)}/${selectedProperty.uid}`)
              }
              onClick={e => {
                if (e && e.preventDefault) {
                  e.preventDefault();
                }
                this.props.history.push(`${GetPropertyFullRoute(selectedProperty, this.props.appdata)}/${selectedProperty.uid}`);
              }}
            >
              <img
                src="/images/right-arrow.svg"
                alt="right arrow"
                className="af-class-boss-right-arrow tour-arrow"
              />
              <div className="tour-lable">View Property</div>
            </a>
          </list>
          <dots style={{ display: "none" }} />
          <next-arrow className={styles.arrowContainer}>
            <button
              className={styles.button}
              disabled={properties.length < 2}
              onClick={this.decrementSelected}
            >
              <img
                src="/images/icon-arrow--right--blue.svg"
                alt="Previous Item"
                className={`${styles.arrow} ${styles.leftArrow}`}
              />
            </button>
          </next-arrow>
          <back-arrow className={styles.arrowContainer}>
            <button
              className={styles.button}
              disabled={properties.length < 2}
              onClick={this.incrementSelected}
            >
              <img
                src="/images/icon-arrow--right--blue.svg"
                alt="Next Item"
                className={styles.arrow}
              />
            </button>
          </back-arrow>
          <dots>
            {properties.map((prop, index) => {
              return (
                <a // eslint-disable-line
                  href={`/slide-${index}`}
                  aria-label={`View slide ${index + 1}`}
                  key={`dot_${index}`}
                  onClick={e => {
                    if (e) {
                      e.preventDefault();
                    }
                    this.setState({ selected: index });
                  }}
                  className={[
                    styles.dot,
                    this.state.selected === index ? styles.selectedDot : ""
                  ].join(" ")}
                />
              );
            })}
          </dots>
          <slider className={`${uid === 'development' ? styles.sliderWrapperDevelopment : styles.sliderWrapper}`} id="development-carousel">
            {properties && properties.length ? (
              <Carousel
                {...settings}
                selectedItem={this.state.selected}
                onChange={(e) => this.setState({ selected: e})}
              >
                {properties
                  .filter(prop => !!prop && !!prop.data)
                  .map((property, index) => (
                    <div key={`property_${index}`}>
                      <img
                        src={
                          property.data.primary_property_image
                            ? property.data.primary_property_image.url
                            : null
                        }
                        className={`${uid === 'development' ? styles.imageDevelopment : styles.image}`}
                        alt="property main"
                      />
                    </div>
                  ))}
              </Carousel>
            ) : null}
          </slider>
        </SliderPropertyShowcaseView>
      );
    }
  }
);
