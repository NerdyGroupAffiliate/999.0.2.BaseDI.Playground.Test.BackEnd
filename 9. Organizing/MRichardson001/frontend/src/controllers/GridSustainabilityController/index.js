import React from 'react';
import get from 'lodash/get';
import GridSustainabilityView from "../../components/GridSustainabilityView";
import GridSustainabilityCardImageView from "../../components/GridSustainabilityCardImageView";
import GridSustainabilityCardTextView from "../../components/GridSustainabilityCardTextView";
import GridSustainabilityCardStatsView from "../../components/GridSustainabilityCardStatsView";

import styles from './styles.module.css';
import './index.css';

function RenderCard(card, index) {
    if (!card || !card.card_type) {
        return null;
    }

    switch (card.card_type) {
        case 'Text': {
            return <GridSustainabilityCardTextView.Controller key={`card_${index}`} card={card} />
        }
        case 'Image': {
            return <GridSustainabilityCardImageView.Controller key={`card_${index}`} card={card} />
        }
        default:
            return null;
    }
}

function GridSustainability(props) {
    const title = get(props, 'slice.primary.title');
    const subtitle = get(props, 'slice.primary.subtitle');
    const items = get(props, 'slice.items', []);
    const titleOne = get(props, 'slice.primary.stat_one_title');
    const titleTwo = get(props, 'slice.primary.stat_two_title');
    const titleThree = get(props, 'slice.primary.stat_three_title');
    const valueOne = get(props, 'slice.primary.stat_one_value');
    const valueTwo = get(props, 'slice.primary.stat_two_value');
    const valueThree = get(props, 'slice.primary.stat_three_value');
    const stats = {
        titleOne,
        titleTwo,
        titleThree,
        valueOne,
        valueTwo,
        valueThree,
    };

    return <GridSustainabilityView>
        {title ? <title>{title}</title> : null}
        {subtitle ? <subtitle>{subtitle}</subtitle> : null}
        <grid className={styles.grid}>
            {items.map((item, index) => RenderCard(item, index))}
            <GridSustainabilityCardStatsView.Controller stats={stats} />
        </grid>
    </GridSustainabilityView>
}

export default GridSustainability;
