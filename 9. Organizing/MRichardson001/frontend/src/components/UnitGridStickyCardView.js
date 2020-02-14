/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class UnitGridStickyCardView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UnitGridStickyCardController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnitGridStickyCardView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== UnitGridStickyCardView ? transformProxies(this.props.children) : {
      'floorplan-name': [],
      'unit-name': [],
      'unit-image': [],
      'unit-beds': [],
      'unit-baths': [],
      'unit-area': [],
      'unit-floor': [],
      'back-container': [],
      'back-label': [],
      'back-icon': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-sticky-card-column">
            <div className="af-class-floorplan-sticky-card">
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
                <div className="af-class-floorplan-card-image-col">{map(proxies['unit-image'], props => <img src="/images/Studio2x.png" alt="" {...{...props, className: `af-class-image-69 ${props.className || ''}`}}>{props.children}</img>)}</div>
                <div className="af-class-card-details-row">
                  <div className="af-class-floorplan-card-col">
                    {map(proxies['unit-beds'], props => <div {...props}>{props.children ? props.children : <React.Fragment>1 Bedrooms</React.Fragment>}</div>)}
                  </div>
                  <div className="af-class-floorplan-card-col af-class-no-border-right">
                    {map(proxies['unit-baths'], props => <div {...props}>{props.children ? props.children : <React.Fragment>1 Bath</React.Fragment>}</div>)}
                  </div>
                  <div className="af-class-floorplan-card-col af-class-border-top">
                    {map(proxies['unit-area'], props => <div {...props}>{props.children ? props.children : <React.Fragment>695 sqft</React.Fragment>}</div>)}
                  </div>
                  <div className="af-class-floorplan-card-col af-class-last-col af-class-border-top">
                    {map(proxies['unit-floor'], props => <div {...props}>{props.children ? props.children : <React.Fragment>4th Floor</React.Fragment>}</div>)}
                  </div>
                </div>
              </div>
              {map(proxies['back-container'], props => <div {...{...props, className: `af-class-floorplan-sticky-card-back-wrap ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['back-label'], props => <div {...{...props, className: `af-class-text-block-124 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Floorplans</React.Fragment>}</div>)}{map(proxies['back-icon'], props => <img src="/images/arrow--long-right.png" alt="" {...{...props, className: `af-class-image-55 ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</div>)}
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default UnitGridStickyCardView

/* eslint-enable */