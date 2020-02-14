import React, { useState, useEffect } from "react";
import { compose, graphql } from "react-apollo";
import { withRouter } from "react-router";
import queryString from "query-string";
import get from "lodash/get";
import NavigationHeaderController from "../NavigationHeaderController";
import FooterController from "../FooterController";
import { pagesQuery } from "../../graphql/queries";

import Spinner from "../Spinner";
import { getItem } from "../../helpers/cookies";
import GatherNavData from "../../helpers/gather-navbar-data";
import RecoverPasswordMutation from "../../graphql/mutations/recoverPasswordMutation";
import ResetPasswordMutation from "../../graphql/mutations/resetPasswordMutation";
import { isEmail } from "../../helpers/validators";
import { getQueryVariable } from "../../helpers/utils";

import styles from "./styles.module.css";

function ForgotPassword(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [didRecover, setDidRecover] = useState(false);
  const [didReset, setDidReset] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const queryEmail = get(
      queryString.parse(props.location.search),
      "email",
      undefined
    );
    if (!!queryEmail) {
      setEmail(queryEmail);
    }
  }, []);

  const user = getItem("user");
  if (!!user) {
    props.history.replace("/");
  }

  const token = getQueryVariable(props.location.search, "token");

  const canSubmit = !!token
    ? password === confirmPassword && password.length > 3 && !!email
    : !!email && isEmail(email);

  const sumbitRequestStart = async e => {
    const url = `${window.location.origin}/forgot-password`;
    try {
      const response = await props.recoverPasswordMutation({
        variables: {
          email,
          url
        }
      });
      // props.history.goBack();
      if (response && response.data && response.data.recoverPassword) {
        setDidRecover(true);
      } else {
        setError("Failed to Recover your Password, please try again.");
      }

    } catch (e) {
      console.log(e);
      setError("Failed to Recover your Password, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getTitle = () => {
    if (didRecover) {
      return "An email has been sent to your inbox.";
    } else if (didReset) {
      return "Your password has been reset. Please log in.";
    }

    return token ? "Create new password" : "Recover Password";
  };

  const submitRequestComplete = async e => {
    try {
      const response = await props.resetPasswordMutation({
        variables: {
          email,
          token,
          password,
          confirmPassword
        }
      });
      if (response && response.data && response.data.resetPassword) {
        setDidReset(true);
      } else {
        setError("Failed to Reset the Password, please try again.");
      }
      // props.history.goBack();
    } catch (e) {
      console.log(e);
      setError("Failed to Recover your Password, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const submit = async e => {
    if (!!loading) {
      return null;
    }
    setLoading(true);
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    let res = null;
    if (!!password && !!confirmPassword) {
      res = await submitRequestComplete(e);
    } else {
      res = await sumbitRequestStart(e);
    }
    return res;
  };

  const navData = GatherNavData(props);
  return (
    <div className={styles.wrapper}>
      <NavigationHeaderController links={navData} />
      <div className={styles.container}>
        <div className={["create-profile-image", styles.image].join(" ")} />
        <div className={["div-block-314", styles.form].join(" ")}>
          <div
            className={["form-block", "w-form", styles.formContainer].join(" ")}
          >
            <h1 className={["heading-23", styles.title].join(" ")}>
              {getTitle()}
            </h1>
            {!didReset && !didRecover && (
              <div className={["paragraph", styles.paragraph].join(" ")}>
                Enter your{" "}
                {token ? "new password" : "email to recover your password"}.
              </div>
            )}
            {didReset && (
              <button
                className={[
                  "submit-button",
                  "w-button",
                  styles.submitButton
                ].join(" ")}
                style={{ marginTop: 20 }}
                onClick={() => {
                  props.history.replace("/create-profile");
                }}
              >
                Return to Sign In
              </button>
            )}
            {!didReset && !didRecover && (
              <form onSubmit={submit}>
                {!token && (
                  <input
                    type="email"
                    aria-label="email"
                    className={["input-field", "w-input", styles.input].join(
                      " "
                    )}
                    maxLength={64}
                    name="email"
                    data-name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                      setError(null);
                    }}
                    id="email"
                  />
                )}
                {!!token && (
                  <input
                    type="password"
                    className={["input-field", "w-input", styles.input].join(
                      " "
                    )}
                    maxLength={64}
                    name="password"
                    data-name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                      setError(null);
                    }}
                    id="password"
                  />
                )}
                {!!token && (
                  <input
                    type="password"
                    className={["input-field", "w-input", styles.input].join(
                      " "
                    )}
                    maxLength={64}
                    name="password2"
                    data-name="password2"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={e => {
                      setConfirmPassword(e.target.value);
                      setError(null);
                    }}
                    id="passwordConfirm"
                  />
                )}
                {error ? (
                  <div className={["w-form-fail", styles.error].join(" ")}>
                    <div>{error}</div>
                  </div>
                ) : null}
                <div className={["div-block-311", styles.formRow].join(" ")}>
                  <button
                    data-wait="Please wait..."
                    disabled={!canSubmit || loading}
                    className={[
                      "submit-button",
                      "w-button",
                      styles.submitButton,
                      loading ? styles.loadingButton : "",
                      !canSubmit ? styles.disabledButton : ""
                    ].join(" ")}
                  >
                    {!loading ? (
                      !!token ? (
                        "Set new Password"
                      ) : (
                        "Recover Password"
                      )
                    ) : (
                      <Spinner />
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <FooterController links={navData.footerLinks} />
    </div>
  );
}

export default withRouter(
  compose(
    graphql(pagesQuery),
    graphql(RecoverPasswordMutation, { name: "recoverPasswordMutation" }),
    graphql(ResetPasswordMutation, { name: "resetPasswordMutation" })
  )(ForgotPassword)
);
