/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/AboutUsView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import ImageTitleView from '../components/ImageTitleView'
import ListDetailedView from '../components/ListDetailedView'
import SpotlightThreePointsView from '../components/SpotlightThreePointsView'
import SliderStoryView from '../components/SliderStoryView'
import FooterView from '../components/FooterView'


let Controller

class AboutUsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AboutUsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AboutUsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== AboutUsView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/AboutUsMeta")
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
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n  .af-view .af-class-list-blocks-b-section-label::after {\n    content: '';\n    display: block;\n    background-color: #ECD925;\n    position: absolute;\n    bottom: 5px;\n    height: 3px;\n    left: -3px;\n    right: -3px;\n  }\n  @media (min-width: 1700px) {\n    .af-view .af-class-about-header {\n      height: 50vh;\n      min-height: 500px;\n      max-height: 50vh;\n    }\n    .af-view .af-class-list-blocks-blurb-content {\n      padding-top: 100px;\n      padding-right: 100px;\n      padding-bottom: 100px;\n    }\n    .af-view .af-class-list-blocks-b-content-container {\n      flex-basis: 450px;\n    }\n    .af-view .af-class-list-blocks-blurb-tagline {\n      font-size: 48px;\n      line-height: 58px;\n    }\n    .af-view .af-class-list-blocks-blurb-tagline {\n      max-width: 700px;\n    }\n    .af-view .af-class-list-detailed-lists-column {\n      justify-content: flex-start;\n      padding-left: 100px;\n    }\n  }\n" }} />
            </div>
            <ImageTitleView.Controller {...this.props} />
            <ListDetailedView.Controller {...this.props} />
            <SpotlightThreePointsView.Controller {...this.props} />
            <SliderStoryView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default AboutUsView

/* eslint-enable */