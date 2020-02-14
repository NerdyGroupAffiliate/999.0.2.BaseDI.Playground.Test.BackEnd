import React from "react";
import get from "lodash/get";
import throttle from "lodash/throttle";
import Slider from "react-slick";
import SliderTimelineView from "../../components/SliderTimelineView";
import TimelineCardView from "../../components/TimelineCardView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import styles from './styles.module.css';
import "./index.css";
import { personaColorStyle } from "../../helpers/property/persona";

export default class SliderTimeline extends React.Component {
  state = {
    selected: 0,
    width: 0
  };

  sliderSettings = {
    adaptiveHeight: false,
    centerMode: false,
    arrows: false,
    dots: false,
    className: "slider-track-custom",
    draggable: false,
    infinite: false,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    rtl: false,
    beforeChange: (oldIndex, selected) => this.setState({ selected }),
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2
        }
      },

      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: false,
          draggable: false,
          swipeToSlide: false,
          rtl: true
        }
      }
    ]
  };

  componentDidMount() {
    this.setItems(this.props);
    this.throttledMeasure = throttle(this.measure, 16);
    if (!this.sizeListener && !!window) {
      this.sizeListener = window.addEventListener(
        "resize",
        this.throttledMeasure
      );
    }
    this.measure(true);
  }

  componentWillReceiveProps(nextProps) {
    this.setItems(nextProps);
  }

  componentWillUnmount() {
    if (!!this.sizeListener && !!window) {
      window.removeEventListener("resize");
    }
  }

  measure = () => {
    if (this.div) {
      const items = get(this.props, "data.items", []);
      const { width, height } = this.div.getBoundingClientRect();
      this.setState({
        width,
        height,
        selected:
          width < 480 && this.state.selected === 0
            ? items.length - 1
            : this.state.selected
      });
    }
  };
  setItems = () => {
    const items = get(this.props, "data.items", []);
    items.sort(function(a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    return items;
  };

  render() {
    const { data } = this.props;
    const items = this.setItems();
    const subtitle = get(data, "primary.subtitle");
    const title = get(data, "primary.title");
    const sideImage = BackgroundImageHandler(
      get(data, "primary.sidebar_image")
    );

    const property =
      get(this.props, "property") || get(this.props, "page.data");

    if (!items || !items.length) {
      return null;
    }

    return (
      <SliderTimelineView {...this.props}>
        <subtitle style={personaColorStyle(property, "secondary")}>
          {subtitle}
        </subtitle>
        <title className={styles.title} style={personaColorStyle(property)}>{title}</title>
        <slider
          topelement={() => (
            <div
              className={styles.sliderWrapper}
              ref={elem => (this.div = elem)}
            >
              <Slider
                {...{
                  ...this.sliderSettings,
                  slidesToShow: Math.min(
                    this.sliderSettings.slidesToShow,
                    items.length
                  )
                }}
                ref={slider => (this.slider = slider)}
              >
                {items.map((item, index) => (
                  <TimelineCardView.Controller key={index} items={item} />
                ))}
              </Slider>
            </div>
          )}
        >
          <prev-arrow
            className={styles.arrow}
            onClick={() =>
              this.state.width < 480
                ? this.slider.slickPrev()
                : this.slider.slickNext()
            }
          />
          <next-arrow
            className={styles.arrow}
            onClick={() =>
              this.state.width < 480
                ? this.slider.slickNext()
                : this.slider.slickPrev()
            }
          />
        </slider>
        {/* <timeline-track className={styles.timelineTrack}/> */}
        <sidebar-image {...sideImage} />
      </SliderTimelineView>
    );
  }
}
