/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/CareersView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import ImageTitleCtaView from '../components/ImageTitleCtaView'
import ListCompactView from '../components/ListCompactView'
import SpotlightBillboardListView from '../components/SpotlightBillboardListView'
import CardTestimonialView from '../components/CardTestimonialView'
import SpotlightCareerView from '../components/SpotlightCareerView'
import FooterView from '../components/FooterView'


let Controller

class CareersView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CareersController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CareersView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CareersView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/CareersMeta")
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
            <ImageTitleCtaView.Controller {...this.props} />
            <ListCompactView.Controller {...this.props} />
            <SpotlightBillboardListView.Controller {...this.props} />
            <CardTestimonialView.Controller {...this.props} />
            <SpotlightCareerView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default CareersView

/* eslint-enable */