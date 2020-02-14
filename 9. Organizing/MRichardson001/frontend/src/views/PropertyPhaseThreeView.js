/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/PropertyPhaseThreeView.css"
import PropertyFullView from '../components/PropertyFullView'
import PropertyHeaderView from '../components/PropertyHeaderView'
import PropertyIntroductionWithFloorplansView from '../components/PropertyIntroductionWithFloorplansView'
import SpotlightCtaView from '../components/SpotlightCtaView'
import SliderReviewsView from '../components/SliderReviewsView'
import SpotlightKeyFactView from '../components/SpotlightKeyFactView'
import GridHighlightImagesView from '../components/GridHighlightImagesView'
import SpotlightSpecialFeatureView from '../components/SpotlightSpecialFeatureView'
import ContentRetailShowcaseCondensedView from '../components/ContentRetailShowcaseCondensedView'
import SustainabilityHighlightsExpandedView from '../components/SustainabilityHighlightsExpandedView'
import SpotlightTourView from '../components/SpotlightTourView'
import FooterView from '../components/FooterView'


let Controller

class PropertyPhaseThreeView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyPhaseThreeController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyPhaseThreeView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyPhaseThreeView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/PropertyPhaseThreeMeta")
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
            <PropertyHeaderView.Controller {...this.props} />
            <PropertyIntroductionWithFloorplansView.Controller {...this.props} />
            <SpotlightCtaView.Controller {...this.props} />
            <section className="af-class-slider-reviews">
              <SliderReviewsView.Controller {...this.props} />
              <div className="w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 992px) and (max-width: 1175px) {\n  .af-view .af-class-slider-review-container {\n    padding: 40px;\n  }\n}\n" }} />
              </div>
            </section>
            <SpotlightKeyFactView.Controller {...this.props} />
            <GridHighlightImagesView.Controller {...this.props} />
            <SpotlightSpecialFeatureView.Controller {...this.props} />
            <ContentRetailShowcaseCondensedView.Controller {...this.props} />
            <SustainabilityHighlightsExpandedView.Controller {...this.props} />
            <SpotlightTourView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyPhaseThreeView

/* eslint-enable */