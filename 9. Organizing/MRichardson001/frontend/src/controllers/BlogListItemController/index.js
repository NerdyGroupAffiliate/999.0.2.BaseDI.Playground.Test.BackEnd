import React, { useEffect, useState } from "react";
import get from "lodash/get";
import { withApollo } from "react-apollo";
import { withRouter } from "react-router-dom";
import { handlePrismicLink } from "../../helpers/link-helper";

import BlogListItemView from "../../components/BlogListItemView";
import { authorQuery } from "../../graphql/queries/authorQuery";
import styles from "./styles.module.css";
import "./index.css";

function BlogListItem(props) {
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    const id = props.author_id;
    if (!author && !!id) {
      props.client
        .query({
          query: authorQuery,
          variables: { id }
        })
        .then(auth => setAuthor(get(auth, "data.author")));
    }
  });

  const handleLinkClick = () => {
    if (props.link && typeof props.link === "string") {
      props.history.push(`${props.link}`);
    } else {
      handlePrismicLink(props, props.link).onClick();
    }
  };

  const linkProps = {
    onClick: handleLinkClick,
    tabIndex: 0,
    onKeyDown: e => e.keyCode === 13 && handleLinkClick()
  };

  return (
    <BlogListItemView>
      <date className={styles.date}>{props.date}</date>
      {author && author.data && <author>{` | By ${author.data.name}`}</author>}
      {props.author && <author>{` | ${props.author}`}</author>}
      <link
        className={styles.readMore}
        {...linkProps}
      />
      <summary
        {...linkProps}
        className={styles.clickableTitle}
      >
        {props.summary}
      </summary>
    </BlogListItemView>
  );
}

export default withRouter(withApollo(BlogListItem));
