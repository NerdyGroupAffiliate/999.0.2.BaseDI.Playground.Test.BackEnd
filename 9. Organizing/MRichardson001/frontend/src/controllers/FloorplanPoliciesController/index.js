import React, { useState } from "react";
import get from "lodash/get";
import FloorplanPoliciesView from "../../components/FloorplanPoliciesView";
import FloorplanPoliciesTabView from "../../components/FloorplanPoliciesTabView";
import FloorplanPoliciesItemView from "../../components/FloorplanPoliciesItemView";
import { personaColorStyle } from "../../helpers/property/persona";
import styles from "./styles.module.css";
import "./index.css";

const filterEmpty = item => !!item.title && !!item.price;

function FloorplanPolicies(props) {
  const [tab, setTab] = useState(0);
  const upfront_fees = get(props, "property.data.upfront_fees", []).filter(
    filterEmpty
  );
  const pets = get(props, "property.data.pets1", []).filter(filterEmpty);
  const parking = get(props, "property.data.parking", []).filter(filterEmpty);
  const storage = get(props, "property.data.storage", []).filter(filterEmpty);
  const other = get(props, "property.data.other", []).filter(filterEmpty);
  const tabsdata = [upfront_fees, pets, parking, storage, other];
  const tabs = ["Upfront Costs", "Pets", "Parking", "Storage", "Other"];
  const property = get(props, 'property');

  const hasData = tabsdata.filter(items => !!items && items.length > 0).length > 0;
  if (!hasData) {
    return null;
  }
  return (
    <FloorplanPoliciesView>
      <header style={personaColorStyle(property, 'secondary')}>Understanding Fees</header>
      <title style={personaColorStyle(property, 'primary')}/>
      <image-wrapper className={styles.backgroundImage} />
      <floorplanPoliciesTabViewList0>
        {tabs.map((item, index) =>
          !!tabsdata[index] && tabsdata[index].length > 0 ? (
            <FloorplanPoliciesTabView.Controller
              property={property}
              title={item}
              key={`${tabs[tab]}_tab_${index}`}
              active={tab === tabs.indexOf(item)}
              onClick={() => setTab(tabs.indexOf(item))}
            />
          ) : null
        )}
      </floorplanPoliciesTabViewList0>
      <floorplanPoliciesItemViewList4>
        {tabsdata[tab].map((item, index) => (
          <FloorplanPoliciesItemView.Controller
            property={props.property}
            key={`${tabs[tab]}_item_${index}`}
            item={item}
          />
        ))}
        <div className={styles.disclaimer}>
          * Prices may vary by unit.  Quote process will reflect accurate fee prices for specific selections.
        </div>
      </floorplanPoliciesItemViewList4>
    </FloorplanPoliciesView>
  );
}

export default FloorplanPolicies;
