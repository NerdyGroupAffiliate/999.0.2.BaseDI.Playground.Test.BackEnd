import React from "react";
import { graphql } from "react-apollo";
import NavigationHeaderController from "../NavigationHeaderController";
import FooterController from "../FooterController";
import GatherNavData from "../../helpers/gather-navbar-data";
import { pagesQuery } from "../../graphql/queries";
import styles from "./styles.module.css";
import Image from "../../controllers/ImageController";
import ContentImageBlurbCta from "../../controllers/ContentImageBlurbCtaController";

function ContactSuccess(props){
  const navData = GatherNavData(props);
  let contactDocument;
  let ctaSlice;
  if (props && props.data && props.data.pages) {
    contactDocument = props.data.pages.find(pg => pg.uid === "contact");
  }
  if (contactDocument && contactDocument.data && contactDocument.data.body) {
    ctaSlice = contactDocument.data.body.find(item => item.slice_type === "content_image_blurb_cta");
  }
  return (
    <div>
      <NavigationHeaderController links={navData} />
      <Image page={contactDocument} />
      <div className={styles.successTitle}>
        Thank you.
      </div>
      <div className={styles.successMessage}>
        One of our associates will reach out to you shortly.
      </div>
      {
        ctaSlice
          ? <ContentImageBlurbCta data={ctaSlice}/>
          : null
      }
      <FooterController links={navData.footerLinks} />
    </div>
  )
}

export default graphql(pagesQuery)(ContactSuccess);
