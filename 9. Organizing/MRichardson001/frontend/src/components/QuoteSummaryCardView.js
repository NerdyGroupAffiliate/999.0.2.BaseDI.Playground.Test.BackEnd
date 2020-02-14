/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class QuoteSummaryCardView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/QuoteSummaryCardController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = QuoteSummaryCardView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== QuoteSummaryCardView ? transformProxies(this.props.children) : {
      'property': [],
      'property-image': [],
      'property-details': [],
      'property-name': [],
      'property-address': [],
      'property-phone': [],
      'floorplan-detials': [],
      'floorplan-name': [],
      'unit-name': [],
      'plant-image': [],
      'beds': [],
      'baths': [],
      'sqft': [],
      'floor': [],
      'quote-data-container': [],
      'lease-container': [],
      'lease-period': [],
      'move-in-container': [],
      'move-in-date': [],
      'monthly-container': [],
      'monthly': [],
      'details-container': [],
      'view-details-container': [],
      'view-details': [],
      'apply': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-quote-summary-unti-col">
            {map(proxies['property'], props => <div {...{...props, className: `af-class-community-placard af-class-margin-bottom ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['property-image'], props => <div {...{...props, className: `af-class-div-block-317 ${props.className || ''}`}}>{props.children}</div>)}
              {map(proxies['property-details'], props => <div {...{...props, className: `af-class-div-block-318 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['property-name'], props => <div {...{...props, className: `af-class-text-block-93 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI at Eldridge on Parkway</React.Fragment>}</div>)}{map(proxies['property-address'], props => <a href="/#" {...{...props, className: `af-class-link-3 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>850 S Clarke St<br />Chicago, IL 60605</React.Fragment>}</a>)}{map(proxies['property-phone'], props => <a href="/#" {...{...props, className: `af-class-link-4 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1 (888) 331-3172</React.Fragment>}</a>)}</React.Fragment>)}</div>)}
            </React.Fragment>)}</div>)}
            {map(proxies['floorplan-detials'], props => <div {...{...props, className: `af-class-floorplan-card-profile af-class-quote-summary af-class-available ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-floorplan-card-content">
                <div className="af-class-div-block-272">
                  <div className="af-class-floorplan-card-header-col af-class-left-aligned">
                    <div className="af-class-floorplan-card-label">Floorplan</div>
                    {map(proxies['floorplan-name'], props => <div {...{...props, className: `af-class-floorplan-card-bold-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>E210</React.Fragment>}</div>)}
                  </div>
                  <div className="af-class-floorplan-card-header-col af-class-right-aligned">
                    <div className="af-class-floorplan-card-label">Unit</div>
                    {map(proxies['unit-name'], props => <div {...{...props, className: `af-class-floorplan-card-bold-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Polk - 916</React.Fragment>}</div>)}
                  </div>
                </div>
                <div className="af-class-floorplan-card-image-col af-class-profile">{map(proxies['plant-image'], props => <img src="/images/Studio2x.png" alt="" {...{...props, className: `af-class-floorplan-card-preview ${props.className || ''}`}}>{props.children}</img>)}</div>
                <div className="af-class-card-details-row">
                  <div className="af-class-floorplan-card-col af-class-padded-small">
                    {map(proxies['beds'], props => <div {...{...props, className: `af-class-floorplan-card-profile-col-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1 Bedrooms</React.Fragment>}</div>)}
                  </div>
                  <div className="af-class-floorplan-card-col af-class-padded-small">
                    {map(proxies['baths'], props => <div {...{...props, className: `af-class-floorplan-card-profile-col-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1 Bath</React.Fragment>}</div>)}
                  </div>
                  <div className="af-class-floorplan-card-col af-class-padded-small">
                    {map(proxies['sqft'], props => <div {...{...props, className: `af-class-floorplan-card-profile-col-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>4,695 sqft</React.Fragment>}</div>)}
                  </div>
                  <div className="af-class-floorplan-card-col af-class-padded-small af-class-no-border">
                    {map(proxies['floor'], props => <div {...{...props, className: `af-class-floorplan-card-profile-col-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>4th Floor</React.Fragment>}</div>)}
                  </div>
                </div>
                {map(proxies['quote-data-container'], props => <div {...{...props, className: `af-class-card-details-row af-class-padded--large ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['lease-container'], props => <div {...{...props, className: `af-class-floorplan-card-col ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    <div className="af-class-div-block-442">
                      <div className="af-class-floorplan-card-col-label">Lease Length</div>
                      {map(proxies['lease-period'], props => <div {...props}>{props.children ? props.children : <React.Fragment>13 Months</React.Fragment>}</div>)}
                    </div>
                  </React.Fragment>)}</div>)}
                  {map(proxies['move-in-container'], props => <div {...{...props, className: `af-class-floorplan-card-col af-class-no-border af-class-center ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    <div className="af-class-div-block-442 af-class-center">
                      <div className="af-class-floorplan-card-col-label">Move-in Date</div>
                      {map(proxies['move-in-date'], props => <div {...props}>{props.children ? props.children : <React.Fragment>03/28/19</React.Fragment>}</div>)}
                    </div>
                  </React.Fragment>)}</div>)}
                  {map(proxies['monthly-container'], props => <div {...{...props, className: `af-class-floorplan-card-col af-class-border-left ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    <div className="af-class-div-block-442">
                      <div className="af-class-floorplan-card-col-label">Monthly payment</div>
                      {map(proxies['monthly'], props => <div {...props}>{props.children ? props.children : <React.Fragment>$1,297</React.Fragment>}</div>)}
                    </div>
                  </React.Fragment>)}</div>)}
                </React.Fragment>)}</div>)}
                {map(proxies['details-container'], props => <div {...{...props, className: `af-class-card-details-row af-class-padded--large ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['view-details-container'], props => <div {...{...props, className: `af-class-floorplan-card-col af-class-align-left ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    {map(proxies['view-details'], props => <div {...{...props, className: `af-class-link-text-w-icon ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <div className="af-class-link--text">View Quote Details</div><img src="/images/icon-arrow--right--blue.svg" alt="" className="af-class-image-56" /></React.Fragment>}</div>)}
                  </React.Fragment>)}</div>)}
                  <div className="af-class-floorplan-card-col af-class-no-border">{map(proxies['apply'], props => <a href="/#" {...{...props, className: `af-class-button-6 w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Apply</React.Fragment>}</a>)}</div>
                </React.Fragment>)}</div>)}
              </div>
            </React.Fragment>)}</div>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default QuoteSummaryCardView

/* eslint-enable */