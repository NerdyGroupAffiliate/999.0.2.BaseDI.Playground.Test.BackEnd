import React from "react";
import get from "lodash/get";
import modal_close from "../../assets/images/modal-close.png";
import ListPerksView from "../../components/ListPerksView";
import styles from "./styles.module.css";
import { personaColorStyle } from "../../helpers/property/persona";
import downArrow from "../../assets/images/down-arrow.png";
import "./index.css";

export default class ListPerks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amenityText: "",
      selectedIndex: -1,
      visibility: "hidden",
      perkTop: "25%",
      showAll: false
    };

    this.hidePerkDetails = this.hidePerkDetails.bind(this);
    this.showPerkDetails = this.showPerkDetails.bind(this);
    this.parentNode = React.createRef();
    this.currentNode = [];
  }

  hidePerkDetails() {
    this.setState({
      selectedIndex: -1,
      visibility: "hidden",
      perkTop: "25%"
    });
  }

  showPerkDetails(perk, selectedIndex) {
    if (selectedIndex === this.state.selectedIndex) {
      return null;
    }
    if (
      this.parentNode &&
      this.parentNode.current &&
      this.currentNode[selectedIndex]
    ) {
      const parentNodeBounds = this.parentNode.current.getBoundingClientRect();
      const currentNodeBounds = this.currentNode[
        selectedIndex
      ].getBoundingClientRect();
      const top = currentNodeBounds.top - parentNodeBounds.top;
      this.setState({
        selectedIndex,
        amenityText: perk.perk_text,
        visibility: "visible",
        perkTop: top
      });
    } else {
      this.setState({
        selectedIndex,
        amenityText: perk.perk_text,
        visibility: "visible"
      });
    }
  }

  render() {
    const property = get(this.props, "property");
    const title = get(this.props, "slice.primary.title");
    const text_blurb = get(this.props, "slice.primary.text_blurb");
    const image = get(this.props, "slice.primary.image1.url");
    const perks = get(this.props, "slice.items", []);
    const {
      amenityText,
      selectedIndex,
      visibility,
      perkTop,
      showAll
    } = this.state;
    return (
      <ListPerksView>
        <banner
          style={
            image
              ? {
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 0.22)), url('${image}')`
                }
              : null
          }
        >
          <title>{title}</title>
          <text-blurb>{text_blurb}</text-blurb>
        </banner>
        <perk-list-top ref={this.parentNode}>
          {perks
            ? perks.map((perk, index) =>
                perk && perk.perk_image && perk.perk_image.url ? (
                  <div
                    ref={currentNode => (this.currentNode[index] = currentNode)}
                    tabIndex={0}
                    onKeyDown={e =>
                      e.stopPropagation() ||
                      (e.keyCode === 13 && this.showPerkDetails(perk, index))
                    }
                    onClick={() => this.showPerkDetails(perk, index)}
                    className={[
                      styles.perkWrapper,
                      "af-class-div-block-168",
                      index > 4 ? "af-class-last-child" : "",
                      index > 5 && !showAll
                        ? styles.mobileHide
                        : index > 5 && showAll
                        ? styles.viewAllPerks
                        : ""
                    ].join(" ")}
                    key={`perk_${index}`}
                    style={
                      perks.length < 9
                        ? { width: "15%", margin: "3px" }
                        : { width: "19%", margin: "3px" }
                    }
                  >
                    <img
                      src={perk.perk_image.url}
                      alt={perk.perk_image.url || "Perk Logo"}
                      className={`${styles.logoOverlay} ${
                        index === selectedIndex
                          ? styles.logoOverlaySelected
                          : ""
                      }`}
                    />
                    {selectedIndex === index && (
                      <div
                        className={styles.perkModal}
                        style={{ visibility: visibility, top: perkTop }}
                      >
                        <button
                          className={styles.closeModal}
                          onKeyDown={e =>
                            (e.stopPropagation() ||
                            e.keyCode === 13) && this.hidePerkDetails()
                          }
                          onClick={this.hidePerkDetails}
                        >
                          <img
                            tabIndex={1}
                            className={styles.closeImage}
                            src={modal_close}
                            style={{ width: "25px", height: "25px" }}
                            alt="close modal"
                          />
                        </button>
                        <div className={styles.amenityText}>{amenityText}</div>
                      </div>
                    )}
                  </div>
                ) : null
              )
            : null}
          <div
            className={styles.seeMore}
            style={personaColorStyle(property, "primary")}
            onClick={() => this.setState({ showAll: !showAll })}
          >
            <p>{showAll ? "Hide Perks" : "View All Perks"}</p>
            <img
              src={downArrow}
              alt="hide/show arrow"
              className={`${styles.arrow} ${showAll ? styles.arrowUp : ""}`}
            />
          </div>
        </perk-list-top>
      </ListPerksView>
    );
  }
}
