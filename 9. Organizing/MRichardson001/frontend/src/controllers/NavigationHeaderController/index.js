import React, { Component } from "react";
import get from "lodash/get";
import throttle from "lodash/throttle";
import { withRouter } from "react-router";
import Helmet from "react-helmet-async";
import NavigationHeaderView from "../../components/NavigationHeaderView";
import { getItem } from "../../helpers/cookies";
import { canUseDOM, doNotTranslate } from "../../helpers/utils";
import styles from "./styles.module.css";
import "./index.css";

const defaultState = {
  dropdowns: {
    languages: false,
    locations: false,
    aboutus: false,
    careers: false
  },
  hamburgerMenu: false,
  navStatus: "",
  shadow: null
};

const languageOptions = [
  { key: "en", value: "English" },
  { key: "es", value: "Spanish" },
  { key: "pt", value: "Portuguese" },
  { key: "fr", value: "French" },
  { key: "it", value: "Italian" }
];

class NavigationHeaderController extends Component {
  state = {
    ...defaultState,
    language:
      typeof document !== "undefined" &&
      document.getElementsByClassName("goog-te-combo") &&
      document.getElementsByClassName("goog-te-combo").length > 0
        ? document.getElementsByClassName("goog-te-combo")[0].value || "en"
        : "en"
  };

  componentDidMount() {
    const root = document.body;
    if (canUseDOM) {
      this.languageUpdater = setInterval(() => {
        try {
          const select = document.getElementsByClassName("goog-te-combo")[0];
          if (select && select.value && select.value !== this.state.language) {
            this.setState({ language: select.value });
          }
        } catch (e) {}
      }, 1500);
    }
    if (!this.listener) {
      this.listener = root.addEventListener("click", this.closeDropdowns);
      this.listener = root.addEventListener("keydown", e => {
        if (e.keyCode === 27) {
          this.closeDropdowns();
        }
      });
    }
    this.throttledMeasure = throttle(this.measure, 16);
    this.throttledToggle = throttle(this.toggleHamburgerMenu, 16);
    if (!this.sizeListener && !!window) {
      this.sizeListener = window.addEventListener("resize", () => {
        this.toggleHamburgerMenu();
        this.throttledMeasure();
      });
    }
    this.measure();
    this.toggleHamburgerMenu();
  }

  componentWillUnmount() {
    const root = document.body;
    if (!!this.languageUpdater) {
      clearInterval(this.languageUpdater);
    }
    if (!!this.listener) {
      root.removeEventListener("click");
      this.listener = undefined;
    }
    if (!!this.sizeListener && !!window) {
      window.removeEventListener("resize");
    }
  }

  toggleHamburgerMenu = () => {
    if (!this.div) {
      return;
    }
    this.setState({
      hamburgerMenu: !(this.div.getBoundingClientRect().width >= 991)
    });
  };

  measure = () => {
    const { onMeasure } = this.props;
    if (this.div) {
      const { width, height } = this.div.getBoundingClientRect();
      if (onMeasure) {
        onMeasure(width, height);
      }
    }
  };

  routeIsRegion() {
    const pathname = get(this.props, "location.pathname", "");
    const regions = get(this.props, "links.regions") || [];

    const indexOf = regions.findIndex(region =>
      pathname.startsWith(`/${region.uid}`)
    );

    return indexOf > -1;
  }

  setNav(name) {
    this.setState({
      shadow: name
    });
  }

  render() {
    if (!!canUseDOM) {
      if (window) {
        window.onscroll = () => {
          if (window.scrollY >= 1) {
            this.setNav("nav-home-control-shadow");
          } else {
            this.setNav("nav-home-control-normal");
          }
        };
      }
    }

    const user = getItem("user");
    const aboutUs = [
      { key: "/about-us", value: "Overview" },
      ...(
        get(this.props, "appdata.standard_page") ||
        get(this.props, "links.aboutUs", [])
      )
        .filter(pg => get(pg, "data.parent.uid", "") === "about-us")
        .sort(
          (a, b) =>
            a.data.parent_dropdown_position - b.data.parent_dropdown_position
        )
        .map(item => ({ key: `/about-us/${item.uid}`, value: item.data.name }))
    ];

    const careers = [
      { key: "/careers", value: "Overview" },
      ...(
        get(this.props, "appdata.standard_page") ||
        get(this.props, "links.careers", [])
      )
        .filter(pg => get(pg, "data.parent.uid", "") === "careers")
        .sort(
          (a, b) =>
            a.data.parent_dropdown_position - b.data.parent_dropdown_position
        )
        .map(item => ({ key: `/careers/${item.uid}`, value: item.data.name }))
    ];

    const { hamburgerMenu } = this.state;
    const { homepage } = this.props;
    const labelsClassName = (homepage && styles.homepageLabels) || "";
    const regions = get(this.props, "links.regions") || [];

    let homeNavStyle = "home-header ";
    if (
      this.props.match &&
      (this.props.match.path !== "" || this.props.match.path !== "/")
    ) {
      homeNavStyle = "";
    }

    return (
      <React.Fragment>
        <Helmet>
          <script type="application/ld+json">
            {`
              {
                "@context": "http://schema.org/",
                "@type": "Organization",
                "name": "AMLI Residential",
                "url": "https://amli.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${`/images/Logo_${homepage ? "White" : "Dark"}.svg`}"
                }
              }
            `}
          </script>
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

        <NavigationHeaderView>
          <wrapper
            className={[
              homepage
                ? homeNavStyle +
                  `${styles.homePageContainer} ${this.state.shadow}`
                : homeNavStyle,
              homepage ? "" : styles.navwrapper
            ].join(" ")}
            topelement={() => (
              <span>
                {homepage ? (
                  null
                ) : (
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n .w-icon-dropdown-toggle {\n  color: black !important;\n}\n"
                    }}
                  />
                )}
              </span>
            )}
            ref={elem => (this.div = elem)}
          >
            <logo
              src={`/images/Logo_${homepage ? "White" : "Dark"}.svg`}
              alt="AMLI Residential"
              href="/"
              onClick={e => {
                if (e) {
                  e.preventDefault();
                }
                this.props.history.push("/");
              }}
            />
            <navbar
              className={[
                `${styles.navbar}`,
                homepage && hamburgerMenu
                  ? `${styles.homePageNav} ${this.state.navStatus}`
                  : `${this.state.navStatus}`
              ].join(" ")}
            >
              <contact
                href="/contact"
                className={`
                                ${labelsClassName}
                                ${
                                  this.props.location.pathname === "/contact"
                                    ? "nav-menu-active"
                                    : ""
                                }
                                `}
                onClick={e => {
                  if (e && e.preventDefault) {
                    e.preventDefault();
                  }
                  this.props.history.push("/contact");
                }}
              />
              <blog
                href="/blog"
                className={`
                                ${labelsClassName}
                                ${
                                  this.props.location.pathname.startsWith(
                                    "/blog"
                                  )
                                    ? "nav-menu-active"
                                    : ""
                                }
                                `}
                onClick={e => {
                  if (e && e.preventDefault) {
                    e.preventDefault();
                  }
                  this.props.history.push("/blog");
                }}
              />
              <resident-portal
                href="/resident-portal"
                className={`
                                ${labelsClassName}
                                ${
                                  this.props.location.pathname.startsWith(
                                    "/resident-portal"
                                  )
                                    ? "nav-menu-active"
                                    : ""
                                }
                                `}
                onClick={e => {
                  if (e && e.preventDefault) {
                    e.preventDefault();
                  }
                  this.props.history.push("/resident-portal");
                }}
              />
              <login
                href={!!user ? "/account" : "/applynow"}
                className={`
                                ${labelsClassName}
                                ${
                                  this.props.location.pathname.startsWith(
                                    "/account"
                                  )
                                    ? "nav-menu-active"
                                    : ""
                                }
                                `}
                onClick={e => {
                  if (e && e.preventDefault) {
                    e.preventDefault();
                  }
                  this.props.history.push(!!user ? "/account" : "/applynow");
                }}
              >
                {!!user ? "My Account" : "Login"}
              </login>
              <languages
                onClick={this.toggleDropdown.bind(this, "languages")}
                className={`
                                ${labelsClassName}
                                ${styles.languageDropdown}
                                ${
                                  this.state.dropdowns.languages
                                    ? "w--open"
                                    : ""
                                }
                            `}
                onKeyDown={e => {
                  if (canUseDOM && (e.keyCode === 40 || e.keyCode === 39)){
                    e.preventDefault();
                    document.getElementById("translate_0").focus();
                  }
                  (e.keyCode === 13 || e.keyCode === 32) &&
                  (e.preventDefault() ||
                  this.toggleDropdown.bind(this, "languages")())
                }}
                tabIndex={0}
                role="list"
                aria-label="Languages"
              >
                <div
                  className={["af-class-nav-top-menulink", doNotTranslate].join(
                    " "
                  )}
                >
                  {this.state.language.toUpperCase()}
                </div>
                <div className="af-class-nav-link-chevron af-class-translation-chveron w-icon-dropdown-toggle" />
              </languages>
              <languages-list
                className={this.state.dropdowns.languages ? "w--open" : ""}
              >
                {languageOptions.map((lang, index) => (
                  <a
                    role="listitem"
                    id={`translate_${index}`}
                    tabIndex={-1}
                    key={lang.key}
                    href="notused"
                    onKeyDown={e => {
                      if (canUseDOM && (e.keyCode === 40 || e.keyCode === 39) && (index + 1 < languageOptions.length)){
                        e.preventDefault();
                        document.getElementById(`translate_${index+1}`).focus();
                      }
                      if (canUseDOM && (e.keyCode === 38 || e.keyCode === 37) && index !== 0){
                        e.preventDefault();
                        document.getElementById(`translate_${index - 1}`).focus();
                      }
                    }}
                    onClick={e => {
                      if (e && e.preventDefault) {
                        e.preventDefault();
                      }
                      if (!!document) {
                        try {
                          const select = document.getElementsByClassName(
                            "goog-te-combo"
                          )[0];
                          select.value = lang.key;
                          select.dispatchEvent(new Event("change"));
                          this.setState({ language: lang.key });
                        } catch (e) {
                          console.log(e);
                        }
                      }
                    }}
                    className={`af-class-nav-dropdown-link w-dropdown-link translate_${index}}`}
                  >
                    {lang.value}
                  </a>
                ))}
              </languages-list>
              <locations
                role="list"
                aria-label="Search Apartments"
                tabIndex={0}
                onKeyDown={e => {
                  if (canUseDOM && (e.keyCode === 40 || e.keyCode === 39)){
                    e.preventDefault()
                    document.getElementById("region_0").focus();
                  }
                  (e.keyCode === 13 || e.keyCode === 32) &&
                  (e.preventDefault() ||
                    this.toggleDropdown.bind(this, "locations")())
                }}
                onClick={this.toggleDropdown.bind(this, "locations")}
                className={`${labelsClassName} ${
                  this.state.dropdowns.locations ? "w--open" : ""
                }
                            ${this.routeIsRegion() ? "nav-menu-active" : ""}
                            `}
              >
                <div className="af-class-nav-bottom-link-label">
                  Search Apartments
                </div>
                <div className="af-class-nav-link-chevron w-icon-dropdown-toggle" />
              </locations>
              <locations-list
                className={this.state.dropdowns.locations ? "w--open" : ""}
                role="listitem"
              >
                {regions
                  .sort((a, b) => (a.uid > b.uid ? 1 : -1))
                  .map((region, indx) => (
                    <a
                      id={`region_${indx}`}
                      tabIndex={-1}
                      onKeyDown={e => {
                        if (canUseDOM && (e.keyCode === 40 || e.keyCode === 39) && (indx + 1 < regions.length)){
                          e.preventDefault();
                          document.getElementById(`region_${indx+1}`).focus();
                        }
                        if (canUseDOM && (e.keyCode === 38 || e.keyCode === 37) && indx !== 0){
                          e.preventDefault();
                          document.getElementById(`region_${indx - 1}`).focus();
                        }
                      }}
                      role="listitem"
                      key={`region_${region.uid}`}
                      href={`/apartments/${region.uid}`}
                      className={[
                        "af-class-nav-dropdown-link",
                        "w-dropdown-link",
                        doNotTranslate,
                        styles.link
                      ].join(" ")}
                      onClick={e => {
                        if (e && e.preventDefault) e.preventDefault();
                        this.props.history.push(`/apartments/${region.uid}`);
                      }}
                    >
                      {region.data.name}
                    </a>
                  ))}
              </locations-list>
              <aboutus
                role="list"
                aria-label="About Us"
                tabIndex={0}
                onKeyDown={e => {
                  if (canUseDOM && (e.keyCode === 40 || e.keyCode === 39)){
                    e.preventDefault()
                    document.getElementById("aboutus_0").focus();
                  }
                  (e.keyCode === 13 || e.keyCode === 32) &&
                  (e.preventDefault() ||
                    this.toggleDropdown.bind(this, "aboutus")())
                }}
                onClick={this.toggleDropdown.bind(this, "aboutus")}
                className={`
                                ${labelsClassName}
                                ${this.state.dropdowns.aboutus ? "w--open" : ""}
                                ${
                                  this.props.location.pathname.startsWith(
                                    "/about-us"
                                  )
                                    ? "nav-menu-active"
                                    : ""
                                }`}
              />
              <aboutus-list
                className={this.state.dropdowns.aboutus ? "w--open" : ""}
              >
                {aboutUs.map((item, index) => (
                  <a
                    role="listitem"
                    tabIndex={-1}
                    id={`aboutus_${index}`}
                    key={`about_us_${index}`}
                    href={item.key}
                    onKeyDown={e => {
                      if (canUseDOM && (e.keyCode === 40 || e.keyCode === 39) && (index + 1 < aboutUs.length)){
                        e.preventDefault();
                        document.getElementById(`aboutus_${index+1}`).focus();
                      }
                      if (canUseDOM && (e.keyCode === 38 || e.keyCode === 37) && index !== 0){
                        e.preventDefault();
                        document.getElementById(`aboutus_${index - 1}`).focus();
                      }
                    }}
                    onClick={e => {
                      if (e) {
                        e.preventDefault();
                      }
                      this.props.history.push(item.key);
                    }}
                    className="af-class-nav-dropdown-link w-dropdown-link"
                  >
                    {item.value}
                  </a>
                ))}
              </aboutus-list>
              <careers
                role="list"
                aria-label="Careers"
                tabIndex={0}
                onKeyDown={e =>{
                  if (canUseDOM && (e.keyCode === 40 || e.keyCode === 39)){
                    e.preventDefault()
                    document.getElementById("careers_0").focus();
                  }
                  (e.keyCode === 13 || e.keyCode === 32) &&
                  (e.preventDefault() ||
                  this.toggleDropdown.bind(this, "careers")())
                }}
                onClick={this.toggleDropdown.bind(this, "careers")}
                className={`${labelsClassName} ${
                  this.state.dropdowns.careers ? "w--open" : ""
                }
                                ${
                                  this.props.location.pathname.startsWith(
                                    "/careers"
                                  )
                                    ? "nav-menu-active"
                                    : ""
                                }
                            `}
              />
              <careers-list
                className={this.state.dropdowns.careers ? "w--open" : ""}
              >
                {careers.map((item, index) => (
                  <a
                    tabIndex={-1}
                    key={`careers_${index}`}
                    id={`careers_${index}`}
                    href={item.key}
                    role="listitem"
                    onKeyDown={e => {
                      if (canUseDOM && (e.keyCode === 40 || e.keyCode === 39) && (index + 1 < careers.length)){
                        e.preventDefault();
                        document.getElementById(`careers_${index+1}`).focus();
                      }
                      if (canUseDOM && (e.keyCode === 38 || e.keyCode === 37) && index !== 0){
                        e.preventDefault();
                        document.getElementById(`careers_${index - 1}`).focus();
                      }
                    }}
                    onClick={e => {
                      if (e) {
                        e.preventDefault();
                      }
                      this.props.history.push(item.key);
                    }}
                    className="af-class-nav-dropdown-link w-dropdown-link"
                  >
                    {item.value}
                  </a>
                ))}
              </careers-list>
              <sustainability
                className={`
                                ${labelsClassName}
                                ${
                                  this.props.location.pathname.startsWith(
                                    "/sustainability"
                                  )
                                    ? "nav-menu-active"
                                    : ""
                                }
                                `}
                onClick={e => {
                  if (e && e.preventDefault) {
                    e.preventDefault();
                  }
                  this.props.history.push("/sustainability");
                }}
              />
            </navbar>
            <mobile-menu-button
              role="button"
              tabIndex={0}
              onKeyDown={e => e.keyCode === 13 && this.mobbutton()}
              className={homepage ? styles.homePageMobileButton : ""}
              aria-label="Open menu"
              onClick={this.mobbutton}
            />
          </wrapper>
        </NavigationHeaderView>
      </React.Fragment>
    );
  }

  mobbutton = () => {
    this.state.navStatus === ""
      ? this.setState({ navStatus: "show" })
      : this.setState({ navStatus: "" });
  };

  toggleDropdown = (name, e) => {
    this.setState({
      dropdowns: {
        ...defaultState.dropdowns,
        [name]: !this.state.dropdowns[name]
      }
    });
    return e && e.stopPropagation && e.stopPropagation();
  };
  closeDropdowns = e => {
    let shouldDefaultState = false;
    const self = this;
    Object.keys(this.state.dropdowns).forEach(dropdown => {
      if (!!self.state.dropdowns[dropdown]) {
        shouldDefaultState = true;
      }
    });
    if (shouldDefaultState) {
      this.setState(defaultState);
    }
  };
}

export default withRouter(NavigationHeaderController);
