import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { graphql } from "react-apollo";
import { get, toLower } from "lodash";
import CreateProfileFormView from "../../components/CreateProfileFormView";
import SignUpMutation from "../../graphql/mutations/signupMutation";
import { setItem, getItem } from "../../helpers/cookies";
import Select from "react-select";

import styles from "./styles.module.css";
import "./index.css";
import CreateQuoteMutation from "../../graphql/mutations/createQuoteMutation";
import { quotesQuery } from "../../graphql/queries/quotesQuery";
import { formatGQLError } from "../../helpers/utils";
import { CheckPasswordCriteria } from "../../helpers/password-criteria-style";
import GetPropertyFullRoute from "../../helpers/get-full-property-route";
import getPropertyDataFromAppData from "../../helpers/property/getDataFromProps";
import { dropdownStyles } from "./selectStyles";
import { applyWithQuote } from "../../helpers/property/apply";
import Spinner from "../Spinner";

function CreateProfileForm(props) {
  const [quoteId, setQuoteId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [leadSource, setLeadSource] = useState("");
  const [error, setError] = useState(null);
  const [passComplete, setPassComplete] = useState(null);
  const [isCreatingQuote, setIsCreatingQuote] = useState(false);
  const [delayedResponse, setDelayedResponse ] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [applyLink, setApplyLink] = useState(false);
  const [amliQuoteId, setAmliQuoteId] = useState(false);


  const checkPassComplete = () => {
    const result = CheckPasswordCriteria("all", password);
    if (result === "complete") {
      setPassComplete(true);
      return styles.match;
    } else if (result === "incomplete") {
      setPassComplete(false);
      return styles.noMatch;
    } else {
      setPassComplete(null);
      return "";
    }
  };
  const checkMatching = () => {
    if (!confirmPassword || confirmPassword.length === 0) {
      return null;
    } else if (passComplete && password === confirmPassword) {
      return styles.match;
    } else {
      return styles.noMatch;
    }
  };

  const clickBack = e => {
    if (!!e && !!e.preventDefault) {
      e.preventDefault();
    }
    if (props && !!props.history) {
      props.history.goBack();
    }
  };
  let t;
  function startTimer() {
    t = setTimeout(() => {
      setDelayedResponse(true);
    }, 10000);
  };
  function stopTimer() {
    clearTimeout(t);
  };
  const handleSubmit = async e => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    if (props.quote) {
      setQuoteId(0);
    }

    const user = {
      firstName,
      lastName,
      email,
      password,
      quoteId: +quoteId,
      leadSource
    };
    if (!firstName || !lastName || !email || !password || !passComplete || (hideQuoteId && !leadSource)) {
      setError("Invalid or missing information. Please try again.");
      return null;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return null;
    }
    setIsCreatingQuote(true);
    startTimer();
    try {
      let userRet = getItem("user");
      if (!userRet) {
        const result = await props.mutate({
          variables: {
            signUpInput: {
              ...user
            }
          }
        });
        userRet = result.data.signUp;
        if (!!userRet) {
          setItem("user", JSON.stringify(userRet));
        } else {
          stopTimer();
          setShowButtons(false);
          throw new Error("Failed to create account");
        }
      }
      const shouldApply = get(props, "location.state.shouldApply");

      if (props.quote) {
        const res = await props.client.mutate({
          mutation: CreateQuoteMutation,
          variables: {
            quoteCreateInput: {
              ...props.quote,
              property: undefined
            }
          },
          context: {
            headers: {
              authorization: userRet.token
            }
          }
        });
        if (
          res &&
          res.data &&
          res.data.createQuote &&
          res.data.createQuote.realPageQuoteId &&
          res.data.createQuote.realPageQuoteId != -1
        ) {
          await props.client.query({
            query: quotesQuery,
            fetchPolicy: "network-only"
          });
          if (shouldApply) {
           const applyUrl = await applyWithQuote(
              props.client,
              res.data.createQuote.realPageQuoteId
            );
            setApplyLink(applyUrl);
            setAmliQuoteId(res.data.createQuote.quoteId);
            setShowButtons(true);
          } else {
            props.history.push(`/quote/${res.data.createQuote.quoteId}`);
          }
        } else {
          stopTimer();
          setError("Failed to save quote, please try again.");
          setShowButtons(false);
          console.log("fail result", JSON.stringify(props.quote));
        }
        setIsCreatingQuote(false);
        stopTimer();
        setDelayedResponse(false);
        return null;
      } else {
        const results = await props.client.query({
          query: quotesQuery,
          fetchPolicy: "network-only"
        });

        const quotes = get(results, "data.quotes", []);
        const desiredQuote = quotes.find(
          quote => quote.realPageQuoteId === quoteId
        );

        if (shouldApply) {
          const applyUrl = await applyWithQuote(
            props.client,
            desiredQuote ? desiredQuote.realPageQuoteId : ''
          );
          setApplyLink(applyUrl);
          setShowButtons(true);
        }
        if (desiredQuote) {
          setAmliQuoteId(desiredQuote.quoteId);
        } else {
          setAmliQuoteId(quoteId);
        }
      }
    } catch (e) {
      stopTimer();
      setShowButtons(false);
      setError(formatGQLError(e));
      console.log(e);
    }
    setIsCreatingQuote(false);
    stopTimer();
    setDelayedResponse(false);
  };

  const primaryColor =
    get(props, "property.primary_color") ||
    get(props, "location.state.property.data.primary_color");

  const propertyName =
    get(props, "property.value") ||
    get(props, "location.state.property.name") ||
    get(props, "quote.property.name", "");

  let propertyUid = get(props, "property.uid", "");
  if (!propertyUid && propertyName.length) {
    propertyUid = toLower(propertyName.replace(" ", "-"));
  }

  const hideQuoteId = get(props, "location.state.hideQuoteId");
  const leadSources = get(props, "leadSources.leadSources.data");
  let formattedSources;
  if (leadSources && leadSources.length) {
    formattedSources = leadSources.map(item => {
      return {
        value: item.id,
        label: item.name
      };
    });
  }
  let appdata;
  if (props.data && props.data.pages) {
    const regions = props.data.pages.filter( page => page.type === "region");
    const subregions = props.data.pages.filter( page => page.type === "sub-region");
    const properties = props.data.pages.filter( page => page.type === "property");
    appdata = {
      regions,
      subregions,
      properties
    }
  }
  const getFullRoute = () => {
    let path;
    if (appdata){
      const property =
          getPropertyDataFromAppData(
            appdata,
            get(props, "quote.property.amli_id")
          ) ||
          get(props, "property");
      if (!!property) {
         path = GetPropertyFullRoute(property, appdata);
      }
      return path
    }

  }
  return (
    <div className={styles.formContainer}>
      {isCreatingQuote && !delayedResponse ? (
        <div className={styles.loader}>
          <h2>Creating your {hideQuoteId ? "Quote" : "Account"}, Please Wait...</h2>
          { hideQuoteId && <h4>Saving Quote. This may take up to 10 seconds.</h4> }
          <Spinner propertyColor={primaryColor}/>
        </div>
      ) : null}
      {isCreatingQuote && delayedResponse
        ? <div className={styles.loader}>
            <h4>Sorry for the inconvenience, this is taking longer than usual.</h4>
            <Spinner propertyColor={primaryColor}/>
          </div>
        : null
      }
      {
        showButtons &&
          <div className={styles.loader}>
            <h5>Your quote has been created. You may now choose to view your account or proceed to our application portal.</h5>
            <div className="buttonWrapper">
              <a
                className="viewQuotesButton"
                href="/account"
                onClick={e => {
                  if (e && e.preventDefault) {
                    e.preventDefault()
                  }
                  props.history.push('/account')
                }}
                >
                View Account
              </a>
              <a
                className="proceedButton"
                href={applyLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => props.history.push(`/quote/${amliQuoteId}`)}
                >
                Proceed
              </a>
            </div>
          </div>
      }
      <CreateProfileFormView>
        <wrapper
          className={[
            styles.centerContainer,
            isCreatingQuote || showButtons ? styles.loading : ""
          ].join(" ")}
        >
          <title>Create an Account</title>
          <subtitle>
            To create an account, you must have a quote ID and use the same
            email address used to create the quote. If you don’t have an
            existing quote, please visit the
            {propertyUid ? (
              <a
                style={{ color: primaryColor }}
                className={styles.floorplansLink}
                href={`${getFullRoute()}/${propertyUid}/floorplans`}
                onClick={e => {
                  if (e && e.preventDefault) {
                    e.preventDefault();
                  }
                  props.history.push(`${getFullRoute()}/${propertyUid}/floorplans`);
                }}
              >
                <span> Floor Plans &amp; Pricing </span>
              </a>
            ) : (
              <span> Floor Plans &amp; Pricing </span>
            )}
            page of your favorite community to save a quote for your new home.
            {!!error && typeof error === "object" ? (
              error.map(err => (
                <div className={["w-form-fail", styles.error].join(" ")}>
                  {err}
                </div>
              ))
            ) : (
              <div className={["w-form-fail", styles.error].join(" ")}>
                {error}
              </div>
            )}
          </subtitle>
          <form
            onSubmit={e => e.preventDefault()}
            topelement={() => (
              <React.Fragment>
                {!hideQuoteId ? (
                  <input
                    required
                    className="af-class-input-field w-input"
                    type="number"
                    min="0"
                    aria-label="Quote ID"
                    placeholder="Quote ID*"
                    value={quoteId}
                    onKeyDown={e => {
                      if (
                        e.keyCode &&
                        (e.keyCode === 38 || e.keyCode === 40) &&
                        e.preventDefault
                      ) {
                        e.preventDefault();
                      }
                    }}
                    onChange={e => setError(null) || setQuoteId(e.target.value)}
                  />
                ) : null}
                <input
                  required
                  className="af-class-input-field w-input"
                  aria-label="First Name"
                  placeholder="First Name*"
                  value={firstName}
                  onChange={e => setError(null) || setFirstName(e.target.value)}
                />
                <input
                  required
                  className="af-class-input-field w-input"
                  aria-label="Last Name"
                  placeholder="Last Name*"
                  value={lastName}
                  onChange={e => setError(null) || setLastName(e.target.value)}
                />
                <input
                  type="email"
                  required
                  className="af-class-input-field w-input"
                  aria-label="Email"
                  placeholder="Email*"
                  value={email}
                  onChange={e => setError(null) || setEmail(e.target.value)}
                />
                <input
                  required
                  type="password"
                  className={`
                  af-class-input-field w-input
                  ${checkPassComplete()}
                `}
                  aria-label="Password"
                  placeholder="Password*"
                  value={password}
                  onChange={e => setError(null) || setPassword(e.target.value)}
                  onBlur={checkPassComplete}
                  onFocus={checkPassComplete}
                />
                <p className={styles.passwordCriteria}>
                  <span style={CheckPasswordCriteria("upper", password)}>
                    1 Uppercase Letter
                  </span>
                  -
                  <span style={CheckPasswordCriteria("lower", password)}>
                    1 Lowercase Letter
                  </span>
                  -
                  <span style={CheckPasswordCriteria("number", password)}>
                    1 Number
                  </span>
                  -
                  <span style={CheckPasswordCriteria("length", password)}>
                    Min 6 Characters
                  </span>
                </p>
                <input
                  required
                  type="password"
                  className={`
                  af-class-input-field w-input
                  ${checkMatching()}
                `}
                  aria-label="Confirm Password"
                  placeholder="Confirm Password*"
                  value={confirmPassword}
                  onChange={e =>
                    setError(null) || setConfirmPassword(e.target.value)
                  }
                  onBlur={checkPassComplete}
                />
                {
                  hideQuoteId
                    ? <Select
                        aria-label="How did you hear about us"
                        className={styles.selectWrapper}
                        styles={dropdownStyles}
                        placeholder="How did you hear about us*"
                        options={formattedSources}
                        onChange={e => setError(null) || setLeadSource(e.value)}
                      />
                    : null
                }
                <div className="af-class-div-block-311 updated">
                  <a // eslint-disable-line
                    aria-label="Go Back"
                    href="javascript:void(0)" // eslint-disable-line
                    onClick={clickBack}
                    className={`af-class-link-2 ${styles.back}`}
                  >
                    Cancel
                  </a>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    aria-label="Create Account"
                    className={`af-class-submit-button w-button ${styles.save}`}
                    style={{ backgroundColor: primaryColor }}
                  >
                    Create Account
                  </button>
                </div>
                <div className={styles.signIn}>
                  Already have an account with us?
                  <span
                    tabIndex={0}
                    onKeyDown={e =>
                      e.keyCode === 13 && props.setLoginForm(true)
                    }
                    onClick={e => {
                      if (e) {
                        e.preventDefault();
                      }
                      props.setLoginForm(true);
                    }}
                    className={styles.formToggle}
                    style={{ color: primaryColor }}
                  >
                    Log In
                  </span>
                </div>
              </React.Fragment>
            )}
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `\n .w-input:focus {\n  border-color: ${primaryColor ||
                "#008d94"} !important;\n}\n`
            }}
          />
          <success />
        </wrapper>
      </CreateProfileFormView>
    </div>
  );
}

export default withRouter(graphql(SignUpMutation)(CreateProfileForm));
