/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyUnitCostTableItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyUnitCostTableItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyUnitCostTableItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyUnitCostTableItemView ? transformProxies(this.props.children) : {
      'title': [],
      'value': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <li className="af-class-list-item-2">
            {map(proxies['title'], props => <div {...{...props, className: `af-class-text-block-71 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Application</React.Fragment>}</div>)}
            <div className="af-class-div-block-234" />
            {map(proxies['value'], props => <div {...{...props, className: `af-class-text-block-72 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$50</React.Fragment>}</div>)}
          </li>
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyUnitCostTableItemView

/* eslint-enable */