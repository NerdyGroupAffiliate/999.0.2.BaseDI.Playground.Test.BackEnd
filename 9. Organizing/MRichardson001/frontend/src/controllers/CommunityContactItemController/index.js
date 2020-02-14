import React from "react";
import get from "lodash/get";
import CommunityContactItemView from "../../components/CommunityContactItemView";
import MultiLineString from "../../helpers/mutli-line-string";
import "./index.css";

export default props => {
  const title = get(props, "item.title");
  const address = MultiLineString(get(props, "item.address"));
  const phone = get(props, "item.phone");
  const fax = get(props, "item.fax");

  return (
    <CommunityContactItemView>
      { title ? <title>{title}</title> : null }
      { address ? <address>{address}</address> : null}
      { phone ? <phone-tag/> : null}
      { phone ? <phone className="contact-page-phone-link"><a href={`tel:${phone}`}>{phone}</a></phone> : null}
      { fax ? <fax-tag>F</fax-tag> : null }
      { fax ? <fax>{fax}</fax> : null }
    </CommunityContactItemView>
  )
}
