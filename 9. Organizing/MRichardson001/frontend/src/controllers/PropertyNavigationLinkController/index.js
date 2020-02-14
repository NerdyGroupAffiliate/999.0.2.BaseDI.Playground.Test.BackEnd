import React from "react";
import { withRouter } from "react-router";
import get from "lodash/get";
import PropertyNavigationLinkView from "../../components/PropertyNavigationLinkView";
import styles from "./styles.module.css";
import "./index.css";

function PropertyNavigationLink(props) {
  const property =
    get(props, "page.data") || get(props, "property.property.data");
  const propertyUid =
    get(props, "page.uid") || get(props, "property.property.uid");
  const { disabled, fullPath } = props;
  return (
    <PropertyNavigationLinkView>
      {disabled ? (
        <link
          href={`${fullPath}/${propertyUid}${props.href ||
            ""}`}
          className={styles.link}
          style={{ color: "#ccc", cursor: "default" }}
          onClick={e => {
            if (e && e.preventDefault) {
              e.preventDefault();
            }
          }}
        >
          {props.title}
        </link>
      ) : (
        <link
          href={`${fullPath}/${propertyUid}${props.href ||
            ""}`}
          className={[styles.link, !!props.selected ? styles.active : ""].join(
            " "
          )}
          style={
            !!props.selected && property
              ? {
                  borderBottom: `3px solid ${property.primary_color ||
                    "#018094"}`
                }
              : {}
          }
          onClick={e => {
            if (e && e.preventDefault) {
              e.preventDefault();
            }
            props && props.history.push(`${fullPath}/${propertyUid}${props.href || ""}`);
          }}
        >
          {props.title}
        </link>
      )}
    </PropertyNavigationLinkView>
  );
}

export default withRouter(PropertyNavigationLink);
