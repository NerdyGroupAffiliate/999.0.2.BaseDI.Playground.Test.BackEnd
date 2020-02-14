/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class UnitGridStickySummaryBarView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UnitGridStickySummaryBarController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnitGridStickySummaryBarView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== UnitGridStickySummaryBarView ? transformProxies(this.props.children) : {
      'lease': [],
      'length-label': [],
      'length-value': [],
      'move-in': [],
      'move-in-label': [],
      'move-in-value': [],
      'monthly-rent': [],
      'monthly-rent-label': [],
      'monthly-rent-value': [],
      'save-quote': [],
      'apply': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-sticky-quote-summary-bar">
            <div className="af-class-sticky-quote-content">
              {map(proxies['lease'], props => <div {...{...props, className: `af-class-sticky-bar-detail-col ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['length-label'], props => <div {...{...props, className: `af-class-text-block-110 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lease Length</React.Fragment>}</div>)}
                {map(proxies['length-value'], props => <div {...{...props, className: `af-class-sticky-bar-col-value ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>12 Month</React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}
              {map(proxies['move-in'], props => <div {...{...props, className: `af-class-sticky-bar-detail-col ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['move-in-label'], props => <div {...{...props, className: `af-class-text-block-110 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Move-in Date</React.Fragment>}</div>)}
                {map(proxies['move-in-value'], props => <div {...{...props, className: `af-class-sticky-bar-col-value ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>01/14/19</React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}
              {map(proxies['monthly-rent'], props => <div {...{...props, className: `af-class-sticky-bar-detail-col af-class-no-border ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['monthly-rent-label'], props => <div {...{...props, className: `af-class-text-block-110 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Monthly Rent</React.Fragment>}</div>)}
                {map(proxies['monthly-rent-value'], props => <div {...{...props, className: `af-class-sticky-bar-col-value ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$2,105</React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}
              <div className="af-class-div-block-381">
                <div className="af-class-paragraph af-class-small af-class-fine-print">Need some time to decide? <br />Save this quote for 48 hours.</div>{map(proxies['save-quote'], props => <a href="/#" {...{...props, className: `af-class-save-quote w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Save Quote</React.Fragment>}</a>)}</div>{map(proxies['apply'], props => <a href="/floorplan-create-profile" {...{...props, className: `af-class-apply w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Apply</React.Fragment>}</a>)}</div>
            <div className="af-class-html-embed-31 w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 992px) and (max-width: 1150px) {\n   .af-class-sticky-quote-summary-bar {\n    width: 100%;\n }\n  .af-class-sticky-bar-detail-col {\n   padding: 0 20px;\n   width: 33%;\n }\n  .af-class-sticky-bar-col-value {\n font-size: 20px;\n }\n  .af-class-sticky-quote-content {\n   width: 95%;\n }\n}\n" }} />
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default UnitGridStickySummaryBarView

/* eslint-enable */