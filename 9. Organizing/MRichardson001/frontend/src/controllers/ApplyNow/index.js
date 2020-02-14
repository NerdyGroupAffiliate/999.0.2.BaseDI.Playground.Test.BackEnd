import React from "react";
import get from "lodash/get";
import { graphql } from "react-apollo";
import { withRouter } from "react-router";
import ResidentPortalFeedbackView from "../../components/ResidentPortalFeedbackView";
import NavigationHeaderView from "../../components/NavigationHeaderView";
import FooterView from "../../components/FooterView";
import Select from "react-select";
import { dropdownStyles } from "./selectStyles";
import { pagesQuery } from "../../graphql/queries";
import GatherNavData from "../../helpers/gather-navbar-data";
import { ViewCapture } from "../../helpers/plugins/guestAnalytics";
import "./index.css";

import styles from './styles.module.css';

const regionSort = (a, b) => (a.label > b.label ? 1 : -1);

class ResidentPortalFeedback extends React.Component {

  componentDidMount(){
    ViewCapture("Apply Now");
  }

  state = {
    selectedRegion: null,
    showmenu: false
  };

  render() {
    const { props } = this;
    let title = "WELCOME TO ONLINE LEASING!";
    let text = "Choose your community and log in to manage your AMLI quotes. Applying for a new apartment has never been easier!";

    const navData = GatherNavData(props);

    const communityOptions = this.state.selectedRegion
      ? [
          {
            label: `←  ${this.state.selectedRegion.label}`,
            value: null
          },
          ...(props.communities || []).find(
            r => r.uid === this.state.selectedRegion.uid
          ).children
            .filter(item =>
              item.data.header === "Property: Full" &&
              item.data.go_dark !== "Yes"
            )
            .sort((a, b) => (a.value > b.value ? 1 : -1))
        ]
      : get(props, "communities", [])
          .sort(regionSort)
          .map(i => ({ ...i, label: i.label, value: i.uid }));

    return (
      <React.Fragment>
        <span
          className="af-view"
          style={{ width: "100%", height: "100%", flex: 1 }}
        >
          <div>
            <NavigationHeaderView.Controller {...props} links={navData} />
            <div className="w-embed">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n  .af-view .af-class-list-blocks-b-section-label::after {\n    content: '';\n    display: block;\n    background-color: #ECD925;\n    position: absolute;\n    bottom: 5px;\n    height: 3px;\n    left: -3px;\n    right: -3px;\n  }\n  @media (min-width: 1700px) {\n    .af-view .af-class-about-header {\n      height: 50vh;\n      min-height: 500px;\n      max-height: 50vh;\n    }\n    .af-view .af-class-list-blocks-blurb-content {\n      padding-top: 100px;\n      padding-right: 100px;\n      padding-bottom: 100px;\n    }\n    .af-view .af-class-list-blocks-b-content-container {\n      flex-basis: 450px;\n    }\n    .af-view .af-class-list-blocks-blurb-tagline {\n      font-size: 48px;\n      line-height: 58px;\n    }\n    .af-view .af-class-list-blocks-blurb-tagline {\n      max-width: 700px;\n    }\n    .af-view .af-class-list-detailed-lists-column {\n      justify-content: flex-start;\n      padding-left: 100px;\n    }\n  }\n"
                }}
              />
            </div>
            <ResidentPortalFeedbackView>
              <title className={styles.title}>{title}</title>
              <text>{text}</text>
              <community-dropdown
                onClick={() => this.setState({ showmenu: true })}
                onTouchStart={() => this.setState({ showmenu: true })}
                onKeyDown={e =>
                  (e.keyCode === 13 && this.setState({ showmenu: true })) ||
                  (e.keyCode === 27 && this.setState({ showmenu: false }))}
                tabIndex={0}
              >
                <Select
                  id="community-dropdown"
                  className={styles.dropdownContainer}
                  closeMenuOnSelect={false}
                  menuIsOpen={this.state.showmenu}
                  styles={dropdownStyles}
                  blurInputOnSelect={false}
                  classNamePrefix="dropdown"
                  placeholder="Select a Community"
                  onBlur={() => this.setState({ showmenu: false })}
                  options={communityOptions}
                  onChange={e => {
                    document.querySelector('#community-dropdown .dropdown__menu-list').scrollTop = 0;
                    if (!!e.children && e.children.length) {
                      this.setState({ selectedRegion: e });
                    } else {
                      this.setState({
                        selectedRegion: e.value
                          ? this.state.selectedRegion
                          : null,
                        showmenu: e.value === null
                      });

                      if (
                        window &&
                        window.open &&
                        e.data &&
                        e.data.lease_service !== "RealPage" &&
                        e.data.entrata_domain
                      ) {
                        window.open(`https://${e.data.entrata_domain}.prospectportal.com/Apartments/module/application_authentication`);
                      } else if (
                        e.data &&
                        e.data.lease_service === "RealPage"
                      ) {
                        props.history.push('/create-profile', { property: e, loginForm: true});
                      }
                    }
                  }}
                />
              </community-dropdown>
            </ResidentPortalFeedbackView>
            <FooterView.Controller {...props} links={navData.footerLinks}/>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    );
  }
}

export default withRouter(
  graphql(
    pagesQuery
  )(ResidentPortalFeedback)
);
