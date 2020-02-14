import React from "react";

import ListFaqItemView from "../../components/ListFaqItemView";

import styles from "./styles.module.css";

export default props => {

  const { itemIndex } = props;
  const { question, answer } = props.faq;

  return (
    <ListFaqItemView>
      <item-wrapper onClick={() => props.onSelect(itemIndex)} className={styles.itemWrapper}>
        <question className={styles.question}>{question}</question>
        <answer>{answer}</answer>
        <icon
          role="button"
          tabIndex={0}
          onKeyDown={e => e.keyCode === 13 && props.onSelect(itemIndex)}
          title="Expand Faq"
          className={styles.button}
        />
      </item-wrapper>
    </ListFaqItemView>
  );
};
