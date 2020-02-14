import React, { useState, useEffect, useContext } from "react";
import get from "lodash/get";
import debounce from "lodash/debounce";
import Spinner from "../Spinner";
import { withRouter } from "react-router";
import {
  blogPostsFeaturedAndPopularQuery,
  blogPostsPaginatedQuery
} from "../../graphql/queries";
import BlogListPageHeaderView from "../../components/BlogListPageHeaderView";
import BlogListPageBodyView from "../../components/BlogListPageBodyView";
import { getPreviewData } from "../../helpers/page-preview/get-preview";
import { graphql, compose } from "react-apollo";
import { canUseDOM } from "../../helpers/utils";
import RoutesContext from "../../helpers/routes-context";

function Blog(props) {
  const { addToRoutes } = useContext(RoutesContext);
  useEffect(() => {
    const posts = get(props, "blogPostsQuery.blogPostsPaginated", []);
    if (posts && posts.length) {
      addToRoutes(
        posts.map(post => ({
          key: post.blogPost.id,
          data: post.blogPost,
          type: "blog_post",
          id: post.blogPost.id,
          uid: post.blogPost.uid
        }))
      );
    }
  }, [props.blogPostsQuery.blogPostsPaginated]);

  const preview = getPreviewData(props);
  let search = "";

  const page = preview || get(props, "page");

  if (!props.blogPosts) {
    return null;
  }

  const [filters, setFilters] = useState({
    search: get(props, "location.state.search", ""),
    tag: get(props, "location.state.tag", ""),
    region: get(props, "location.state.region", ""),
    currentPage: get(props, "location.state.currentPage", 0)
  });

  useEffect(() => {
    props.blogPostsQuery.refetch({
      searchVar: filters.search || "",
      tag: filters.tag || "",
      region: filters.region || "",
      currentPage: 1
    });
    setFilters({ ...filters, currentPage: 0 });
  }, [filters.search, filters.tag, filters.region]);

  const handlePageChange = e => {
    if (!!canUseDOM) {
      window.scrollTo(0, 0);
    }
    updateFilter({ currentPage: e.selected });
    props.blogPostsQuery.refetch({ currentPage: e.selected + 1 });
  };

  const featuedAndPopularPosts = get(
    props,
    "data.blogPostsFeaturedAndPopular",
    []
  );

  const featuedPosts = featuedAndPopularPosts.filter(item => {
    return item.blogPost.type === "featured";
  });

  const popularPosts = featuedAndPopularPosts.filter(item => {
    return item.blogPost.type === "popular";
  });

  const featuredPost = featuedPosts.map(item => {
    return item.blogPost;
  })[0];

  const updateFilter = newFilters => {
    setFilters({ ...filters, ...newFilters });
    if (filters !== newFilters) {
      props.history.replace({
        pathname: props.match.url,
        state: {
          ...get(props, "history.location.state", {}),
          ...newFilters
        }
      });
    }
  };

  if (props && props.data && props.data.loading) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      <BlogListPageHeaderView.Controller
        {...props}
        featuredPost={featuredPost}
        popularPosts={popularPosts}
        filters={filters}
        setFilters={debounce(updateFilter, 250)}
        regions={props.regions}
        tags={props.tags}
      />
      <BlogListPageBodyView.Controller
        filters={filters}
        popularPosts={popularPosts}
        page={page}
        setFilters={updateFilter}
        tags={props.tags}
        handlePageChange={handlePageChange}
        currentPage={filters.currentPage}
        data={props.blogPostsQuery}
      />
    </React.Fragment>
  );
}

export default withRouter(
  compose(
    graphql(blogPostsFeaturedAndPopularQuery, {
      skip: props =>
        !props.page ||
        !props.page.data ||
        !props.page.data.featured_blog_post ||
        !props.page.data.most_popular_posts,
      options: props => ({
        variables: {
          featuedPost: props.page.data.featured_blog_post.uid,
          popularPosts: props.page.data.most_popular_posts.map(item =>
            get(item, "popular_blog_post.uid", "")
          )
        }
      })
    }),
    graphql(blogPostsPaginatedQuery, {
      name: "blogPostsQuery",
      options: function(props) {
        return {
          variables: {
            currentPage: get(props, "location.state.currentPage", 0),
            searchVar: get(props, "location.state.search", ""),
            tag: get(props, "location.state.tag", ""),
            region: get(props, "location.state.region", "")
          }
        };
      }
    })
  )(Blog)
);
