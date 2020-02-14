/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class CertificationsListItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CertificationsListItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CertificationsListItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CertificationsListItemView ? transformProxies(this.props.children) : {
      'icon': [],
      'title': [],
      'text-blurb': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-certification-block-cert-item">{map(proxies['icon'], props => <img src="/../images/dev-leed-black-logo.jpg" alt="" {...{...props, className: `af-class-certification-block-logo ${props.className || ''}`}}>{props.children}</img>)}
            <div>
              {map(proxies['title'], props => <div {...{...props, className: `af-class-certification-block-number ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>33</React.Fragment>}</div>)}
              {map(proxies['text-blurb'], props => <div {...{...props, className: `af-class-certification-block-number-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>LEED Certified Communities</React.Fragment>}</div>)}
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default CertificationsListItemView

/* eslint-enable */