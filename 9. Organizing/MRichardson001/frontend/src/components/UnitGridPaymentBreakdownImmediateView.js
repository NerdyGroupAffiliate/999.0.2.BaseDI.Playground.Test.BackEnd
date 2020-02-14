/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import UnitGridPaymentBreakdownEntryView from './UnitGridPaymentBreakdownEntryView'


let Controller

class UnitGridPaymentBreakdownImmediateView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UnitGridPaymentBreakdownImmediateController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnitGridPaymentBreakdownImmediateView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== UnitGridPaymentBreakdownImmediateView ? transformProxies(this.props.children) : {
      'title': [],
      'unitGridPaymentBreakdownEntryViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-payment-detail-content af-class-div-block-383">
            {map(proxies['title'], props => <div {...{...props, className: `af-class-payment-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Due Immediately</React.Fragment>}</div>)}
            {map(proxies['unitGridPaymentBreakdownEntryViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
        </span>
      </React.Fragment>
    )
  }
}

export default UnitGridPaymentBreakdownImmediateView

/* eslint-enable */