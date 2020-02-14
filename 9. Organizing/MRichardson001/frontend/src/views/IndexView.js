/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/IndexView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import ContentCollageLifestyleView from '../components/ContentCollageLifestyleView'
import ContentImageAndRichBlurbCtaView from '../components/ContentImageAndRichBlurbCtaView'
import ContentImageBlurbCtaView from '../components/ContentImageBlurbCtaView'
import FooterView from '../components/FooterView'


let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== IndexView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/IndexMeta")
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
            <ContentCollageLifestyleView.Controller {...this.props} />
            <ContentImageAndRichBlurbCtaView.Controller {...this.props} />
            <ContentImageBlurbCtaView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default IndexView

/* eslint-enable */