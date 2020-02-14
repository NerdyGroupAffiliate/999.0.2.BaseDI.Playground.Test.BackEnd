/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import RegionHeaderFilterRowView from './RegionHeaderFilterRowView'


let Controller

class RegionHeaderFilterView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/RegionHeaderFilterController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = RegionHeaderFilterView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== RegionHeaderFilterView ? transformProxies(this.props.children) : {
      'properties-button': [],
      'neighborhoods-button': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-real-estate-sticky-menu">
            <div className="af-class-div-block-34">
              <div className="af-class-toggle-container">
                {map(proxies['properties-button'], props => <div {...{...props, className: `af-class-toggle-active ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <div className="af-class-toggle-active-label">Properties</div><img src="/images/icon-property3x.png" alt="" className="af-class-property-icon" /></React.Fragment>}</div>)}
                {map(proxies['neighborhoods-button'], props => <div {...{...props, className: `af-class-toggle-inactive ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <div className="af-class-toggle-inactive-label">Neighborhoods</div><img src="/images/icon-neighborhood3x.png" alt="" className="af-class-toggle-inactive-icon" /></React.Fragment>}</div>)}
              </div>
            </div>
            <RegionHeaderFilterRowView.Controller {...this.props} />
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default RegionHeaderFilterView

/* eslint-enable */