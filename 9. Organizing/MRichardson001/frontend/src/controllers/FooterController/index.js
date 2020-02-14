import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router";
import FooterView from "../../components/FooterView";
import instagram from "../../assets/images/instagram-footer.png";
import pinterest from "../../assets/images/pinterest.svg"
import styles from "./styles.module.css";
import './index.css'

export default withRouter(props => {
  const links = get(props, "links") || [];
  const year = new Date().getFullYear();
  return (
    <FooterView>
      <logo
        tabIndex={0}
        onClick={() => props.history.push("/")}
        role="button"
        className={styles.amliLogo}
        alt="AMLI logo"
      />
      <social-media-logos>
        <a
          href="https://www.instagram.com/amliapts/"
          className={styles.socialContainer}
        >
          <img
            src={instagram}
            alt="instagram logo"
            className={`af-class-social-icon ${styles.socialLogo}`}
          />
        </a>
        <a
          href="https://www.pinterest.com/amliresidential/"
          className={styles.socialContainer}
        >
          <img
            src={pinterest}
            alt="pinterest logo"
            className={`af-class-social-icon ${styles.socialLogo}`}
          />
        </a>
      </social-media-logos>
      <link-list>
        {/*<a href="/investor-portal" className="af-class-footer-text-link">
          Investor Portal
        </a>*/}
        <a
          href="http://amlivendors.com"
          rel="noopener noreferrer"
          target="_blank"
          className="af-class-footer-text-link"
        >
          Vendors
        </a>
        {links.map(link => (
          <a
            href={`/${link.uid}`}
            onClick={e => {
              if (e && e.preventDefault) {
                e.preventDefault();
              }
              props.history.push(`/${link.uid}`);
            }}
            key={`footerLink_${link.uid}`}
            className="af-class-footer-text-link"
          >
            {link.data.name}
          </a>
        ))}
      </link-list>
      <copyright-text
        className={styles.legalLinks}
      >
        {`${year} © AMLI Copyright. All Rights Reserved.`}
      </copyright-text>
      <equal-housing-logo alt="Equal Housing logo" />
      <terms-link
        className={styles.legalLinks}
        href="/terms-of-use"
        onClick={e => {
          if (e && e.preventDefault) {
            e.preventDefault();
          }
          props.history.push("/terms-of-use");
        }}
      />
      <privacy
        className={styles.legalLinks}
        href="/privacy-policy"
        onClick={e => {
          if (e && e.preventDefault) {
            e.preventDefault();
          }
          props.history.push("/privacy-policy");
        }}
      />
    </FooterView>
  );
});
