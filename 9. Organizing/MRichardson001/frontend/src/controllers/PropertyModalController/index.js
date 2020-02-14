import React, { useState } from "react";
import get from "lodash/get";
import { withRouter } from "react-router";
import PropertyModalView from "../../components/PropertyModalView";
import rightArrow from "../../assets/icons/icon-arrow--right--blue.svg";
import { formatDollar } from "../../helpers/utils";
import MultiLineString from "../../helpers/mutli-line-string";
import Info from "../../assets/icons/help.png";
import { Carousel } from "react-responsive-carousel";

import styles from "./styles.module.css";

const _renderPricing = attributes =>
  !attributes ? null : `Starting at $${formatDollar(attributes.minPrice, 0)}`;

const _renderConfiguration = attributes => {
  if (!attributes) {
    return null;
  }
  if (attributes.minBeds === attributes.maxBeds) {
    return attributes.minBeds === 0
      ? "Studio"
      : `${attributes.minBeds} Bedroom`;
  } else {
    return `${
      attributes.minBeds === 0 ? "Studio" : `${attributes.minBeds} Bedroom`
    } - ${attributes.maxBeds} Bedroom`;
  }
};

const getImages = props => {
  const images = [
    ...get(props, "property.data.exterior", [])
    .filter(img => !!img && !!img && !!img.image && !!img.image.url)
    .slice(0, 3),
    ...get(props, "property.data.interior", [])
      .filter(img => !!img && !!img && !!img.image && !!img.image.url)
      .slice(0, 3)
  ];
  const mainImage = get(props, "property.data.primary_property_image");
  if (!!mainImage) {
    images.unshift({
      image: mainImage
    });
  }
  return images;
};

export default withRouter(props => {
  if (!props || !props.property) {
    return null;
  }
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const {
    name,
    address,
    phone,
    pets,
    smoke_free,
    leed_level,
    highlights
    // logo,
    // specials
  } = props.property.data;

  let filteredHighlights;
  if (!!highlights) {
    filteredHighlights = highlights.filter(item => !!item && !!item.text);
  }

  const cat = pets === "Yes";
  const dog = pets === "Yes";
  const smoking = smoke_free === "Yes";
  const leed = !!leed_level;
  // const logoImage = get(logo, "url");
  const images = getImages(props);
  const attributes = get(props, "property.attributes");

  const [selected, setSelected] = useState(0);
  const settings = {
    showThumbs: false,
    showArrows: false,
    showIndicators: true,
    infiniteLoop: true,
    showStatus: false,
    centerSlidePercentage: 60
  };
  const showBedrooms = get(props, "property.data.enable_pricing_availability_page", '');
  const preLeaseDate = get(props, "property.data.pre-lease_start_date")
  const moveInDate = get(props, "property.data.move_in_date");

  const getFullRoute = () => {
    let path = `/${props.property.uid}`;
    const page = get(props, "page");
    const subregionUid = get(props, "property.data.sub-regions[0].sub-region.uid");
    if (!!page && subregionUid && page.type === "region") {
      path = `${props.location.pathname}/${subregionUid}-apartments/${props.property.uid}`;
    } else if (!!page && page.type === "sub-region") {
      path = `${props.location.pathname.replace(page.uid, subregionUid)}/${props.property.uid}`;
    }
    return path;
  }
  return (
    <PropertyModalView>
      <modal-wrapper className={styles.wrapper}>
        <title>{name}
        <div className={styles.whiteTriangleDesktop} />
        <img
            alt="close"
            src='/images/Filter-Opened.png'
            tabIndex={0}
            className={styles.close}
            onKeyDown={e =>
              e.keyCode === 13 && !!props.onClickClose && props.onClickClose()
            }
            onClick={() => props.onClickClose && props.onClickClose()}
          />
        </title>
        <address>{MultiLineString(address)}</address>
        {phone ? <phone href={`tel:${phone}`} className={styles.phone}>{phone}</phone> : null}
        <images>
          <div className={styles.sliderWrapper}>
            <img
              src="/images/icon-arrow--slide-left3x.png"
              alt=""
              className={`${styles.sliderController} ${styles.leftArrow}`}
              onClick={() => {
                if (images && images.length) {
                  setSelected((selected + images.length - 1) % images.length);
                }
              }}
            />
            <img
              src="/images/icon-arrow--slide-right3x.png"
              alt=""
              className={`${styles.sliderController} ${styles.rightArrow}`}
              onClick={() => {
                if (images && images.length) {
                  setSelected((selected + 1) % images.length);
                }
              }}
            />
            <Carousel
              {...settings}
              selectedItem={selected}
              onClickItem={()=> props.history.push(`${getFullRoute()}`)}
            >
              {images.map(image => (
                <div className={styles.slideContainer} key={image}>
                  <img
                    key={image}
                    src={image.image.url}
                    alt="property"
                    className={styles.image}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </images>
        <pricing className={styles.pricingWrapper}>
          {
            showBedrooms === "Yes"
              ? <React.Fragment>
                  {_renderPricing(attributes)}
                  <div className={styles.disclaimerContainer}>
                    <img
                      tabIndex={0}
                      onClick={() => setShowDisclaimer(!showDisclaimer)}
                      onKeyDown={e => e.keyCode === 13 && setShowDisclaimer(!showDisclaimer)}
                      className={styles.infoIcon} src={Info} alt="more info"
                    />
                    <div
                      className={[
                        showDisclaimer
                          ? styles.showDisclaimer
                          : '',
                        styles.priceDisclaimer
                      ].join(" ")}
                    >
                      “Starting At” reflects pricing for the lowest rent offered
                      at the Community regardless of the number of bedrooms. Units
                      may or may not be available at this price listed. Availability
                      can be viewed by clicking the “Floorplans &amp; Pricing” page.
                    </div>
                    <div
                      className={[
                        showDisclaimer
                          ? styles.showDisclaimer
                          : '',
                        styles.toolTipArrow
                      ].join(" ")}
                    />
                  </div>
                </React.Fragment>
              : moveInDate
              ? <div className="af-class-property-card-bedroom">
                  <p style={{display: 'flex', flexDirection: 'column'}}>
                    <span>Move In Start Date:</span>
                    <span style={{fontSize: '14px', color: "#787878"}}>{moveInDate}</span>
                  </p>
                </div>
              : ''
          }
        </pricing>
        <configuration className={styles.configuration}>
          {
            showBedrooms === "Yes"
              ? _renderConfiguration(attributes)
              : preLeaseDate
              ? <p style={{display: 'flex', flexDirection: 'column'}}>
                  <span>Pre-Lease Start Date:</span>
                  <span style={{fontSize: '14px', color: "#787878"}}>{preLeaseDate}</span>
                </p>
              : ''
          }
        </configuration>
        {!props.responsive && filteredHighlights && filteredHighlights.length && (
          <highlights>
            <highlight-list className={styles.highlightList}>
              {filteredHighlights.map(({ text }, index) => (
                <li
                  className="af-class-property-card-modal-feat-list-item"
                  key={`highlight_${index}`}
                >
                  {text}
                </li>
              ))}
            </highlight-list>
          </highlights>
        )}
        {dog && <dog><dog/></dog>}
        {cat && <cat><cat/></cat>}
        {leed && <leed><leed/></leed>}
        {smoking && <smocking><smocking/></smocking>}
        <link
          className={styles.link}
          tabIndex={0}
          onKeyDown={e => {
            if (e && e.stopPropagation) {
              e.stopPropagation();
            }
            if (e.keyCode !== 13) {
              return null;
            }
            props.history.push(`${getFullRoute()}`);
          }}
          onTouchStart={e => {
            if (e && e.stopPropagation) {
              e.stopPropagation();
            }
            props.history.push(`${getFullRoute()}`);
          }}
          onMouseDown={e => {
            if (e && e.stopPropagation) {
              e.stopPropagation();
            }
            props.history.push(`${getFullRoute()}`);
          }}
        >
          <div className={`af-class-text-block-28 ${styles.linktag}`}>
            View Property
          </div>
          <img src={rightArrow} alt="right arrow" className={styles.arrow} />
        </link>
      </modal-wrapper>
    </PropertyModalView>
  );
});
