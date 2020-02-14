import React from "react";
import { compose, graphql } from "react-apollo";
import get from "lodash/get";
import moment from "moment";
import CreateProfileSummaryView from "../../components/CreateProfileSummaryView";
import { unitQuery } from "../../graphql/queries";
import { floorplanQuery } from "../../graphql/queries/floorplanQuery";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import { formatDollar } from "../../helpers/utils";
import MultiLineString from "../../helpers/mutli-line-string";
import GetPropertyFullRoute from "../../helpers/get-full-property-route";
import styles from "./styles.module.css";
import usePhone from "../../helpers/hooks/usePhone";
import placeholderImage from "../../assets/images/floorplan-placeholder@2x.jpg";
import "./index.css";

function CreateProfileSummary(props) {
  const errors =
    get(props, "floorplan.error") ||
    get(props, "unit.error") ||
    get(props, "property.error");
  const loading =
    get(props, "floorplan.loading") ||
    get(props, "unit.loading") ||
    get(props, "property.loading");
  const floorplan = get(props, "floorplan.floorplan");
  const unit = get(props, "unit.unit.unit");
  const quote = get(props, "location.state.quote");
  const property = get(props, "property.property");
  const [dniPhone, hrefPhone] = usePhone(
    get(property, "data.phone"),
    get(property, "data.entrataPropertyId"),
    props
  );
  const communityImage = BackgroundImageHandler(
    get(props, "property.property.data.primary_property_image")
  );
  if (!!errors || loading || (!quote || !unit || !property)) {
    return <span />;
  }
  const floorplanName = get(floorplan, "cms.data.name").split(" - AMLI")[0];
  const floorplanImage = get(floorplan, "cms.data.main_image.url");
  const floorplanAltText = get(floorplan, "cms.data.main_image.alt");

  let appdata = {};
  if (props.data && props.data.pages) {
    const regions = props.data.pages.filter( page => page.type === "region");
    const subregions = props.data.pages.filter( page => page.type === "sub-region");
    const properties = props.data.pages.filter( page => page.type === "property");
    appdata = {
      regions,
      subregions,
      properties
    }
  }

  return (
    <CreateProfileSummaryView>
      <wrapper>
        <title />
        <floorplan-label />
        <floorplan-value>{floorplanName}</floorplan-value>
        <unit-label />
        <unit-value>{unit.cms.data.unit_number}</unit-value>
        <image
          src={floorplanImage || placeholderImage}
          alt={floorplanAltText || "Images Coming Soon"}
        />
        <beds className={styles.beds}>
          {unit.unitType.bedrooms === 0
            ? "Studio"
            : `${unit.unitType.bedrooms} Bedrooms`}
        </beds>
        <baths>{unit.unitType.bathrooms} Bath</baths>
        <sqft>{unit.sqft ? unit.sqft.toLocaleString() : ''} sqft</sqft>
        <floor>Floor {unit.floor.toLocaleString()}</floor>
        <lease-label />
        <lease-value>{quote.leaseTerm} Months</lease-value>
        <movein-label />
        <movein-value>
          {moment(quote.startDate).format("MM/DD/YY")}
        </movein-value>
        <monthly-label />
        <monthly-value>${formatDollar(quote.totalRent, 0)}</monthly-value>
        <expiration-title />
        <expiration-1 />
        <expiration-2>
          If there is any way we may further assist you or if you have any
          questions, please contact {property.data.name}.
        </expiration-2>
        <community>
          <community-image
            {...communityImage}
            className={styles.propertyImage}
          />
          <community-name
            className={styles.propertyName}
            onClick={() => props.history.push(`${GetPropertyFullRoute(property, appdata)}/${property.uid}`)}
          >
            {property.data.name}
          </community-name>
          <community-address
            href="javascript:void(0)" // eslint-disable-line
            className={styles.address}
          >
            {MultiLineString(property.data.address)}
          </community-address>
          {dniPhone ? (
            <community-phone className={styles.phone} href={hrefPhone}>
              {dniPhone}
            </community-phone>
          ) : null}
        </community>
      </wrapper>
    </CreateProfileSummaryView>
  );
}

export default compose(
  graphql(floorplanQuery, {
    name: "floorplan",
    skip: props =>
      !props.location ||
      !props.location.state ||
      !props.location.state.quote ||
      !props.location.state.quote.floorplanAmliId,
    options: props => ({
      variables: {
        amliId: props.location.state.quote.floorplanAmliId,
        id: props.location.state.quote.floorplanAmliId
      }
    })
  }),
  graphql(unitQuery, {
    name: "unit",
    skip: props =>
      !props.location ||
      !props.location.state ||
      !props.location.state.quote ||
      !props.location.state.quote.unitId,
    options: props => ({
      variables: {
        id: props.location.state.quote.unitId,
        startDate: props.location.state.quote.startDate
      }
    })
  })
)(CreateProfileSummary);
