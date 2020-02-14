import React from "react";
import PropertyUnitCostTableView from "../../components/PropertyUnitCostTableView";
import PropertyUnitCostTableItemView from "../../components/PropertyUnitCostTableItemView";
import { personaColorStyle } from "../../helpers/property/persona";

function PropertyUnitCostTable(props) {

    return (
        <PropertyUnitCostTableView>
            <wrapper>
                <title style={personaColorStyle(props.property)}>{props.title}</title>
                <total-label>{props.label}</total-label>
                <total-value>{props.value}</total-value>
                <propertyUnitCostTableItemViewList0>
                    {props.items &&
                    props.items.map((item, index) => (
                        <PropertyUnitCostTableItemView.Controller
                            key={`item_${index}`}
                            title={item.title}
                            value={item.price}
                        />
                    ))}
                </propertyUnitCostTableItemViewList0>
            </wrapper>
        </PropertyUnitCostTableView>
    );
}

export default PropertyUnitCostTable;
