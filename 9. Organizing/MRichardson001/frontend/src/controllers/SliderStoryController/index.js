import React from "react";
import Slider from "react-slick";
import get from "lodash/get";
import ArrowChevron from "../../assets/icons/arrow-chevron.svg";
import SliderStoryView from "../../components/SliderStoryView";

import styles from "./style.module.css";
import "./index.css";
// import downArrow from "../../assets/images/down-arrow.png";

export default class SliderStoryController extends React.Component {
  state = {
    selected: 0,
    items: 0
  };

  sliderSettings = {
    adaptiveHeight: true,
    centerMode: false,
    arrows: false,
    dots: false,
    draggable: true,
    infinite: false,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    beforeChange: (oldIndex, selected) => this.setState({ selected }),
    responsive: [
      {
        breakpoint: 479,
        settings: {
          variableWidth: false,
          centerPadding: "10px"
        }
      }
    ]
  };

  componentDidMount() {
    this.setItems(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setItems(nextProps);
  }

  goToNextSlide = () => this.slider.slickNext();

  goToPrevSlide = () => this.slider.slickPrev();

  getStories = () => get(this.props, "data.items", []);

  setItems = () => {
    const stories = this.getStories();
    this.setState({ items: stories.length });
  };
  handleDirectSelection(index) {
    this.setState({ selected: index });
    this.slider.slickGoTo(index);
  }

  render() {
    const title = get(this.props, "data.primary.title");
    const textBlurb = get(this.props, "data.primary.text_blurb");
    const stories = this.getStories();
    if (!stories || !stories.length) {
      return null;
    }
    const selectedStory = stories[this.state.selected];
    return (
      <SliderStoryView {...this.props}>
        <title>{title}</title>
        <text-blurb>{textBlurb}</text-blurb>
        <story-year>{selectedStory ? selectedStory.year : null}</story-year>

        <story-text-blurb>
          {selectedStory ? selectedStory.text_blurb : null}{" "}
        </story-text-blurb>
        <controls className={styles.buttonWrapper}>
          <right-arrow
            className={`${styles.arrowContainer} ${styles.prevArrowWrapper}`}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.keyCode === 13 && this.goToPrevSlide()}
            onClick={this.goToPrevSlide}
          >
            <span className={styles.button}>
              <img
                src="/images/icon-arrow--right--blue.svg"
                alt="left arrow"
                className={`${styles.arrow} ${styles.leftArrow}`}
              />
            </span>
          </right-arrow>

          <left-arrow
            className={`${styles.arrowContainer} ${styles.nextArrowWrapper}`}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.keyCode === 13 && this.goToNextSlide()}
            onClick={this.goToNextSlide}
          >
            <span className={styles.button}>
              <img
                src="/images/icon-arrow--right--blue.svg"
                alt="right arrow"
                className={`${styles.arrow} ${styles.rightArrow}`}
              />
            </span>
          </left-arrow>
          <pagination className={styles.pagination}>
            {stories.map((story, index) => {
              return (
                <div
                  key={`dot_${index}`}
                  tabIndex={0}
                  onKeyDown={e =>
                    e.keyCode === 13 && this.handleDirectSelection(index)
                  }
                  onClick={() => this.handleDirectSelection(index)}
                  className={[
                    styles.dot,
                    this.state.selected === index ? styles.selectedDot : ""
                  ].join(" ")}
                />
              );
            })}
          </pagination>
        </controls>
        <slider>
          <div className={styles.sliderWrapper}>
            <Slider
              {...this.sliderSettings}
              ref={slider => (this.slider = slider)}
            >
              {stories.map((property, key) => (
                <div
                  key={`slide_${key}`}
                  onClick={() => this.handleDirectSelection(key)}
                  className={styles.slideContainer}
                >
                  <img
                    src={property.image.url}
                    className={styles.image}
                    alt={property.image.alt || `slide_image_${key}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </slider>
      </SliderStoryView>
    );
  }
}
