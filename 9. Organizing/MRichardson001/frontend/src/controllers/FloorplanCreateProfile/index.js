import React, { useState, useEffect } from "react";
import get from "lodash/get";
import { compose, graphql, withApollo } from "react-apollo";
import { withRouter } from "react-router";
import PropertyFullView from "../../components/PropertyFullView";
import NavigationHeaderView from "../../components/NavigationHeaderView";
import CreateProfileFormView from "../../components/CreateProfileFormView";
import CreateProfileSummaryView from "../../components/CreateProfileSummaryView";
import FooterView from "../../components/FooterView";
import { propertyQuery, pagesQuery, leadSourcesQuery } from "../../graphql/queries";
import { getItem } from "../../helpers/cookies";
import GatherNavData from "../../helpers/gather-navbar-data";
import { ViewCapture } from "../../helpers/plugins/guestAnalytics";
import styles from "./styles.module.css";
import "./index.css";
import SignIn from "../SignIn";
import Helmet from "react-helmet-async";

function FloorplanCreateProfile(props) {
  const checkForm = get(props, "location.state.loginForm", false);
  const [loginForm, setLoginForm] = useState(checkForm);

  const redirect = get(props, "location.state.redirectTo", "/account");
  const quote = get(props, "location.state.quote", null);
  const user = getItem("user");
  const property = get(props, "location.state.property");

  if (!!user) {
    props.history.replace(redirect, { selectedProperty: property});
  }

  if (!user && (!props || !props.location || !props.location.state)) {
    props.history.replace('/applynow');
  }
  const navData = GatherNavData(props);

  useEffect(()=> {
    ViewCapture("Create Profile");
  }, [])

  return (
    <>
      <span
        className="af-view"
        style={{ width: "100%", height: "100%", flex: 1 }}
      >
            <Helmet>
              <title>Login</title>
            </Helmet>
        <div>
          {
            quote
              ? <PropertyFullView.Controller {...props} links={navData} hideApply />
              : <NavigationHeaderView.Controller {...props} links={navData} />
          }
          <div
            className={[
              "af-class-third-column",
              quote ? styles.gridContainer : styles.noQuoteContainer
            ].join(" ")}
          >
            <div
              className={[
                "af-class-create-profile-image",
                styles.image
              ].join(" ")}
            />
            <span
              className={!quote ? styles.noQuoteForm : ''}
            >
              {
                !loginForm
                  ? <CreateProfileFormView.Controller
                      {...props}
                      quote={quote}
                      property={property}
                      setLoginForm={setLoginForm}
                    />
                  : <SignIn
                      {...props}
                      quote={quote}
                      property={property}
                      setLoginForm={setLoginForm}
                    />
              }
            </span>
            <CreateProfileSummaryView.Controller {...props} />
          </div>
        </div>
      </span>
      <FooterView.Controller {...props} links={navData.footerLinks} />
    </>
  );
}

export default withRouter(
  withApollo(
    compose(
      graphql(propertyQuery, {
        name: "property",
        skip: props =>
          !props.location ||
          !props.location.state ||
          !props.location.state.quote ||
          !props.location.state.quote.property,
        options: props => ({
          variables: {
            id: props.location.state.quote.propertyDocId,
            amliId: props.location.state.quote.propertyId
          }
        })
      }),
      graphql(pagesQuery),
      graphql(leadSourcesQuery, {
        name: "leadSources",
        skip: props =>
          !props.location ||
          !props.location.state ||
          (!props.location.state.property &&
            !props.location.state.quote),
        options: props => {
          const propertyId =
              get(props, "location.state.property.data.amli_id") ||
              get(props, "location.state.quote.propertyId") ||
              get(props, "location.state.property.amli_id");
          return {
            variables: {
              propertyId
            }
          }
        }
      })
    )(FloorplanCreateProfile)
  )
);
