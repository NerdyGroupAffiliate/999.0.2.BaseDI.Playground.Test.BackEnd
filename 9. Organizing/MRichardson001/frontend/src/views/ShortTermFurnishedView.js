/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/ShortTermFurnishedView.css"
import PropertyFullView from '../components/PropertyFullView'
import ListApartmentFeaturesView from '../components/ListApartmentFeaturesView'
import FooterView from '../components/FooterView'


let Controller

class ShortTermFurnishedView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ShortTermFurnishedController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ShortTermFurnishedView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ShortTermFurnishedView ? transformProxies(this.props.children) : {
      'header-container': [],
    }


    let Metadata
    try {
      Metadata = require("../meta/ShortTermFurnishedMeta")
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
            <header className="af-class-property-sub-page-header af-class-amenities">
              <div className="af-class-property-sub-page-header-container">
                <h1 className="af-class-heading-19">Short-term Furnished</h1>
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
            </header>
            <div className="af-class-html-embed-23 w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 992px) and (max-width: 1024px) {\n  .af-view .af-class-amenities-image-slider-container {\n    height: 75%;\n  }\n  .af-view .af-class-list-amenities-resources {\n    margin-top: 75px;\n  }\n  .af-view .af-class-spotlight-next-steps-label {\n    font-size: 16px;\n  }\n}\n" }} />
            </div>
            <section className="af-class-list-short-term-w-gallery">
              {map(proxies['header-container'], props => <div {...{...props, className: `af-class-short-term-slider-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-div-block-160">
                  <h2 className="af-class-section-title af-class-white">community features</h2>
                  <h3 className="af-class-section-tagline af-class-white">Tagline summary of community features slider section.</h3>
                  <p className="af-class-paragraph af-class-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                </div>
              </React.Fragment>}</div>)}
              <div className="af-class-short-term-image-slider-container"><img src="/images/amenity-slider-current-image2x.jpg" srcSet="images/amenity-slider-current-image2x-p-500.jpeg 500w, images/amenity-slider-current-image2x-p-800.jpeg 800w, images/amenity-slider-current-image2x-p-1080.jpeg 1080w, images/amenity-slider-current-image2x.jpg 1352w" sizes="(max-width: 479px) 100vw, (max-width: 991px) 82vw, 41vw" alt="" className="af-class-amenity-slider-image" /><img src="/images/grid-highlight-kitchen2x.jpg" srcSet="images/grid-highlight-kitchen2x-p-1080.jpeg 1080w, images/grid-highlight-kitchen2x.jpg 1504w" sizes="(max-width: 479px) 100vw, (max-width: 991px) 14vw, 7vw" alt="" className="af-class-amenity-slider-image--next" />
                <div className="af-class-html-embed-6 w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n  .af-view .af-class-amenity-slider-image, .af-view .af-class-amenity-slider-image--next {\n    object-fit: cover;\n  }\n" }} />
                </div>
                <div className="af-class-amenities-slider-toolbar">
                  <div className="af-class-html-embed-8 w-embed">
                    <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-arrow-l-chevron {\n  fill:#4c698f;\n  fill-rule: evenodd;\n}\n" }} />
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.13 22.02">
                      <title>Arrow-Chevron</title>
                      <g id="Symbols">
                        <polygon id="ion-ios-arrow-forward---Ionicons" points="13.13 2.2 10.94 0 0 11.01 10.94 22.02 13.13 19.82 4.44 11.01 13.13 2.2" className="af-class-arrow--chevron">
                        </polygon></g>
                    </svg></div>
                  <div className="af-class-slider-dot af-class-active af-class-last" />
                  <div className="af-class-slider-dot af-class-active af-class-next" />
                  <div className="af-class-slider-dot af-class-active" />
                  <div className="af-class-slider-dot af-class-active af-class-next" />
                  <div className="af-class-slider-dot af-class-active af-class-last" />
                  <div className="af-class-html-embed-9 w-embed">
                    <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-arrow--chevron {\n  fill: #4c698f;\n  fill-rule: evenodd;\n}\n" }} />
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.13 22.02">
                      <title>Arrow -- Black</title>
                      <g id="Symbols">
                        <polygon id="ion-ios-arrow-forward---Ionicons" points="0 19.82 2.19 22.02 13.13 11.01 2.19 0 0 2.2 8.68 11.01 0 19.82" className="af-class-arrow--chevron">
                        </polygon></g>
                    </svg></div>
                </div>
              </div>
            </section>
            <ListApartmentFeaturesView.Controller {...this.props} />
            <section className="af-class-spotlight-tour">
              <div className="af-class-spotlight-tour-container">
                <div className="af-class-div-block-155 af-class-blur">
                  <div className="af-class-section-title af-class-light">Schedule a Tour</div>
                  <div className="af-class-property-sub-section-tagline af-class-white">Wanna come look around?</div>
                  <div className="af-class-paragraph af-class-light af-class-margin-top">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus..</div>
                  <a href="/#" className="af-class-button af-class-boss af-class-yellow af-class-no-margin w-inline-block">
                    <div className="af-class-boos-button-label">Visit Property</div><img src="/images/right-arrow.svg" alt="" className="af-class-boss-right-arrow" /></a>
                </div>
              </div>
            </section>
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default ShortTermFurnishedView

/* eslint-enable */