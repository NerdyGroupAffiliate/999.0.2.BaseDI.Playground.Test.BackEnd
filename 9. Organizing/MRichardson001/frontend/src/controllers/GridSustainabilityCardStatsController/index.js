import React from 'react';
import GridSustainabilityCardStatsView from '../../components/GridSustainabilityCardStatsView';
import './index.css'

function GridSustainabilityCardStats(props) {
    if (!props || !props.stats) {
        return null
    }
    return <GridSustainabilityCardStatsView>
        <stat-one-value>{props.stats.valueOne}</stat-one-value>
        <stat-one-label>{props.stats.titleOne}</stat-one-label>
        <stat-two-value>{props.stats.valueTwo}</stat-two-value>
        <stat-two-label>{props.stats.titleTwo}</stat-two-label>
        <stat-three-value>{props.stats.valueThree}</stat-three-value>
        <stat-three-label>{props.stats.titleThree}</stat-three-label>
    </GridSustainabilityCardStatsView>
}

export default GridSustainabilityCardStats;
