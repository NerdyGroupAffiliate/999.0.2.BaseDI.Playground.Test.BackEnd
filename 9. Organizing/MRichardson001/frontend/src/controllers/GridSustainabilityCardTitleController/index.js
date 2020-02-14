import React from 'react';
import GridSustainabilityCardTitleView from "../../components/GridSustainabilityCardTitleView";

function GridSustainabilityCardTitle(props) {
    if (!props || !props.card || !props.card.card_title) {
        return null;
    }
    return <GridSustainabilityCardTitleView>
        <title>{props.card.card_title}</title>
    </GridSustainabilityCardTitleView>
}

export default GridSustainabilityCardTitle;
