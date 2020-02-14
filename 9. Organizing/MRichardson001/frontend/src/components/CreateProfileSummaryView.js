/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class CreateProfileSummaryView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CreateProfileSummaryController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CreateProfileSummaryView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CreateProfileSummaryView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
      'floorplan-label': [],
      'floorplan-value': [],
      'unit-label': [],
      'unit-value': [],
      'image': [],
      'beds': [],
      'baths': [],
      'sqft': [],
      'floor': [],
      'lease-label': [],
      'lease-value': [],
      'movein-label': [],
      'movein-value': [],
      'monthly-label': [],
      'monthly-value': [],
      'expiration-title': [],
      'expiration-1': [],
      'expiration-2': [],
      'community': [],
      'community-image': [],
      'community-name': [],
      'community-address': [],
      'community-phone': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-div-block-313 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-create-profile-home-container">
              {map(proxies['title'], props => <h2 {...{...props, className: `af-class-heading-24 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Your Apartment</React.Fragment>}</h2>)}
              <div className="af-class-floorplan-card-profile">
                <div className="af-class-floorplan-card-content">
                  <div className="af-class-div-block-272">
                    <div className="af-class-floorplan-card-header-col af-class-left-aligned">
                      {map(proxies['floorplan-label'], props => <div {...{...props, className: `af-class-floorplan-card-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Floorplan</React.Fragment>}</div>)}
                      {map(proxies['floorplan-value'], props => <div {...{...props, className: `af-class-floorplan-card-bold-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>E210</React.Fragment>}</div>)}
                    </div>
                    <div className="af-class-floorplan-card-header-col af-class-right-aligned">
                      {map(proxies['unit-label'], props => <div {...{...props, className: `af-class-floorplan-card-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Unit</React.Fragment>}</div>)}
                      {map(proxies['unit-value'], props => <div {...{...props, className: `af-class-floorplan-card-bold-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Polk - 916</React.Fragment>}</div>)}
                    </div>
                  </div>
                  <div className="af-class-floorplan-card-image-col af-class-profile">{map(proxies['image'], props => <img src="/images/Studio2x.png" alt="" {...{...props, className: `af-class-floorplan-card-preview ${props.className || ''}`}}>{props.children}</img>)}</div>
                  <div className="af-class-card-details-row">
                    <div className="af-class-floorplan-card-col af-class-profile">
                      {map(proxies['beds'], props => <div {...{...props, className: `af-class-floorplan-card-profile-col-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1 Bedrooms</React.Fragment>}</div>)}
                    </div>
                    <div className="af-class-floorplan-card-col af-class-no-border-right af-class-profile">
                      {map(proxies['baths'], props => <div {...{...props, className: `af-class-floorplan-card-profile-col-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1 Bath</React.Fragment>}</div>)}
                    </div>
                    <div className="af-class-floorplan-card-col af-class-border-top af-class-profile">
                      {map(proxies['sqft'], props => <div {...{...props, className: `af-class-floorplan-card-profile-col-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>695 sqft</React.Fragment>}</div>)}
                    </div>
                    <div className="af-class-floorplan-card-col af-class-last-col af-class-border-top af-class-profile">
                      {map(proxies['floor'], props => <div {...{...props, className: `af-class-floorplan-card-profile-col-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>4th Floor</React.Fragment>}</div>)}
                    </div>
                  </div>
                  <div className="af-class-card-details-row af-class-padded">
                    <div className="af-class-floorplan-card-col af-class-profile af-class-no-padding">
                      {map(proxies['lease-label'], props => <div {...{...props, className: `af-class-floorplan-card-col-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lease Length</React.Fragment>}</div>)}
                      {map(proxies['lease-value'], props => <div {...props}>{props.children ? props.children : <React.Fragment>13 Months</React.Fragment>}</div>)}
                    </div>
                    <div className="af-class-floorplan-card-col af-class-border-top af-class-profile af-class-no-padding">
                      {map(proxies['movein-label'], props => <div {...{...props, className: `af-class-floorplan-card-col-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Move-in Date</React.Fragment>}</div>)}
                      {map(proxies['movein-value'], props => <div {...props}>{props.children ? props.children : <React.Fragment>03/28/19</React.Fragment>}</div>)}
                    </div>
                    <div className="af-class-floorplan-card-col af-class-last-col af-class-border-top af-class-profile af-class-no-padding">
                      {map(proxies['monthly-label'], props => <div {...{...props, className: `af-class-floorplan-card-col-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Monthly Payment</React.Fragment>}</div>)}
                      {map(proxies['monthly-value'], props => <div {...{...props, className: `af-class-floorplan-card-bold-price ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$2,019</React.Fragment>}</div>)}
                    </div>
                  </div>
                </div>
              </div>
              {map(proxies['expiration-title'], props => <div {...{...props, className: `af-class-lozenge--expired ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This quote expires in 48 hours</React.Fragment>}</div>)}
              {map(proxies['expiration-1'], props => <p {...{...props, className: `af-class-paragraph af-class-small ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>To get this price, you must lease the apartment before the expiration date. A quote does not reserve a specific apartment home. Please visit our leasing office during business hours before your quote expires. </React.Fragment>}</p>)}
              {map(proxies['expiration-2'], props => <p {...{...props, className: `af-class-paragraph af-class-small ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>If there is any way we may further assist you or if you have any questions, please contact AMLI Lofts. &nbsp;</React.Fragment>}</p>)}
              {map(proxies['community'], props => <div {...{...props, className: `af-class-community-placard ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['community-image'], props => <div {...{...props, className: `af-class-div-block-317 ${props.className || ''}`}}>{props.children}</div>)}
                <div className="af-class-div-block-318">
                  {map(proxies['community-name'], props => <div {...{...props, className: `af-class-text-block-93 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI at Eldridge on Parkway</React.Fragment>}</div>)}{map(proxies['community-address'], props => <a href="/#" {...{...props, className: `af-class-link-3 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>850 S Clarke St<br />Chicago, IL 60605</React.Fragment>}</a>)}{map(proxies['community-phone'], props => <a href="/#" {...{...props, className: `af-class-link-4 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1 (888) 331-3172</React.Fragment>}</a>)}</div>
              </React.Fragment>)}</div>)}
            </div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default CreateProfileSummaryView

/* eslint-enable */