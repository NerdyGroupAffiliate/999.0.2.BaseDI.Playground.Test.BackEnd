import React from "react";
import { withRouter } from "react-router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import get from "lodash/get";
import TextWritter from "../../helpers/text-writter";
import styles from "./styles.module.css";
import { objectFitListener } from "../../helpers/page-renderer/object-fit-helper";
import "./index.css";
import SliderPointOfInterestView from "../../components/SliderPointOfInterestView";
import { handlePrismicLink } from "../../helpers/link-helper";
const settings = {
  showThumbs: false,
  showArrows: false,
  showIndicators: false,
  infiniteLoop: true,
  showStatus: false,
  // centerMode: true,
  // centerSlidePercentage: 60,
  swipeScrollTolerance: 20,
  width: "100%"
};
class Slider extends React.Component {
  state = {
    selected: 0,
    items: 0
  };

  componentDidMount() {
    this.setItems(this.props);
    if ("objectFit" in document.documentElement.style === false) {
      document.addEventListener("DOMContentLoaded", objectFitListener);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setItems(nextProps);
  }

  componentWillUnmount() {
    if (!!document) {
      document.removeEventListener("DOMContentLoaded", objectFitListener);
    }
  }

  incrementSelected = () => {
    const pois = get(this.props, "data.items") || [];
    this.setState({
      selected: (this.state.selected + 1) % pois.length
    });
  };

  decrementSelected = () => {
    const pois = get(this.props, "data.items") || [];
    this.setState({
      selected: (this.state.selected + pois.length - 1) % pois.length
    });
  };

  setItems = props => {
    const pois = get(props, "data.items") || [];
    this.setState({ items: pois.length });
  };

  render() {
    const title =
      get(this.props, "data.primary.title1") ||
      get(this.props, "data.primary.title");
    const subtitle =
      get(this.props, "data.primary.subtitle1") ||
      get(this.props, "data.primary.subtitle");
    const pois = get(this.props, "data.items") || [];
    const pageUid = get(this.props, "page.uid");
    let isCulture = false;
    if (!pois.length) {
      return null;
    }
    if (pageUid === "culture") {
      isCulture = true;
    }
    const blurb =
      pois &&
      pois.length &&
      pois[this.state.selected] &&
      pois[this.state.selected].point_blurb
        ? pois[this.state.selected].point_blurb.map(tx => TextWritter(tx))
        : null;
    const blurb_fact =
      pois && pois.length ? pois[this.state.selected].point_fact : null;
    const blurb_link =
      pois && pois.length ? pois[this.state.selected].point_fact_link : null;
    const link = blurb_link ? handlePrismicLink(this.props, blurb_link) : null;
    const g_title =
      pois && pois.length ? pois[this.state.selected].point_title : null;

    return (
      <SliderPointOfInterestView {...this.props}>
        <container
          className={isCulture
              ? `culture mobile-poi-headers-wrapper ${styles.culturePage}`
              : 'mobile-poi-headers-wrapper'
            }
          topelement={() => (
            <div className='af-class-slider_poi_headers mobile'>
            {subtitle ? <h3 className='af-class-list-blocks-b-section-label'>{subtitle}</h3> : null}
            {title ? <h2 className='af-class-slider-poi-header'>{title}</h2> : null}
            </div>
          )}
        >
          {subtitle ? <sub-title>{subtitle}</sub-title> : null}
          {title ? <title>{title}</title> : null}
          <text-wrapper className={isCulture ? styles.culture : ""}>
            <g-titile className={isCulture ? styles.cultureTitle : ""}>
              {g_title}
            </g-titile>
            <g-blurb className={isCulture ? styles.cultureBlurb : ""}>
              {blurb}
            </g-blurb>
            {blurb_fact ? (
              <g-blurb-fact className={styles.blurbFactLink} {...link}>
                {blurb_fact}
              </g-blurb-fact>
            ) : null}
            <next-arrow className={isCulture ? styles.cultureNext : ""}>
              <button className={styles.button} onClick={this.decrementSelected}>
                <img
                  src="/images/icon-arrow--right--blue.svg"
                  alt="right arrow"
                  className={`${styles.arrow} ${styles.leftArrow}`}
                />
              </button>
            </next-arrow>
            <prev-arrow className={isCulture ? styles.culturePrev : ""}>
              <button className={styles.button} onClick={this.incrementSelected}>
                <img
                  src="/images/icon-arrow--right--blue.svg"
                  alt="left arrow"
                  className={styles.arrow}
                />
              </button>
            </prev-arrow>
            <pagination className={isCulture ? styles.cultureDots : ""}>
              {pois.map((poi, index) => {
                return (
                  <div
                    key={`dot_${index}`}
                    tabIndex={0}
                    onKeyDown={e =>
                      e.keyCode === 13 && this.setState({ selected: index })
                    }
                    onClick={() => this.setState({ selected: index })}
                    className={[
                      styles.dot,
                      this.state.selected === index ? styles.selectedDot : ""
                    ].join(" ")}
                  />
                );
              })}
            </pagination>
          </text-wrapper>
          <slider className={styles.sliderWrapper}>
            {pois && pois.length ? (
              <Carousel
                {...settings}
                selectedItem={this.state.selected}
                onChange={e => this.setState({ selected: e})}
              >
                {pois.map(poi => (
                  <div key={`point_of_interest_${poi.point_title}`}>
                    <img
                      src={poi.point_image.url}
                      alt={poi.image_alt_text}
                      className={styles.image}
                      data-object-fit="cover"
                    />
                  </div>
                ))}
              </Carousel>
            ) : null}
          </slider>
        </container>
      </SliderPointOfInterestView>
    );
  }
}

export default withRouter(Slider);
