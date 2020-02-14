/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/PropertyPhaseTwoView.css"
import PropertyFullView from '../components/PropertyFullView'
import PropertyPreLeaseView from '../components/PropertyPreLeaseView'
import SliderGalleryView from '../components/SliderGalleryView'
import ListHighlightsWithPictureView from '../components/ListHighlightsWithPictureView'
import SpotlightImpactFactsView from '../components/SpotlightImpactFactsView'
import SustainabilityHighlightsView from '../components/SustainabilityHighlightsView'
import ContentRetailShowcaseView from '../components/ContentRetailShowcaseView'
import SliderTimelineView from '../components/SliderTimelineView'
import PropertyContactCtaView from '../components/PropertyContactCtaView'
import FooterView from '../components/FooterView'


let Controller

class PropertyPhaseTwoView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyPhaseTwoController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyPhaseTwoView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyPhaseTwoView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/PropertyPhaseTwoMeta")
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
            <PropertyPreLeaseView.Controller {...this.props} />
            <SliderGalleryView.Controller {...this.props} />
            <ListHighlightsWithPictureView.Controller {...this.props} />
            <SpotlightImpactFactsView.Controller {...this.props} />
            <SustainabilityHighlightsView.Controller {...this.props} />
            <ContentRetailShowcaseView.Controller {...this.props} />
            <SliderTimelineView.Controller {...this.props} />
            <section className="af-class-newsletter">
              <div className="af-class-div-block-372">
                <div className="af-class-div-block-378 af-class-blur" />
                <div className="af-class-div-block-377">
                  <h3 className="af-class-heading-27">Want to stay up to date on development?</h3>
                  <div className="af-class-paragraph af-class-light">Sign up for our newsletter and we will send you the latest updates. No spam. We promise.</div>
                </div>
                <div className="af-class-div-block-376">
                  <div className="af-class-div-block-375">
                    <div className="af-class-text-block-108">Your email</div>
                    <div className="af-class-div-block-374">
                      <div>Signup</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <PropertyContactCtaView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyPhaseTwoView

/* eslint-enable */