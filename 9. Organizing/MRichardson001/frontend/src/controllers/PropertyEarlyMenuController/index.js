import React from "react";
import { withRouter } from "react-router";
import PropertyEarlyMenuView from "../../components/PropertyEarlyMenuView";
import PropertyPhaseOneTabView from "../../components/PropertyPhaseOneTabView";
import './index.css';

const menu = [
  {
    label: "Overview",
    value: "/"
  },
  {
    label: "Pricing / Availability",
    value: "/floorplans",
    disabled: true
  },
  {
    label: "Amenities",
    value: "/amenities"
  },
  {
    label: "Location",
    value: "notready",
    disabled: true
  },
  {
    label: "Short-term Furnished",
    value: "notready",
    disabled: true
  }
];
function PropertyEarlyMenu(props) {
  const selected = props.location.pathname.replace(`/${props.property.uid}`, "") || "/";
  return (
    <PropertyEarlyMenuView {...props}>
      <propertyPhaseOneTabViewList0>
        {menu.map((item, index) => (
          <PropertyPhaseOneTabView.Controller
            {...props}
            disabled={item.disabled}
            selected={selected === item.value}
            key={`menuItem_${item.value}_${index}`}
            title={item.label}
            value={item.value}
            subtitle={item.subtitle}
          />
        ))}
      </propertyPhaseOneTabViewList0>
    </PropertyEarlyMenuView>
  );
}

export default withRouter(PropertyEarlyMenu);
