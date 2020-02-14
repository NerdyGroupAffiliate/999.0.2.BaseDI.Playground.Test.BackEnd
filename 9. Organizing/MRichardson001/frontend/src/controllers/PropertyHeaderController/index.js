import React from "react";
import get from "lodash/get";
import flatten from "lodash/flatten";
import Helmet from "react-helmet-async";
import { graphql } from "react-apollo";
import { Carousel } from "react-responsive-carousel";
import { withRouter } from "react-router";
import ReactPlayer from "react-player";
import PropertyHeaderView from "../../components/PropertyHeaderView";
import queryString from "query-string";
import { setItem, getItem, getItemString } from "../../helpers/cookies";

import styles from "./styles.module.css";
import { propertyAttributesQuery } from "../../graphql/queries/propertyAttributes";
import { formatDollar } from "../../helpers/utils";
import { composeApplyLink } from "../../helpers/property/apply";
import MultiLineString from "../../helpers/mutli-line-string";
import TourModal from "../TourModalController";
import getDniPhone from "../../helpers/get-dni-phone";
import { handlePrismicLink } from "../../helpers/link-helper";
import { EventViewMedia } from "../../helpers/plugins/guestAnalytics.js";
import { personaBackgroundColorStyle } from "../../helpers/property/persona";
import Info from "../../assets/icons/help.png";
import "./index.css";
import StarRatings from "react-star-ratings";

const moment = require("moment");

const _renderConfiguration = attributes => {
  if (!attributes.minBeds && !attributes.maxBeds) {
    return null;
  }
  if (attributes.minBeds === attributes.maxBeds) {
    return attributes.minBeds === 0
      ? "Studio"
      : `${attributes.minBeds} Bedroom`;
  } else {
    return `${
      attributes.minBeds === 0 ? "Studio" : `${attributes.minBeds}`
    } - ${attributes.maxBeds} Bedroom`;
  }
};
class PropertyHeader extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.thumbsRef = React.createRef();
    this.playerRef = React.createRef();
    this.state = {
      settings: {
        showThumbs: false,
        showArrows: true,
        showIndicators: false,
        infiniteLoop: true,
        showStatus: false,
        centerSlidePercentage: 60,
        useKeyboardArrows: true,
        swipeScrollTolerance: 20
      },
      showThumbs: false,
      showTourModal: false,
      tourSelected: 0,
      playTour: false,
      selected: 0,
      phone: get(props, "property.data.phone"),
      showDisclaimer: false
    };

    this.toggleThumbs = this.toggleThumbs.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    let switchCode;
    let referralSite;
    const { switch_code } = queryString.parse(this.props.location.search);
    if (switch_code) {
      setItem("switch_code", switch_code);
    }
    referralSite = getItemString("referralSite");
    switchCode = getItem("switch_code");
    if (!!switchCode || !!referralSite){
      getDniPhone(get(this.props, "property.data.entrataPropertyId"), switchCode, referralSite).then(
        phone => {
          if (this._isMounted) {
            if (phone) {
              this.setState({ phone });
            }
          }
        }
      );
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate() {
    this.playerPause();
  }

  playerPause = () => {
    if (
      this.playerRef &&
      this.playerRef.current &&
      this.playerRef.current.player.isPlaying &&
      this.state.selected !== this.playerRef.current.player.props.index
    ) {
      this.playerRef.current.player.player.pause();
    }
  };

  getImages = () => {
    const images = [
      get(this.props, "property.data.exterior", []).filter(
        img => !!img && !!img && !!img.image && !!img.image.url
      ),
      get(this.props, "property.data.interior", []).filter(
        img => !!img && !!img && !!img.image && !!img.image.url
      ),
      get(this.props, "property.data.videos", []).filter(
        vid => !!vid && !!vid && !!vid.video && !!vid.video.embed_url
      )
    ];
    const mainImage = get(this.props, "property.data.primary_property_image");
    if (!!mainImage) {
      images.unshift({
        image: mainImage
      });
    }

    return images;
  };
  scrollThumbs = (index, imgs) => {
    const images = imgs || this.getImages();
    if (
      this.thumbsRef &&
      this.thumbsRef.current &&
      this.thumbsRef.current.getBoundingClientRect
    ) {
      const slack = index === images.length - 1 ? 0 : 25;
      this.thumbsRef.current.scrollTo({
        top: Math.max(0, index) * 150 - slack,
        left: Math.max(0, index) * 275,
        behavior: "smooth"
      });
    }
  };

  changedSlide = async selected => {
    await this.setState({ selected });
    this.scrollThumbs(selected);
  };

  openWidget = () => {
    if (!!window && window.ppcb) {
      window.ppcb.open("schedule-tour");
    }
  };

  toggleThumbs() {
    this.setState({
      ...this.state,
      showThumbs: !this.state.showThumbs
    });
  }

  renderCategories = (
    imagesDeep,
    property,
    images,
    firstInteriorIndex,
    firstVideoIndex,
    mobileOnly = false
  ) => {
    return (!mobileOnly || this.state.showThumbs) &&
      (imagesDeep[1].length > 0 ||
        imagesDeep[2].length > 0 ||
        imagesDeep[3].length > 0) ? (
      <div
        style={personaBackgroundColorStyle(property)}
        className={[
          styles.galleryCategoryRow,
          mobileOnly ? styles.categoryMobile : styles.categoryDesktop
        ].join(" ")}
      >
        {imagesDeep[1].length > 0 ? (
          <button
            style={personaBackgroundColorStyle(property)}
            onClick={() => {
              this.setState({ selected: 0 });
              this.scrollThumbs(0, images);
            }}
            className={styles.galleryCategoryButton}
          >
            Amenities
          </button>
        ) : null}
        {imagesDeep[2].length > 0 ? (
          <button
            style={personaBackgroundColorStyle(property)}
            onClick={() => {
              this.setState({ selected: firstInteriorIndex });
              this.scrollThumbs(firstInteriorIndex, images);
            }}
            className={styles.galleryCategoryButton}
          >
            Interiors
          </button>
        ) : null}
        {imagesDeep[3].length > 0 ? (
          <button
            style={personaBackgroundColorStyle(property)}
            onClick={() => {
              this.setState({ selected: firstVideoIndex });
              this.scrollThumbs(firstVideoIndex, images);
            }}
            className={styles.galleryCategoryButton}
          >
            Videos
          </button>
        ) : null}
      </div>
    ) : null;
  };

  render() {
    const { property } = this.props;
    const tours = get(this.props, "property.data.3d_tours", []).filter(
      tour => !!tour && !!tour.enabled && tour.enabled === "True"
    );
    const imagesDeep = this.getImages();
    const images = flatten(imagesDeep);
    const extImagesLength = imagesDeep[1].length;
    const intImagesLength = imagesDeep[2].length;
    const firstInteriorIndex = extImagesLength + (imagesDeep[0] ? 1 : 0);
    const firstVideoIndex =
      extImagesLength + intImagesLength + (imagesDeep[0] ? 1 : 0);

    const subregions = get(this.props, "property.data.sub-regions", []);
    const subregion = subregions.length
      ? this.props.appdata.subregions.find(
          sr =>
            !!subregions[0]["sub-region"] &&
            sr.uid === subregions[0]["sub-region"].uid
        )
      : null;
    const address = get(this.props, "property.data.address");
    const name = get(this.props, "property.data.name");
    const uid = get(this.props, "property.uid");
    const phone = this.state.phone;
    const movein = get(this.props, "property.data.move_in_date");
    const sitePlan = get(this.props, "property.data.site_plan.url");
    const attributes =
      get(this.props, "attributesQuery.propertyAttributes") || {};

    const minPrice = get(
      this.props,
      "attributesQuery.propertyAttributes.minPrice"
    );

    const region = subregion
      ? this.props.appdata.regions.find(
          reg =>
            !!subregion &&
            !!subregion.data &&
            !!subregion.data.region &&
            reg.uid === subregion.data.region.uid
        )
      : null;
    let subRegionBreadCrumb;
    const referralPage = get(this.props, "referralPage");
    if (!!referralPage && referralPage.type === "sub-region" && referralPage.data.region.uid === region.uid) {
      subRegionBreadCrumb = referralPage;
    } else if (!!referralPage && referralPage.type !== "sub-region"){
      subRegionBreadCrumb = null
    } else {
      subRegionBreadCrumb = subregion
    }
    const breadcrumbs = [
      { label: "AMLI Home", value: "/" },
      region ? { label: region.data.name, value: `/apartments/${region.uid}` } : null,
      subRegionBreadCrumb
        ? {
          label: subRegionBreadCrumb.data.name,
          value: `/apartments/${get(subRegionBreadCrumb, "data.region.uid")}/${subRegionBreadCrumb.uid}-apartments`
         }
        : null ,
      { label: `${name} Apartments`, value: this.props.location.pathname }
    ].filter(item => !!item && !!item.label);

    const primaryColor =
      get(this.props, "page.primary_color") ||
      get(this.props, "property.data.primary_color");
    const secondaryColor =
      get(this.props, "page.secondary_color") ||
      get(this.props, "property.data.secondary_color");
    const rating = get(
      this.props,
      "attributesQuery.propertyAttributes.reviews.rating"
    );
    const reviews = get(
      this.props,
      "attributesQuery.propertyAttributes.reviews.reviews"
    );
    const specials =
      (get(this.props, "page.specials") || []).filter(special =>
        moment(special.expiration_date).isAfter(moment())
      ).length > 0;
    const currentImage = images[this.state.selected];
    let user = getItem("user");

    const buttonText =
      get(this.props, "page.buttontext") ||
      get(this.props, "property.data.buttontext") ||
      "Schedule a Tour";

    const goDark = get(property, "data.go_dark", "");

    return (
      <React.Fragment>
        <Helmet>
          <script type="application/ld+json">{`
            {
              "@context": "http://schema.org/",
              "@type": "ApartmentComplex",
              "name": "${name}",
              "address": "${address}",
              "telephone": "${phone}",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "${rating}",
                "reviewCount": "${reviews}"
              }
          }
        `}</script>
        </Helmet>
        <PropertyHeaderView>
          <slider
            style={{ backgroundImage: "none" }}
            className={[
              this.state.showThumbs ? "d-flex" : "",
              styles.container
            ].join(" ")}
            topelement={() => (
              <>
                <TourModal
                  tours={tours}
                  selected={this.state.tourSelected}
                  open={this.state.showTourModal}
                  onRequestClose={() => this.setState({ showTourModal: false })}
                  play={this.state.playTour}
                  setSelected={selected =>
                    this.setState({ tourSelected: selected, playTour: false })
                  }
                  startPlay={() => this.setState({ playTour: true })}
                  title={name}
                />
                <Carousel
                  className="property-header-full-carousel"
                  {...this.state.settings}
                  selectedItem={this.state.selected}
                  onChange={this.changedSlide}
                >
                  {images.map((item, index) => (
                    <div className={styles.image} key={`image_${index}`}>
                      {item.image ? (
                        <img
                          className={styles.sliderImage}
                          src={item.image.url}
                          alt="property"
                        />
                      ) : (
                        <ReactPlayer
                          ref={this.playerRef}
                          index={index}
                          className={styles.galleryVideo}
                          controls={true}
                          url={item.video.embed_url}
                          width="100%"
                          height="100%"
                        />
                      )}
                    </div>
                  ))}
                </Carousel>
                <div
                  className={[
                    styles.imageCaption,
                    this.state.showThumbs ? styles.captionThumbs : null,
                    movein ? styles.captionMoveIn : null
                  ].join(" ")}
                >
                  {currentImage.caption
                    ? currentImage.caption
                    : currentImage.video
                    ? currentImage.video.title
                    : name}
                  <span className={styles.imageCounter}>
                    {this.state.selected + 1}/{images.length}
                  </span>
                </div>
                {this.renderCategories(
                  imagesDeep,
                  property,
                  images,
                  firstInteriorIndex,
                  firstVideoIndex,
                  true
                )}
                <div
                  className={[
                    styles.thumbContainer,
                    this.state.showThumbs ? styles.thumbContainerOpen : ""
                  ].join(" ")}
                  style={this.state.showThumbs ? {} : { flex: "0 0 0px" }}
                  ref={this.thumbsRef}
                >
                  {this.renderCategories(
                    imagesDeep,
                    property,
                    images,
                    firstInteriorIndex,
                    firstVideoIndex
                  )}
                  {images.map((item, index) => {
                    if (extImagesLength > 0 && index === 0) {
                      return (
                        <div className={styles.thumbWithHeaderContainerFirst}>
                          <div
                            className={styles.thumbHeaderFirst}
                            style={{ color: secondaryColor }}
                          >
                            Amenities
                          </div>
                          <div
                            tabIndex={0}
                            onKeyDown={async e => {
                              if (e.keyCode !== 13) {
                                return;
                              }
                              await this.setState({ selected: index });
                              this.scrollThumbs(index, images);
                            }}
                            onClick={async () => {
                              await this.setState({ selected: index });
                              this.scrollThumbs(index, images);
                            }}
                            className={styles.thumbItem}
                            key={`thumb_${index}`}
                          >
                            <img
                              className={[
                                styles.sliderThumb,
                                this.state.selected !== index
                                  ? styles.inactiveThumb
                                  : ""
                              ].join(" ")}
                              src={
                                item.image
                                  ? item.image.url
                                  : item.video.thumbnail_url
                              }
                              alt={
                                (item.image
                                  ? item.image.alt
                                  : item.video.title) || ""
                              }
                            />
                          </div>
                        </div>
                      );
                    } else if (index === firstInteriorIndex) {
                      return (
                        <div className={styles.thumbWithHeaderContainer}>
                          <div
                            style={{ color: secondaryColor }}
                            className={styles.thumbHeader}
                          >
                            Interiors
                          </div>
                          <div
                            tabIndex={0}
                            onKeyDown={async e => {
                              if (e.keyCode !== 13) {
                                return;
                              }
                              await this.setState({ selected: index });
                              this.scrollThumbs(index, images);
                            }}
                            onClick={async () => {
                              await this.setState({ selected: index });
                              this.scrollThumbs(index, images);
                            }}
                            className={styles.thumbItem}
                            key={`thumb_${index}`}
                          >
                            <img
                              className={[
                                styles.sliderThumb,
                                this.state.selected !== index
                                  ? styles.inactiveThumb
                                  : ""
                              ].join(" ")}
                              src={
                                item.image
                                  ? item.image.url
                                  : item.video.thumbnail_url
                              }
                              alt={
                                (item.image
                                  ? item.image.alt
                                  : item.video.title) || ""
                              }
                            />
                          </div>
                        </div>
                      );
                    } else if (
                      imagesDeep[3].length > 0 &&
                      index === firstVideoIndex
                    ) {
                      return (
                        <div className={styles.thumbWithHeaderContainer}>
                          <div
                            style={{ color: secondaryColor }}
                            className={styles.thumbHeader}
                          >
                            Video
                          </div>
                          <div
                            tabIndex={0}
                            onKeyDown={async e => {
                              if (e.keyCode !== 13) {
                                return;
                              }
                              await this.setState({ selected: index });
                              this.scrollThumbs(index, images);
                            }}
                            onClick={async () => {
                              await this.setState({ selected: index });
                              this.scrollThumbs(index, images);
                            }}
                            className={styles.thumbItem}
                            key={`thumb_${index}`}
                          >
                            <img
                              className={[
                                styles.sliderThumb,
                                this.state.selected !== index
                                  ? styles.inactiveThumb
                                  : ""
                              ].join(" ")}
                              src={
                                item.image
                                  ? item.image.url
                                  : item.video.thumbnail_url
                              }
                              alt={
                                (item.image
                                  ? item.image.alt
                                  : item.video.title) || ""
                              }
                            />
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          tabIndex={0}
                          onKeyDown={async e => {
                            if (e.keyCode !== 13) {
                              return;
                            }
                            await this.setState({ selected: index });
                            this.scrollThumbs(index, images);
                          }}
                          onClick={async () => {
                            await this.setState({ selected: index });
                            this.scrollThumbs(index, images);
                          }}
                          className={styles.thumbItem}
                          key={`thumb_${index}`}
                        >
                          <img
                            className={[
                              styles.sliderThumb,
                              this.state.selected !== index
                                ? styles.inactiveThumb
                                : ""
                            ].join(" ")}
                            src={
                              item.image
                                ? item.image.url
                                : item.video.thumbnail_url
                            }
                            alt={
                              (item.image
                                ? item.image.alt
                                : item.video.title) || ""
                            }
                          />
                        </div>
                      );
                    }
                  })}
                </div>
              </>
            )}
          >
            {!this.state.showThumbs && (
              <property-breadcrumb className={styles.breadcrumbContainer}>
                <span
                  style={{ position: "absolute", top: -10, height: 0 }}
                  ref={el => (this.instance = el)}
                />
                {breadcrumbs
                  .filter(itm => !!itm.label)
                  .map((item, index) => (
                    <span
                      key={`link_${index}`}
                      className={styles.crunchContainer}
                    >
                      {index !== 0 && (
                        <div className="af-class-breadcrumb-divider" />
                      )}
                      <a
                        href={item.value}
                        onClick={e => {
                          if (!!e && !!e.preventDefault) {
                            e.preventDefault();
                          }
                          this.props.history.push(item.value);
                        }}
                        className="af-class-phase-2-breadcrumb-link"
                      >
                        {item.label}
                      </a>
                    </span>
                  ))}
              </property-breadcrumb>
            )}
            {!this.state.showThumbs && (
              <property-infot-banner
                className={styles.bannerContainer}
                topelement={() => (
                  <div className="af-class-property-info-card-wrapper property-details-card-wrapper-mobile">
                    {!!movein && (
                      <div
                        className="af-class-move-in-date-wrapper"
                        style={personaBackgroundColorStyle(property)}
                      >
                        <div
                          className="af-class-text-block-33"
                          style={personaBackgroundColorStyle(property)}
                        >
                          We'll be move-in ready
                        </div>
                        <div
                          className="af-class-text-block-34"
                          style={personaBackgroundColorStyle(property)}
                        >
                          {movein && moment(movein).format("MMM D, YYYY")}
                        </div>
                        <div className="af-class-move-in-date-dash-line" />
                      </div>
                    )}
                    <div className="af-class-property-info-card-details-mobile">
                      <div className="mobile-property-card-top-row">
                        <h2 className="af-class-property-phase--property-name">
                          {name}
                        </h2>
                        {!!reviews && !!rating ? (
                          <div
                            className={`af-class-star-rating-wrapper ${
                              styles.starsContainer
                            }`}
                          >
                            <StarRatings
                              rating={rating}
                              starRatedColor="#ecd925"
                              starDimension="19px"
                              starSpacing="1px"
                              numberOfStars={5}
                              name='rating'
                            />
                            <span className={styles.reviews}>
                              ({reviews || 0})
                            </span>
                          </div>
                        ) : null}
                        {specials && (
                          <div
                            className={`af-class-div-block-157 mobile-specials-stamp ${
                              styles.specials
                            }`}
                          >
                            <div>Current Special</div>
                            <img
                              src="/images/icon-specials-fire.png"
                              alt="icon for specials"
                              className="af-class-image-28"
                            />
                          </div>
                        )}
                      </div>
                      <div className="mobile-property-card-middle-row">
                        <div className="left-column">
                          <div className="af-class-text-block-39">
                            {MultiLineString(address)}
                          </div>
                          <div className="af-class-text-block-38 mobile-card-phone">
                            {phone ? (
                              <a href={`tel:${phone}`}>{phone}</a>
                            ) : (
                              phone
                            )}
                          </div>
                        </div>
                        <div className="af-class-div-block-130">
                          <div className="af-class-text-block-35">
                            {_renderConfiguration(attributes)}
                          </div>
                          <div className="af-class-text-block-37">
                            Starting at
                          </div>
                          <div
                            className={`af-class-text-block-36 ${
                              styles.pricingWrapper
                            }`}
                          >
                            {minPrice && `$${formatDollar(minPrice, 0)}`}
                            <div className={styles.disclaimerContainer}>
                              <img
                                tabIndex={0}
                                onClick={() =>
                                  this.setState({
                                    showDisclaimer: !this.state.showDisclaimer
                                  })
                                }
                                onBlur={() =>
                                  this.setState({ showDisclaimer: false })
                                }
                                onKeyDown={e => {
                                  if (e.keyCode === 13) {
                                    this.setState({
                                      showDisclaimer: !this.state.showDisclaimer
                                    });
                                  }
                                  if (e.keyCode === 27) {
                                    this.setState({ showDisclaimer: false });
                                  }
                                }}
                                className={styles.infoIcon}
                                src={Info}
                                alt="more info"
                              />
                              <div
                                className={[
                                  this.state.showDisclaimer
                                    ? styles.showDisclaimer
                                    : "",
                                  styles.priceDisclaimerMobile
                                ].join(" ")}
                              >
                                “Starting At” reflects pricing for the lowest rent offered
                                at the Community regardless of the number of bedrooms. Units
                                may or may not be available at this price listed. Availability
                                can be viewed by clicking the “Floorplans &amp; Pricing” page.
                              </div>
                              <div
                                className={[
                                  this.state.showDisclaimer
                                    ? styles.showDisclaimer
                                    : "",
                                  styles.toolTipArrow
                                ].join(" ")}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mobile-property-card-bottom-row">
                        <a
                          style={{ backgroundColor: secondaryColor }}
                          className={styles.visit}
                          {...handlePrismicLink(
                            this.props,
                            {},
                            { propertyData: property },
                            goDark !== "Yes" ? buttonText : "goDark"
                          )}
                        >
                          <div className={styles.visitLabel}>{buttonText}</div>
                          <img
                            src="/images/icon-arrow--right-no-shadow3x.png"
                            alt=""
                            className={[
                              "af-class-boss-right-arrow",
                              styles.buttonArrow
                            ].join(" ")}
                          />
                        </a>
                        {
                          goDark !== "Yes"
                            ? <a
                                href={
                                  property && composeApplyLink(property.data)
                                    ? composeApplyLink(property.data)
                                    : "#"
                                }
                                onClick={e => {
                                  if (e) {
                                    e.preventDefault();
                                  }
                                  if (
                                    composeApplyLink(property.data) &&
                                    composeApplyLink(property.data) ===
                                      "/create-profile"
                                  ) {
                                    this.props.history.push("/create-profile", {
                                      property
                                    });
                                  } else if (composeApplyLink(property)) {
                                    window.open(composeApplyLink(property));
                                  }
                                }}
                                className={[
                                  "af-class-button-7 w-button",
                                  styles.apply
                                ].join(" ")}
                                style={{ backgroundColor: primaryColor }}
                              >
                                {user ? "My Account/Apply" : "View Quotes/Apply"}
                              </a>
                            : null
                        }
                      </div>
                    </div>
                  </div>
                )}
              >
                {!!movein && (
                  <move-in style={personaBackgroundColorStyle(property)}>
                    <property-info-bar-slogan
                      style={personaBackgroundColorStyle(property)}
                    />
                    <property-info-bar-date
                      style={personaBackgroundColorStyle(property)}
                    >
                      {movein && moment(movein).format("MMM D, YYYY")}
                    </property-info-bar-date>
                  </move-in>
                )}
                <property-info-bar-top-row className={styles.topWrapper}>
                  <h2
                    className={`af-class-property-phase--property-name ${
                      styles.name
                    }`}
                  >
                    {name}
                  </h2>
                  {!!reviews && !!rating ? (
                    <div
                      className={`af-class-star-rating-wrapper ${
                        styles.starsContainer
                      }`}
                    >
                      <StarRatings
                        rating={rating}
                        starRatedColor="#ecd925"
                        starDimension="19px"
                        starSpacing="3px"
                        numberOfStars={5}
                        name='rating'
                      />
                      <span className={styles.reviews}>({reviews || 0})</span>
                    </div>
                  ) : null}
                </property-info-bar-top-row>
                <property-info-bar-property-address className={styles.address}>
                  {MultiLineString(address)}
                </property-info-bar-property-address>
                <property-info-bar-property-number className={styles.phone}>
                  {phone ? <a href={`tel:${phone}`}>{phone}</a> : phone}
                </property-info-bar-property-number>
                <property-info-card-right-wrapper
                  className={styles.rightWrapper}
                  topelement={() =>
                    specials && (
                      <div
                        className={`af-class-div-block-157 ${styles.specials}`}
                      >
                        <div>Current Special</div>
                        <img
                          src="/images/icon-specials-fire.png"
                          alt="icon for specials"
                          className="af-class-image-28"
                        />
                      </div>
                    )
                  }
                >
                  <property-info-bar-property-rooms>
                    {_renderConfiguration(attributes)}
                  </property-info-bar-property-rooms>
                  <property-info-bar-property-starting-at
                    className={styles.pricingWrapper}
                  >
                    {minPrice && `$${formatDollar(minPrice, 0)}`}
                    <div className={styles.disclaimerContainer}>
                      <img
                        tabIndex={0}
                        onClick={() =>
                          this.setState({
                            showDisclaimer: !this.state.showDisclaimer
                          })
                        }
                        onBlur={() => this.setState({ showDisclaimer: false })}
                        onKeyDown={e => {
                          if (e.keyCode === 13) {
                            this.setState({
                              showDisclaimer: !this.state.showDisclaimer
                            });
                          }
                          if (e.keyCode === 27) {
                            this.setState({ showDisclaimer: false });
                          }
                        }}
                        className={styles.infoIcon}
                        src={Info}
                        alt="more info"
                      />
                      <div
                        className={[
                          this.state.showDisclaimer
                            ? styles.showDisclaimer
                            : "",
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
                          this.state.showDisclaimer
                            ? styles.showDisclaimer
                            : "",
                          styles.toolTipArrow
                        ].join(" ")}
                      />
                    </div>
                    <p>
                      <a
                        style={{ backgroundColor: secondaryColor }}
                        className={styles.visit}
                        {...handlePrismicLink(
                          this.props,
                          {},
                          { propertyData: property },
                          goDark !== "Yes" ? buttonText : "goDark"
                        )}
                        >
                        <img
                          src="/images/icon-arrow--right-no-shadow3x.png"
                          alt=""
                          className={[
                            "af-class-boss-right-arrow",
                            styles.buttonArrow
                          ].join(" ")}
                        />
                        <span className={styles.visitLabel}>{buttonText}</span>
                      </a>
                    </p>
                  </property-info-bar-property-starting-at>
                </property-info-card-right-wrapper>
                <button-container className={styles.buttonContainer}>
                  <all-photos
                    className={`view-all-photos ${styles.button}`}
                    href="javascript:void(0);" // eslint-disable-line
                    onClick={e => {
                      e.preventDefault();
                      this.toggleThumbs();
                      const { amliPropertyId } = this.props.property.data;
                      EventViewMedia(amliPropertyId, "gallery");
                    }}
                    topelement={() => (
                      <svg
                        width="19"
                        height="13"
                        viewBox="0 0 19 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Property-Phases" fill="none" fillRule="evenodd">
                          <g
                            className="all-photos-cube"
                            transform="translate(-56 -474)"
                            fill="#383838"
                            fillRule="nonzero"
                          >
                            <g transform="translate(45 474)">
                              <g transform="translate(11)">
                                <path d="M4,0 L14.6904762,0 C15.2427609,0 15.6904762,0.44771525 15.6904762,1 L15.6904762,12 C15.6904762,12.5522847 15.2427609,13 14.6904762,13 L4,13 C3.44771525,13 3,12.5522847 3,12 L3,1 C3,0.44771525 3.44771525,0 4,0 Z M5,2 L5,11 L13.6904762,11 L13.6904762,2 L5,2 Z M0,2 L1.99876321,2 L2,12 L0,12 L0,2 Z M16.6904762,2 L18.6892394,2 L18.6904762,12 L16.6904762,12 L16.6904762,2 Z" />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    )}
                  >
                    <view-photos-button className={styles.button}>
                      <style
                        dangerouslySetInnerHTML={{
                          __html: `\n .af-view .af-class-link-w-icon.w-inline-block:hover {\n background-color: ${primaryColor};}\n`
                        }}
                      />
                      Media Gallery
                    </view-photos-button>
                  </all-photos>
                  <tour
                    className={`tour-modal-button ${styles.button}`}
                    href="javascript:void(0);" // eslint-disable-line
                    onClick={e => {
                      e.preventDefault();
                      this.setState({ showTourModal: true, playTour: false });
                      const { amliPropertyId } = this.props.property.data;
                      EventViewMedia(amliPropertyId, "virtual tour");
                    }}
                  >
                    <div>Take 3D Tour</div>
                    <svg
                      width="17"
                      height="20"
                      viewBox="0 0 17 20"
                      xmlns="http://www.w3.org/2000/svg"
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
                              <path d="M3.02955208,5.53827324 L8.5,8.86878802 L13.8956509,5.49427502 L8.5,2.3203627 L3.02955208,5.53827324 Z M15,6.81619902 L9.38819608,10.1820805 L9.38819608,17.157169 L15,13.8561079 L15,6.81619902 L15,6.81619902 Z M7.61180392,17.157169 L7.61180392,10.1820805 L2,6.92569373 L2,13.8561079 L7.61180392,17.157169 L7.61180392,17.157169 Z M0.492979873,4.71001184 L7.99297987,0.298247133 C8.30592899,0.11415942 8.69407101,0.11415942 9.00702013,0.298247133 L16.5070201,4.71001184 C16.8124588,4.88968166 17,5.21758178 17,5.57194605 L17,14.4280539 C17,14.7824182 16.8124588,15.1103183 16.5070201,15.2899882 L9.00702013,19.7017529 C8.69407101,19.8858406 8.30592899,19.8858406 7.99297987,19.7017529 L0.492979873,15.2899882 C0.187541178,15.1103183 0,14.7824182 0,14.4280539 L0,5.57194605 C0,5.21758178 0.187541178,4.88968166 0.492979873,4.71001184 Z" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </tour>
                  {sitePlan ? (
                    <site-plan-button
                      className={`site-plan-button ${styles.button}`}
                      href={null}
                      onClick={e => {
                        if (window) {
                          window.open(sitePlan);
                          const { amliPropertyId } = this.props.property.data;
                          EventViewMedia(amliPropertyId, "site plan");
                        }
                      }}
                    >
                      <div>View Site Plan</div>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 21 21"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fillRule="evenodd">
                          <g
                            className="view-site-plan-icon"
                            transform="translate(-1 -1)"
                            fill="#383838"
                            fillRule="nonzero"
                          >
                            <path d="M20,13 L17.8810262,13 C17.3287415,13 16.8810262,12.5522847 16.8810262,12 C16.8810262,11.4477153 17.3287415,11 17.8810262,11 L20,11 L20,3 L15,3 L15,8 C15,8.55228475 14.5522847,9 14,9 C13.4477153,9 13,8.55228475 13,8 L13,3 L3,3 L3,11.4302411 L7,11.4302411 L7,10.1453616 C7,9.59307688 7.44771525,9.14536163 8,9.14536163 C8.55228475,9.14536163 9,9.59307688 9,10.1453616 L9,14.7151205 C9,15.2674053 8.55228475,15.7151205 8,15.7151205 C7.44771525,15.7151205 7,15.2674053 7,14.7151205 L7,13.4302411 L3,13.4302411 L3,20 L13,20 L13,16.8604822 C13,16.3081974 13.4477153,15.8604822 14,15.8604822 C14.5522847,15.8604822 15,16.3081974 15,16.8604822 L15,20 L20,20 L20,13 Z M1,2 C1,1.44771525 1.44771525,1 2,1 L21,1 C21.5522847,1 22,1.44771525 22,2 L22,21 C22,21.5522847 21.5522847,22 21,22 L2,22 C1.44771525,22 1,21.5522847 1,21 L1,2 Z" />
                          </g>
                        </g>
                      </svg>
                    </site-plan-button>
                  ) : null}
                </button-container>
              </property-infot-banner>
            )}
          </slider>
        </PropertyHeaderView>
        <div>
          {this.state.showThumbs && (
            <a
              className={["close-icon", styles.close].join(" ")}
              href="/default"
              onClick={evt => {
                evt.preventDefault();
                this.toggleThumbs();
              }}
            >
              X Close
            </a>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(
  graphql(propertyAttributesQuery, {
    name: "attributesQuery",
    options: props => ({
      variables: {
        id: String(props.property.data.amli_id)
      }
    })
  })(PropertyHeader)
);
