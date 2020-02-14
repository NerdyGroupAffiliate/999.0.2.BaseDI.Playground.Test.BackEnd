import React from "react";
import { withRouter } from "react-router";
import styles from './styles.module.css';

export default withRouter(props => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        AMLI is an equal opportunity employer, made up of people from many diverse backgrounds and lifestyles.
      </p>
      <p className={styles.text}>
        If you have a disability and would like to request an accommodation in order to apply for a position, you may contact us by
          <strong>
            <a
              className={styles.link}
              href="/contact?topic=careers"
              onClick={e => {
                if (e && e.preventDefault) {
                  e.preventDefault();
                }
                props.history.push({
                  pathname: "/contact",
                  search: "?topic=careers"
                });
              }}
            >
               clicking here
            </a>
          </strong>.
      </p>
    </div>
  )
});
