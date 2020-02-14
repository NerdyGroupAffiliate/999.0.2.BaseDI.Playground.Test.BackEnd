import React, { useState, useEffect } from "react";
import get from "lodash/get";
import truncate from "lodash/truncate";
import { withRouter } from "react-router";
import { withApollo } from "react-apollo";
import NewsCardView from "../../components/NewsCardView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import styles from "./styles.module.css";
import "./index.css";
import { authorQuery } from "../../graphql/queries/authorQuery";

const moment = require("moment");

function NewsCard(props) {
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    const id = get(props, "data.author.id");
    if (!author && !!id) {
      props.client
        .query({
          query: authorQuery,
          variables: { id }
        })
        .then(auth => setAuthor(get(auth, "data.author")));
    }
  });

  const bgimage = BackgroundImageHandler(
    get(props, "data.post_main_image")
  );
  if (!props || !props.data) {
    return null;
  }
  let summary = get(props, "data.summary");
  if (summary && summary.length > 0) {
    summary = summary[0].text;
  }
  const truncatedSummary = truncate(summary,{
    length: 180,
    separator: ' '
  });

  const avatar = BackgroundImageHandler(get(author, "data.image"));
  let date = get(props, "data.published_date");
  if (date) {
    date = moment(date);
  }

  return (
    <NewsCardView>
      <card-wrapper className={styles.cardWrapper}>
        <image {...bgimage} />
        <title>{props.data.title}</title>
        <body>
          {truncatedSummary}
          <a
            href={`/blog/${props.data.uid}`}
            onKeyDown={e =>
              e.keyCode === 13 && props.history.push(`/blog/${props.data.uid}`)
            }
            onClick={() => props.history.push(`/blog/${props.data.uid}`)}
            tabIndex={0}
            className={styles.readMore}
          >
            Read More
            <svg
              className={styles.buttonArrow}
              xmlns="http://www.w3.org/2000/svg"
              width="8px"
              height="13px"
              viewBox="0 0 13.13 22.02"
            >
              <g fill={ "#333"}>
                <polygon
                  points="0 19.82 2.19 22.02 13.13 11.01 2.19 0 0 2.2 8.68 11.01 0 19.82"
                  className="af-class-arrow--chevron"
                />
              </g>
            </svg>
          </a>
        </body>
        <avatar {...avatar} className={avatar ? "" : "visibility_hidden"} />
        {author && <author>{get(author, "data.name")}</author>}
        {date && <date>{date.format("M/D/YY")}</date>}
      </card-wrapper>
    </NewsCardView>
  );
}

export default withRouter(withApollo(NewsCard));
