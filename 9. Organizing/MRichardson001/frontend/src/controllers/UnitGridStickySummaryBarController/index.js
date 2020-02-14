import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import { withApollo } from "react-apollo";
import { toast } from "react-toastify";
import UnitGridStickySummaryBarView from "../../components/UnitGridStickySummaryBarView";
import { formatDollar } from "../../helpers/utils";
import "./index.css";
import styles from "./styles.module.css";
import { personaBackgroundColorStyle, getPersonaColor } from "../../helpers/property/persona";
import {
  // getCatOption,
  // getDogOption,
  // getSelectedOptionsBreakdown,
  getBaseRent,
  getSecurityDeposit
} from "../../helpers/components-data-handlers/lease-options-handler";
import { quotesQuery } from "../../graphql/queries/quotesQuery";
import { getLeanOption } from "../../helpers/get-quote-option";
import { getItem } from "../../helpers/cookies";
import { EventSaveQuote } from "../../helpers/plugins/guestAnalytics";
import CreateQuoteMutation from "../../graphql/mutations/createQuoteMutation";
import { applyWithQuote } from "../../helpers/property/apply";

const publicIp = require("public-ip");
const moment = require("moment");

function UnitGridStickySummaryBar(props) {
  const breakdown = props.breakdown || {};
  const { isSaving } = props.uiOptions;

  if (!props.unitQuery || props.unitQuery.loading || !props.unitQuery.unit) {
    return null;
  }

  const adjustedTerm = props.selectedTerm;
  const baseRent = getBaseRent(
    props.selected,
    adjustedTerm,
    props.unitQuery.unit
  );

  const leaseOptions = get(props, "unitQuery.unit.leaseOptions", []);
  const securityDeposit = getSecurityDeposit(leaseOptions);

  const monthlyCost = breakdown.TotalMonthlyPayment || 0;

  const clickApply = e => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    if (e && e.preventDefault) {
      e.preventDefault();
    }

    clickSaveQuote(e, true);
  };

  const clickSaveQuote = async (e, shouldApply = false) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (isSaving) {
      return null;
    }

    const user = getItem("user");
    const ip = await publicIp.v4();
    const property = get(props, "property.data");
    if (!property || property.lease_service !== "RealPage") {
      //@TODO: redirect to entrata
      toast.error("Not available for entrata properties");
      return true;
    }

    const propertyId = get(props, "property.data.amli_id");
    const unitId = get(props, "unitQuery.unit.unit.cms.data.amli_id");
    const propertyDocId = get(props, "property.id");
    const floorplanAmliId = get(
      props,
      "floorplanQuery.floorplan.cms.data.amli_id"
    );

    const quote = {
      floorplanAmliId,
      propertyDocId,
      property,
      unitId,
      propertyId,
      startDate: props.selected.clone().toDate(),
      endDate: moment(baseRent.EndDate, "ddd MM/DD/YYYY").toDate(),
      leaseTerm: adjustedTerm,
      leaseDay: props.selected.diff(props.filters.startDate, "days"),
      depositRequired: !!securityDeposit,
      deposit: !!securityDeposit ? securityDeposit.Amount : 0,
      quotedRent: baseRent.TotalCost,
      totalRent: monthlyCost,
      trackingInfo: `${ip}|RCOS`,
      leaseOptions: [
        props.options.dogs,
        props.options.cats,
        props.options.applicant,
        ...props.options.storage,
        ...props.options.parking,
        ...props.options.other
      ]
        .map(getLeanOption)
        .filter(it => !!it)
    };

    const params = {
      redirectTo: "/account",
      quote,
      hideQuoteId: true,
      shouldApply
    };

    if (!user && props.history) {
      props.history.push("/create-profile", params);
    } else {
      props.setUiOptions({ ...props.uiOptions, isSaving: true });
      props.client
        .mutate({
          mutation: CreateQuoteMutation,
          variables: {
            quoteCreateInput: {
              ...quote
            }
          }
        })
        .then(async res => {
          if (
            res &&
            res.data &&
            res.data.createQuote &&
            res.data.createQuote.realPageQuoteId &&
            res.data.createQuote.realPageQuoteId != -1
          ) {
            await props.client.query({
              query: quotesQuery,
              fetchPolicy: "network-only"
            });
            if (shouldApply) {
              const applyUrl = await applyWithQuote(
                props.client,
                res.data.createQuote.realPageQuoteId
              );
              props.setApplyData({
                url: applyUrl,
                quoteId: res.data.createQuote.quoteId
              });
              props.setUiOptions({
                ...props.uiOptions,
                isSaving: true,
                buttonsActive: true,
                text: `Your quote has been created. You may now choose to view your account or proceed to our application portal.`
              })
            } else {
              props.history.push(`/quote/${res.data.createQuote.quoteId}`);
            }
            const { sqft, unitType } = props.unitQuery.unit.unit;
            const { firstName, lastName, email, userId } = user;
            const { quoteId } = res.data.createQuote;
            EventSaveQuote(
              propertyId,
              monthlyCost,
              sqft,
              unitType.bedrooms,
              floorplanAmliId,
              unitId,
              firstName,
              lastName,
              email,
              userId,
              quoteId
            );
          } else {
            console.log("fail result", JSON.stringify(quote));
            toast.error("Failed to save quote. Please try again.");
            props.setUiOptions({
              ...props.uiOptions,
              isSaving: false,
              buttonsActive: false,
            });
          }
        })
        .catch(e => {
          toast.error("Failed to save quote, please try again.");
          console.log(quote, e);
          props.setUiOptions({
            ...props.uiOptions,
            isSaving: false,
            buttonsActive: false,
          });
        })
        .finally();
    }
  };

  return (
    <UnitGridStickySummaryBarView>
      <lease>
        <length-label />
        <length-value className={styles.term}>
          {adjustedTerm} Months
        </length-value>
      </lease>
      <move-in>
        <move-in-label />
        <move-in-value>
          {(props.selected || moment()).format("MM/DD/YYYY")}
        </move-in-value>
      </move-in>
      <monthly-rent>
        <monthly-rent-label />
        <monthly-rent-value>{`$${formatDollar(
          monthlyCost,
          0
        )}`}</monthly-rent-value>
      </monthly-rent>
      <save-quote
          style={{
            backgroundColor: getPersonaColor(props.property, 'secondary')
          }}
          href="/save-quote" onClick={clickSaveQuote}
        />
      <apply
        style={personaBackgroundColorStyle(props.property)}
        href="javascript:void(0)" // eslint-disable-line
        onClick={clickApply}
      />
    </UnitGridStickySummaryBarView>
  );
}

export default withApollo(withRouter(UnitGridStickySummaryBar));
