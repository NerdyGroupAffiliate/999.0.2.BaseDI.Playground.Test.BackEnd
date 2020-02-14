import React, { useState, useEffect } from "react";
import get from "lodash/get";
import { compose, graphql } from "react-apollo";
import { withRouter } from "react-router";
import styles from "./styles.module.css";
import CreateQuoteMutation from "../../graphql/mutations/createQuoteMutation";
import { pagesQuery, quotesQuery } from "../../graphql/queries";
import SignInMutation from "../../graphql/mutations/signinMutation";
import Spinner from "../Spinner";
import { getItem, setItem } from "../../helpers/cookies";
import { EventSignIn, ViewCapture } from "../../helpers/plugins/guestAnalytics";
import { applyWithQuote } from "../../helpers/property/apply";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [applyLink, setApplyLink] = useState(false);
  const [amliQuoteId, setAmliQuoteId] = useState(false);

  useEffect(() => {
    ViewCapture("sign in");
  }, []);

  const submit = async e => {
    if (!!loading) {
      return null;
    }
    setLoading(true);
    if (e) {
      e.preventDefault();
    }
    try {
      const response = await props.mutate({
        variables: {
          signInInput: {
            email,
            password
          }
        }
      });
      const user = response.data.signIn;
      setItem("user", user);
      const { userId } = user;
      EventSignIn(userId, email);
      const shouldApply = get(props, "location.state.shouldApply");

      if (!!user && !props.quote) {
        props.history.push("/account", { selectedProperty: props.property });
        return;
      } else {
        const res = await props.client.mutate({
          mutation: CreateQuoteMutation,
          variables: {
            quoteCreateInput: {
              ...props.quote
            }
          },
          context: {
            headers: {
              authorization: user.token
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
            setShowButtons(true);
          }
          if (res.data.createQuote.quoteId && shouldApply) {
            setAmliQuoteId(res.data.createQuote.quoteId);
          } else if (res.data.createQuote.quoteId && !shouldApply) {
            props.history.replace(`/quote/${res.data.createQuote.quoteId}`);
          } else {
            props.history.replace("/account", {
              quote: props.quote,
              selectedProperty
            });
          }
        } else {
          setError("Failed to save quote, please try again.");
          setShowButtons(false);
          console.log("fail result - signin", JSON.stringify(props.quote));
          setLoading(false);
          return null
        }
      }
    } catch (e) {
      console.log(e);
      setError("Incorrect email or password");
      setShowButtons(false);
    } finally {
      setLoading(false);
    }
  };
  const selectedProperty =
    get(props, "property") || get(props, "location.state.property");

  const primaryColor =
    get(props, "property.primary_color") ||
    get(props, "location.state.property.data.primary_color");

  return (
    <div className={["form-block", "w-form", styles.formContainer].join(" ")}>
      {
        !showButtons
          ? <React.Fragment>
              <h1 className={["heading-23", styles.title].join(" ")}>Log In</h1>
              <div className={["paragraph", styles.paragraph].join(" ")}>
                Welcome back! Please log in to view saved quotes or start an application
                for your new AMLI home.
              </div>
              <form onSubmit={submit}>
                <input
                  type="email"
                  aria-label="email"
                  className={["input-field", "w-input", styles.input].join(" ")}
                  maxLength={64}
                  name="email"
                  data-name="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value) || setError(null)}
                  id="email"
                />
                <input
                  type="password"
                  aria-label="password"
                  className={["input-field", "w-input", styles.input].join(" ")}
                  maxLength={32}
                  name="password"
                  data-name="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value) || setError(null)}
                  id="password"
                />
                {error ? (
                  <div className={["w-form-fail", styles.error].join(" ")}>
                    <div>{error}</div>
                  </div>
                ) : null}
                <div
                  className={["div-block-311", styles.formRow].join(" ")}
                  style={loading ? { justifyContent: "center" } : null}
                >
                  <button
                    style={!loading ? { backgroundColor: primaryColor } : null}
                    data-wait="Please wait..."
                    disabled={loading}
                    className={[
                      "submit-button",
                      "w-button",
                      styles.submitButton,
                      loading ? styles.loadingButton : ""
                    ].join(" ")}
                  >
                    {!loading ? "Log In" : <Spinner propertyColor={primaryColor} />}
                  </button>
                </div>
              </form>
              <style
                dangerouslySetInnerHTML={{
                  __html: `\n .w-input:focus {\n  border-color: ${primaryColor ||
                    "#008d94"} !important;\n}\n`
                }}
              />
              <div
                className={styles.createAccount}
                onKeyDown={e => e.keyCode === 13 && props.setLoginForm(false)}
                onClick={() => {
                  props.setLoginForm(false);
                }}
              >
                Don't have an account yet?
                <span
                  tabIndex={0}
                  className={styles.formToggle}
                  style={{ color: primaryColor }}
                >
                  Create an Account
                </span>
              </div>
              <a
                style={{ color: primaryColor }}
                href="/forgot-password"
                className={styles.forgot}
                onClick={e => {
                  if (e) {
                    e.preventDefault();
                  }
                  props.history.push("/forgot-password");
                }}
              >
                Forgot your password?
              </a>
            </React.Fragment>
          : <div className={styles.loader}>
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
    </div>
  );
}

export default withRouter(
  compose(
    graphql(SignInMutation),
    graphql(pagesQuery)
  )(SignIn)
);
