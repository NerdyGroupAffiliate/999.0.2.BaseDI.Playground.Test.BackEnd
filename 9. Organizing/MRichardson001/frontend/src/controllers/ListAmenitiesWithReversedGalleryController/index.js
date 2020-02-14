import React, { useState } from "react";
import get from "lodash/get";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ListAmenitiesWithReversedGalleryView from "../../components/ListAmenitiesWithReversedGalleryView";
import Helmet from "react-helmet-async";
import { canUseDOM } from "../../helpers/utils";

import styles from "./style.module.css";
import { personaBackgroundColorStyle } from "../../helpers/property/persona";

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

function getClass(index, selected) {
  let dist = Math.abs(index - selected);
  if (dist > 2) {
    dist = 2;
  }
  return styles[`fade${dist}`];
}

function ListAmenitiesWithReversedGallery(props) {
  const [selected, setSelected] = useState(0);
  const title = get(props, "slice.primary.title", "");
  const subtitle = get(props, "slice.primary.subtitle", "");

  const amenities = get(props, "slice.items", []).filter(
    amn => !!amn && !!amn.image && !!amn.image.url
  );

  const features = get(props, "slice.items", []).filter(
    am => !!am && !!am.amenity
  );
  const images = amenities.filter(am => !!am && !!am.image && !!am.image.url);
  if (!images || !images.length) {
    return null;
  }
  const property = get(props, "property") || get(props, "page.data");
  const showDisclaimer = get(props, "slice.primary.show_disclaimer");
  if (!!canUseDOM){
    const amenitiesCarousel = document.getElementById('amenities-reverse-carousel');
    if (amenitiesCarousel){
      document.getElementById('amenities-reverse-carousel').addEventListener('touchmove', e => {
        document.body.style.overflow = "hidden";
      })
    }
  }
  return (
    <React.Fragment>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org/",
              "@type": "ApartmentComplex",
              "name": "${property.data.name}",
              "amenityFeature": [
              ${features.map(feature => (
                `{
                  "@type": "LocationFeatureSpecification",
                  "description": "${feature.amenity}"
                  }
                `
              ))}
            ]}
          `}
        </script>
      </Helmet>
      <ListAmenitiesWithReversedGalleryView>
        <header-container style={personaBackgroundColorStyle(property)}>
          <title>{title}</title>
          <subtitle>{subtitle}</subtitle>
        </header-container>
        <gallery className={`${showDisclaimer === "Yes" ? styles.gallery : ''}`}>
          <slider id="amenities-reverse-carousel" className={styles.sliderWrapper}>
            <Carousel
              {...settings}
              selectedItem={selected}
              onChange={e => setSelected(e)}
            >
              {images.map((amenity, index) =>
                !!amenity && !!amenity.image && !!amenity.image.url ? (
                  <div key={`amenity_${index}`}>
                    <img
                      src={amenity.image.url}
                      alt={amenity.image.image_alt_text || ""}
                      className={styles.image}
                    />
                  </div>
                ) : null
              )}
            </Carousel>
            <div
              className={`af-class-amenities-slider-toolbar ${
                styles.toolbarReversed
              }`}
            >
              <div
                className={["af-class-html-embed-8", styles.left].join(" ")}
                tabIndex={0}
                onKeyDown={e =>
                  e.keyCode === 13 &&
                  setSelected(
                    (selected + amenities.length - 1) % amenities.length
                  )
                }
                onClick={() =>
                  setSelected(
                    (selected + amenities.length - 1) % amenities.length
                  )
                }
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n .af-class-arrow-l-chevron {\n  fill:#4c698f;\n  fill-rule: evenodd;\n}\n"
                  }}
                />
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 13.13 22.02"
                >
                  <title>Arrow-Chevron</title>
                  <g>
                    <polygon
                      points="13.13 2.2 10.94 0 0 11.01 10.94 22.02 13.13 19.82 4.44 11.01 13.13 2.2"
                      className="af-class-arrow--chevron"
                    />
                  </g>
                </svg>
              </div>
              {amenities
                .filter(amn => !!amn && !!amn.image && !!amn.image.url)
                .map((item, index) => (
                  <button
                    aria-label={`slide ${index + 1}`}
                    key={`dot-${index}`}
                    tabIndex={0}
                    onKeyDown={e => e.keyCode === 13 && setSelected(index)}
                    className={[styles.dot, getClass(index, selected)].join(" ")}
                    style={personaBackgroundColorStyle(property)}
                  />
                ))}
              <div
                className={["af-class-html-embed-9", styles.right].join(" ")}
                tabIndex={0}
                onKeyDown={e =>
                  e.keyCode === 13 &&
                  setSelected((selected + 1) % amenities.length)
                }
                onClick={() => setSelected((selected + 1) % amenities.length)}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n .af-class-arrow--chevron {\n  fill: #4c698f;\n  fill-rule: evenodd;\n}\n"
                  }}
                />
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 13.13 22.02"
                >
                  <g>
                    <polygon
                      points="0 19.82 2.19 22.02 13.13 11.01 2.19 0 0 2.2 8.68 11.01 0 19.82"
                      className="af-class-arrow--chevron"
                    />
                  </g>
                </svg>
              </div>
            </div>
            {
              showDisclaimer === "Yes"
                ? <div className={styles.disclaimer}>*In select apartment homes.</div>
                : null
            }
          </slider>
        </gallery>
        <amenities-list>
          {features.map((amenity, index) =>
            !!amenity && !!amenity.amenity ? (
              <li
                className="af-class-amenities-slider-list-item"
                key={`amenity-item-${index}`}
              >
                {amenity.amenity}
              </li>
            ) : null
          )}
        </amenities-list>
      </ListAmenitiesWithReversedGalleryView>
    </React.Fragment>
  );
}

export default ListAmenitiesWithReversedGallery;
