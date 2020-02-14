/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import RegionHeaderSliderView from './RegionHeaderSliderView'
import RegionMapView from './RegionMapView'


let Controller

class RegionHeaderMapView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/RegionHeaderMapController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = RegionHeaderMapView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== RegionHeaderMapView ? transformProxies(this.props.children) : {

    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <header className="af-class-header-property-map">
            <div className="af-class-real-estate-column">
              <RegionHeaderSliderView.Controller {...this.props} />
              <div className="w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 992px) and (max-width: 1115px) {\n   .af-class-property-card.af-class-icon-wrapper {\n    display: none;\n  }\n   .af-class-property-card-cta-label {\n    font-size: 16px;\n  }\n   .af-class-property-card-phone, .af-view .af-class-af-view .af-class-property-card-address {\n    font-size: 14px;\n  }\n   .af-class-property-card-info-wtrapper {\n    padding-bottom: 12px;\n    padding-left: 10px;\n  }\n   .af-class-property-card-left-border {\n    width: 0px;\n  }\n   .af-class-property-card-title-wrapper {\n    padding: 15px 9px;\n  }\n   .af-class-toggle-inactive-label, .af-view .af-class-af-view .af-class-toggle-active-label {\n    font-size: 16px;\n  }\n   .af-class-toggle-inactive {\n    padding: 5px 15px 5px 12px;\n  }\n   .af-class-toggle-active {\n    padding: 5px 0px 5px 12px;\n  }\n   .af-class-div-block-34 {\n    padding: 5px 10px;\n  }\n   .af-class-toggle-container {\n    height: 48px;\n    margin-bottom: 9px;\n  }\n   .af-class-real-estate-column-container {\n    padding-top: 9px;\n  }\n}\n" }} />
              </div>
            </div>
            <RegionMapView.Controller {...this.props} />
          </header>
        </span>
      </React.Fragment>
    )
  }
}

export default RegionHeaderMapView

/* eslint-enable */