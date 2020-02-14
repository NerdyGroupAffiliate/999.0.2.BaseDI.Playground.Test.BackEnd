import React from "react";
import FloorplanPoliciesItemView from "../../components/FloorplanPoliciesItemView";
import { personaColorStyle } from "../../helpers/property/persona";

function FloorplanPoliciesItem(props) {
    const { item } = props;

    return (
        <FloorplanPoliciesItemView>
            {
                item.title ?
                    <title style={personaColorStyle(props.property)}>{item.title}</title>
                : null
            }
            {
                item.price ?
                    <price style={personaColorStyle(props.property)}>
                        {item.price}<span style={{color: "#707070"}}>*</span>
                    </price>
                : null
            }
            {
                item.description ?
                    <body>{item.description}</body>
                : null
            }
        </FloorplanPoliciesItemView>
    );
}

export default FloorplanPoliciesItem;
