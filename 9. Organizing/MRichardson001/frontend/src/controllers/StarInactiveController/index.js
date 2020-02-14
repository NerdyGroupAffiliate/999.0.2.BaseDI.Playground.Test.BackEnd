import React from 'react';
import StarInactiveView from "../../components/StarInactiveView";

import styles from './styles.module.css';

export default function StarInactive(props) {
    return <StarInactiveView>
        <wrapper className={styles.wrapper} />
    </StarInactiveView>
}
