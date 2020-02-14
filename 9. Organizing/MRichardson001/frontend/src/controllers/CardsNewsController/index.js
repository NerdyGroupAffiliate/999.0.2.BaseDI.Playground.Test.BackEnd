import React from "react";
import get from "lodash/get";
import { graphql } from "react-apollo";
import { regionRelatedBlogPostsQuery } from "../../graphql/queries/regionRelatedBlogPostsQuery";
import CardsNewsView from "../../components/CardsNewsView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import NewsCardView from "../../components/NewsCardView";

import styles from './styles.module.css'
import './index.css'

function CardsNews(props){
  const image = get(props, "data.primary.background_image");
  const title = get(props, "data.primary.title");
  const subtitle = get(props, "data.primary.subtitle");
  const imageProps = BackgroundImageHandler(image);
  const posts = get(props, "data.regionRelatedBlogPosts", []);


  if (!posts || !posts.length) {
    return null;
  }
  return (
    <CardsNewsView>
      <wrapper
        className={styles.wrapper}
        {...imageProps}
        topelement={() => <div className={styles.overlay} />}
      >
        <label>{title}</label>
        <sub-title>{subtitle}</sub-title>
        <newsCardViewList0>
          {posts.slice(0,2).map((post, key) => (
            <NewsCardView.Controller key={`news-card-${key}`} data={post.blogPost} />
          ))}
        </newsCardViewList0>
      </wrapper>
    </CardsNewsView>
  );
}

export default graphql(regionRelatedBlogPostsQuery, {
  skip: props =>
    !props.page,
  options: props => ({
    variables: {
      region: props.page.id
    }
  })
})(CardsNews);
