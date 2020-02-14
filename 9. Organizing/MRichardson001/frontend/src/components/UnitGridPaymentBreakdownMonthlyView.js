/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import UnitGridPaymentBreakdownEntryView from './UnitGridPaymentBreakdownEntryView'


let Controller

class UnitGridPaymentBreakdownMonthlyView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UnitGridPaymentBreakdownMonthlyController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnitGridPaymentBreakdownMonthlyView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== UnitGridPaymentBreakdownMonthlyView ? transformProxies(this.props.children) : {
      'title': [],
      'edit-addons': [],
      'unitGridPaymentBreakdownEntryViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-payment-detail-content af-class-monthly-payment-details">
            {map(proxies['title'], props => <div {...{...props, className: `af-class-payment-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Monthly Payment</React.Fragment>}</div>)}
            {map(proxies['unitGridPaymentBreakdownEntryViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}{map(proxies['edit-addons'], props => <div {...{...props, className: `af-class-link--text ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-arrow-left--chevron w-embed">
                {/*?xml version="1.0" encoding="UTF-8"?*/}
                <svg viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                  {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                  <title>ion-android-close - Ionicons</title>
                  <desc>Created with Sketch.</desc>
                  <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                    <g id="UI/Icons/Open" fill="#018094">
                      <polygon id="ion-android-close---Ionicons" points="12 1.17318436 6 7 0 1.17318436 1.20805369 0 6 4.65363128 10.7919463 0" />
                    </g>
                  </g>
                </svg></div>
              <div className="af-class-text-block-112">Edit Add-ons</div>
            </React.Fragment>}</div>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default UnitGridPaymentBreakdownMonthlyView

/* eslint-enable */