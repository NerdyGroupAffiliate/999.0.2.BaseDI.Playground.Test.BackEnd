import React from "react";
import { get, orderBy, uniqBy } from "lodash";
import { compose, graphql } from "react-apollo";
import { withRouter } from "react-router";
import moment from "moment";
import Spinner from "../Spinner";
import { floorplansQuery } from "../../graphql/queries/floorplansQuery";
import FloorplanCardListView from "../../components/FloorplanCardListView";
import FloorplanCardView from "../../components/FloorplanCardView";
import styles from "./styles.module.css";
import "./index.css";

class FloorplanCardList extends React.Component {
  render() {
    const props = this.props;
    const { floorplans, loading } = props.data;
    const groupedByBeds = orderBy(
      floorplans,
      ["bedroomMin", "displayOrder"],
      ["asc", "asc"]
    );
    const sortedPerBed = uniqBy(groupedByBeds, "bedroomMin");
    const uid = get(props, "page.uid");
    const specials = get(props, "page.data.specials", []).filter(special =>
      moment(special.expiration_date).isAfter(moment())
    );
    const primaryColor = get(props, "page.data.primary_color");

    const spaceForTwoCardsOrLess =
      specials.length < 1 && sortedPerBed.length <= 2;

    return (
      <FloorplanCardListView {...props}>
        <card-list-wrapper
          className={spaceForTwoCardsOrLess ? styles.twoOrLessCards : null}
        >
          <floorplanCardViewList0>
            {loading ? <Spinner propertyColor={primaryColor} /> : null}
            {!loading && sortedPerBed
              ? sortedPerBed.map((floorplan, index) => (
                  <FloorplanCardView.Controller
                    key={index}
                    data={floorplan}
                    property={props.page}
                  />
                ))
              : null}
          </floorplanCardViewList0>
          {specials.length > 0 ? (
            <special-card className={styles.specialCardWrapper}>
              <special-card-container className={styles.card}>
                <special-title />
                <special-text>{specials[0].special_text}</special-text>
                <special-exp-date>
                  Exp:{" "}
                  {moment(specials[0].expiration_date).format("MM/DD/YYYY")}
                </special-exp-date>
                <special-button-text className={styles.buttonText}>
                  <a
                    style={{ color: primaryColor }}
                    href={`${uid}/floorplans`}
                    onClick={e => {
                      if (e) {
                        e.preventDefault();
                      }
                      this.props.history.push(`${uid}/floorplans`);
                    }}
                  >
                    {" "}
                    View all Floor Plans
                  </a>
                  <svg
                    className={styles.buttonArrow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="8px"
                    height="13px"
                    viewBox="0 0 13.13 22.02"
                  >
                    <g fill={primaryColor}>
                      <polygon
                        points="0 19.82 2.19 22.02 13.13 11.01 2.19 0 0 2.2 8.68 11.01 0 19.82"
                        className="af-class-arrow--chevron"
                      />
                    </g>
                  </svg>
                </special-button-text>
              </special-card-container>
            </special-card>
          ) : null}
        </card-list-wrapper>
      </FloorplanCardListView>
    );
  }
}

export default compose(
  graphql(floorplansQuery, {
    options: props => ({
      variables: {
        amliPropertyId: props.page.data.amli_id,
        propertyId: props.page.id
      }
    })
  })
  // graphql(specialQuery, {
  //   options: props => {
  //     const specials = get(props, "page.data.specials");
  //     return {
  //       variables: {
  //         specialId:
  //           specials && specials.length ? get(specials[0], "special.id") : ""
  //       }
  //     };
  //   }
  // })
)(withRouter(FloorplanCardList));
