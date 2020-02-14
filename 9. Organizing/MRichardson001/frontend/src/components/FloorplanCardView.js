/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class FloorplanCardView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FloorplanCardController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FloorplanCardView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FloorplanCardView ? transformProxies(this.props.children) : {
      'floorplan-card-container': [],
      'card-header': [],
      'floorplan-name': [],
      'starting': [],
      'floorplan-price': [],
      'floorplan-image': [],
      'floorplan-bedrooms-text': [],
      'floorplan-bathrooms-text': [],
      'floorplan-sqft-min': [],
      'floorplan-sqft-max': [],
      'floorplan-button': [],
      'floorplan-button-text': [],
      'floorplan-button-arrow': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-property-floorplan-card-col">
            {map(proxies['floorplan-card-container'], props => <div {...{...props, className: `af-class-property-floorplan-card ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['card-header'], props => <div {...{...props, className: `af-class-property-floorplan-card-header ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-property-floorplan-header-col">
                  {map(proxies['floorplan-name'], props => <div {...{...props, className: `af-class-property-floorplan-large-text ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Clark</React.Fragment>}</div>)}
                </div>
                <div className="af-class-property-floorplan-header-col af-class-right-col">
                  {map(proxies['starting'], props => <div {...{...props, className: `af-class-property-floorplan-card-small-text ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>starting at</React.Fragment>}</div>)}
                  {map(proxies['floorplan-price'], props => <div {...{...props, className: `af-class-property-floorplan-large-text ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$1,460</React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</div>)}{map(proxies['floorplan-image'], props => <img src="/images/Studio2x.png" alt="" {...{...props, className: `af-class-floor-plan-image ${props.className || ''}`}}>{props.children}</img>)}
              <div className="af-class-property-floorplan-details">
                <div className="af-class-property-floorplan-feat-col af-class-first-child"><img src="/images/Bedroom3x.png" alt="" className="af-class-property-floorplan-icon" />
                  {map(proxies['floorplan-bedrooms-text'], props => <div {...props}>{props.children ? props.children : <React.Fragment>Studio</React.Fragment>}</div>)}
                </div>
                <div className="af-class-property-floorplan-feat-col"><img src="/images/Bath3x.png" alt="" className="af-class-property-floorplan-icon" />
                  {map(proxies['floorplan-bathrooms-text'], props => <div {...props}>{props.children ? props.children : <React.Fragment>1 Bath</React.Fragment>}</div>)}
                </div>
              </div>
              <div className="af-class-property-floorplan-size-row">
                {map(proxies['floorplan-sqft-min'], props => <div {...{...props, className: `af-class-floorplan-card-sqft-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>782</React.Fragment>}</div>)}<img src="/images/icon-arrow--long--right--dark3x.png" alt="" className="af-class-property-floorplan-size-arrow" />
                {map(proxies['floorplan-sqft-max'], props => <div {...{...props, className: `af-class-floorplan-card-sqft-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1025</React.Fragment>}</div>)}
                <div className="af-class-floorplan-card-sqft-label">sqft</div>
              </div>
              {map(proxies['floorplan-button'], props => <div {...{...props, className: `af-class-property-floorplan-cta-row ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['floorplan-button-text'], props => <div {...{...props, className: `af-class-property-floorplan-card-cta-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>View Floorplans</React.Fragment>}</div>)}{map(proxies['floorplan-button-arrow'], props => <img src="/images/icon-arrow--right--blue.svg" alt="" {...props}>{props.children}</img>)}</React.Fragment>)}</div>)}
            </React.Fragment>)}</div>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default FloorplanCardView

/* eslint-enable */