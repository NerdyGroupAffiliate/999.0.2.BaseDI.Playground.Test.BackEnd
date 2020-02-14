/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class FloorplanPoliciesTabView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FloorplanPoliciesTabController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FloorplanPoliciesTabView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FloorplanPoliciesTabView ? transformProxies(this.props.children) : {
      'wrapper': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-tab-header af-class-active ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Upfront Costs</React.Fragment>}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default FloorplanPoliciesTabView

/* eslint-enable */