import React from "react";
import SliderPropertyListItemView from "../../components/SliderPropertyListItemView";

function SliderPropertyListItem(props) {
  if (!props.label || !props.value) {
    return null;
  }
  return (
    <SliderPropertyListItemView>
      <label>{props.label}</label>
      <value>{props.value}</value>
    </SliderPropertyListItemView>
  );
}

export default SliderPropertyListItem;
