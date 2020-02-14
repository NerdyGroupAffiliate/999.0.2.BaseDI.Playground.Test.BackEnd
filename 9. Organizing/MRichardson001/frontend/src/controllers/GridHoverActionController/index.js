import React from "react";
import get from "lodash/get";
import GridHoverActionView from "../../components/GridHoverActionView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import "./index.css";

export default props => {
  const { slice } = props;
  if (!slice) {
    return null;
  }
  const items = get(slice, "items");

  return (
    <GridHoverActionView>
      <wrapper>
        <action-container>
          {items.map((item, index) => (
            <card-container
              key={`gird_hover_action_container_${index}`}
              tabIndex={0}
            >
              <inner-wrapper {...BackgroundImageHandler(item.image)}>
                <tagline>
                  {item.tagline}
                  <img src="/images/right-arrow.svg" alt="" className="grid-hover-action-arrow"/>
                </tagline>
                <overlay>
                  <div className="af-class-hover-grid-action-overlay">
                    <div className="af-class-hover-grid-action-box-text">
                      {get(item, "text_blurb[0].text")}
                    </div>
                    <div
                      className="af-class-hover-grid-action-box-link"
                    >
                      {" "}
                      {item.tagline}{" "}
                    </div>
                  </div>
                </overlay>
              </inner-wrapper>
            </card-container>
          ))}
        </action-container>
      </wrapper>
    </GridHoverActionView>
  );
};
