import React from "react";
import { withRouter } from "react-router";
import { get, throttle } from "lodash";
import debounce from "lodash/debounce";
import haversine from "haversine";
import styles from "./styles.module.css";
import GetGeolocation from "../../helpers/geolocation";
import "./index.css";

import banner from "../../assets/images/header-jumbo.jpeg";
import defaultOverlay from "../../assets/images/header-overlay.png";
import downArrow from "../../assets/images/down-arrow.png";

const regionAlphabeticSort = (a, b) => (a.data.name < b.data.name ? -1 : 1);
let defaultImage = banner;

class IndexHeader extends React.Component {
  state = {
    selected: null,
    backgroundImage: defaultImage,
    loading: null,
    images: {},
    coords: null
  };

  constructor(props) {
    super(props);
    this.onMouseEnterHandler = debounce(this.onMouseEnterHandler, 300);
    this.onMouseLeaveHandler = debounce(this.onMouseLeaveHandler, 300);
  }

  componentDidMount() {
    this.throttledMeasure = throttle(this.measure, 16);
    if (!this.sizeListener && !!window) {
      this.sizeListener = window.addEventListener(
        "resize",
        this.throttledMeasure
      );
    }
    this.measure(true);
    this.setupState(this.props);
    const setState = state => this.setState(state);

    GetGeolocation(
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: 1000
      },
      (err, geo) => {
        if (!!err) {
          console.log(err);
          return;
        }
        console.log(geo);
        const coords = get(geo, "coords");
        if (!!coords) {
          setState({ coords });
        }
      }
    );
  }

  measure = () => {
    if (this.imageRef) {
      const { width } = this.imageRef.getBoundingClientRect();
      const image = get(this.props, "page.header_image.url");
      const tabletImage = get(this.props, "page.header_image.Tablet.url");
      const phoneImage = get(this.props, "page.header_image.Phone.url");
      if (width && width < 768 && width > 414){
        defaultImage = tabletImage;
      } else if (width && width < 415) {
        defaultImage = phoneImage;
      } else {
        defaultImage = image;
      }
      this.setState({ backgroundImage: defaultImage });
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setupState(nextProps);
  }

  componentDidUpdate(_, prevState) {
    if (
      !Object.keys(prevState).length &&
      Object.keys(this.state.images).length
    ) {
    }
  }

  setupState = props => {
    if (
      !Object.keys(this.state.images).length &&
      props &&
      props.links &&
      props.links.regions
    ) {
      const { regions } = props.links;
      const images = {};
      regions.forEach(region => {
        const image =
          get(region, "data.home_page_hover_image.url") || defaultImage;
        images[region.uid] = {
          image,
          ready: !image
        };
      });
      this.setState({ images });
    }
  };

  regionGeoSort = (a, b) => {
    const { coords } = this.state;
    if (!coords) {
      return regionAlphabeticSort(a, b);
    }
    return haversine(
      {
        latitude: a.data.latitude,
        longitude: a.data.longitude
      },
      {
        latitude: coords.latitude,
        longitude: coords.longitude
      }
    ) <
      haversine(
        {
          latitude: b.data.latitude,
          longitude: b.data.longitude
        },
        {
          latitude: coords.latitude,
          longitude: coords.longitude
        }
      )
      ? -1
      : 1;
  };

  selectCity = e =>
    e &&
    e.target &&
    e.target.value &&
    this.props.history.push(`/apartments/${e.target.value}`);

  onMouseLeaveHandler = () => {
    this.setState({
      selected: null,
      loading: null,
      backgroundImage: defaultImage
    });
  };

  onMouseEnterHandler = region => {
    let backgroundImage =
      get(region, "data.home_page_hover_image.url") || defaultImage;

    if (!!this.backgroundResetTimer) {
      clearTimeout(this.backgroundResetTimer);
    }
    if (!backgroundImage) {
      return null;
    }
    this.setState({
      loading: region.uid,
      selected: region.uid
    });
  };

  finishedLoading = regionUid => {
    if (
      !this.state ||
      !this.state.images ||
      !Object.keys(this.state.images).length
    ) {
      return null;
    }
    if (!regionUid) {
      return this.setState({
        defaultLoaded: true
      });
    }
    this.setState({
      backgroundImage: this.state.images[regionUid].image
    });
  };

  render() {
    const title = get(this.props, "page.header_title") || "World Class Living.";
    const subtitle =
      get(this.props, "page.header_subtitle") || "World Class Cities.";
    const { regions } = this.props.links;
    const loadingImage = this.state.loading
      ? this.state.images[this.state.loading] &&
        this.state.images[this.state.loading].image
      : defaultImage;

    const HeaderItems = Array.apply(null, { length: 10 }).map(i => null);
    regions
      .sort(this.regionGeoSort)
      .slice(0, 9)
      .forEach((region, index) => (HeaderItems[index] = region));
    return (
      <div className={styles.regionBox} ref={elem => (this.imageRef = elem)}>
        <img
          className={styles.backgroundLoader}
          src={loadingImage || defaultImage}
          alt="loader"
          onLoad={() => {
            this.finishedLoading(this.state.loading);
            if (this.props.setLoaded) {
              this.props.setLoaded();
            }
          }}
        />
        {this.state.defaultLoaded
          ? Object.keys(this.state.images).map(key => (
              <img
                key={`image_region_${key}`}
                className={[
                  styles.imageCommon,
                  styles.parallaxContainer,
                  this.state.backgroundImage !== this.state.images[key].image
                    ? styles.backgroundLoader
                    : ""
                ].join(" ")}
                src={this.state.images[key].image}
                alt={`loader ${key}`}
              />
            ))
          : null}
        <div
          className={[
            styles.imageCommon,
            styles.parallaxContainer,
            this.state.backgroundImage !== defaultImage
              ? styles.backgroundLoader
              : ""
          ].join(" ")}
          style={{ backgroundImage: `url(${this.state.backgroundImage})` }}
        />
        <div className={styles.bannerContainer}>
          <div
            className={[
              styles.taglineContainer,
              !this.state.selected ? styles.showText : ""
            ].join(" ")}
          >
            <div className={styles.tagline}>{title}</div>
            <div className={styles.tagline}>{subtitle}</div>
          </div>
          {regions.map(region => (
            <div
              key={`label_region_${region.uid}`}
              className={[
                styles.taglineContainer,
                region.uid === this.state.selected ? styles.showText : ""
              ].join(" ")}
            >
              <div className={styles.tagline}>{region.data.name}</div>
            </div>
          ))}
        </div>
        <div
          className={styles.peopleContainer}
          style={{
            backgroundImage: `url(${defaultOverlay})`
          }}
        />
        {HeaderItems.map((region, index) =>
          !!region ? (
            <a
              key={region.uid}
              href={`/apartments/${region.uid}`}
              className={styles.regionContainer}
              onClick={e => {
                if (e) {
                  e.preventDefault();
                }
                this.props.history.push(`/apartments/${region.uid}`);
              }}
              onMouseEnter={() =>
                this.onMouseLeaveHandler.cancel() ||
                this.onMouseEnterHandler(region)
              }
              onFocus={() =>
                this.onMouseLeaveHandler.cancel() ||
                this.onMouseEnterHandler(region)
              }
              onFocusOut={() =>
                this.onMouseEnterHandler.cancel() || this.onMouseLeaveHandler()
              }
              onMouseLeave={() =>
                this.onMouseEnterHandler.cancel() || this.onMouseLeaveHandler()
              }
            >
              <div
                className={[
                  styles.regionCommon,
                  index >= 5 ? styles.regionSecondRowPersistent : "",
                  region.uid !== this.state.selected
                    ? index <= 4
                      ? styles.region
                      : styles.regionSecondRow
                    : styles.regionSelected
                ].join(" ")}
              >
                {region.uid !== this.state.selected ? (
                  <div className={styles.regionLabel}>{region.data.name}</div>
                ) : (
                  <React.Fragment>
                    <div className={styles.regionSelectedWrapper}>
                      <div className={styles.regionSelectedLabel}>
                        {region.data.name}
                      </div>
                      <div className={styles.regionSelectedBody}>
                        {region.data.home_page_description &&
                        region.data.home_page_description.length > 200
                          ? region.data.home_page_description.substring(
                              0,
                              200
                            ) + `...`
                          : region.data.home_page_description}
                      </div>
                    </div>
                    <a
                      href={`/apartments/${this.state.selected}`}
                      className={styles.regionSelectedButton}
                      onClick={e => {
                        if (e) {
                          e.preventDefault();
                        }
                        this.props.history.push(`/apartments/${this.state.selected}`);
                      }}
                    >
                      <span>View Region</span>
                      <img
                        role="none"
                        src="/images/icon-arrow--right-no-shadow3x.png"
                        className={[
                          "af-class-button-apply-arrow",
                          styles.buttonArrow
                        ].join(" ")}
                        alt="view region"
                      />
                    </a>
                  </React.Fragment>
                )}
              </div>
            </a>
          ) : (
            <div
              key={`region${index}`}
              className={styles.emptyRegionContainer}
            />
          )
        )}
        <div className={styles.regionSelectContainer}>
          <select
            aria-label="Select City"
            tabIndex={0}
            className={styles.regionSelect}
            value={1}
            onChange={this.selectCity}
          >
            <option value="1" id={`region-1`} disabled>
              Select a City
            </option>
            {regions.sort(this.regionGeoSort).map(region => (
              <option
                key={region.id}
                value={region.uid}
                id={`region-${region.id}`}
              >
                {region.data.name}
              </option>
            ))}
          </select>
          <div className={styles.arrow}>
            <img src={downArrow} alt="" className={styles.arrowIcon} />
          </div>
        </div>
        <div className={styles.continue}>CONTINUE</div>
      </div>
    );
  }
}

export default withRouter(IndexHeader);
