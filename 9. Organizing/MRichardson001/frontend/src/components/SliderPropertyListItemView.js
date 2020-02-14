/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SliderPropertyListItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SliderPropertyListItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SliderPropertyListItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SliderPropertyListItemView ? transformProxies(this.props.children) : {
      'label': [],
      'value': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <li className="af-class-slider-property-list-item">
            {map(proxies['label'], props => <div {...{...props, className: `af-class-slider-property-list-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>planned use</React.Fragment>}</div>)}
            {map(proxies['value'], props => <div {...{...props, className: `af-class-slider-property-list-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Residential</React.Fragment>}</div>)}
          </li>
        </span>
      </React.Fragment>
    )
  }
}

export default SliderPropertyListItemView

/* eslint-enable */