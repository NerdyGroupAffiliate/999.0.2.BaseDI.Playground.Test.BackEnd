import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { withApollo } from "react-apollo";
import get from "lodash/get";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import uniqBy from "lodash/uniqBy";

import "./index.css";
import routes from "./routes";
import ApplyNow from "./controllers/ApplyNow";
import FloorplanCreateProfile from "./controllers/FloorplanCreateProfile";
import UserAccountOverview from "./controllers/UserAccountOverview";
import UserQuoteDetails from "./controllers/UserQuoteDetails";
import { pagesQuery } from "./graphql/queries/pagesQuery";
import { redirectsQuery } from "./graphql/queries/redirectsQuery";
import { allDataQuery } from "./graphql/queries/allDataQuery";
import config from "./config";
import Routes from "./helpers/prismic/routes";
import ResidentPortalFeedback from "./controllers/ResidentPortalFeedbackController";
import GroupPropertiesByRegion from "./helpers/group-properties-by-region";
import ContactForm from "./controllers/ContactFormController";
import Blog from "./controllers/BlogController";
import InitialLoader from "./InitialLoader";
import PagePreview from "./helpers/page-preview";
import { canUseDOM } from "./helpers/utils";
import ForgotPassword from "./controllers/ForgotPassword";
import ContactSuccess from "./controllers/ContactSuccess";
import LocalStorageCleaner from "./helpers/local-storage-cleaner";
import RoutesContext from "./helpers/routes-context";
import { setItem } from "./helpers/cookies";

let Page404 = null;

try {
  Page404 = require("./views").NotFoundView;
} catch (e) {
  // ignore dynamic import failures
  console.log(e);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: props.routes,
      allPageData: props.pageData,
      loaded: props.location.pathname !== "/",
      banner: props.banner,
      redirects: null
    };
  }

  static getAllPages = async client => {
    const pagesData = await client.query({
      query: allDataQuery,
      variables: {
        full: false
      }
    });
    const pages = get(pagesData, "data.allData");
    return pages;
  };

  static getRedirects = async client => {
        const redirectsData = await client.query({
            query: redirectsQuery
        });

        return redirectsData;
  }

  static getRoutes = async (client, full = false, setLoaded = () => {}) => {
    const pagesData = await client.query({
      query: pagesQuery,
      ...(full ? { variables: { full } } : {})
    });

    const pages = get(pagesData, "data.pages");
    const regions = (pages || []).filter(
      page => !!page && !!page.data && !!page.type && page.type === "region"
    );
    const properties = (pages || []).filter(
      page => !!page && !!page.data && !!page.type && page.type === "property"
    );
    const subregions = (pages || []).filter(
      page => !!page && !!page.data && !!page.type && page.type === "sub-region"
    );
    const allPageData = {
      properties,
      regions,
      subregions
    };

    const dynamicRoutes = Routes(pages, setLoaded) || [];
    return { dynamicRoutes, allPageData, pages };
  };

  componentWillMount() {
    if (!process.browser || !canUseDOM) {
      return true;
    } else {
      if (!window.__PAGES_DATA__) {
        return true;
      }
      const pageData = JSON.parse(unescape(window.__PAGES_DATA__));

      this.setState({
        routes:
          this.props.routes || !!window.__PAGES_DATA__
            ? Routes(pageData.pages || [])
            : null,
        allPageData:
          this.props.pageData || !!window.__PAGES_DATA__
            ? pageData.allPageData
            : null,
        loaded: this.props.location.pathname !== "/",
        banner:
          this.props.banner || !!window.__PAGES_DATA__ ? pageData.banner : null
      });
    }
  }

  async componentDidMount() {
    if (canUseDOM){
      const referralSite = document.referrer;
      setItem("referralSite", referralSite);
    }
    const pathname = get(this.props, "location.pathname");
    if (pathname === "/") {
      await this.setState({ loaded: true });
    }
    const hasServerRouteData = !(
      (!this.props.routes || !this.props.pageData) &&
      (!this.state.routes || !this.state.allPageData)
    );

    const serverRoutes = [
      ...(Array.isArray(this.props.routes) ? this.props.routes : []),
      ...(Array.isArray(this.state.routes) ? this.state.routes : [])
    ];
    if (!hasServerRouteData || serverRoutes.length < 2) {
      const { dynamicRoutes, allPageData } = await App.getRoutes(
        this.props.client,
        config.IS_DEV,
        () => {}
      );
      await this.setState({
        routes: uniqBy(
          [...(this.state.routes || []), ...(dynamicRoutes || [])],
          "key"
        ),
        allPageData
      });
    }
    if (pathname === "/") {
      await this.setState({
        loaded: true
      });
    }
  }

  render() {
    let dynamicRoutes = [
      ...(Array.isArray(this.props.routes) ? this.props.routes : []),
      ...(Array.isArray(this.state.routes) ? this.state.routes : [])
    ];

    const pathname = get(this.props, "location.pathname");

    if (dynamicRoutes.length === 0 && pathname !== "/") {
      return (
        <div
          style={{
            alignSelf: "center",
            width: "100%",
            zIndex: 99999,
            height: "100vh",
            textAlign: "center",
            fontSize: 25,
            paddingTop: 25,
            fontFamily: '"Monotype madera", sans-serif',
            backgroundColor: "white"
          }}
        >
          Loading...
        </div>
      );
    }

    if (process.env.NODE_ENV !== "production") {
      dynamicRoutes = [...dynamicRoutes, ...(routes() || [])];
    }

    let regionProperties;
    const allPageData = this.state.allPageData || this.props.pageData;
    if (!!allPageData && !!allPageData.regions && !!allPageData.properties) {
      regionProperties = GroupPropertiesByRegion(allPageData);
    }

    return (
      <RoutesContext.Provider
        value={{
          routes: [],
          addToRoutes: routes => {
            const newRoutes = Routes(routes);
            this.setState({
              routes: uniqBy(
                [...(this.state.routes || []), ...(newRoutes || [])],
                "key"
              )
            });
          }
        }}
      >
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
        <div
          id="google_translate_element"
          style={{
            zIndex: -1000,
            position: "absolute",
            opacity: 0
          }}
        />
        {pathname === "/" ? (
          <InitialLoader
            loaded={this.state.loaded}
            banner={this.props.banner || this.state.banner}
            loader={this.props.loader}
          />
        ) : null}
        <Switch>
          {dynamicRoutes}
          {/*<Route
            path="/component/:component?"
            component={ComponentRenderer}
            exact
          />*/}
          <Route path="/preview-page" component={PagePreview} exact />
          <Route
            path="/forgot-password"
            render={() => (
              <LocalStorageCleaner>
                <ForgotPassword exact />
              </LocalStorageCleaner>
            )}
          />
          <Route
            path="/applynow"
            render={() => (
              <LocalStorageCleaner>
                <ApplyNow communities={regionProperties} exact />
              </LocalStorageCleaner>
            )}
          />
          <Route
            path="/create-profile"
            component={FloorplanCreateProfile}
            exact
          />
          <Route
            path="/blog"
            exact
            render={() => (
              <LocalStorageCleaner>
                <Blog communities={regionProperties} exact />
              </LocalStorageCleaner>
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <LocalStorageCleaner>
                <ContactForm communities={regionProperties} exact />
              </LocalStorageCleaner>
            )}
          />
          <Route
            path="/account"
            render={() => (
              <LocalStorageCleaner>
                <UserAccountOverview exact />
              </LocalStorageCleaner>
            )}
          />
          <Route
            path="/resident-portal"
            render={() => (
              <LocalStorageCleaner>
                <ResidentPortalFeedback communities={regionProperties} exact />
              </LocalStorageCleaner>
            )}
          />
          <Route path="/quote/:id" component={UserQuoteDetails} exact />
          <Route
            path="/feedback"
            render={() => (
              <LocalStorageCleaner>
                <ResidentPortalFeedback communities={regionProperties} exact />
              </LocalStorageCleaner>
            )}
          />
          <Route
            path="/contact-success"
            render={() => (
              <ContactSuccess communities={regionProperties} exact />
            )}
          />
          <Route path="/robots.txt" exact />
          {!!Page404 ? (
            <Route
              render={() => (
                <LocalStorageCleaner>
                  <Page404.Controller />
                </LocalStorageCleaner>
              )}
            />
          ) : null}
        </Switch>
      </RoutesContext.Provider>
    );
  }
}

export default withRouter(withApollo(App));
