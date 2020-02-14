import RegisterQuoteCredMutation from "../../graphql/mutations/registerQuoteCreds";
import { getItem } from "../cookies";
import { canUseDOM } from "../utils";

export const realPageTemplate = id =>
  !!id
    ? `https://smartofficeapi.amli.com/lease-online/Login.aspx?siteid=${id}`
    : null;

export const entrataTemplate = domain =>
  !!domain
    ? `https://${domain}.prospectportal.com/Apartments/module/application_authentication`
    : null;

export const composeApplyLink = property => {
  if (!property) {
    return null;
  }
  return property.lease_service === "RealPage"
    ? // ? realPageTemplate(property.realPagePropertyId)
      "/create-profile"
    : entrataTemplate(property.entrata_domain);
};

export const applyWithQuote = async (apolloClient, quoteId, dataObject = false) => {
  if (!apolloClient || !quoteId) {
    throw new Error("Missing parameters client / quoteid");
  }
  let url = "https://smartofficeapi.amli.com?";
  try {
    let userRet = getItem("user");
    const data = await apolloClient.mutate({
      mutation: RegisterQuoteCredMutation,
      variables: {
        quoteId
      },
      context: {
        headers: {
          authorization: userRet.token
        }
      }
    });
    const guid = data.data.registerQuoteCreds;
    url = `${url}${guid ? `guid=${guid}` : `gc=${quoteId}`}`;
  } catch (e) {
    url = url = `${url}gc=${quoteId}`;
  }

  if (dataObject) {
    return {
      href: url,
      target: "_blank",
      onClick: e => {
        if (e) {
          e.preventDefault();
        }
        if (canUseDOM) {
          window.open(url);
        }
      }
    }
  } else {
    if (canUseDOM) {
        window.open(url);
    }
    return url
  }
};
