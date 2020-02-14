import React from "react";
import get from "lodash/get";
import GridSocialCardSocialView from "../../components/GridSocialCardSocialView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";

import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Instagram from "../../assets/icons/instagram.svg";

import styles from './styles.module.css';

function GridSocialCardSocial(props) {
  const text = get(props, "item.blurb");
  const image = BackgroundImageHandler(get(props, "item.image"));
  const cardType = get(props, "item.card_type");
  const url = get(props, "item.social_url.url");
  let SocialImage = null;
  switch (cardType) {
    case "Facebook":
      SocialImage = Facebook;
      break;
    case "Instagram":
      SocialImage = Instagram;
      break;
    case "Twitter":
      SocialImage = Twitter;
      break;
    default:
      SocialImage = null;
  }
  return (
    <GridSocialCardSocialView>
      <wrapper {...image} className={styles.wrapper} href={url ? url : null}>
        <social-image src={SocialImage} alt="" />
        <social-name>{cardType}</social-name>
        <social-description>{text}</social-description>
      </wrapper>
    </GridSocialCardSocialView>
  );
}

export default GridSocialCardSocial;
