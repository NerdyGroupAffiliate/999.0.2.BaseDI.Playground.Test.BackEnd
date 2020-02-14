/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/FindYourCareerView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import SpotlightCareerView from '../components/SpotlightCareerView'
import VideoTestimonialView from '../components/VideoTestimonialView'
import ContentVideoTestimonialView from '../components/ContentVideoTestimonialView'
import SpotlightCareersCtaView from '../components/SpotlightCareersCtaView'
import FooterView from '../components/FooterView'


let Controller

class FindYourCareerView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FindYourCareerController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FindYourCareerView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FindYourCareerView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/FindYourCareerMeta")
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
            <SpotlightCareerView.Controller {...this.props} />
            <VideoTestimonialView.Controller {...this.props} />
            <ContentVideoTestimonialView.Controller {...this.props} />
            <SpotlightCareerView.Controller {...this.props}s-cta />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default FindYourCareerView

/* eslint-enable */