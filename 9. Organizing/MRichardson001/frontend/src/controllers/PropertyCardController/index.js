import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { graphql } from "react-apollo";
import get from "lodash/get";
import { withRouter } from "react-router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { propertyAttributesQuery } from "../../graphql/queries/propertyAttributes";
import PropertyCardView from "../../components/PropertyCardView";
import styles from "./styles.module.css";
import "./index.css";
import MultiLineString from "../../helpers/mutli-line-string";
import { formatDollar } from "../../helpers/utils";
import usePhone from "../../helpers/hooks/usePhone";
import Info from "../../assets/icons/help.png";

const moment = require("moment");

const CarouselSettings = {
  showThumbs: false,
  showArrows: false,
  showIndicators: false,
  infiniteLoop: true,
  showStatus: false
};

function getClass(index, selected) {
  let dist = Math.abs(index - selected);
  if (dist > 2) {
    dist = 2;
  }
  return styles[`fade${dist}`];
}

const _renderConfiguration = (minBeds, maxBeds) => {
  if (minBeds === maxBeds) {
    return minBeds === 0 ? "Studio" : `${minBeds} Bedroom`;
  } else {
    return `${
      minBeds === 0 ? "Studio" : `${minBeds} Bedroom`
    } - ${maxBeds} Bedroom`;
  }
};

const _renderPricing = minPrice => `Starting at $${formatDollar(minPrice, 0)}`;

const _updatePropertyAttributes = (
  updateState,
  mapData,
  property,
  attributes
) => {
  const computeMinValue = (filter, attributes) => {
    if (filter.minvalue === 0) {
      return attributes.minPrice;
    }
    if (attributes.minPrice === 0) {
      return filter.minvalue;
    }

    return Math.min(mapData.filter.minvalue, attributes.minPrice);
  };
  updateState({
    filter: {
      ...mapData.filter,
      minvalue: computeMinValue(mapData.filter, attributes),
      maxvalue: Math.max(mapData.filter.maxvalue, attributes.maxPrice),
      dirtySlider: false
    },
    properties: mapData.properties.map(prt =>
      prt.id === property.id
        ? {
            ...prt,
            attributes
          }
        : prt
    )
  });
};

const getImages = props => {
  const images = [
    ...get(props, "property.data.exterior", [])
      .filter(img => !!img && !!img && !!img.image && !!img.image.url)
      .slice(1, 4),
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

const PropertyCard = props => {
  const [selected, setSelected] = useState(0);
  const data = get(props, "data.data");
  const property = get(props, "data");
  const attributes = get(props, "attributesQuery.propertyAttributes");
  const [dniPhone, hrefPhone] = usePhone(
    get(data, "phone"),
    get(data, "entrataPropertyId"),
    props
  );
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const showBedrooms = get(
    props,
    "data.data.enable_pricing_availability_page",
    ""
  );
  const preLeaseDate = get(props, "data.data.pre-lease_start_date");
  const moveInDate = get(props, "data.data.move_in_date");
  useEffect(() => {
    if (!!attributes && !property.attributes) {
      _updatePropertyAttributes(
        props.updateState,
        props.mapData,
        property,
        attributes
      );
    }
  });

  if (!data || !attributes) {
    return null;
  }

  const {
    name,
    address,
    phone,
    pets,
    smoke_free,
    leed_level
    // logo,
  } = data;

  const images = getImages({ property: { data } });

  const cat = pets === "Yes";
  const dog = pets === "Yes";
  const smoking = smoke_free === "Yes";
  const leed = !!leed_level;

  const specials =
    (data.specials || []).filter(special =>
      moment(special.expiration_date).isAfter(moment())
    ).length > 0;

  const getRoute = property => {
    const page = get(props, "page");
    const subregion = get(property, "data.sub-regions[0].sub-region");

    if (!!page && subregion && page.type === "region") {
      return `${props.location.pathname}/${subregion.uid}-apartments/${
        property.uid
      }`;
    } else if (!!page && subregion && page.type === "sub-region") {
      return `/apartments/${get(page, "data.region.uid")}/${
        subregion.uid
      }-apartments/${property.uid}`;
    }

    return `/${property.uid}`;
  };
  return (
    <PropertyCardView>
      <name
        className={styles.title}
        onClick={() => props.history.push(getRoute(property))}
      >
        {name}
      </name>
      <address href={null}>{MultiLineString(address)}</address>
      {phone ? <phone href={hrefPhone}>{dniPhone}</phone> : null}
      <configuration>
        {showBedrooms === "Yes" ? (
          _renderConfiguration(attributes.minBeds, attributes.maxBeds)
        ) : preLeaseDate ? (
          <p style={{ display: "flex", flexDirection: "column" }}>
            <span>Pre-Lease Start Date:</span>
            <span style={{ fontSize: "14px", color: "#787878" }}>
              {preLeaseDate}
            </span>
          </p>
        ) : null}
      </configuration>
      <pricing-container
        className={styles.pricingContainer}
        style={showBedrooms === "No" ? { marginTop: 0 } : null}
        topelement={() => {
          if (showBedrooms === "No") {
            return moveInDate ? (
              <div className="af-class-property-card-bedroom">
                <p style={{ display: "flex", flexDirection: "column" }}>
                  <span>Move In Start Date:</span>
                  <span style={{ fontSize: "14px", color: "#787878" }}>
                    {moveInDate}
                  </span>
                </p>
              </div>
            ) : null;
          }
        }}
      >
        {showBedrooms === "Yes" ? (
          <pricing-link
            className={styles.pricingLink}
            href={`${getRoute(property)}/floorplans`}
            tabIndex={0}
            onClick={e => {
              if (e && e.preventDefault) {
                e.preventDefault();
              }
              props.history.push(`${getRoute(property)}/floorplans`);
            }}
          >
            <pricing>
              <span style={{ paddingRight: "5px" }}>
                {_renderPricing(attributes.minPrice)}
              </span>
              <div className={styles.disclaimerContainer}>
                <img
                  tabIndex={0}
                  onClick={e => {
                    if (e && e.preventDefault && e.stopPropagation) {
                      e.stopPropagation();
                      e.preventDefault();
                      setShowDisclaimer(!showDisclaimer);
                    }
                  }}
                  onBlur={() => setShowDisclaimer(false)}
                  onKeyDown={e => {
                    if (e.keyCode === 13) {
                      setShowDisclaimer(!showDisclaimer);
                    }
                    if (e.keyCode === 27) {
                      setShowDisclaimer(false);
                    }
                  }}
                  className={styles.infoIcon}
                  src={Info}
                  alt="more info"
                />
                <div
                  className={[
                    showDisclaimer ? styles.showDisclaimer : "",
                    styles.priceDisclaimer
                  ].join(" ")}
                >
                  “Starting At” reflects pricing for the lowest rent offered at
                  the Community regardless of the number of bedrooms. Units may
                  or may not be available at this price listed. Availability can
                  be viewed by clicking the “Floorplans &amp; Pricing” page.
                </div>
                <div
                  className={[
                    showDisclaimer ? styles.showDisclaimer : "",
                    styles.toolTipArrow
                  ].join(" ")}
                />
              </div>
            </pricing>
          </pricing-link>
        ) : null}
      </pricing-container>
      {cat && <cat alt="cat" title="Cats Allowed" />}
      {dog && <dog alt="dog" title="Dogs Allowed" />}
      {leed && <leed alt="leed level" title="LEED Certified Community" />}
      {smoking && <smoking alt="smoking" title="Smoke-Free" />}
      <slider
        className={styles.sliderContainer}
        topelement={() => (
          <>
            <Carousel
              {...CarouselSettings}
              selectedItem={selected}
              onClickItem={() => props.history.push(getRoute(property))}
            >
              {(images || []).map((image, index) =>
                Math.abs(selected - index) < 3 ||
                (selected === 0 && index === images.length - 1) ||
                (images.length - 1 - selected < 3 && index === 0) ? (
                  <img
                    src={image.image ? image.image.url : image.url}
                    alt={
                      image.caption ||
                      (image.image ? image.image.alt || "" : "")
                    }
                    className={styles.image}
                    key={`images_${index}`}
                  />
                ) : (
                  <span key={`image_span_${index}`} />
                )
              )}
            </Carousel>
            <div className={styles.dotContainer}>
              {images.map((image, index) => (
                <div
                  tabIndex={0}
                  key={`dot_${index}`}
                  onKeyDown={e => e.keyCode === 13 && setSelected(index)}
                  className={[styles.dot, getClass(index, selected)].join(" ")}
                />
              ))}
            </div>
          </>
        )}
      >
        <slider-left
          className={styles.arrows}
          alt="previous image"
          tabIndex={0}
          onKeyDown={e =>
            e.keyCode === 13 &&
            (images && images.length) &&
            setSelected((selected + images.length - 1) % images.length)
          }
          onClick={() => {
            if (images && images.length) {
              setSelected((selected + images.length - 1) % images.length);
            }
          }}
        />
        <slider-right
          className={styles.arrows}
          alt="next image"
          tabIndex={0}
          onKeyDown={e =>
            e.keyCode === 13 &&
            (images && images.length) &&
            setSelected((selected + 1) % images.length)
          }
          onClick={() => {
            if (images && images.length) {
              setSelected((selected + 1) % images.length);
            }
          }}
        />
        {specials && (
          <specials
            className={styles.specials}
            onClick={() => props.history.push(getRoute(property))}
          >
            <div className="af-class-text-block">Current Special</div>
            <img
              src="/images/icon-special-fire3x.svg"
              alt="specials icon"
              className={`af-class-icon-fire ${styles.fireIcon}`}
            />
          </specials>
        )}
      </slider>
    </PropertyCardView>
  );
};

export default withRouter(
  graphql(propertyAttributesQuery, {
    name: "attributesQuery",
    options: props => ({
      variables: {
        id: String(props.data.data.amli_id)
      }
    })
  })(PropertyCard)
);
