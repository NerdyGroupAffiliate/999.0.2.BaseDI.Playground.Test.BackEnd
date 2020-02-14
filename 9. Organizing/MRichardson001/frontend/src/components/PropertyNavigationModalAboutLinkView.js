/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyNavigationModalAboutLinkView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyNavigationModalAboutLinkController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyNavigationModalAboutLinkView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyNavigationModalAboutLinkView ? transformProxies(this.props.children) : {
      'link': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['link'], props => <li {...{...props, className: `af-class-full-screen-sub-menu-item ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><a href="/about-us" className="af-class-full-screen-menu-link af-class-sub-link">Overview</a></React.Fragment>}</li>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyNavigationModalAboutLinkView

/* eslint-enable */