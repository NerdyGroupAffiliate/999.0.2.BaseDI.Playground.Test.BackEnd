import React, { useState, useRef, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import get from "lodash/get";
import { Carousel } from "react-responsive-carousel";
import PropertyFloorplanSliderView from "../../components/PropertyFloorplanSliderView";
import placeholderImage from "../../assets/images/floorplan-placeholder@2x.jpg";
import "./index.css";
import styles from "./styles.module.css";
import TourModal from "../TourModalController";
import ImageZoom from 'react-medium-image-zoom'

const settings = {
  showThumbs: false,
  showArrows: false,
  showIndicators: false,
  infiniteLoop: false,
  showStatus: false,
  centerSlidePercentage: 60
};

const getImages = props => {
  const main_image = get(
    props,
    "floorplanQuery.floorplan.cms.data.main_image.url"
  );
  const images = get(props, "floorplanQuery.floorplan.cms.data.images", [])
    .filter(img => !!img && !!img.image && !!img.image.url)
    .map(img => img.image.url);
  if (main_image) {
    images.unshift(main_image);
  }
  return images;
};

function PropertyFloorplanSlider(props) {
  const [selected, setSelected] = useState(0);
  const [showTour, setShowTour] = useState(false);
  const [playTour, setPlayTour] = useState(false);
  const thumbnailsRef = useRef(null);
  const thumbref = useRef(null);
  const floorplanIdInUse = props.floorplanId;

  useEffect(() => {
    if (
      thumbref &&
      thumbref.current &&
      thumbref.current.getBoundingClientRect
    ) {
      const { width } = thumbref.current.getBoundingClientRect();
      const imgs = getImages(props);
      if (width) {
        const slack = selected === imgs.length - 1 ? 0 : 25;
        thumbnailsRef.current.scrollTo({
          left: Math.max(0, selected - 1) * width - slack,
          top: 0,
          behavior: "smooth"
        });
      }
    }
  });

  const primaryColor = get(props, "property.data.primary_color");
  const secondaryColor = get(props, "property.data.secondary_color");
  const sitePlan = get(props, "property.data.site_plan.url");
  const images = getImages(props);

  const tours = get(props, "property.data.3d_tours", []).filter(
    tour => !!tour && !!tour.enabled && tour.enabled === "True"
  );

  const selectedTourUrl = () => {
    let tmpFloorplan = tours.find(t => t.floorplan.id === floorplanIdInUse);
    return (typeof tmpFloorplan !== 'undefined') ? true : false;
  }; 

  return (
    <PropertyFloorplanSliderView>
      <title />
      <floorplan-name className={styles.floorplanName}>
        / {props.floorplanName}
      </floorplan-name>
      <slider>
        <TourModal
          tours={tours}
          selected={0}
          open={showTour}
          onRequestClose={() => setShowTour(false)}
          play={playTour}
          setSelected={() => null}
          startPlay={() => setPlayTour(true)}
          title={props.property.data.name}
          floorplan={props.floorplanId}
        />
        {images.length ? (
          <Carousel {...settings} selectedItem={selected}>
            {images.map((image, key) => (
              <div
                key={`image_${image}_${key}`}
                className={styles.sliderContainer}
              >
                  <ImageZoom
                    image={{
                      src: image,
                      alt: 'floorplan',
                      className: styles.image,
                      style: {
                        width: 'auto'
                      }
                    }}
                  />
              </div>
            ))}
          </Carousel>
        ) : (
          <img
            src={placeholderImage}
            alt="Images Coming Soon"
            className={styles.image}
          />
        )}
      </slider>
      {images.length ? (
        <thumbnails
          className={styles.thumbnails}
          topelement={() => (
            <div
              className={styles.leftArrow}
              onClick={() =>
                setSelected((selected + images.length - 1) % images.length)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 91.92 155.56"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: " .af-class-cls-1{fill:#ffffff!important;}"
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
            </div>
          )}
        >
          <thumbnail-list ref={thumbnailsRef} className={styles.thumbnailsList}>
            {images.map((image, index) => (
              <div
                ref={thumbref}
                key={`image_${image}_${index}`}
                className={[
                  selected === index ? styles.active : "",
                  styles.thumbnail
                ].join(" ")}
                onClick={() => setSelected(index)}
              >
                <img src={image} alt="floorplan" className={styles.image} />
              </div>
            ))}
          </thumbnail-list>
          <right
            className={styles.arrowContainer}
            onClick={() => setSelected((selected + 1) % images.length)}
          >
            <right-arrow />
          </right>
        </thumbnails>
      ) : null}
      <button-wrapper
        className={styles.buttonWrapper}
        topelement={() =>
          <span className={styles.floorplanDisclaimer}>
            *Floor plan dimensions and square feet are approximate.
          </span>
        }
      >
        {!!tours && selectedTourUrl() ? (
          <tour
            tabIndex={0}
            onKeyDown={e => e.keyCode === 13 && setShowTour(true)}
            className={styles.tour}
            onClick={() => setShowTour(true)}
          >Take 3D Tour
          <svg
            width="17"
            height="20"
            viewBox="0 0 17 20"
            xmlns="http://www.w3.org/2000/svg"
            className="tour-button-cube-cube"
          >
            <g id="Property-Phases" fill="none" fillRule="evenodd">
              <g
                id="tour-cube"
                className="tour-button-cube"
                transform="translate(-304 -470)"
                fill="#383838"
                fillRule="nonzero"
              >
                <g transform="translate(274 470)">
                  <g transform="translate(30)">
                    <path
                      d="M3.02955208,5.53827324 L8.5,8.86878802 L13.8956509,5.49427502 L8.5,2.3203627 L3.02955208,5.53827324 Z M15,6.81619902 L9.38819608,10.1820805 L9.38819608,17.157169 L15,13.8561079 L15,6.81619902 L15,6.81619902 Z M7.61180392,17.157169 L7.61180392,10.1820805 L2,6.92569373 L2,13.8561079 L7.61180392,17.157169 L7.61180392,17.157169 Z M0.492979873,4.71001184 L7.99297987,0.298247133 C8.30592899,0.11415942 8.69407101,0.11415942 9.00702013,0.298247133 L16.5070201,4.71001184 C16.8124588,4.88968166 17,5.21758178 17,5.57194605 L17,14.4280539 C17,14.7824182 16.8124588,15.1103183 16.5070201,15.2899882 L9.00702013,19.7017529 C8.69407101,19.8858406 8.30592899,19.8858406 7.99297987,19.7017529 L0.492979873,15.2899882 C0.187541178,15.1103183 0,14.7824182 0,14.4280539 L0,5.57194605 C0,5.21758178 0.187541178,4.88968166 0.492979873,4.71001184 Z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
            <style
            dangerouslySetInnerHTML={{
              __html: `\n .af-class-button--3d-tour:hover {\n background-color: ${primaryColor};\n .af-class-button--3d-tour:hover > .af-class-image-19 {\n background-color: ${primaryColor}"`
            }}
          />
          </tour>
        ) : null}
        {sitePlan ? (
          <site-plan-button
            className={`${styles.viewSitePlan} site-plan-button`}

            href="#siteplan"
            onClick={e => {
              if (e) {
                e.preventDefault();
              }
              if (window) {
                window.open(sitePlan);
              }
            }}
          >
          <style
            dangerouslySetInnerHTML={{
              __html: `\n .site-plan-button:hover {\n background-color: ${secondaryColor} !important;}\n`
            }}
          />

            <div className="button-tour-label">View Site Plan</div>
          </site-plan-button>
        ) : null}
      </button-wrapper>
    </PropertyFloorplanSliderView>
  );
}

export default PropertyFloorplanSlider;
