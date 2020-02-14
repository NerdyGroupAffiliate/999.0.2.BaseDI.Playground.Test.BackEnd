import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router";
import { graphql } from "react-apollo";
import moment from "moment";
import { propertyAttributesQuery } from "../../graphql/queries/propertyAttributes";
import PropertySubPageHeaderView from "../../components/PropertySubPageHeaderView";
import MultiLineString from "../../helpers/mutli-line-string";
import defaultImage from "../../assets/images/default-property-subpage-header.jpg";
import Helmet from "react-helmet-async";
import queryString from "query-string";

/* eslint-disable import/first */
import stylesMod from "./styles.module.css";
const styles = stylesMod.locals || stylesMod;
import "./index.css";
import { formatDollar } from "../../helpers/utils";
import StarRatings from "react-star-ratings";
import getDniPhone from "../../helpers/get-dni-phone";
import CapitalizeFirsts from "../../helpers/capitalize-first-letter";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import { composeApplyLink } from "../../helpers/property/apply";
import { handlePrismicLink } from "../../helpers/link-helper";
import { setItem, getItem, getItemString } from "../../helpers/cookies";
import { personaBackgroundColorStyle } from "../../helpers/property/persona";
import {
  getRelatedAmenitiesPage,
  getRelatedLocationPage,
  getRelatedFurnishedPage
} from "../../helpers/get-related-property-pages";

import Info from "../../assets/icons/help.png";

const composeEntrataScript = entrataDomain => `
  var ppcbConfig={bottom: 5, right:5}; !function(e){var t=document.createElement("script"),n=function(){ppcb.render({subdomain:"//${entrataDomain.replace(
    "prospectportal.com",
    ""
  )}.prospectportal.com",query:"is_responsive_snippet=1&snippet_type=contact_button"})};t.src="//commoncdn.entrata.com/website_templates/_assets/_common/contact_btn_controller.min.js?ver=347147",t.defer=!0,t.async=!0,t.readyState?t.onreadystatechange=function(){("loaded"===t.readyState||"complete"===t.readyState)&&n()}:t.onload=n,document.head.appendChild(t)}(window);
`;
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
      attributes.minBeds === 0 ? "Studios" : `${attributes.minBeds}`
    } - ${attributes.maxBeds} Bedroom`;
  }
};

const defaultHeader = {
  url: defaultImage
}

const getHeaderImage = props => {
  let image = null;
  switch (props.route) {
    case "floorplans":
      image = get(props, "property.data.floorplan_header");
      break;
    case "amenities":
      const amenities = getRelatedAmenitiesPage(
        props.property.id,
        props.appdata
      );
      image =
        get(props, "data.amenities.data.header_image") ||
        get(amenities, "data.header_image");

      break;

    case "location":
      const location = getRelatedLocationPage(props.property.id, props.appdata);
      image =
        get(props, "data.location.data.header_image") ||
        get(location, "data.header_image");

      break;
    case "furnished":
      const furnished = getRelatedFurnishedPage(
        props.property.id,
        props.appdata
      );
      image =
        get(props, "data.furnished.data.header_image") ||
        get(furnished, "data.header_image");

      break;
    case "contact":
      image = get(props, "property.data.contact_header");
      break;
    default:
      break;
  }
  if (!image || !image.url) {
    return defaultHeader
  } else {
    return image;
  }
};

const titles = {
  floorplans: "Floor Plans & Pricing",
  amenities: "Amenities & Features",
  location: "Location",
  furnished: "Short-term Furnished",
  contact: "Contact Us"
};
 class PropertySubPageHeader extends React.Component {
  _isMounted = false;
   constructor(props){
     super(props);
     this.state = {
       phone: get(props, "property.data.phone"),
       showDisclaimer: false
     }
   }


  componentDidMount() {
    this._isMounted = true;
    this.script = document.createElement("script");
    this.script.type = "text/javascript";
    this.script.async = true;
    this.loadedScripts = false;
    this.mountScript();
    let switchCode;
    let referralSite;
    const { switch_code } = queryString.parse(this.props.location.search);
    if (switch_code) {
      setItem("switch_code", switch_code);
    }
    referralSite = getItemString("referralSite");
    switchCode = getItem("switch_code");
    if (!!switchCode || !!referralSite) {
      getDniPhone(get(this.props, "property.data.entrataPropertyId"), switchCode, referralSite).then(
        phone => {
          if (this._isMounted){
              if (phone) {
                this.setState({phone});
              }
            }
          }
        )
    }
  }

  componentDidUpdate() {
    this.mountScript();
  }
  componentWillUnmount() {
    this._isMounted = false;
    if (this.script && !!this.script.innerHTML && !!this.instance) {
      this.instance.removeChild(this.script);
      const elem = document.getElementById("ppcb_btn");
      const elem2 = document.getElementById("ppcb_container");
      const elem3 = document.getElementById("ppcb_notification");
      if (!!elem) {
        elem.remove();
      }
      if (!!elem2) {
        elem2.remove();
      }
      if (!!elem3) {
        elem3.remove();
      }
    }
  }
  loadScript = src => {
    const tag = document.createElement("script");
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName("head")[0].appendChild(tag);
  };

  mountScript = () => {
    const entrataDomain = get(this.props, "property.data.entrata_domain");
    // const entrataId = get(this.props, "property.data.entrata_id");
    if (
      !!this.instance &&
      !!this.script &&
      !this.script.innerHTML.length &&
      !this.loadedScripts &&
      !!entrataDomain
    ) {
      this.script.innerHTML = composeEntrataScript(entrataDomain);
      this.instance.appendChild(this.script);
      this.loadedScripts = true;
    }
  };

  openWidget = () => {
    if (!!window && window.ppcb) {
      window.ppcb.open("schedule-tour");
    }
  };


  render() {
    const route = get(this.props, "route");
    const headerTitle = titles[route] || CapitalizeFirsts(route);
    const name = get(this.props, "page.name");
    const address = MultiLineString(get(this.props, "page.address"));
    const specials =
      (get(this.props, "page.specials") || []).filter(special =>
        moment(special.expiration_date).isAfter(moment())
      ).length > 0;
    const attributes = get(this.props, "attributesQuery.propertyAttributes") || {};

    const rating = get(
      this.props,
      "attributesQuery.propertyAttributes.reviews.rating"
    );
    const reviews = get(
      this.props,
      "attributesQuery.propertyAttributes.reviews.reviews"
    );

    const headerProps = BackgroundImageHandler(getHeaderImage(this.props));
    const dailyRate = get(this.props, "data.furnished.data.daily_rate");
    const movein = get(this.props, "property.data.move_in_date");

    const subregions = get(this.props, "property.data.sub-regions", []);

    const subregion = subregions.length
    ? this.props.appdata.subregions.find(
        sr =>
          !!subregions[0]["sub-region"] &&
          sr.uid === subregions[0]["sub-region"].uid
      )
    : null;

    const region = subregion
    ? this.props.appdata.regions.find(
        reg =>
          !!subregion &&
          !!subregion.data &&
          !!subregion.data.region &&
          reg.uid === subregion.data.region.uid
      )
    : null;

    const uid = get(this.props, "property.uid");
    const secondaryColor = get(this.props, "page.secondary_color");
    const property = get(this.props, "property");
    const primaryColor = get(this.props, "property.data.primary_color");

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
    { label: `${name} Apartments`, value: (this.props.location.pathname).replace(`/${route}`, "") }
    ].filter(item => !!item && !!item.label);

    const metaPhone = get(this.props, "property.data.phone");
    const metaAddress = get(this.props, "property.data.address");
    const { phone } = this.state;
    let user = getItem("user");

    const buttonText =
      get(this.props, "page.buttontext") ||
      get(this.props, "property.data.buttontext") ||
      'Schedule a Tour';

    const goDark = get(property, "data.go_dark", "")

    return (
      <React.Fragment>
        <Helmet>
            <script type="application/ld+json">{`
              {
                  "@context": "http://schema.org/",
                  "@type": "ApartmentComplex",
                  "name": "${name}",
                  "address": "${metaAddress}",
                  "telephone": "${metaPhone}",
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "${rating}",
                    "reviewCount": "${reviews}"
                  }
              }
          `}</script>
        </Helmet>
        <PropertySubPageHeaderView>
          <wrapper {...headerProps} className={styles.header} topelement={() => (
                    <div className={styles.breadcrumbContainer}>
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
                    </div>
          )}>
          <title className={styles.title}>{headerTitle}</title>
            <placard-container className={styles.placard} topelement={() =>
            <div className="af-class-property-info-card-wrapper property-subpage-details-card-wrapper-mobile">
              {!!movein && (
                <div className={`af-class-move-in-date-wrapper ${styles.movein}`} style={personaBackgroundColorStyle(property)}>
                  <div className="af-class-text-block-33 " style={personaBackgroundColorStyle(property)}>We'll be move-in ready</div>
                  <div className="af-class-text-block-34 " style={personaBackgroundColorStyle(property)}>
                    {movein && moment(movein).format("MMM D, YYYY")}
                  </div>
                  <div className="af-class-move-in-date-dash-line" />
                </div>
              )}
              <div className="af-class-property-info-card-details-mobile">
                      <div className="mobile-property-card-top-row">
                        <h2 className={`af-class-property-phase--property-name ${name.length > 15 ? "long-property-name" : ''}`} >
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
                            <span className={styles.reviews}>({reviews || 0})</span>
                          </div>
                        ) : null}
                        {
                          specials && (
                            <div
                              className={`af-class-div-block-157 mobile-subpage-specials-stamp ${styles.specials}`}
                            >
                              <img
                                src="/images/icon-specials-fire.png"
                                alt="icon for specials"
                                className="af-class-image-28"
                              />
                              <div>Current Special</div>
                            </div>
                          )
                        }
                      </div>
                      <div className="mobile-property-card-middle-row">
                        <div className="left-column">
                          <div className="af-class-text-block-39">
                            {address}
                          </div>
                          <div className="af-class-text-block-38 mobile-card-phone">
                            {phone ? <a href={`tel:${phone}`}>{phone}</a> : phone}
                          </div>
                        </div>
                        <div className="af-class-div-block-130">
                          <div className="af-class-text-block-35">
                            {_renderConfiguration(attributes)}
                          </div>
                          <div className="af-class-text-block-37">Starting at</div>
                          <div className={`af-class-text-block-36 ${styles.pricingWrapper}`}>
                            {
                              route === "furnished" ?
                                <span>
                                  {`$${formatDollar(dailyRate, 0)}`}
                                  <span className={styles.dailyText}>
                                    / daily rate
                                  </span>
                                </span>
                              : `$${formatDollar(attributes.minPrice, 0)}`
                            }
                            {
                              route !== "furnished" ?
                                <div className={styles.disclaimerContainer}>
                                  <img
                                    tabIndex={0}
                                    onClick={() => this.setState({ showDisclaimer: !this.state.showDisclaimer })}
                                    onBlur={() => this.setState({ showDisclaimer: false })}
                                    onKeyDown={e => {
                                      if (e.keyCode === 13) {
                                        this.setState({ showDisclaimer: !this.state.showDisclaimer })
                                      }
                                      if (e.keyCode === 27) {
                                        this.setState({ showDisclaimer: false })
                                      }
                                    }}
                                    className={styles.infoIcon} src={Info} alt="more info"
                                  />
                                  <div
                                    className={[
                                      this.state.showDisclaimer
                                        ? styles.showDisclaimer
                                        : '',
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
                                        : '',
                                      styles.toolTipArrow
                                    ].join(" ")}
                                  />
                                </div>
                              : null
                            }
                          </div>
                        </div>
                      </div>
                    <div className="mobile-property-card-bottom-row">
                      {
                        route === "furnished" ? (
                          <a href={`/contact?topic=community&propertyUid=${property.uid}&propertyName=${property.data.name}&residentOption=nonResident&nonResidentOptionSelect=short-term-housing`} className={styles.button} onClick={e => {
                            if (e && e.preventDefault) {
                              e.preventDefault();
                            }
                            this.props.history.push({
                              pathname: "/contact",
                              search: `?topic=community&propertyUid=${property.uid}&propertyName=${property.data.name}&residentOption=nonResident&nonResidentOptionSelect=short-term-housing`
                            });
                            }}
                            style={{ backgroundColor: secondaryColor }}
                          >
                            <span className={styles.buttonText}>Request Information</span>
                        </a>
                        ) :
                        <a // eslint-disable-line
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
                        </a>
                      }
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
                                if (composeApplyLink(property.data) && composeApplyLink(property.data) === '/create-profile') {
                                  this.props.history.push('/create-profile', { property });
                                } else if (composeApplyLink(property)) {
                                  window.open(composeApplyLink(property));
                                }
                              }}
                              className={[
                                "af-class-button-7 w-button",
                                styles.apply].join(" ")}
                              style={{ backgroundColor: primaryColor }}
                            >
                              {user ? 'My Account/Apply': 'View Quotes/Apply'}
                            </a>
                          : null
                      }
                    </div>
                  </div>
              </div>
              }>
              <property-name className={styles.name}>{name}</property-name>
              { !!reviews &&!!rating ?
              <stars className={styles.starsContainer}>
                 <StarRatings
                    rating={rating}
                    starRatedColor="#ecd925"
                    starDimension="19px"
                    starSpacing="3px"
                    numberOfStars={5}
                    name='rating'
                  />
                <span className={styles.reviews}>({reviews || 0})</span>
              </stars>
              : null
              }
              <address className={styles.address}>{address}</address>
              {phone ? (
                <phone className={styles.phone}>
                  <a href={`tel:${phone}`}>{phone}</a>
                </phone>
              ) : phone}
              <details-wrapper topelement={() =>
                route === "furnished" ? (
                  <a href={`/contact?topic=community&propertyUid=${property.uid}&propertyName=${property.data.name}&residentOption=nonResident&nonResidentOptionSelect=short-term-housing`} className={styles.button} onClick={e => {
                    if (e && e.preventDefault) {
                      e.preventDefault();
                    }
                    this.props.history.push({
                      pathname: "/contact",
                      search: `?topic=community&propertyUid=${property.uid}&propertyName=${property.data.name}&residentOption=nonResident&nonResidentOptionSelect=short-term-housing`
                    });
                    }}
                    style={{ backgroundColor: secondaryColor }}
                  >
                    <img
                      src="/images/icon-arrow--right-no-shadow3x.png"
                      alt="right-arrow"
                      className={`af-class-boss-right-arrow ${styles.buttonArrow}`}
                    />
                    <span className={styles.buttonText}>Request Information</span>
                </a>
                ) :
                <a // eslint-disable-line
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
                  <span className={styles.visitLabel}>
                    {buttonText}
                  </span>
                </a>
              }>

                {specials &&
                  <specials className={styles.specials}>
                    <img
                      src="/images/icon-specials-fire.png"
                      alt="specials icon"
                      className="af-class-image-28"
                    />
                    <div>Current Special</div>
                  </specials>
                }
                <beds className={styles.beds}>{_renderConfiguration(attributes)}</beds>
                <price className={styles.price}>
                  {
                    route === "furnished" ?
                      <span>
                        {`$${formatDollar(dailyRate, 0)}`}
                        <span className={styles.dailyText}>
                          / daily rate
                        </span>
                      </span>
                    : `$${formatDollar(attributes.minPrice, 0)}`
                }
                {
                  route !== "furnished" ?
                    <div className={styles.disclaimerContainer}>
                    <img
                      tabIndex={0}
                      onClick={() => this.setState({ showDisclaimer: !this.state.showDisclaimer })}
                      onBlur={() => this.setState({ showDisclaimer: false })}
                      onKeyDown={e => {
                        if (e.keyCode === 13) {
                          this.setState({ showDisclaimer: !this.state.showDisclaimer })
                        }
                        if (e.keyCode === 27) {
                          this.setState({ showDisclaimer: false })
                        }
                      }}
                      className={styles.infoIcon} src={Info} alt="more info"
                      />
                    <div
                      className={[
                        this.state.showDisclaimer
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
                        this.state.showDisclaimer
                        ? styles.showDisclaimer
                        : '',
                        styles.toolTipArrow
                      ].join(" ")}
                      />
                  </div>
                : null
              }
                </price>
                </details-wrapper>
                </placard-container>
          </wrapper>
        </PropertySubPageHeaderView>
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
  })(PropertySubPageHeader)
);
