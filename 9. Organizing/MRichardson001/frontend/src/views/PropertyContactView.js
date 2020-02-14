/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/PropertyContactView.css"
import PropertyFullView from '../components/PropertyFullView'
import PropertyContactMapView from '../components/PropertyContactMapView'
import FooterView from '../components/FooterView'


let Controller

class PropertyContactView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyContactController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyContactView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyContactView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/PropertyContactMeta")
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
            <header className="af-class-property-sub-page-header af-class-contact">
              <div className="af-class-property-sub-page-header-container">
                <h1 className="af-class-heading-19">Contact Us</h1>
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
                  <div className="af-class-property-subpage-placard-brick af-class-prop-cta"><a href="/#" className="af-class-button-2 w-button">Apply</a></div>
                </div>
              </div>
            </header>
            <PropertyContactMapView.Controller {...this.props} />
            <div className="af-class-spotlight-tour">
              <div className="af-class-spotlight-tour-container">
                <div className="af-class-div-block-155 af-class-blur">
                  <div className="af-class-section-title af-class-light">Schedule a Tour</div>
                  <div className="af-class-property-sub-section-tagline af-class-white">Wanna come look around?</div>
                  <div className="af-class-paragraph af-class-light af-class-margin-top">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus..</div>
                  <a href="/#" className="af-class-button af-class-boss af-class-yellow af-class-no-margin w-inline-block">
                    <div className="af-class-boos-button-label">Visit Property</div><img src="/images/right-arrow.svg" alt="" className="af-class-boss-right-arrow" /></a>
                </div>
              </div>
            </div>
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyContactView

/* eslint-enable */