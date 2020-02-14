import React, { useState, useEffect } from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import { compose, graphql } from "react-apollo";

import { amenitiesQuery } from "../../graphql/queries/amenitiesQuery";
import { furnishedQuery } from "../../graphql/queries/furnishedQuery";
import PropertyFullView from "../../components/PropertyFullView";
import { composeApplyLink } from "../../helpers/property/apply";
import PropertyNavigationLinkView from "../../components/PropertyNavigationLinkView";
import DarkLogo from "../../assets/images/logo-dark.svg";

import styles from "./styles.module.css";
import "./index.css";
import { locationQuery } from "../../graphql/queries";
import { getItem } from "../../helpers/cookies";

const header = [
  { label: "Overview", link: null, value: undefined },
  { label: "Floor Plans & Pricing", link: "/floorplans", value: "floorplans" },
  { label: "Amenities & Features", link: "/amenities", value: "amenities" },
  { label: "Location", link: "/location", value: "location" },
  {
    label: "Short-term Furnished",
    link: "/short-term-furnished",
    value: "furnished"
  },
  { label: "Contact Us", link: "/contact", value: "contact" }
];

function PropertyFull(props) {
  const [modalOpen, setModal] = useState(false);
  const [activeLink, setActiveLink] = useState(props.route);
  const [fullRoute, setFullRoute] = useState("");

  const { route } = props;
  const logo =
    get(props, "page.data.logo.url") ||
    get(props, "property.data.logo.url") ||
    get(props, "property.property.data.logo.url") ||
    DarkLogo;

  const property =
    get(props, "page.data") ||
    get(props, "property.data") ||
    get(props, "property.property.data");
  const completePropertyData = get(props, "page") || get(props, "property") || get(props, "property.property");
  const primaryColor = get(property, "primary_color");

  const currently_leasing = get(property, "currently_leasing");
  const enable_pricing_availability_page = get(property, "enable_pricing_availability_page");
  const enableContact = get(property, "contact_us_available");
  const goDark = get(property, "go_dark", "");

  const headerLinks = header.map(item => {
    switch (item.value) {
      case "amenities":
        return {
          ...item,
          enabled: !!get(props, "amenitiesQuery.amenities.data")
        };

      case "furnished":
        return { ...item, enabled: !!get(props, "furnished.furnished.data") };

      case "location":
        return {
          ...item,
          enabled: !!get(props, "locationPageQuery.location.data")
        };
        case "floorplans":
          return {
            ...item,
            enabled: enable_pricing_availability_page === 'Yes'
          };
        case "contact":
          return {
            ...item,
            enabled: enableContact !== "No"
          };
      default:
        return { ...item, enabled: true };
    }
  });
  const getFullRoute = () => {
    const subregionUid = get(property, "sub-regions[0].sub-region.uid");
    if (subregionUid) {
      const region =
        props.links.regions.find(reg =>
            reg.data["sub-regions"].find(sr =>
                sr["sub-region"].uid === subregionUid
          ));
          if (region) {
            setFullRoute(`/apartments/${region.uid}/${subregionUid}-apartments`)
          }
    }
    return
  }
  useEffect(() => {
    if (props.links.regions.length > 0) {
      getFullRoute();
    }
  }, [props.links.regions])
  useEffect(() => {
    if(activeLink && document.querySelector(`.af-class-property-nav-link[href="${props.location.pathname}"]`)){
      document.querySelector(`.af-class-property-nav-link[href="${props.location.pathname}"]`).scrollIntoView({
        behavior: "auto",
        inline: "center"
      })
    }
  })
  let user = getItem("user");
  return (
    <PropertyFullView {...props} modal={modalOpen}>
      <wrapper className={modalOpen ? styles.fixedNavBar : ""}>
        <logo
          className={styles.logo}
          src={logo}
          alt="Menu Logo"
          onClick={() => {
            props.history.push("/");
          }}
        />
        <links className={styles.links}>
          {headerLinks.map(link => (
            <PropertyNavigationLinkView.Controller
              key={link.label}
              title={link.label}
              href={link.link}
              property={props.property}
              page={props.page}
              selected={route === link.value}
              disabled={!link.enabled}
              fullPath={fullRoute}
            />
          ))}
        </links>
        {!props.hideApply && currently_leasing !== 'No' && goDark !== "Yes" ? (
          <apply-button
            href={
              property && composeApplyLink(property)
                ? composeApplyLink(property)
                : "#"
            }
            onClick={e => {
              if (e) {
                e.preventDefault();
              }
              if (composeApplyLink(property) && composeApplyLink(property) === '/create-profile') {
                props.history.push('/create-profile', { property: completePropertyData });
              } else if (composeApplyLink(property)) {
                window.open(composeApplyLink(property));
              }
            }}
            className={[styles.apply, props.route ? styles.subpageApply : styles.overviewApply].join(" ")}
            style={{ backgroundColor: primaryColor }}
          >
            {user ? 'My Account/Apply': 'View Quotes/Apply'}
          </apply-button>
        ) : null}
        <menu-container
          tabIndex={0}
          className={styles.menu}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              setModal(!modalOpen);
            } else if (e.keyCode === 27) {
              setModal(false);
            }
          }}
          onClick={() => setModal(!modalOpen)}
        >
          <menu-label />
          <menu-line-one />
          <menu-line-two />
        </menu-container>
      </wrapper>
    </PropertyFullView>
  );
}

export default withRouter(
  compose(
    graphql(amenitiesQuery, {
      name: "amenitiesQuery",
      skip: props =>
        !get(props, "page") &&
        !get(props, "property") &&
        !get(props, "property.property"),
      options: props => {
        const propertyId =
          get(props, "page.id") ||
          get(props, "property.id") ||
          get(props, "property.property.id") ||
          get(props, "property.variables.id");
        return {
          variables: {
            propertyPageId: propertyId
          }
        };
      }
    }),
    graphql(furnishedQuery, {
      name: "furnished",
      skip: props =>
        !get(props, "page") &&
        !get(props, "property") &&
        !get(props, "property.property"),
      options: props => {
        const propertyId =
          get(props, "page.id") ||
          get(props, "property.id") ||
          get(props, "property.property.id") ||
          get(props, "property.variables.id");;
        return {
          variables: {
            propertyPageId: propertyId
          }
        };
      }
    }),
    graphql(locationQuery, {
      name: "locationPageQuery",
      skip: props =>
        !get(props, "page") &&
        !get(props, "property") &&
        !get(props, "property.property"),
      options: props => {
        const propertyId =
          get(props, "page.id") ||
          get(props, "property.id") ||
          get(props, "property.property.id") ||
          get(props, "property.variables.id");;
        return {
          variables: {
            propertyPageId: propertyId
          }
        };
      }
    })
  )(PropertyFull)
);
