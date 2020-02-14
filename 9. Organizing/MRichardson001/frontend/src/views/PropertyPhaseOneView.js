/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/PropertyPhaseOneView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import PropertyEarlyBannerView from '../components/PropertyEarlyBannerView'
import PropertyEarlyPhaseView from '../components/PropertyEarlyPhaseView'
import PropertyEarlyMenuView from '../components/PropertyEarlyMenuView'
import PropertyLocationTeaserView from '../components/PropertyLocationTeaserView'
import ListAmenitiesSimpleView from '../components/ListAmenitiesSimpleView'
import ContentFactoidsView from '../components/ContentFactoidsView'
import FooterView from '../components/FooterView'


let Controller

class PropertyPhaseOneView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyPhaseOneController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyPhaseOneView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyPhaseOneView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/PropertyPhaseOneMeta")
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
            <PropertyEarlyBannerView.Controller {...this.props} />
            <PropertyEarlyPhaseView.Controller {...this.props} />
            <PropertyEarlyMenuView.Controller {...this.props} />
            <PropertyLocationTeaserView.Controller {...this.props} />
            <ListAmenitiesSimpleView.Controller {...this.props} />
            <ContentFactoidsView.Controller {...this.props} />
            <section className="af-class-phase-1-sustainability">
              <div className="af-class-p1-sustainable-image-col" />
              <div className="af-class-p1-sustainable-content-col">
                <div className="af-class-p1-sustainable-content-container">
                  <div className="af-class-div-block-342">
                    <h2 className="af-class-section-title">Community Impact</h2>
                    <h3 className="af-class-section-tagline">Lowering our environmental footprint.</h3>
                    <p className="af-class-paragraph">Introduce the certifications that make this property sustainable/ green. This can be a couple sentences long if the space is needed.</p>
                  </div>
                  <ul className="af-class-unordered-list-8 w-list-unstyled">
                    <li className="af-class-phase-1-sustainable-list-item">
                      <div className="af-class-text-block-100">Sustainable Landscaping</div>
                    </li>
                    <li className="af-class-phase-1-sustainable-list-item">
                      <div className="af-class-text-block-100">Healthy Building Materials</div>
                    </li>
                    <li className="af-class-phase-1-sustainable-list-item">
                      <div className="af-class-text-block-100">ENERGY STAR&nbsp;Appliances</div>
                    </li>
                    <li className="af-class-phase-1-sustainable-list-item">
                      <div className="af-class-text-block-100">Sustainable Landscaping</div>
                    </li>
                    <li className="af-class-phase-1-sustainable-list-item">
                      <div className="af-class-text-block-100">Community Recycling Program</div>
                    </li>
                    <li className="af-class-phase-1-sustainable-list-item">
                      <div className="af-class-text-block-100">ENERGY&nbsp;STAR Appliances</div>
                    </li>
                  </ul><img src="/images/LEED-gold3x.png" srcSet="images/LEED-gold3x-p-500.png 500w, images/LEED-gold3x.png 591w" sizes="150px" alt="" className="af-class-image-44" /></div>
              </div>
            </section>
            <section className="af-class-content-retail-showcase">
              <div className="af-class-div-block-344">
                <div className="af-class-div-block-351">
                  <div className="af-class-div-block-352">
                    <h2 className="af-class-section-title af-class-white">Retail</h2>
                    <div className="af-class-section-tagline-large af-class-white">25,158 sqft of possibilities</div>
                  </div>
                  <div className="af-class-div-block-356">
                    <div className="af-class-div-block-354 af-class-div-block-355">
                      <div className="af-class-p1-retail-item af-class-no-top-padding">
                        <div className="af-class-text-block-103">Retail Service</div>
                        <div className="af-class-p1-retail-item-description">Introduce the certifications that make this property sustainable/ green. </div>
                      </div>
                      <div className="af-class-p1-retail-item af-class-no-top-padding">
                        <div className="af-class-text-block-103">Retail Service</div>
                        <div className="af-class-p1-retail-item-description">Introduce the certifications that make this property sustainable/ green. </div>
                      </div>
                      <div className="af-class-p1-retail-item">
                        <div className="af-class-text-block-103">Retail Service</div>
                        <div className="af-class-p1-retail-item-description">Introduce the certifications that make this property sustainable/ green. </div>
                      </div>
                      <div className="af-class-p1-retail-item">
                        <div className="af-class-text-block-103">Retail Service</div>
                        <div className="af-class-p1-retail-item-description">Introduce the certifications that make this property sustainable/ green. </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-retail-showcase-cta-row">
                <div className="af-class-text-block-102">Interested in joining us?</div>
                <a href="/#" className="af-class-link-block-5 w-inline-block">
                  <div className="af-class-text-block-104">Contact Us</div><img src="/images/icon-arrow--right-no-shadow3x.png" alt="" className="af-class-image-45" /></a>
              </div>
              <div className="af-class-div-block-346">
                <div className="af-class-div-block-347">
                  <div className="af-class-text-block-101">Some of our awesome partner's title</div>
                  <div className="af-class-div-block-345">
                    <div className="af-class-logo-holder"><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" /></div>
                    <div className="af-class-logo-holder"><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" /></div>
                    <div className="af-class-logo-holder"><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" /></div>
                    <div className="af-class-logo-holder"><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" /></div>
                  </div>
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

export default PropertyPhaseOneView

/* eslint-enable */