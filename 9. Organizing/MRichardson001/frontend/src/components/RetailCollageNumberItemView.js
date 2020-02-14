/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class RetailCollageNumberItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/RetailCollageNumberItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = RetailCollageNumberItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== RetailCollageNumberItemView ? transformProxies(this.props.children) : {
      'title': [],
      'description': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-retail-collage-number-item">
            {map(proxies['title'], props => <div {...{...props, className: `af-class-retail-collage-block-number ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>316,000</React.Fragment>}</div>)}
            {map(proxies['description'], props => <div {...{...props, className: `af-class-retail-collage-number-description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Square footage of retail space we own and manage nationwide</React.Fragment>}</div>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default RetailCollageNumberItemView

/* eslint-enable */