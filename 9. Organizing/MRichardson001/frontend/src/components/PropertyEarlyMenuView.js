/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import PropertyPhaseOneTabView from './PropertyPhaseOneTabView'


let Controller

class PropertyEarlyMenuView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyEarlyMenuController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyEarlyMenuView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyEarlyMenuView ? transformProxies(this.props.children) : {
      'propertyPhaseOneTabViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-phase-1-nav-menu">
            <div className="af-class-div-block-328" />
            <div className="af-class-phase-1-nav-menu-wrapper">
              <div className="af-class-phase-1-nav-container">
                {map(proxies['propertyPhaseOneTabViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyEarlyMenuView

/* eslint-enable */