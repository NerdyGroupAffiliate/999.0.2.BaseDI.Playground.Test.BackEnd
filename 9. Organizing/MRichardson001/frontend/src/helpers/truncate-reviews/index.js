import React from "react";
import styles from "./styles.module.css";

const TruncateReview = (review, limit, link) => {
  if (!review) {
    return null;
  }
  if (review.length > limit) {
    return (
      <React.Fragment>
        {review.substring(0, limit - 3) + '...'}
        {
          link
            ? <a
                href={link}
                rel="noopener noreferrer"
                target="_blank"
                className={styles.seeMore}
              >
                  Read More
              </a>
            : null
        }
      </React.Fragment>

      )
  } else {
    return review;
  }
}

export default TruncateReview;
