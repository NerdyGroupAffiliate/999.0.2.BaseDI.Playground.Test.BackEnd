import React from "react";
import PropertyUnitCostTableItemView from "../../components/PropertyUnitCostTableItemView";
import { formatDollar } from "../../helpers/utils";
import styles from './styles.module.css';

function PropertyUnitCostTableItem(props) {
  return (
    <PropertyUnitCostTableItemView>
      <title className={styles.title}>{props.title}</title>
      <value>${formatDollar(props.value, 0)}</value>
    </PropertyUnitCostTableItemView>
  );
}

export default PropertyUnitCostTableItem;
