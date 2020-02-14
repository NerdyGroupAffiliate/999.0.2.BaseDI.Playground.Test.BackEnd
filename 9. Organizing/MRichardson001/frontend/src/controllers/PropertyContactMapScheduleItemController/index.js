import React from "react";
import PropertyContactMapScheduleItemView from "../../components/PropertyContactMapScheduleItemView";

import styles from './styles.module.css';
import './index.css';
import { personaColorStyle } from "../../helpers/property/persona";

function renderNote(note) {
    return !!note ? <p className={styles.note}>{note}</p> : null;
}

function PropertyContactMapScheduleItem(props) {
    if (!props.item || (!props.item.days && !props.item.hours && !props.item.note)) {
        return null;
    }

    const { days, hours, note } = props.item;

    return (
        <PropertyContactMapScheduleItemView>
            <wrapper className={styles.container}>
                { days && <title className={styles.days} style={personaColorStyle(props.property, 'primary')}>{days}</title> }
                { hours && <value className={styles.hours}>{hours}{renderNote(note)}</value> }
            </wrapper>
        </PropertyContactMapScheduleItemView>
    );
}

export default PropertyContactMapScheduleItem;
