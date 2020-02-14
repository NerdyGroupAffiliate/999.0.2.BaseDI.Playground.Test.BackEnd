/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyUnitFeatureView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyUnitFeatureController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyUnitFeatureView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyUnitFeatureView ? transformProxies(this.props.children) : {
      'value': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <li className="af-class-unit-feat-list-item">
            {map(proxies['value'], props => <div {...props}>{props.children ? props.children : <React.Fragment>8th Floor</React.Fragment>}</div>)}
          </li>
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyUnitFeatureView

/* eslint-enable */