/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import QuoteDetailsColumnPaymentSectionView from './QuoteDetailsColumnPaymentSectionView'
import QuoteMonthlyRentLineView from './QuoteMonthlyRentLineView'


let Controller

class QuoteDetailsColumnPaymentSummaryView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/QuoteDetailsColumnPaymentSummaryController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = QuoteDetailsColumnPaymentSummaryView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== QuoteDetailsColumnPaymentSummaryView ? transformProxies(this.props.children) : {
      'active-tab': [],
      'monthly-summary-container': [],
      'edit-addons': [],
      'quoteDetailsColumnPaymentSectionViewList0': [],
      'quoteMonthlyRentLineViewList3': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['active-tab'], props => <div {...{...props, className: `af-class-active-tab-content-wrap ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-payment-breakdown-wrap af-class-vertical">
              <div className="af-class-div-block-384 af-class-full-width">
                {map(proxies['quoteDetailsColumnPaymentSectionViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
              {map(proxies['monthly-summary-container'], props => <div {...{...props, className: `af-class-div-block-384 af-class-full-width ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-payment-detail-content af-class-monthly-payment-details">
                  <div className="af-class-payment-title">Monthly Payment</div>
                  {map(proxies['quoteMonthlyRentLineViewList3'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}{map(proxies['edit-addons'], props => <div {...{...props, className: `af-class-link--text ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
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
              </React.Fragment>)}</div>)}
            </div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default QuoteDetailsColumnPaymentSummaryView

/* eslint-enable */