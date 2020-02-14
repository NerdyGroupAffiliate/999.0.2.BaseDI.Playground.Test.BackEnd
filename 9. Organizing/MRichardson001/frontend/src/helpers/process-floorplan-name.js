import React from "react";
import get from "lodash/get";

import styles from "./floorplanname.module.css";

const ProcessFloorplanName = (name, cms) => {
  if (!name || !name.length) {
    return <span>{name}</span>;
  }

  const description = get(cms, "data.description", null);
  if (!!description) {
    return (
      <span className={styles.container}>
        <div>{name}</div>
        <div className={styles.description}>{description}</div>
      </span>
    );
  }
  return <span>{name}</span>;
};

export default ProcessFloorplanName;
