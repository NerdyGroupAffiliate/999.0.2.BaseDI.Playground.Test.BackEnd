import React, { useState } from "react";
import { get, capitalize } from "lodash";
import UserAccountSidebarView from "../../components/UserAccountSidebarView";
import modal_close from "../../assets/images/modal-close.png";
import { withRouter } from "react-router-dom";
import { clear } from "../../helpers/cookies";
import styles from './styles.module.css';
import './index.css';

const moment = require("moment");

function UserAccountSidebar(props) {
  const [showModal, setShowModal] = useState(false);
  const user = get(props, "user", {});
  const currentPage = get(props, "location.pathname");
  const properties = get(props, "properties");
  let specials = [];
  if (props.quote) {
    const quotePropertyId = get(props, "quote.property.propertyId");
    const property = properties.find(p => p.data.amli_id === quotePropertyId);
    if (property) {
      specials = property.data.specials.filter(special =>
        moment(special.expiration_date).isAfter(moment()));
    }
  }
  return (
    <UserAccountSidebarView {...props}>
      <wrapper className={styles.container}>
        <title>
          Hey {capitalize(user.firstName)},<p>{currentPage === "/account" ? "Here are your quotes." : "Here is your quote summary."}</p>
          <p className={styles.signedInText}>Signed in with</p>
          <p className={styles.userEmail}>{user.email}</p>
          <a // eslint-disable-line
            className={`${styles.signout} af-class-link-5`}
            href="javascript: void(0)" // eslint-disable-line
            onClick={() => {
              clear();
              props.history.replace("/");
            }}
          >
            Logout
          </a>
          {
            currentPage === "/account"
              ? <button
                  className={styles.noQuotes}
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                  onKeyDown={e => e.keyCode === 27 && setShowModal(!showModal)}
                >
                  Not seeing your quote(s)?
                </button>
              : null
          }
          {
            showModal
              ? <div className={styles.noQuotesModal}>
                  <button
                    className={styles.modalClose}
                    onClick={() => {
                      setShowModal(!showModal)
                    }}
                  >
                    <img
                      src={modal_close}
                      alt="close modal"
                    />
                  </button>
                  <p className={styles.modalText}>
                    Quotes displayed are associated with this account’s email address and show for 30 days. If you have additional quotes to add to this account, please contact the appropriate community to update your email address. Or simply visit the Floor Plans & Pricing page of your preferred community to get a new quote if yours has expired.
                  </p>
                </div>
              : null
          }
        </title>
        {
          currentPage !== "/account" && specials.length ?
            <specials-block>
              <blurb>{specials[0].special_text}</blurb>
              <expiration className={styles.expDate}>
                Exp. {moment(specials[0].expiration_date).format("MM/DD/YY")}
              </expiration>
              <cta
                className={styles.cta}
                href="javascript:void(0)" // eslint-disable-line
                onClick={e => {
                  if (e && e.preventDefault) {
                    e.preventDefault();
                  }
                }}
              />
              <specials-tag />
            </specials-block>
          : null
          }
      </wrapper>
    </UserAccountSidebarView>
  );
}

export default withRouter(UserAccountSidebar);
