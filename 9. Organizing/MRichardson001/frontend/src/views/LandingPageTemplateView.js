/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/LandingPageTemplateView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import ResidentPortalFeedbackView from '../components/ResidentPortalFeedbackView'
import FooterView from '../components/FooterView'


let Controller

class LandingPageTemplateView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/LandingPageTemplateController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = LandingPageTemplateView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== LandingPageTemplateView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/LandingPageTemplateMeta")
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
            <ResidentPortalFeedbackView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default LandingPageTemplateView

/* eslint-enable */