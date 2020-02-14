import React from "react";
import get from "lodash/get";
import ContentRetailShowcaseCondensedView from "../../components/ContentRetailShowcaseCondensedView";
import styles from "./styles.module.css";
import { personaColorStyle } from "../../helpers/property/persona";
import { withRouter } from "react-router-dom";
import "./index.css";

class ContentRetailShowcaseCondensed extends React.Component {
  state = {
    active: 0
  };

  selectLogo = index => {
    this.setState({ active: index });
  };

  render() {
    const { data } = this.props;
    const subtitle = get(data, "primary.subtitle");
    const title = get(data, "primary.title");
    const textBlurb = get(data, "primary.text_blurb");
    const image = get(data, "primary.image.url");
    const items = get(data, "items");
    const uid = get(this.props, "page.uid");

    const property =
      get(this.props, "property") || get(this.props, "page.data");

    return (
      <ContentRetailShowcaseCondensedView>
        <subtitle style={personaColorStyle(property, "secondary")}>
          {subtitle}
        </subtitle>
        <title style={personaColorStyle(property)}>{title}</title>
        <text-blurb>
          {textBlurb}
          <span className={styles.becomeAPartnerLinkWrapper}>
            <a
              className={styles.becomeAPartnerLink}
              href={`/contact?topic=retail&propertyUid=${uid}&propertyName=${property.name}`}
              onClick={e => {
                if (e && e.preventDefault) {
                  e.preventDefault();
                }
                this.props.history.push({
                  pathname: "/contact",
                  search: `?topic=retail&propertyUid=${uid}&propertyName=${property.name}`
                });
              }}

              onKeyDown={e => {
                if (e && e.preventDefault) {
                  e.preventDefault();
                }
                this.props.history.push({
                  pathname: "/contact",
                  search: `?topic=retail&propertyUid=${uid}&propertyName=${property.name}`
                });
              }}
            >
              Become a Partner
            </a>
            <img src="/images/icon-arrow--right--blue.svg" alt="right arrow" className={styles.becomeAPartnerArrow}/>
          </span>
        </text-blurb>
        <image style={image ? { backgroundImage: `url(${image})` } : null}>
          {items ? (
            <retail-description>
              {items[this.state.active].retail_description}
            </retail-description>
          ) : null}
        </image>
        {items ? (
          <retail-logo-list className={styles.listContainer}>
            {items.map((item, index) => (
              <div
                key={index}
                tabIndex={0}
                onKeyDown={e => e.keyCode === 13 && this.selectLogo(index)}
                onClick={() => this.selectLogo(index)}
                className={[
                  styles.logoContainer,
                  this.state.active === index ? styles.imageContainer : ""
                ].join(" ")}
              >
                <img
                  src={item.retail_logo.url}
                  srcSet={item.retail_logo.url}
                  className={[
                    styles.image,
                    this.state.active === index
                      ? styles.activeLogo
                      : styles.retailLogo
                  ].join(" ")}
                  alt={item.retail_name || ""}
                />
              </div>
            ))}
          </retail-logo-list>
        ) : null}
      </ContentRetailShowcaseCondensedView>
    );
  }
}

export default withRouter(ContentRetailShowcaseCondensed);
