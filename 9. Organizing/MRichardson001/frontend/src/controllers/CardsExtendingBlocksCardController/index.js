import React, { useState } from "react";
import get from "lodash/get";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import CardsExtendingBlocksCardView from "../../components/CardsExtendingBlocksCardView";

import styles from "./styles.module.css";
import './index.css';

export default props => {
  const title = get(props, "title");
  const blurb = get(props, "blurb");
  const teaserText = get(props, "teaserText");
  const { content } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.contentWrapper}>
      <CardsExtendingBlocksCardView>
        <wrapper className={styles.wrapper}>
          <title>{title}</title>
          <blurb>{blurb}</blurb>

          <teaser-wrapper className={styles.teaserWrapper}>
            <teaser-text className={styles.teaserText}>
              {teaserText}
            </teaser-text>
            {isOpen ? (
              <content className={isOpen ? styles.contentOpen : ""}>
                {content}
              </content>
            ) : null}
          </teaser-wrapper>
        </wrapper>
      </CardsExtendingBlocksCardView>

      <div
        className={`${styles.arrowWrapper} ${isOpen ? styles.arrowOpen : ""}`}
        tabIndex={0}
        onKeyDown={e => e.keyCode === 13 && setIsOpen(!isOpen)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon className={styles.arrow} icon={faChevronDown} />
      </div>
    </div>
  );
};
