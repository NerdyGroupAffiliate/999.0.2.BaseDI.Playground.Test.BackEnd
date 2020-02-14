/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/BenefitsView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import ContentIntroBillboardStatementView from '../components/ContentIntroBillboardStatementView'
import CardsExtendingBlocksSmallImageView from '../components/CardsExtendingBlocksSmallImageView'
import CardsExtendingBlocksMediumImageView from '../components/CardsExtendingBlocksMediumImageView'
import CardsExtendingBlocksLargeImageView from '../components/CardsExtendingBlocksLargeImageView'
import SpotlightCareerView from '../components/SpotlightCareerView'
import FooterView from '../components/FooterView'


let Controller

class BenefitsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/BenefitsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BenefitsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== BenefitsView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/BenefitsMeta")
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
            <div className="af-class-page-header af-class-benefits">
              <div className="af-class-page-header-content af-class-benefits">
                <h1 className="af-class-career-page-heading">Benefits</h1>
                <a href="/#" className="af-class-button af-class-boss af-class-yellow af-class-no-margin w-inline-block">
                  <div className="af-class-boos-button-label">Button Text</div><img src="/../images/right-arrow.svg" alt="" className="af-class-boss-right-arrow" /></a>
                <div className="af-class-html-embed-2 w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-page-header-content {\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n}\n.af-view .af-class-page-header-title-highlight::after {\n  background-color: #ECD925;\n  content: '';\n  display: block;\n  bottom: 10px;\n  left: -5px;\n  right: -5px;\n  top: 50px;\n  position: absolute;\n  z-index: -1;\n}\n@media (max-width: 500px) {\n.af-view .af-class-page-header-content {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n}\n" }} />
                </div>
              </div>
            </div>
            <ContentIntroBillboardStatementView.Controller {...this.props} />
            <CardsExtendingBlocksSmallImageView.Controller {...this.props} />
            <CardsExtendingBlocksMediumImageView.Controller {...this.props} />
            <CardsExtendingBlocksLargeImageView.Controller {...this.props} />
            <SpotlightCareerView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default BenefitsView

/* eslint-enable */