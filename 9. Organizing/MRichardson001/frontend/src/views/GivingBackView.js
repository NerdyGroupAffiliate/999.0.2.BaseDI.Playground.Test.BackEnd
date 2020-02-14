/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/GivingBackView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import VideoWithBlurbView from '../components/VideoWithBlurbView'
import CardsHighlightActivityView from '../components/CardsHighlightActivityView'
import CardsHighlightReversedActivityView from '../components/CardsHighlightReversedActivityView'
import GridHoverActionView from '../components/GridHoverActionView'
import SpotlightCareerView from '../components/SpotlightCareerView'
import FooterView from '../components/FooterView'


let Controller

class GivingBackView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GivingBackController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GivingBackView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== GivingBackView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/GivingBackMeta")
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
            <header className="af-class-page-header af-class-pro-dev">
              <div className="af-class-page-header-content af-class-light af-class-blur">
                <h1 className="af-class-career-page-heading af-class-pro-dev">Giving Back</h1>
                <a href="/#" className="af-class-button af-class-boss af-class-yellow af-class-no-margin w-inline-block">
                  <div className="af-class-boos-button-label">Button Text</div><img src="/../images/right-arrow.svg" alt="" className="af-class-boss-right-arrow" /></a>
                <div className="af-class-html-embed-2 w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-page-header-title-highlight::after {\n  background-color: #ECD925;\n  content: '';\n  display: block;\n  bottom: 10px;\n  left: -5px;\n  right: -5px;\n  top: 50px;\n  position: absolute;\n  z-index: -1;\n}\n" }} />
                </div>
              </div>
            </header>
            <VideoWithBlurbView.Controller {...this.props} />
            <section className="af-class-div-block-78">
              <div className="af-class-div-block-79">
                <div className="af-class-text-block-12">“AMLI is also socially responsible and cares about providing employees with activities that make a <span className="af-class-blue-highlight">meaningful impact</span> on our communities.”</div>
                <div className="af-class-text-block-13">—Joshua , Senior Leasing Professional </div>
              </div>
            </section>
            <CardsHighlightActivityView.Controller {...this.props} />
            <CardsHighlightReversedActivityView.Controller {...this.props} />
            <GridHoverActionView.Controller {...this.props} />
            <SpotlightCareerView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default GivingBackView

/* eslint-enable */