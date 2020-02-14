import React, { useState } from "react";
import get from "lodash/get";
import { graphql } from "react-apollo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { propertyAttributesQuery } from "../../graphql/queries/propertyAttributes";
import styles from "./mobilemodal.module.css";
import { formatDollar } from "../../helpers/utils";
import { withRouter } from "react-router";
import Info from "../../assets/icons/help.png";


const moment = require("moment");

const settings = {
  showThumbs: false,
  showArrows: false,
  showIndicators: true,
  infiniteLoop: true,
  showStatus: false,
  centerSlidePercentage: 60
};

const getImages = props => {
  const data = get(props, "data.data") || get(props, "data.property") || get(props, "data") || get(props, "property");;

  const images = [
    ...get(data, "interior", []).filter(
      img => !!img && !!img.image && !!img.image.url
    ).slice(0, 3),
    ...get(data, "exterior", []).filter(
      img => !!img && !!img.image && !!img.image.url
    ).slice(0, 3)
  ];
  const mainImage = get(data, "primary_property_image");
  if (!!mainImage) {
    images.unshift({
      image: mainImage
    });
  }
  return images;
};



function PropertyItem(props) {
  const [selected, setSelected] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const { data } = props;
  if (!data) {
    return null;
  }
  const title = get(data, "data.name");

  const address = get(data, "data.address");
  const phone = get(data, "data.phone");
  const pets = get(data, "data.pets");
  const smoke_free = get(data, "data.smoke_free");
  const leed_level = get(data, "data.leed_level");
  const attributes = get(props, "attributesQuery.propertyAttributes") || {};
  const specials =
    (data.specials || []).filter(special =>
      moment(special.expiration_date).isAfter(moment())
    ).length > 0;
  const cat = pets === "Yes";
  const dog = pets === "Yes";
  const smoking = smoke_free === "Yes";
  const leed = !!leed_level;
  const gallery = getImages(props);
  const showBedrooms = get(props, "data.data.enable_pricing_availability_page", '');
  const preLeaseDate = get(props, "data.data.pre-lease_start_date")
  const moveInDate = get(props, "data.data.move_in_date");

  const getFullRoute = () => {
    let path = `/${data.uid}`;
    const page = get(props, "page");
    const subregionUid = get(props, "data.data.sub-regions[0].sub-region.uid");
    if (!!page && subregionUid && page.type === "region") {
      path = `${props.location.pathname}/${subregionUid}-apartments/${props.data.uid}`;
    } else if (!!page && page.type === "sub-region") {
      path = `${props.location.pathname.replace(page.uid, subregionUid)}/${props.data.uid}`;
    }
    return path;
  }

  return (
    <React.Fragment>
    <div className={styles.wrapper}>
      <div className={styles.whiteTriangle} />
      <div className={styles.whiteBar}>
        <div className={styles.grayBar} />
      </div>
      <div className={styles.modalContainer}>
        <div className={styles.sliderWrapper}>
          <img
            src="/images/icon-arrow--slide-left3x.png"
            alt=""
            className={`${styles.sliderController} ${styles.leftArrow}`}
            onClick={() => {
              if (gallery && gallery.length) {
                setSelected((selected + gallery.length - 1) % gallery.length);
              }
            }}
          />
          <img
            src="/images/icon-arrow--slide-right3x.png"
            alt=""
            className={`${styles.sliderController} ${styles.rightArrow}`}
            onClick={() => {
              if (gallery && gallery.length) {
                setSelected((selected + 1) % gallery.length);
              }
            }}
          />
          <Carousel {...settings} selectedItem={selected}>
            {gallery.map(image => (
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
        <div className={styles.infoPanel}>
          {specials && (
            <div className={styles.specialsBanner}>
              <span className={styles.specialsText}>LEASE SPECIAL</span>
            </div>
          )}
          <div className={styles.infoTitleContainer}>
            <div className={styles.infoTitle}>
              {title}
            </div>
          </div>
          <div className={styles.infoBodyRow}>
            <div className={styles.infoContactsCol}>
              <div className={styles.infoAddressContainer}>
                <h3 className={styles.infoAddress}>{address}</h3>
              </div>
              <div className={styles.infoPhoneContainer}>
                <h3 className={styles.infoPhone}>{phone}</h3>
              </div>
            </div>
            <div className={styles.infoDetailsCol}>
              <div className={styles.perksContainer}>
                {cat && (
                  <img
                    src="/images/icon-Cat.svg"
                    alt="cat"
                    className={styles.perkIcon}
                  />
                )}
                {dog && (
                  <img
                    src="/images/icon-Dog.svg"
                    alt="dog"
                    className={styles.perkIcon}
                  />
                )}
                {leed && (
                  <img
                    src="/images/icon-LEED.png"
                    alt="leed-level"
                    className={styles.perkIcon}
                  />
                )}
                {smoking && (
                  <img
                    src="/images/icon-Smoking.png"
                    alt="smoking"
                    className={styles.perkIcon}
                  />
                )}
              </div>
              <div className={styles.bedsContainer}>
                {
                  showBedrooms === "Yes"
                    ? <h3 className={styles.beds}>
                        {`${
                          !attributes.minBeds ? "Studio" : attributes.minBeds
                        } - ${attributes.maxBeds || ""} Bedrooms`}
                      </h3>
                    : preLeaseDate
                    ? <div className={[styles.beds, styles.preLeaseDate].join(" ")}>
                        <p>Pre-Lease Start Date:</p>
                        <p style={{fontSize: '14px', color: "#787878", paddingLeft: '5px'}}>{preLeaseDate}</p>
                      </div>
                    : ''
                }
              </div>
              <div className={styles.pricingContainer}>
              {
                showBedrooms === "Yes"
                  ? <React.Fragment>
                      <div className={styles.disclaimerContainer}>
                        <img
                          tabIndex={0}
                          onClick={() => setShowDisclaimer(!showDisclaimer)}
                          onBlur={() => setShowDisclaimer(false)}
                          onKeyDown={e => {
                            if (e.keyCode === 13) {
                              setShowDisclaimer(!showDisclaimer)
                            }
                            if (e.keyCode === 27) {
                              setShowDisclaimer(false)
                            }
                          }}
                          className={styles.infoIcon} src={Info} alt="more info"
                        />
                        <div
                          className={[
                            showDisclaimer ? styles.showDisclaimer : "",
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
                            showDisclaimer ? styles.showDisclaimer : "",
                            styles.toolTipArrow
                          ].join(" ")}
                        />
                      </div>
                      <button
                        className={styles.pricingButton}
                        onClick={() => props.history.push(`${getFullRoute()}/floorplans`)}
                      >
                        <h3 className={styles.pricing}>
                          {`Starting at $${formatDollar(attributes.minPrice, 0)}`}
                        </h3>
                        <img
                          src="/images/right-arrow.svg"
                          alt=""
                          className={`af-class-property-card-cta-arrow ${styles.arrow}`}
                        />
                      </button>
                    </React.Fragment>
                  : moveInDate
                  ? <div className={[styles.beds, styles.preLeaseDate].join(" ")}>
                      <p>Move In Start Date:</p>
                      <p style={{fontSize: '14px', color: "#787878", paddingLeft: '5px'}}>{moveInDate}</p>
                    </div>
                  : ''
              }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.linkWrapper}>
        <a
            href={`${getFullRoute()}`}
            tabindex={0}
            className={styles.viewProperty}
            onClick={e => {
              if (e && e.preventDefault) {
                e.preventDefault();
              }
              props.history.push(`${getFullRoute()}`);
            }}
            onKeyDown={e => {
              if (e && e.preventDefault) {
                e.preventDefault();
              }
              props.history.push(`${getFullRoute()}`);
            }}
          >
            View Property
          </a>
      </div>
    </div>
    </React.Fragment>
  );
}


const PropertyItemAttributes = withRouter(
  graphql(propertyAttributesQuery, {
    name: "attributesQuery",
    options: props => ({
      variables: {
        id: String(props.data.data.amli_id)
      }
    })
  })(PropertyItem)
);


export default function MobileModal(props) {

  return  <PropertyItemAttributes page={props.page} data={props.data} />

}
