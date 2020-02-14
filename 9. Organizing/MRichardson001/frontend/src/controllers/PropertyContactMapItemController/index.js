import React from "react";
import PropertyContactMapItemView from "../../components/PropertyContactMapItemView";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Instagram from "../../assets/icons/instagram.png";

import styles from "./styles.module.css";

function PropertyContactMapItem(props) {
  if (!props.item) {
    return null;
  }
  const { network, label, url } = props.item;
  let image = null;
  switch (network) {
    case "Twitter":
      image = Twitter;
      break;
    case "Facebook":
      image = Facebook;
      break;
    case "Instagram":
      image = Instagram;
      break;
    default:
      image = null;
  }

  return (
    <PropertyContactMapItemView>
      <wrapper
        className={styles.container}
        tabIndex={0}
        onKeyDown={e =>
          e.keyCode === 13 && window && url && url.url && window.open(url.url)
        }
        onClick={() => window && url && url.url && window.open(url.url)}
      >
        <image src={image} srcSet={null} className={styles.socialPropertyContactPage} alt={`${network} Icon`} />
        <label className={styles.label}>{label ? label : network}</label>
      </wrapper>
    </PropertyContactMapItemView>
  );
}
export default PropertyContactMapItem;
