/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyNavigationModalLinkView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyNavigationModalLinkController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyNavigationModalLinkView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyNavigationModalLinkView ? transformProxies(this.props.children) : {
      'link': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <li className="af-class-full-screen-sub-menu-item">{map(proxies['link'], props => <a href="/#" {...{...props, className: `af-class-full-screen-menu-link af-class-sub-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Chicago</React.Fragment>}</a>)}</li>
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyNavigationModalLinkView

/* eslint-enable */