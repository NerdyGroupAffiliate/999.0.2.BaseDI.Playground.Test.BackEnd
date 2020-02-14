/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class QuoteSummaryColumnItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/QuoteSummaryColumnItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = QuoteSummaryColumnItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== QuoteSummaryColumnItemView ? transformProxies(this.props.children) : {
      'label': [],
      'value': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <li className="af-class-list-item-7">
            {map(proxies['label'], props => <div {...{...props, className: `af-class-list-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>lease length</React.Fragment>}</div>)}
            {map(proxies['value'], props => <div {...{...props, className: `af-class-floorplan-card-bold-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>13 Months</React.Fragment>}</div>)}
          </li>
        </span>
      </React.Fragment>
    )
  }
}

export default QuoteSummaryColumnItemView

/* eslint-enable */