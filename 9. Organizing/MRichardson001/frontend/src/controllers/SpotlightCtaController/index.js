import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router";
import SpotlightCtaView from "../../components/SpotlightCtaView";
import styles from "./styles.module.css";
import { getPersonaColor } from "../../helpers/property/persona";
import { handlePrismicLink } from "../../helpers/link-helper";
import { composeApplyLink } from "../../helpers/property/apply";
import { getItem } from "../../helpers/cookies";

class SpotlightCta extends React.Component {
  render() {
    const { data } = this.props;
    const property =
      get(this.props, "property") || get(this.props, "page.data");
    const linkText1 = get(data, "primary.link_text_1");
    const goDark = get(property, "go_dark", "");
    const linkData1 = handlePrismicLink(
      this.props,
      get(data, "primary.link_url_1"),
      { propertyData: get(this.props, "page") },
      goDark !== "Yes" ? linkText1 : "goDark"
    );

    const image = get(data, "primary.background_image.url");
    const title = get(data, "primary.title");

    const secondaryColor = getPersonaColor(property, "secondary");
    const primaryColor = get(property, "primary_color");
    let user = getItem("user");
    const completePropertyData =
      get(this.props, "property") || get(this.props, "page");

    return (
      <SpotlightCtaView>
        <background-image
          style={
            image
              ? {
                  backgroundImage: `linear-gradient(90deg, #3f3f3f, rgba(0, 0, 0, .3)), url(${image})`
                }
              : null
          }
        >
          <title>{title}</title>
          <link-url-1
            {...linkData1}
            className={styles.button1}
            style={{ backgroundColor: secondaryColor }}
          >
            <link-text-1 className={styles.buttonText1}>
              {linkText1}
            </link-text-1>
            <link-arrow-1 className={styles.buttonArrow1} alt="" />
          </link-url-1>
          {
            goDark !== "Yes"
              ? <apply-wrapper className={styles.applyWrapper}>
                  <link-url-2
                    href={
                      property && composeApplyLink(property)
                        ? composeApplyLink(property)
                        : "#"
                    }
                    onClick={e => {
                      if (e) {
                        e.preventDefault();
                      }
                      if (
                        composeApplyLink(property) &&
                        composeApplyLink(property) === "/create-profile"
                      ) {
                        this.props.history.push("/create-profile", {
                          property: completePropertyData
                        });
                      } else if (composeApplyLink(property)) {
                        window.open(composeApplyLink(property));
                      }
                    }}
                    className={styles.button2}
                    style={{ backgroundColor: primaryColor }}
                  >
                    <link-text-2>
                      {user ? "My Account/Apply" : "View Quotes/Apply"}
                    </link-text-2>
                    <link-arrow-2 className={styles.buttonArrow2} alt="" />
                  </link-url-2>
                </apply-wrapper>
            : null
          }
        </background-image>
      </SpotlightCtaView>
    );
  }
}

export default withRouter(SpotlightCta);
