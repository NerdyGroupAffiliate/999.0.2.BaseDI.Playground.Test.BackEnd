import React from "react";
import { get } from "lodash";
import ApartmentFeatureView from "../../components/ApartmentFeatureView";
import ListApartmentFeaturesView from "../../components/ListApartmentFeaturesView";
import styles from "./styles.module.css";
import "./index.css";
import {
  personaBackgroundColorStyle,
  personaColorStyle
} from "../../helpers/property/persona";

export default props => {
  const title = get(props, "slice.primary.title");
  const subTitle = get(props, "slice.primary.subtitle");
  const image = get(props, "slice.primary.image.url");
  const alt = get(props, "slice.primary.image.alt");
  const features = get(props, "slice.items", []);
  const property = get(props, "property") || get(props, "page.data");

  return (
    <ListApartmentFeaturesView>
      <title
        className={styles.title}
        style={personaColorStyle(property, "primary")}
      >
        {title}
      </title>
      <body-container
        className={styles.bodyContainer}
        style={personaBackgroundColorStyle(property)}
      >
        <subtitle>{subTitle}</subtitle>
        <image
          className={styles.image}
          src={image}
          srcSet={`${image} 500w, ${image} 800w, ${image} 1080w, ${image} 1516w`}
          alt={alt || ""}
        />
        <apartmentFeatureViewList0>
          {features.map((feature, index) => (
            <ApartmentFeatureView.Controller
              feature={feature.feature}
              key={`feature_${index}`}
            />
          ))}
        </apartmentFeatureViewList0>
      </body-container>
    </ListApartmentFeaturesView>
  );
};
