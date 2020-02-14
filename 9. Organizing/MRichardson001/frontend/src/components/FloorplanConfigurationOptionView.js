/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class FloorplanConfigurationOptionView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FloorplanConfigurationOptionController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FloorplanConfigurationOptionView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FloorplanConfigurationOptionView ? transformProxies(this.props.children) : {
      'option': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <li className="af-class-floor-plan-size-link">{map(proxies['option'], props => <a href="/#" {...{...props, className: `af-class-floorplan-nav-link af-class-active ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Studio</React.Fragment>}</a>)}</li>
        </span>
      </React.Fragment>
    )
  }
}

export default FloorplanConfigurationOptionView

/* eslint-enable */