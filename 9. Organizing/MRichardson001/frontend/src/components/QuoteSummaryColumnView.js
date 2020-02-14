/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import QuoteSummaryColumnItemView from './QuoteSummaryColumnItemView'
import QuoteDetailsColumnPaymentSummaryView from './QuoteDetailsColumnPaymentSummaryView'


let Controller

class QuoteSummaryColumnView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/QuoteSummaryColumnController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = QuoteSummaryColumnView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== QuoteSummaryColumnView ? transformProxies(this.props.children) : {
      'details-list': [],
      'apply': [],
      'tabs-container': [],
      'tabs': [],
      'quoteSummaryColumnItemViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-quote-summary-details-col">
            <div className="af-class-div-block-397">
              {map(proxies['details-list'], props => <ul {...{...props, className: `af-class-quote-details-list w-list-unstyled ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                {map(proxies['quoteSummaryColumnItemViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</React.Fragment>}</ul>)}{map(proxies['apply'], props => <a href="/#" {...{...props, className: `af-class-quote-summary-apply-btn ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Apply</React.Fragment>}</a>)}</div>
            {map(proxies['tabs-container'], props => <div {...{...props, className: `af-class-div-block-394 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-div-block-395">
                <div className="af-class-tabbed-content-wrap">
                  {map(proxies['tabs'], props => <div {...{...props, className: `af-class-tab-labels-wrap ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <div className="af-class-tab-header af-class-active af-class-small" style={{marginBottom: 0, paddingBottom: 0}}>Payment Summary</div>
                  <div className="af-class-div-block-203"/>
                  </React.Fragment>}</div>)}
                  <QuoteDetailsColumnPaymentSummaryView.Controller {...this.props} />
                </div>
              </div>
            </React.Fragment>)}</div>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default QuoteSummaryColumnView

/* eslint-enable */
