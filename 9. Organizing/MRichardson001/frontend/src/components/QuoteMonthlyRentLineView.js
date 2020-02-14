/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class QuoteMonthlyRentLineView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/QuoteMonthlyRentLineController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = QuoteMonthlyRentLineView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== QuoteMonthlyRentLineView ? transformProxies(this.props.children) : {
      'title': [],
      'value': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-div-block-276">
            {map(proxies['title'], props => <div {...{...props, className: `af-class-text-block-84 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Base Rent</React.Fragment>}</div>)}
            {map(proxies['value'], props => <div {...{...props, className: `af-class-text-block-83 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$1,640/mo.</React.Fragment>}</div>)}
            <div className="af-class-div-block-277" />
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default QuoteMonthlyRentLineView

/* eslint-enable */