/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/CultureView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import SpotlightTextAndImageView from '../components/SpotlightTextAndImageView'
import ListBlocksView from '../components/ListBlocksView'
import ExtraTextWithHighlightView from '../components/ExtraTextWithHighlightView'
import GridSocialView from '../components/GridSocialView'
import SpotlightCareerView from '../components/SpotlightCareerView'
import FooterView from '../components/FooterView'


let Controller

class CultureView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CultureController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CultureView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CultureView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/CultureMeta")
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
            <header className="af-class-page-header af-class-culture">
              <div className="af-class-page-header-content af-class-light">
                <h1 className="af-class-career-page-heading">Culture</h1>
                <a href="/#" className="af-class-button af-class-boss af-class-yellow af-class-no-margin w-inline-block">
                  <div className="af-class-boos-button-label">Button Text</div><img src="/../images/right-arrow.svg" alt="" className="af-class-boss-right-arrow" /></a>
                <div className="af-class-html-embed-2 w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-page-header-content {\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n}\n.af-view .af-class-page-header-title-highlight::after {\n  background-color: #ECD925;\n  content: '';\n  display: block;\n  bottom: 10px;\n  left: -5px;\n  right: -5px;\n  top: 50px;\n  position: absolute;\n  z-index: -1;\n}\n@media (max-width: 767px) {\n  .af-view .af-class-page-header-content {\n    backdrop-filter: blur(6px);\n    -webkit-backdrop-filter: blur(6px);\n  }\n}\n" }} />
                </div>
              </div>
            </header>
            <SpotlightTextAndImageView.Controller {...this.props} />
            <ListBlocksView.Controller {...this.props} />
            <ExtraTextWithHighlightView.Controller {...this.props} />
            <section className="af-class-slider-property-showcase">
              <div className="af-class-slider_property_content_wrapper">
                <div className="af-class-slider-employee-awards-content">
                  <div className="af-class-slider-employee-awards-details">
                    <div className="w-embed">
                      <style dangerouslySetInnerHTML={{__html: "\n  .af-view .af-class-section-label.af-class-slider-property::after {\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: #ecd925;\n    height: 3px;\n  }\n" }} />
                    </div>
                    <h2 className="af-class-section-title af-class-underlined">AMLI recognition</h2>
                    <h3 className="af-class-section-tagline">Spirit of AMLI Award</h3>
                    <p className="af-class-paragraph">The prestigious <strong>Spirit of AMLI Award</strong> is given each quarter to employees who demonstrate passion and commitment to help AMLI reach its goals. Associates, supervisors and senior leaders of the company can nominate someone they believe embodies the AMLI spirit during the previous quarter.</p>
                  </div>
                </div>
                <div className="af-class-slider-employee-controls-wrapper">
                  <div className="af-class-div-block-45">
                    <div className="af-class-property_slide_next_arrow"><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" /></div>
                    <div className="af-class-property_slide_prev_arrow"><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" /></div>
                  </div>
                  <div className="af-class-property_slider_pagination_wrapper">
                    <div className="af-class-slider_pagination_dot af-class-active" />
                    <div className="af-class-slider_pagination_dot" />
                    <div className="af-class-slider_pagination_dot" />
                    <div className="af-class-slider_pagination_dot" />
                  </div>
                </div>
              </div>
              <div className="af-class-slider-property-image-wrapper">
                <figure className="af-class-slider-employee-award-image af-class-current" />
                <figure className="af-class-slider-employee-awards-image af-class-next-slide" />
              </div>
            </section>
            <GridSocialView.Controller {...this.props} />
            <SpotlightCareerView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default CultureView

/* eslint-enable */