import React from "react";
import get from "lodash/get";
import styles from "./style.module.css";
import { withRouter } from "react-router-dom";
import PropertyRenderer from "./property";
import _pageRenderer from "./page";
import { getPreviewData } from "../page-preview/get-preview";
import { ViewCapture } from "../plugins/guestAnalytics.js";
import { canUseDOM } from "../utils";

class PageRenderer extends React.Component {
  state = {
    size: {
      nav: {
        height: 0,
        width: 0
      }
    },
  };

  updateSize = (elem, width, height) => {
    this.setState({
      size: {
        ...this.state.size,
        [elem]: {
          width,
          height
        }
      }
    });
  };
  componentWillMount(){
    if (canUseDOM) {
      const doNotRedirect = get(this.props, "location.state.doNotRedirect", '');
      const paths = get(this.props, "match.path");
      const isFullPath = this.props.location.pathname === paths[paths.length -1];
      if (doNotRedirect !== true && typeof paths === "object" && paths.length > 1 && !isFullPath) {
        // console.log('Redirected to full path');
        this.props.history.replace(paths[paths.length - 1]);
      }
    }
  }
  componentDidMount(){
    const page = get(this.props, "page");
     if(page !== undefined){ //captures Home and other pages (except sign-in, account, residents, property, floorplan, floorplans, unit)
        page.type === "standard_page" ? ViewCapture(page.uid) :
        ViewCapture(page.type, page.data.amli_id, page.uid );
     }
  }

  render() {
    const preview = getPreviewData(this.props);
    const page = get(this.props, "page");
    const property = get(this.props, "property");
    const source = preview || page || property;

    const navigation = get(source, "data.navigation");
    let header = get(source, "data.header");
    const footerNav = get(this.props, "nav.footer") || [];
    const subroute = this.props.subroute;
    const headerNav = {
      top: get(this.props, "nav.topHeader") || [],
      sub: get(this.props, "nav.subHeader") || [],
      regions: get(this.props, "nav.regions") || []
    };
    let Metadata;
    let Footer;
    let Nav;
    let Header;


    if (header) {
      let headerName = header.trim().replace(/[,\s-:]+/g, "");
      if (headerName === "PropertyFull") {
        headerName = "PropertyHeader";
      }
      try {
        Header = require(`../../controllers/${headerName}Controller`);
      } catch (e) {
        try {
          Header = require(`../../controllers/${headerName}Controller`);
        } catch (e) {
          try {
            Header = require(`../../components/${headerName}View`);
          } catch (e) {
            Header = null;
          }
        }
      }
    }
    if (Header && Header.default) {
      Header = Header.default;
    }

    try {
      Metadata = require(`../../meta/${source.uid}Meta`);
      Metadata = Metadata.default || Metadata;
    } catch (e) {
      Metadata = require("../../meta/defaultMeta");
      Metadata = Metadata.default || Metadata;
    }
    try {
      Footer = require("../../controllers/FooterController");
    } catch (e) {
      Footer = require("../../components/FooterView");
    }
    if (Footer && Footer.default) {
      Footer = Footer.default;
    }

    try {
      Nav =
        !!navigation && navigation !== "Home Page" && navigation !== "Standard"
          ? null // @TODO: figure out navigation
          : require("../../controllers/NavigationHeaderController");
    } catch (e) {
      Nav =
        !!navigation && navigation !== "Home Page" && navigation !== "Standard"
          ? null // @TODO: figure out navigation
          : require("../../components/NavigationHeaderView");
    }
    if (Nav && Nav.default) {
      Nav = Nav.default;
    }

    const components = {
      Footer,
      Metadata,
      Nav,
      Header
    };

    const configs = {
      styles,
      footerNav,
      navigation,
      headerNav,
      subroute,
      updateSize: this.updateSize,
      state: this.state,
      appdata: this.props.appdata,
      setLoaded: this.props.setLoaded
    };

    if (!!page) {
      return _pageRenderer(preview || page, components, configs, this.props.refresh);
    } else if (!!property) {
      return (
        <PropertyRenderer
          {...this.props}
          preview={preview}
          property={!subroute ? preview || property : property}
          components={components}
          configs={configs}
          refresh={this.props.refresh}
        />
      );
    }
  }
}

export default withRouter(PageRenderer);
