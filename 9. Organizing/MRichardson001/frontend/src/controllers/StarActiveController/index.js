import React from 'react';
import StarActiveView from "../../components/StarActiveView";

import styles from './styles.module.css';

export default function StarActive(props) {
    return <StarActiveView>
        <wrapper className={styles.wrapper} />
    </StarActiveView>
}
