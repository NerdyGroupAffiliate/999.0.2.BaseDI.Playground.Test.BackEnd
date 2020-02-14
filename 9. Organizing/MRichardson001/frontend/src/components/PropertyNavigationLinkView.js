/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyNavigationLinkView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyNavigationLinkController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyNavigationLinkView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyNavigationLinkView ? transformProxies(this.props.children) : {
      'link': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['link'], props => <a href="/property-phase-three" {...{...props, className: `af-class-property-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Overview</React.Fragment>}</a>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyNavigationLinkView

/* eslint-enable */