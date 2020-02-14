import React from "react";
import { withRouter } from "react-router";
import get from "lodash/get";
import Helmet from "react-helmet-async";
import PropertyNavigationModalView from "../../components/PropertyNavigationModalView";
import PropertyNavigationModalLinkView from "../../components/PropertyNavigationModalLinkView";

import "./index.css";

import styles from "./styles.module.css";

const AboutUs = [
  { label: "Overview", href: "about-us" },
  { label: "Leadership", href: "leadership" },
  { label: "Development", href: "development" },
  { label: "Retail", href: "retail" },
  { label: "Corporate Governance", href: "corporate-governance" }
];

const Careers = [
  { label: "Overview", href: "careers" },
  { label: "Culture", href: "culture" },
  { label: "Benefits", href: "benefits" },
  { label: "Career Development", href: "professional-development" },
  { label: "Giving Back", href: "giving-back" },
  { label: "Find Your Career", href: "find-your-career" }
];
const Languages = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "French", value: "fr" },
  { label: "Italian", value: "it" }
];

const regionSort = (a, b) => (a.data.name < b.data.name ? -1 : 1);

function PropertyNavigationModal(props) {
  if (!props.modal) {
    return null;
  }
  const backgroundImage = get(props, "page.data.primary_property_image.url");
  return (
    <React.Fragment>
      <Helmet>
        <script type="text/javascript">
          {`function googleTranslateElementInit() {
              if (document.getElementsByClassName('goog-te-combo').length === 0) {
                new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
              }
            }`}
        </script>

        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
      </Helmet>

      <PropertyNavigationModalView>
        <modal
          className={styles.modal}
          style={
            backgroundImage
              ? {
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.8),
              rgba(0, 0, 0, 0.8)), url("${backgroundImage}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center"
                }
              : null
          }
        >
          <locations href={null} className={styles.link}>
            Locations
            <propertyNavigationModalLinkViewList0>
              {props.links.regions.sort(regionSort).map(region => (
                <PropertyNavigationModalLinkView.Controller
                  key={region.uid}
                  label={region.data.name}
                  href={`apartments/${region.uid}`}
                />
              ))}
            </propertyNavigationModalLinkViewList0>
          </locations>
          <about-us href={null} className={styles.link}>
            About Us
            <propertyNavigationModalAboutLinkViewList9>
              {AboutUs.map(link => (
                <PropertyNavigationModalLinkView.Controller
                  key={link.label}
                  label={link.label}
                  href={link.href === "about-us" ? "about-us" : `about-us/${link.href}`}
                />
              ))}
            </propertyNavigationModalAboutLinkViewList9>
          </about-us>
          <careers href={null} className={styles.link}>
            Careers
            <propertyNavigationModalCareersLinkViewList14>
              {Careers.map(link => (
                <PropertyNavigationModalLinkView.Controller
                  key={link.label}
                  label={link.label}
                  href={link.href === "careers" ? "careers" : `careers/${link.href}`}
                />
              ))}
            </propertyNavigationModalCareersLinkViewList14>
          </careers>
          <sustainability
            href="/sustainability"
            onClick={e => {
              if (e && e.preventDefault) {
                e.preventDefault();
              }
              props.history.push("/sustainability");
            }}
          />
          <contact
            href="/contact"
            onClick={e => {
              if (e && e.preventDefault) {
                e.preventDefault();
              }
              props.history.push("/contact");
            }}
          />
          <blog
            href="/blog"
            onClick={e => {
              if (e && e.preventDefault) {
                e.preventDefault();
              }
              props.history.push("/blog");
            }}
          />
          <resident-portal
            href="/resident-portal"
            onClick={e => {
              if (e && e.preventDefault) {
                e.preventDefault();
              }
              props.history.push("/resident-portal");
            }}
          />
          <language href={null}>
            Language
            <propertyNavigationModalLinkViewList11>
              {Languages.map(link => (
                <PropertyNavigationModalLinkView.Controller
                  key={link.value}
                  label={link.label}
                  href={link.value}
                  onClick={e => {
                    if (e) {
                      e.preventDefault();
                    }
                    if (!!document) {
                      try {
                        const select = document.getElementsByClassName(
                          "goog-te-combo"
                        )[0];
                        select.value = link.value;
                        select.dispatchEvent(new Event("change"));
                      } catch (e) {
                        console.log(e);
                      }
                    }
                  }}
                />
              ))}
            </propertyNavigationModalLinkViewList11>
          </language>
        </modal>
      </PropertyNavigationModalView>
    </React.Fragment>
  );
}

export default withRouter(PropertyNavigationModal);
