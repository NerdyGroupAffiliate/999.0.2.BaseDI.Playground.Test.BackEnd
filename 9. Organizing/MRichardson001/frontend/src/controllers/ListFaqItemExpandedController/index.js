import React from "react";

import ListFaqItemExpandedView from "../../components/ListFaqItemExpandedView";
import styles from "./styles.module.css";
import { withRouter } from "react-router-dom";

const ListFaqItemExpanded = props => {
  if (!props.faq) {
    return null;
  }
  const { itemIndex } = props;
  const { question, answer, contact_form_preselect_topic } = props.faq;
  const preselectOption = contact_form_preselect_topic.toLowerCase();
  return (
    <ListFaqItemExpandedView>
      <item-wrapper onClick={() => props.onSelect(itemIndex)} className={styles.itemWrapper}>
        <question className={styles.question}>{question}</question>
        <answer className={styles.answer}>{answer}</answer>
        <icon
          className={styles.button}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.keyCode === 13 && props.onSelect()}
          title="Close Faq"
        />
        <contact
          href={`/contact?topic=${preselectOption}`}
          onClick={e => {
            if (e && e.preventDefault) {
              e.preventDefault();
            }
            props.history.push({
              pathname: "/contact",
              search: `?topic=${preselectOption}`
            });
          }}
        />
      </item-wrapper>
    </ListFaqItemExpandedView>
  );
};
export default withRouter(ListFaqItemExpanded);
