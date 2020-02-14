/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/ProfessionalDevelopmentView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import ListTallView from '../components/ListTallView'
import ContentBookletView from '../components/ContentBookletView'
import BookletReversedView from '../components/BookletReversedView'
import ContentFullWidthTestimonialView from '../components/ContentFullWidthTestimonialView'
import CardsContentOffsetView from '../components/CardsContentOffsetView'
import SpotlightCareerView from '../components/SpotlightCareerView'
import FooterView from '../components/FooterView'


let Controller

class ProfessionalDevelopmentView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ProfessionalDevelopmentController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ProfessionalDevelopmentView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ProfessionalDevelopmentView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/ProfessionalDevelopmentMeta")
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
            <div className="af-class-page-header af-class-pro-dev">
              <div className="af-class-page-header-content af-class-dark af-class-blur">
                <h1 className="af-class-career-page-heading af-class-pro-dev">Career Development</h1>
                <a href="/#" className="af-class-button af-class-boss af-class-yellow af-class-no-margin w-inline-block">
                  <div className="af-class-boos-button-label">Button Text</div><img src="/../images/right-arrow.svg" alt="" className="af-class-boss-right-arrow" /></a>
                <div className="af-class-html-embed-2 w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-page-header-content {\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n}\n.af-view .af-class-page-header-title-highlight::after {\n  background-color: #ECD925;\n  content: '';\n  display: block;\n  bottom: 10px;\n  left: -5px;\n  right: -5px;\n  top: 50px;\n  position: absolute;\n  z-index: -1;\n}\n@media (max-width: 767px) {\n  .af-view .af-class-page-header-content {\n    backdrop-filter: blur(0px);\n    -webkit-backdrop-filter: blur(0px);\n  }\n}\n" }} />
                </div>
              </div>
            </div>
            <div className="af-class-content-intro-descriptive">
              <div className="af-class-div-block-36">
                <h2 className="af-class-content-intro-descriptive-title">Never Stop <span className="af-class-content-intro-descriptive-highlight">Learning</span>.</h2>
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-content-intro-descriptive-highlight::after {\n  bottom: 0;\n  background-color: #CADBF0;\n  position: absolute;\n  left: -5px;\n  right: -5px;\n  content: '';\n  display: block;\n  top: 15px;\n  z-index: -1;\n}\n" }} />
                </div>
                <p className="af-class-paragraph">AMLI believes in a strong Learning Culture. We provide the resources, classes, peer trainers, etc. and encourage our team to be curious and independent learners. We also want people to share their knowledge with others so that at the end of the day, we’re all teaching and we’re all learning. </p>
              </div>
            </div>
            <ListTallView.Controller {...this.props} />
            <ContentBookletView.Controller {...this.props} />
            <BookletReversedView.Controller {...this.props} />
            <ContentFullWidthTestimonialView.Controller {...this.props} />
            <CardsContentOffsetView.Controller {...this.props} />
            <SpotlightCareerView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default ProfessionalDevelopmentView

/* eslint-enable */