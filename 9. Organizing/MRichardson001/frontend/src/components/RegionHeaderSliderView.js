/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import RegionHeaderFilterView from './RegionHeaderFilterView'
import PropertyCardView from './PropertyCardView'


let Controller

class RegionHeaderSliderView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/RegionHeaderSliderController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = RegionHeaderSliderView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== RegionHeaderSliderView ? transformProxies(this.props.children) : {
      'propertyCardViewList1': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-real-estate-column-container">
            <RegionHeaderFilterView.Controller {...this.props} />
            {map(proxies['propertyCardViewList1'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
        </span>
      </React.Fragment>
    )
  }
}

export default RegionHeaderSliderView

/* eslint-enable */