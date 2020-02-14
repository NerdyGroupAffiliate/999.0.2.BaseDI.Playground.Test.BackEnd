import React, { useState, useEffect } from "react";
import get from "lodash/get";
import { graphql, compose } from "react-apollo";
import { authorQuery } from "../../graphql/queries/authorQuery";
import { relatedBlogPostsQuery } from "../../graphql/queries";
import { blogPostQuery } from "../../graphql/queries";
import BlogPostHeaderView from "../../components/BlogPostHeaderView";
import BlogPostContentView from "../../components/BlogPostContentView";
import BlogPostShareRowView from "../../components/BlogPostShareRowView";
import BlogPostRelatedPostsView from "../../components/BlogPostRelatedPostsView";
import Spinner from "../Spinner";
import "./index.css";

function BlogPostFull(props) {
  const page = get(props, "blogPostQuery.blogPost", props.page || {});
  const relatedPosts = get(props, "relatedBlogPostsQuery.relatedBlogPosts", []);
  return (
    <React.Fragment>
      <BlogPostHeaderView.Controller {...props} />
      {page && page.data && !!page.data.body ? (
        <BlogPostContentView.Controller {...props} page={page} />
      ) : (
        <Spinner />
      )}
      <BlogPostShareRowView.Controller {...props} />
      {relatedPosts && relatedPosts.length ? (
        <BlogPostRelatedPostsView.Controller
          {...props}
          relatedPosts={relatedPosts}
        />
      ) : null}
    </React.Fragment>
  );
}

export default compose(
  graphql(authorQuery, {
    name: "authorQuery",
    skip: props =>
      !props.page ||
      !props.page.data ||
      !props.page.data.author ||
      !props.page.data.author.id,
    options: props => ({
      variables: {
        id: props.page.data.author.id
      }
    })
  }),
  graphql(relatedBlogPostsQuery, {
    name: "relatedBlogPostsQuery",
    options: props => ({
      variables: {
        blogPostId: props.page.id
      }
    })
  }),
  graphql(blogPostQuery, {
    name: "blogPostQuery",
    options: props => ({
      variables: {
        blogPostId: props.page.id
      }
    })
  })
)(BlogPostFull);
