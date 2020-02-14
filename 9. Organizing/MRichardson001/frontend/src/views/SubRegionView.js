/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/SubRegionView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import ContentIntroBillboardView from '../components/ContentIntroBillboardView'
import ContentCollagePointOfInterestView from '../components/ContentCollagePointOfInterestView'
import CardsPointsOfInterestView from '../components/CardsPointsOfInterestView'
import CardWithFactView from '../components/CardWithFactView'
import RelatedAreasBandView from '../components/RelatedAreasBandView'
import FooterView from '../components/FooterView'


let Controller

class SubRegionView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SubRegionController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SubRegionView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SubRegionView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/SubRegionMeta")
      Metadata = Metadata.default || Metadata
    } catch (e) {
      // pass
      Metadata = null;
    }
    try {
      Metadata = require("../meta/defaultMeta")
      Metadata = Metadata.default || Metadata
    } catch (e) {
      // pass
      Metadata = null;
    }



    return (
      <React.Fragment>
        {Metadata ? <Metadata {...this.props} /> : null}
        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div>
            <NavigationHeaderView.Controller {...this.props} />
            <div className="af-class-map-container af-class-sub-region">
              <div className="af-class-property-modal-wrapper">
                <div className="af-class-div-block-122">
                  <div className="af-class-text-block-27">AMLI at Seven Bridges</div>
                  <div className="af-class-div-block-121">
                    <div className="af-class-property-modal-text">1525 Lake Cook Rd<br />Deerfield, IL 60015</div>
                    <div className="af-class-property-modal-text">713-234-8591</div>
                  </div>
                </div>
                <div className="af-class-div-block-128"><img src="/images/chicago-property-highlight2x.jpg" srcSet="images/chicago-property-highlight2x-p-500.jpeg 500w, images/chicago-property-highlight2x.jpg 618w" sizes="100vw" alt="" /><img src="/images/chicago-property-highlight2x.jpg" srcSet="images/chicago-property-highlight2x-p-500.jpeg 500w, images/chicago-property-highlight2x.jpg 618w" sizes="100vw" alt="" /><img src="/images/chicago-property-highlight2x.jpg" srcSet="images/chicago-property-highlight2x-p-500.jpeg 500w, images/chicago-property-highlight2x.jpg 618w" sizes="100vw" alt="" /></div>
                <div className="af-class-div-block-124">
                  <div className="af-class-text-block-29">Available now from the $1,490's</div>
                  <div className="af-class-text-block-30">Studio - 2 Bedroom</div>
                </div>
                <div className="af-class-div-block-123">
                  <div className="af-class-property-modal-feat-title">highlights</div>
                  <ul className="af-class-property-card-modal-feat-list w-list-unstyled">
                    <li className="af-class-property-card-modal-feat-list-item">Kitchen / lounge with coffee bar</li>
                    <li className="af-class-property-card-modal-feat-list-item">10ft ceilings with exposed concrete and spiral duct work</li>
                    <li className="af-class-property-card-modal-feat-list-item">Elegant quartz countertops in kitchen and baths</li>
                  </ul>
                </div>
                <div className="af-class-div-block-126">
                  <div className="af-class-div-block-125"><img src="/images/icon-Dog.svg" alt="" className="af-class-property-card-icon" /></div>
                  <div className="af-class-div-block-125"><img src="/images/icon-Cat.svg" alt="" className="af-class-property-card-icon" /></div>
                  <div className="af-class-div-block-125"><img src="/images/icon-LEED.png" alt="" className="af-class-property-card-icon" /></div>
                  <div className="af-class-div-block-125"><img src="/images/icon-Smoking.png" alt="" className="af-class-property-card-icon" /></div>
                </div>
                <div className="af-class-div-block-127">
                  <div className="af-class-text-block-28">View Property</div><img src="/images/icon-arrow--right--blue.svg" alt="" className="af-class-image-17" /></div>
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n@media (max-width: 1024px) {\n  .af-view .af-class-property-modal-wrapper {\n    display: none;\n  }\n}\n.af-view .af-class-property-card-modal-feat-list-item::after {\n  position: absolute;\n  content: '';\n  display: block;\n  left: -15px;\n  top: 50%;\n  background-color: #ddd;\n  border-radius: 50%;\n  width: 5px;\n  height: 5px;\n  transform: translateY(-50%);\n}\n" }} />
                </div>
              </div><a href="/#" className="af-class-link-block-6 w-inline-block"><img src="/images/icon-property3x.png" alt="" className="af-class-image-52" /></a>
              <div className="af-class-div-block-434">
                <div className="af-class-property-card af-class-sub-region">
                  <div className="af-class-property-modal-mobile-slide-wrap"><img src="/images/slider-bubbles.svg" alt="" className="af-class-image-2-copy" /><img src="/images/icon-arrow--slide-left3x.png" alt="" className="af-class-image-3-copy" /><img src="/images/icon-arrow--slide-right3x.png" alt="" className="af-class-image-3-copy-2 af-class-slide-right" /></div>
                  <div className="af-class-div-block-435" />
                </div>
                <div className="af-class-property-modal-mobile">
                  <div className="w-embed">
                    <style dangerouslySetInnerHTML={{__html: "\n  .af-view .af-class-property-modal-mobile {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  }\n  .af-view .af-class-property-modal-mobile-placard-brick.af-class-prop-details {\n  flex: 1;\n  }\n" }} />
                  </div>
                  <div className="af-class-property-modal-mobile-placard-brick af-class-prop-name">
                    <div className="af-class-property-phase--property-name af-class-sub-region-mobile-modal">AMLI <strong className="af-class-bold-text af-class-sub-region">on <br />Eldridge Parkway</strong><br /></div>
                    <div className="af-class-star-rating-wrapper">
                      <div className="af-class-icon--star--active af-class-sub-region w-embed">
                        <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-icon--star--active {\n  fill:#ecd925;\n  fill-rule: evenodd;\n}\n" }} />
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.02 18.09">
                          <g id="iPad">
                            <g id="Group-2">
                              <polygon id="Star" points="9.51 15 3.63 18.09 4.75 11.54 0 6.91 6.57 5.96 9.51 0 12.45 5.96 19.02 6.91 14.27 11.54 15.39 18.09 9.51 15" className="af-class-icon--star--active">
                              </polygon></g>
                          </g>
                        </svg></div>
                      <div className="af-class-icon--star--active af-class-sub-region w-embed">
                        <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-icon--star--active {\n  fill:#ecd925;\n  fill-rule: evenodd;\n}\n" }} />
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.02 18.09">
                          <g id="iPad">
                            <g id="Group-2">
                              <polygon id="Star" points="9.51 15 3.63 18.09 4.75 11.54 0 6.91 6.57 5.96 9.51 0 12.45 5.96 19.02 6.91 14.27 11.54 15.39 18.09 9.51 15" className="af-class-icon--star--active">
                              </polygon></g>
                          </g>
                        </svg></div>
                      <div className="af-class-icon--star--active af-class-sub-region w-embed">
                        <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-icon--star--active {\n  fill:#ecd925;\n  fill-rule: evenodd;\n}\n" }} />
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.02 18.09">
                          <g id="iPad">
                            <g id="Group-2">
                              <polygon id="Star" points="9.51 15 3.63 18.09 4.75 11.54 0 6.91 6.57 5.96 9.51 0 12.45 5.96 19.02 6.91 14.27 11.54 15.39 18.09 9.51 15" className="af-class-icon--star--active">
                              </polygon></g>
                          </g>
                        </svg></div>
                      <div className="af-class-icon--star--active af-class-sub-region w-embed">
                        <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-icon--star--active {\n  fill:#ecd925;\n  fill-rule: evenodd;\n}\n" }} />
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.02 18.09">
                          <g id="iPad">
                            <g id="Group-2">
                              <polygon id="Star" points="9.51 15 3.63 18.09 4.75 11.54 0 6.91 6.57 5.96 9.51 0 12.45 5.96 19.02 6.91 14.27 11.54 15.39 18.09 9.51 15" className="af-class-icon--star--active">
                              </polygon></g>
                          </g>
                        </svg></div>
                      <div className="af-class-icon--star--inactive af-class-sub-region w-embed">
                        <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-icon--star--inactive {\n  fill:#b2b2b2;\n  fill-rule: evenodd;\n}\n" }} />
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.02 18.09">
                          <g id="iPad">
                            <g id="Group-2">
                              <polygon id="Star" points="9.51 15 3.63 18.09 4.75 11.54 0 6.91 6.57 5.96 9.51 0 12.45 5.96 19.02 6.91 14.27 11.54 15.39 18.09 9.51 15" className="af-class-icon--star--inactive">
                              </polygon></g>
                          </g>
                        </svg></div>
                      <div className="af-class-text-block-50 af-class-sub-region">(12)</div>
                    </div>
                  </div>
                  <div className="af-class-property-modal-mobile-placard-brick af-class-prop-address">
                    <div className="af-class-text-block-39">850 S Clark St,<br />Chicago, IL 60605</div>
                    <div className="af-class-text-block-38">312-462-1938</div>
                  </div>
                  <div className="af-class-property-modal-mobile-placard-brick af-class-prop-details">
                    <div className="af-class-div-block-157"><img src="/images/icon-specials-fire.png" alt="" className="af-class-image-28" />
                      <div>Current Specials</div>
                    </div>
                    <div className="af-class-div-block-158 af-class-sub-region">
                      <div className="af-class-text-block-47">Studio - 2 Bedroom</div>
                      <div className="af-class-text-block-48">starting at</div>
                      <div className="af-class-text-block-49">$1,607</div>
                    </div>
                  </div>
                  <div className="af-class-property-modal-mobile-placard-brick af-class-prop-cta"><a href="/property-phase-three" className="af-class-button-2 af-class-sub-region-mobile-modal w-button">View Propetry</a></div>
                </div>
              </div>
            </div>
            <ContentIntroBillboardView.Controller {...this.props} />
            <ContentCollagePointOfInterestView.Controller {...this.props} />
            <CardsPointsOfInterestView.Controller {...this.props} />
            <CardWithFactView.Controller {...this.props} />
            <RelatedAreasBandView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default SubRegionView

/* eslint-enable */