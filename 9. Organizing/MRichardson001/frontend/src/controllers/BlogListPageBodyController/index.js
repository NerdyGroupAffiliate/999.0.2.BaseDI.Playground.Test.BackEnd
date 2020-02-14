import React from "react";
import get from "lodash/get";
import uniq from "lodash/uniq";
import ReactPaginate from "react-paginate";
import { withRouter } from "react-router";

import Spinner from "../Spinner";
import BlogListPageBodyView from "../../components/BlogListPageBodyView";
import BlogPostItemView from "../../components/BlogPostItemView";
import PopularBlogPostView from "../../components/PopularBlogPostView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import styles from "./styles.module.css";
import "./index.css";

function BlogListPageBody(props) {
  const popularPosts = get(props, "popularPosts") || [];
  const twitterLink = get(props, "page.data.twitter_link.url");
  const twitterImage = BackgroundImageHandler(
    get(props, "page.data.twitter_image")
  );
  const twitterText = get(props, "page.data.twitter_text");
  const pinterestLink = get(props, "page.data.pinterest_link.url");
  const pinterestImage = BackgroundImageHandler(
    get(props, "page.data.pinterest_image")
  );
  const pinterestText = get(props, "page.data.pinterest_text");
  const instagramLink = get(props, "page.data.instagram_link.url");
  const instagramImage = BackgroundImageHandler(
    get(props, "page.data.instagram_image")
  );
  const instagramText = get(props, "page.data.instagram_text");

  const allPosts = get(props, "data.blogPostsPaginated", []);

  const blogPostsFormatted = allPosts.map(it => it.blogPost);

  if (props.data.loading) {
    return <Spinner />;
  }
  const totalPages = get(
    props,
    "data.blogPostsPaginated[0].blogPost.totalPages"
  );

  return (
    <BlogListPageBodyView>
      <blogPostItemViewList0 className={styles.cardsContainer}>
        {blogPostsFormatted.length > 0 ? (
          blogPostsFormatted.map((item, index) => (
            <BlogPostItemView.Controller
              key={index}
              blogPost={item}
              tags={props.tags}
            />
          ))
        ) : (
          <div className={styles.emptyState}>
            We couldn't find any blog posts that match your search. Try
            searching for something else.
          </div>
        )}
        <span className={styles.paginationWrapper}>
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={totalPages > 5 ? 7 : totalPages || 0}
            marginPagesDisplayed={0}
            nextLabel={<img src="/images/right-arrow.svg" alt="" />}
            previousLabel={
              <img
                src="/images/right-arrow.svg"
                alt=""
                className={styles.prevLabel}
              />
            }
            initialPage={props.currentPage}
            containerClassName={styles.paginationContainer}
            activeClassName={styles.paginatedActive}
            activeLinkClassName={styles.paginatedActiveLink}
            pageClassName={styles.paginationItem}
            breakClassName={styles.paginationBreak}
            previousClassName={styles.paginationPrev}
            nextClassName={styles.paginationNext}
            disabledClassName={styles.paginatedDisabled}
            onPageChange={props.handlePageChange}
            disableInitialCallback={true}
          />
        </span>
      </blogPostItemViewList0>
      {popularPosts.length ? <popular-title /> : null}
      <popularBlogPostViewList6>
        {uniq(popularPosts.slice(0, 3)).map((post, index) => (
          <PopularBlogPostView.Controller
            key={index}
            post={post}
            tags={props.tags}
          />
        ))}
      </popularBlogPostViewList6>
      {twitterLink || twitterText || twitterImage.style ? (
        <twitter-card
          onClick={() => (twitterLink ? window.open(twitterLink) : null)}
        >
          {twitterImage.style ? <twitter-image {...twitterImage} /> : null}
          {twitterText ? (
            <twitter-content>{twitterText}</twitter-content>
          ) : null}
        </twitter-card>
      ) : null}
      {pinterestLink || pinterestText || pinterestImage.style ? (
        <pinterest-card
          onClick={() => (pinterestLink ? window.open(pinterestLink) : null)}
        >
          {pinterestImage.style ? (
            <pinterest-image {...pinterestImage} />
          ) : null}
          {pinterestText ? (
            <pinterest-text>{pinterestText}</pinterest-text>
          ) : null}
        </pinterest-card>
      ) : null}
      {instagramLink || instagramText || instagramImage.style ? (
        <instagram-card
          onClick={() => (instagramLink ? window.open(instagramLink) : null)}
        >
          {instagramImage.style ? (
            <instagram-image {...instagramImage} />
          ) : null}
          {instagramText ? (
            <instagram-text>{instagramText}</instagram-text>
          ) : null}
        </instagram-card>
      ) : null}
    </BlogListPageBodyView>
  );
}

export default withRouter(BlogListPageBody);
