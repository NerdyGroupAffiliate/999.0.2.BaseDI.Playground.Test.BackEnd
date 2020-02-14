/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import UnitGridPaymentBreakdownImmediateView from './UnitGridPaymentBreakdownImmediateView'
import UnitGridPaymentBreakdownMonthlyView from './UnitGridPaymentBreakdownMonthlyView'


let Controller

class UnitGridPaymentBreakdownView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UnitGridPaymentBreakdownController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnitGridPaymentBreakdownView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== UnitGridPaymentBreakdownView ? transformProxies(this.props.children) : {
      'payment-title': [],
      'payment-hide-button': [],
      'payment-hide-button-label': [],
      'payment-hide-button-arrow': [],
      'payment-breakdown-details': [],
      'payment-due-immediately': [],
      'payment-monthly': [],
      'unitGridPaymentBreakdownImmediateViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-lease-step-wrap af-class-last-child">
            <div className="af-class-grid-step-wrapper af-class-payment-breakdown">
              {map(proxies['payment-title'], props => <div {...{...props, className: `af-class-grid-step-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>3. Payment Breakdown</React.Fragment>}</div>)}
              {map(proxies['payment-hide-button'], props => <div {...{...props, className: `af-class-lozenge-hide ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['payment-hide-button-label'], props => <div {...props}>{props.children ? props.children : <React.Fragment>Hide</React.Fragment>}</div>)}
                {map(proxies['payment-hide-button-arrow'], props => <div {...{...props, className: `af-class-arrow-down--chevron w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  {/*?xml version="1.0" encoding="UTF-8"?*/}
                  <svg viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                    <title>ion-android-close - Ionicons</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g id="UI/Icons/Open" fill="#fff">
                        <polygon id="ion-android-close---Ionicons" points="12 1.17318436 6 7 0 1.17318436 1.20805369 0 6 4.65363128 10.7919463 0" />
                      </g>
                    </g>
                  </svg></React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}
            </div>
            {map(proxies['payment-breakdown-details'], props => <div {...{...props, className: `af-class-payment-breakdown-wrap ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['payment-due-immediately'], props => <div {...{...props, className: `af-class-div-block-384 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                {map(proxies['unitGridPaymentBreakdownImmediateViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</React.Fragment>}</div>)}
              {map(proxies['payment-monthly'], props => <div {...{...props, className: `af-class-div-block-384 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <UnitGridPaymentBreakdownMonthlyView.Controller {...this.props} />
              </React.Fragment>}</div>)}
            </React.Fragment>)}</div>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default UnitGridPaymentBreakdownView

/* eslint-enable */