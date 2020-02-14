import React from "react";
import { withRouter } from "react-router";
import PropertyNavigationModalLinkView from "../../components/PropertyNavigationModalLinkView";

import styles from "./styles.module.css";

function PropertyNavigationModalLink(props) {
  return (
    <PropertyNavigationModalLinkView>
      <link
        href={`/${props.href}`}
        className={styles.link}
        onClick={e => {
          if (e && e.preventDefault) {
            e.preventDefault();
          }
          if (props.onClick) {
            props.onClick(e);
          } else {
            props.history.push(`/${props.href}`);
          }
        }}
      >
        {props.label}
      </link>
    </PropertyNavigationModalLinkView>
  );
}

export default withRouter(PropertyNavigationModalLink);
