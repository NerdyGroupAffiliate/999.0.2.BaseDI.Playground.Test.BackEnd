import React from "react";
import get from "lodash/get";
import { graphql } from "react-apollo";
import SliderReviewsView from "../../components/SliderReviewsView";
import { propertyReviewsQuery } from "../../graphql/queries/propertyReviewsQuery";
import CapitalizeFirsts from "../../helpers/capitalize-first-letter";
import TruncateReview from "../../helpers/truncate-reviews";
import styles from "./styles.module.css";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import { getPersonaColor } from "../../helpers/property/persona";
import "./index.css";
import Helmet from "react-helmet-async";

class SliderReviews extends React.Component {
  state = {
    activeReview: 0,
    truncateAmount: 400
  };

  componentDidMount() {
    this.setTruncateAmount();
    window.addEventListener("resize", this.setTruncateAmount);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setTruncateAmount);
  }

  getRatingImage = (reviews, index) => {
    return reviews &&
      reviews.length > 0 &&
      index <= reviews[this.state.activeReview].rating - 1
      ? "/images/icon-star--active3x.png"
      : "/images/icon-star--inactive3x.png";
  };
  setTruncateAmount = () =>
    this.setState({
      truncateAmount: window.innerWidth * 0.4
    });

  nextReview = limit =>
    this.setState({
      activeReview: (this.state.activeReview + 1) % limit
    });

  prevReview = limit =>
    this.setState({
      activeReview: (this.state.activeReview + limit - 1) % limit
    });

  render() {
    const reviewCount = get(this.props, "slice.primary.number_of_reviews") || 5;
    const reviews = get(this.props.data, "propertyReviews.edges", []);
    const subtitle = get(this.props.slice, "primary.sub_title");
    const title = get(this.props.slice, "primary.title");
    const image = BackgroundImageHandler(
      get(this.props, "slice.primary.background_image")
    );
    const property = get(this.props, "page");
    const secondaryColor = getPersonaColor(property, "secondary");
    const primaryColor = getPersonaColor(property, "primary");

    if (!reviews || !reviews.length) {
      return null;
    }
    return (
      <React.Fragment>
        <Helmet>
          { reviews.map(review =>
              <script type="application/ld+json">
                {`
                  {
                    "@context": "http://schema.org/",
                    "@type": "Review",
                    "itemReviewed": {
                      "@type": "Thing",
                      "name": "${CapitalizeFirsts(this.props.page.uid)}"
                    },
                    "reviewBody": "${review.review.replace(/"/gi, "'")}",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "${review.rating}"
                    },
                    "author": {
                      "@type": "Person",
                      "name": "AMLI Resident"
                    }
                  }
                `}
              </script>
              )}
        </Helmet>
        <SliderReviewsView>
          <subtitle style={{ color: secondaryColor }}>{subtitle}</subtitle>
          <title className={styles.title} style={{ color: primaryColor }}>
            {title
              ? title
              : `What people say about ${CapitalizeFirsts(this.props.page.uid)}`}
          </title>
          <slider-container
            className={styles.sliderContainer}
            {...image}
            topelement={() => (
              <p className={styles.dotsContainer}>
                {Array.from({ length: Math.min(reviews.length, reviewCount) }, _ => ({})).map(
                  (rev, index) => {
                    return (
                      <div
                        key={`dot_${index}`}
                        tabIndex={0}
                        onKeyDown={e =>
                          e.keyCode === 13 &&
                          this.setState({ activeReview: index })
                        }
                        onClick={() => this.setState({ activeReview: index })}
                        className={[
                          styles.dot,
                          this.state.activeReview === index
                            ? styles.selectedDot
                            : ""
                        ].join(" ")}
                        style={{
                          transform: `scale(${1.6 -
                            Math.min(
                              0.8,
                              Math.abs(index - this.state.activeReview) * 0.4
                            )})`
                        }}
                      />
                    );
                  }
                )}
              </p>
            )}
          >
            <star-wrapper>
              {reviews
                ? Array.from({ length: 5 }, (_, index) => {
                    return (
                      <img
                        key={index}
                        src={this.getRatingImage(reviews, index)}
                        alt="rating star"
                        className="af-class-star-icon"
                      />
                    );
                  })
                : null}
            </star-wrapper>
            <review-text>
              {reviews && reviews.length
                ? TruncateReview(
                    reviews[this.state.activeReview].review,
                    this.state.truncateAmount,
                    reviews[this.state.activeReview].share_url
                  )
                : null}
            </review-text>
            <left-arrow
              tabIndex={0}
              onKeyDown={e => e.keyCode === 13 && this.prevReview(Math.min(reviews.length, reviewCount))}
              onClick={() => this.prevReview(Math.min(reviews.length, reviewCount))}
              className={styles.leftArrow}
            >
              <svg
                className={[styles.arrow, styles.left].join(" ")}
                viewBox="0 0 8 13"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    transform="translate(-9.000000, -6.000000)"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                  >
                    <g>
                      <polygon points="9 7.5 10.25 6.25 16.5 12.5 10.25 18.75 9 17.5 13.9609375 12.5" />
                    </g>
                  </g>
                </g>
              </svg>
            </left-arrow>
            <right-arrow
              tabIndex={0}
              onKeyDown={e => e.keyCode === 13 && this.nextReview(Math.min(reviews.length, reviewCount))}
              onClick={() => this.nextReview(Math.min(reviews.length, reviewCount))}
              className={styles.rightArrow}
            >
              <svg
                className={styles.arrow}
                viewBox="0 0 8 13"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    transform="translate(-9.000000, -6.000000)"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                  >
                    <g>
                      <polygon points="9 7.5 10.25 6.25 16.5 12.5 10.25 18.75 9 17.5 13.9609375 12.5" />
                    </g>
                  </g>
                </g>
              </svg>
            </right-arrow>
          </slider-container>
        </SliderReviewsView>
      </React.Fragment>
    );
  }
}

export default graphql(propertyReviewsQuery, {
  options: props => ({
    variables: {
      id: String(props.page.data.amli_id),
      limit: props.data.primary.number_of_reviews + 5
    }
  })
})(SliderReviews);
