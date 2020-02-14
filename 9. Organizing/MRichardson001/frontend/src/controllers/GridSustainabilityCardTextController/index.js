import React from "react";
import GridSustainabilityCardTextView from "../../components/GridSustainabilityCardTextView";
import TextWritter from "../../helpers/text-writter";
import styles from "./styles.module.css";
import "./index.css";

function GridSustainabilityCardText(props) {
  if (
    !props ||
    !props.card ||
    !props.card.card_title ||
    !props.card.card_blurb1
  ) {
    return null;
  }
  return (
    <GridSustainabilityCardTextView>
      <wrapper tabIndex={0}>
        <title className={styles.title}>{props.card.card_title}</title>
        <text className={styles.text}>
          {(props.card.card_blurb1 || []).map(item =>
            TextWritter(item, null, { color: "white" })
          )}
        </text>
      </wrapper>
    </GridSustainabilityCardTextView>
  );
}

export default GridSustainabilityCardText;
