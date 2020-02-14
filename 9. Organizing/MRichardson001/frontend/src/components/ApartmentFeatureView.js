/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ApartmentFeatureView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ApartmentFeatureController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ApartmentFeatureView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ApartmentFeatureView ? transformProxies(this.props.children) : {
      'feature': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <li className="af-class-short-term-list-item">
            {map(proxies['feature'], props => <div {...props}>{props.children ? props.children : <React.Fragment>All living, dining and bedroom furnishings</React.Fragment>}</div>)}
          </li>
        </span>
      </React.Fragment>
    )
  }
}

export default ApartmentFeatureView

/* eslint-enable */