import React, { useState } from "react";
import get from "lodash/get";
import ListNewsView from "../../components/ListNewsView";
import { blogPostsQuery } from "../../graphql/queries";
import { graphql } from "react-apollo";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import ArrowLeft from "../../assets/icons/arrow-chevron.svg";
import BlogListItemView from "../../components/BlogListItemView";
import styles from "./styles.module.css";
const moment = require("moment");

const pageSize = 5;

const newsDateSort = (a, b) => {
  let aDate = get(a, "blogPost.published_date") || get(a, "date");
  let bDate = get(b, "blogPost.published_date") || get(b, "date");
  if (!aDate || !bDate) {
    return 1
  } else {

    aDate = aDate ? moment(aDate) : aDate;
    bDate = bDate ? moment(bDate) : bDate;
    return aDate.isAfter(bDate) ? -1 : 1;
  }
};

const renderListItems = posts => {
  if (posts && posts.length > 0) {
    return posts.map((item, index) => {
      if (item.blogPost) {
        const summary =
          item.blogPost.title > 100
            ? item.blogPost.title.substring(0, 100) + `...`
            : item.blogPost.title;
        const published_date = moment(item.blogPost.published_date).format(
          "MMM DD, YYYY"
        );
        const author_id = item.blogPost.author ? item.blogPost.author.id : "";
        return (
          <BlogListItemView.Controller
            key={`list-news-${index}`}
            author_id={author_id}
            date={published_date}
            summary={summary}
            link={`/blog/${item.blogPost.uid}`}
          />
        );
      } else if (item.date) {
        const summary =
          item.title.length > 100
            ? `${item.title.substring(0, 100)}...`
            : item.title;
        const published_date = moment(item.date).format("MMM DD, YYYY");
        const author = item.publication;
        return (
          <BlogListItemView.Controller
            key={`list-news-${index}`}
            author={author}
            date={published_date}
            summary={summary}
            link={item.news_link}
          />
        );
      }
      return null;
    });
  }
  return null;
};

const ListNews = props => {
  const [page, setPage] = useState(0);
  const title = get(props, "slice.primary.title");
  const { blogPosts } = props.data;
  const image = BackgroundImageHandler(
    get(props, "slice.primary.background_image")
  );
  const pageUid = get(props, "page.uid");
  let posts;
  if(pageUid && pageUid === "sustainability"){
    posts = [];
  } else {
    posts = (blogPosts || []).filter(post => !!post && !!post.blogPost);
  }

  const externalPosts = get(props, "slice.items", []).filter(
    item =>
      !!item &&
      !!item.title &&
      !!item.date &&
      !!item.publication &&
      !!item.news_link
  );

  const news = [...posts, ...externalPosts].sort(newsDateSort);
  const numPages = Math.max(Math.ceil(news.length / pageSize), 1);

  if (
    posts &&
    posts.length <= 0 &&
    (externalPosts && externalPosts.length <= 0)
  ) {
    return null;
  }

  const primaryColor = get(props, "property.data.primary_color");
  const primaryColorBg = {style: {backgroundImage: 'none', backgroundColor: primaryColor}};
  const bgStyle = !!primaryColor ? primaryColorBg : image;

  return (
    <ListNewsView {...props}>
      <background-image {...bgStyle}>
        <list-container
          className={styles.container}
          topelement={() => (
            <span className={styles.pages}>
              {Array.apply(null, { length: numPages })
                .map(Number.call, Number)
                .map(index => (
                  <button
                    key={`number_indicators_${index}`}
                    onClick={() => setPage(index)}
                    className={[
                      styles.number,
                      index === page ? styles.selected : ""
                    ].join(" ")}
                  >
                    {index + 1}
                  </button>
                ))}
            </span>
          )}
        >
          <left-arrow
            className={styles.arrow}
            tabIndex={0}
            onKeyDown={e => e.keyCode === 13 && page > 0 && setPage(page - 1)}
            onClick={() => page > 0 && setPage(page - 1)}
          >
            <img
              src={ArrowLeft}
              alt="arrow left"
              className={styles.arrowImage}
            />
          </left-arrow>
          <right-arrow
            className={styles.arrow}
            tabIndex={0}
            onKeyDown={e =>
              e.keyCode === 13 && page < numPages - 1 && setPage(page + 1)
            }
            onClick={() => page < numPages - 1 && setPage(page + 1)}
          >
            <img
              src={ArrowLeft}
              alt="arrow right"
              className={styles.arrowImageReverse}
            />
          </right-arrow>
          <title>{title}</title>
          <blogListItemViewList0>
            {renderListItems(
              news.slice(pageSize * page, pageSize * page + pageSize)
            )}
          </blogListItemViewList0>
        </list-container>
      </background-image>
    </ListNewsView>
  );
};

export default graphql(blogPostsQuery, {
  options: props => ({
    variables: {
      propertyPageId: get(props, "property.id", "")
    }
  })
})(ListNews);
