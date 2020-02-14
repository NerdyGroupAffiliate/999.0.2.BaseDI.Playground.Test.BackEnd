import React from "react";
import ReactModal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import icon from "../../assets/icons/right_circle_arrow.png";
import styles from './styles.module.css';
import './index.css';
const modalSettings = {
  showThumbs: false,
  showArrows: false,
  showIndicators: false,
  infiniteLoop: true,
  showStatus: false,
  centerSlidePercentage: 100
};

function TourModal(props) {
  let tours = props.tours || [];
  if (props.floorplan) {
    tours = tours.filter(
      tour =>
        !!tour &&
        !!tour.floorplan &&
        !!tour.floorplan.id &&
        tour.floorplan.id === props.floorplan
    );
  }
  if (!tours || !tours.length) {
    return null;
  }
  return (
    <ReactModal
      isOpen={props.open}
      contentLabel="3D Tours"
      onRequestClose={props.onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalTitle}>{props.title}</div>
      <div className={styles.modalBody}>
        <button className={styles.modalClose} onClick={props.onRequestClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
          </svg>
        </button>
        <Carousel {...modalSettings} selectedItem={props.selected}>
          {tours.map((tour, index) =>
            !!tour && !!tour.cover_image && !!tour.cover_image.url ? (
              <div key={`tour_${index}`} className={styles.modalGallery}>
                {props.play && index === props.selected ? (
                  <iframe
                    title={`viritual-tour-${index}`}
                    id={`iframe-virtual-tour-${index}`}
                    style={{
                      backgroundColor: "black",
                      width: "100%",
                      height: "100%",
                      margin: 0,
                      minHeight: 500
                    }}
                    src={tour.tour_link.url}
                    frameBorder="0"
                    allowFullScreen="true"
                  />
                ) : (
                  <>
                    <div className={styles.modalGalleryTitle}>
                      {tours[props.selected].tour_title}
                    </div>
                    <img
                      src={tour.cover_image.url}
                      alt={`tour ${index}`}
                      className=""
                    />
                    <div
                      onClick={props.startPlay}
                      className={styles.threeDButton}
                    >
                      <img src={icon} alt="Play 3d Tour" />
                    </div>
                  </>
                )}
              </div>
            ) : null
          )}
        </Carousel>
        {tours.length > 1 ? (
          <div className={styles.sliderControllerRow}>
            <span
              className={styles.modalArrowButton}
              onClick={() =>
                props.setSelected(
                  (props.selected + tours.length - 1) % tours.length
                )
              }
            >
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 13.13 22.02"
                style={{ width: 25, height: 35 }}
              >
                <title>Arrow-Chevron</title>
                <g>
                  <polygon
                    points="13.13 2.2 10.94 0 0 11.01 10.94 22.02 13.13 19.82 4.44 11.01 13.13 2.2"
                    className="af-class-arrow--chevron"
                  />
                </g>
              </svg>
            </span>
            <span
              className={`
                ${styles.dotsRow}
                ${tours.length > 15 ? styles.displayNoneMobile : ''}
              `}
            >
              {tours.map((tour, index) => (
                <div
                  key={`dot_${index}`}
                  className={[
                    styles.modalDot,
                    index === props.selected ? styles.activeDot : ""
                  ].join(" ")}
                />
              ))}
            </span>
            <span
              className={styles.modalArrowButton}
              onClick={() =>
                props.setSelected((props.selected + 1) % tours.length)
              }
            >
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 13.13 22.02"
                style={{ width: 25, height: 35 }}
              >
                <g>
                  <polygon
                    points="0 19.82 2.19 22.02 13.13 11.01 2.19 0 0 2.2 8.68 11.01 0 19.82"
                    className="af-class-arrow--chevron"
                  />
                </g>
              </svg>
            </span>
          </div>
        ) : null}
      </div>
    </ReactModal>
  );
}

export default TourModal;
