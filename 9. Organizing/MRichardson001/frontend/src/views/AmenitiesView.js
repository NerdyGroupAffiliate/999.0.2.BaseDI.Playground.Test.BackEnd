/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/AmenitiesView.css"
import PropertyFullView from '../components/PropertyFullView'
import ListAmenitiesWithGalleryView from '../components/ListAmenitiesWithGalleryView'
import ListAmenitiesWithReversedGalleryView from '../components/ListAmenitiesWithReversedGalleryView'
import ListResourcesView from '../components/ListResourcesView'
import ListPerksView from '../components/ListPerksView'
import SpotlightNextStepsView from '../components/SpotlightNextStepsView'
import FooterView from '../components/FooterView'


let Controller

class AmenitiesView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AmenitiesController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AmenitiesView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== AmenitiesView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/AmenitiesMeta")
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
            <PropertyFullView.Controller {...this.props} />
            <div className="af-class-property-sub-page-header af-class-amenities">
              <div className="af-class-property-sub-page-header-container">
                <h1 className="af-class-heading-19">Amenities &amp; Features</h1>
                <div className="af-class-property-subpage-placard">
                  <div className="w-embed">
                    <style dangerouslySetInnerHTML={{__html: "\n  .af-view .af-class-property-subpage-placard {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  }\n  .af-view .af-class-property-subpage-placard-brick.af-class-prop-details {\n  flex: 1;\n  }\n" }} />
                  </div>
                  <div className="af-class-property-subpage-placard-brick af-class-prop-name">
                    <div className="af-class-property-phase--property-name">AMLI <strong className="af-class-bold-text">on <br />Eldridge Parkway</strong><br /></div>
                    <div className="af-class-star-rating-wrapper">
                      <div className="af-class-icon--star--active w-embed">
                        <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-icon--star--active {\n  fill:#ecd925;\n  fill-rule: evenodd;\n}\n" }} />
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.02 18.09">
                          <g id="iPad">
                            <g id="Group-2">
                              <polygon id="Star" points="9.51 15 3.63 18.09 4.75 11.54 0 6.91 6.57 5.96 9.51 0 12.45 5.96 19.02 6.91 14.27 11.54 15.39 18.09 9.51 15" className="af-class-icon--star--active">
                              </polygon></g>
                          </g>
                        </svg></div>
                      <div className="af-class-icon--star--active w-embed">
                        <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-icon--star--active {\n  fill:#ecd925;\n  fill-rule: evenodd;\n}\n" }} />
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.02 18.09">
                          <g id="iPad">
                            <g id="Group-2">
                              <polygon id="Star" points="9.51 15 3.63 18.09 4.75 11.54 0 6.91 6.57 5.96 9.51 0 12.45 5.96 19.02 6.91 14.27 11.54 15.39 18.09 9.51 15" className="af-class-icon--star--active">
                              </polygon></g>
                          </g>
                        </svg></div>
                      <div className="af-class-icon--star--active w-embed">
                        <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-icon--star--active {\n  fill:#ecd925;\n  fill-rule: evenodd;\n}\n" }} />
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.02 18.09">
                          <g id="iPad">
                            <g id="Group-2">
                              <polygon id="Star" points="9.51 15 3.63 18.09 4.75 11.54 0 6.91 6.57 5.96 9.51 0 12.45 5.96 19.02 6.91 14.27 11.54 15.39 18.09 9.51 15" className="af-class-icon--star--active">
                              </polygon></g>
                          </g>
                        </svg></div>
                      <div className="af-class-icon--star--active w-embed">
                        <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-icon--star--active {\n  fill:#ecd925;\n  fill-rule: evenodd;\n}\n" }} />
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.02 18.09">
                          <g id="iPad">
                            <g id="Group-2">
                              <polygon id="Star" points="9.51 15 3.63 18.09 4.75 11.54 0 6.91 6.57 5.96 9.51 0 12.45 5.96 19.02 6.91 14.27 11.54 15.39 18.09 9.51 15" className="af-class-icon--star--active">
                              </polygon></g>
                          </g>
                        </svg></div>
                      <div className="af-class-icon--star--inactive w-embed">
                        <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-icon--star--inactive {\n  fill:#b2b2b2;\n  fill-rule: evenodd;\n}\n" }} />
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.02 18.09">
                          <g id="iPad">
                            <g id="Group-2">
                              <polygon id="Star" points="9.51 15 3.63 18.09 4.75 11.54 0 6.91 6.57 5.96 9.51 0 12.45 5.96 19.02 6.91 14.27 11.54 15.39 18.09 9.51 15" className="af-class-icon--star--inactive">
                              </polygon></g>
                          </g>
                        </svg></div>
                      <div className="af-class-text-block-50">(12)</div>
                    </div>
                  </div>
                  <div className="af-class-property-subpage-placard-brick af-class-prop-address">
                    <div className="af-class-text-block-39">850 S Clark St,<br />Chicago, IL 60605</div>
                    <div className="af-class-text-block-38">312-462-1938</div>
                  </div>
                  <div className="af-class-property-subpage-placard-brick af-class-prop-details">
                    <div className="af-class-div-block-157"><img src="/images/icon-specials-fire.png" alt="" className="af-class-image-28" />
                      <div>Current Specials</div>
                    </div>
                    <div className="af-class-div-block-158">
                      <div className="af-class-text-block-47">Studio - 2 Bedroom</div>
                      <div className="af-class-text-block-48">starting at</div>
                      <div className="af-class-text-block-49">$1,607</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-html-embed-23 w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 992px) and (max-width: 1024px) {\n  .af-view .af-class-amenities-image-slider-container {\n    height: 75%;\n  }\n  .af-view .af-class-list-amenities-resources {\n    margin-top: 75px;\n  }\n  .af-view .af-class-spotlight-next-steps-label {\n    font-size: 16px;\n  }\n}\n" }} />
            </div>
            <ListAmenitiesWithGalleryView.Controller {...this.props} />
            <ListAmenitiesWithReversedGalleryView.Controller {...this.props} />
            <ListResourcesView.Controller {...this.props} />
            <ListPerksView.Controller {...this.props} />
            <div className="af-class-list-resources">
              <div className="af-class-div-block-163">
                <div className="af-class-section-title af-class-white">resources</div>
                <div className="af-class-section-tagline af-class-white">Resources Section Title</div>
              </div>
              <div className="af-class-list-resources-list-container">
                <div className="af-class-div-block-167">
                  <div className="af-class-list-resource-item-wrap">
                    <div className="af-class-list-resource-item">
                      <div className="af-class-div-block-165" /><img src="/images/placeholder2x.png" alt="" className="af-class-image-31" />
                      <h4 className="af-class-heading-20">48 Hour Service Guarantee</h4>
                      <div className="af-class-paragraph">Vestibulum id ligula porta felis euismod semper. </div>
                      <a href="/#" className="af-class-link-block-8 w-inline-block">
                        <div className="af-class-text-block-130">Learn&nbsp;more</div><img src="/images/icon-arrow--right--blue.svg" alt="" /></a>
                    </div>
                  </div>
                  <div className="af-class-list-resource-item-wrap">
                    <div className="af-class-list-resource-item">
                      <div className="af-class-div-block-165" /><img src="/images/placeholder2x.png" alt="" className="af-class-image-31" />
                      <h4 className="af-class-heading-20">48 Hour Service Guarantee</h4>
                      <div className="af-class-paragraph">Vestibulum id ligula porta felis euismod semper. </div>
                    </div>
                  </div>
                  <div className="af-class-list-resource-item-wrap af-class-last-child">
                    <div className="af-class-list-resource-item af-class-margin-top">
                      <div className="af-class-div-block-165" /><img src="/images/placeholder2x.png" alt="" className="af-class-image-31" />
                      <h4 className="af-class-heading-20">48 Hour Service Guarantee</h4>
                      <div className="af-class-paragraph">Vestibulum id ligula porta felis euismod semper. </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SpotlightNextStepsView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default AmenitiesView

/* eslint-enable */