import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet-async";
import PropertyContactMapView from "../../../components/PropertyContactMapView";
import PropertyContactCtaView from "../../../components/PropertyContactCtaView";
import { ExtractMetaProperty } from "../../extract-meta";

export const ContactMeta = ({ page }) => {
  const meta = ExtractMetaProperty(get(page, "data"), 'contact');
  return (
    <Helmet>
      {meta}
    </Helmet>
  );
};

export const contactSlices = props => {
  const propertyData = get(props, "property.data");
  const property = get(props, "property");
  const ctaSlice = (
    get(props, "preview.data.body") ||
    propertyData.body ||
    []
  ).find(pd => pd.slice_type === "property_contact_cta");

  return [
    <React.Fragment>
      <PropertyContactMapView.Controller
        slice={props.property}
        property={props.property}
      />
      <PropertyContactCtaView.Controller slice={ctaSlice} page={property} />
    </React.Fragment>
  ];
};
