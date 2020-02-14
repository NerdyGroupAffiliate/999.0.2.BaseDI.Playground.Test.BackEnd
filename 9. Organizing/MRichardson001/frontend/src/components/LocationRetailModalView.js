/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class LocationRetailModalView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/LocationRetailModalController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = LocationRetailModalView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== LocationRetailModalView ? transformProxies(this.props.children) : {
      'retail-modal-wrapper': [],
      'logo': [],
      'address': [],
      'description': [],
      'website': [],
      'close': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['retail-modal-wrapper'], props => <div {...{...props, className: `af-class-locations-map-retail-modal ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-locations-map-retail-modal-top-section">{map(proxies['logo'], props => <img src="/images/orange-theory-fitness3x.png" srcSet="images/orange-theory-fitness3x-p-500.png 500w, images/orange-theory-fitness3x.png 609w" sizes="100vw" alt="" {...props}>{props.children}</img>)}
              {map(proxies['address'], props => <div {...{...props, className: `af-class-map-retail-modal-address ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1525 Lake Cook Rd<br />Deerfield, IL 60015</React.Fragment>}</div>)}
            </div>
            <div className="af-class-locations-map-retail-modal-bottom-section">
              {map(proxies['description'], props => <div {...{...props, className: `af-class-locations-modal-description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>20% off the first cleaning to all residents. Free fridge and oven cleaning to recurring biweekly customers (once per 6 months).</React.Fragment>}</div>)}
              {map(proxies['website'], props => <div {...{...props, className: `af-class-div-block-423 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-text-block-116">View Website</div><img src="/images/arrow-chevron-orange.png" alt="" className="af-class-locations-mapmodal-chevron" /></React.Fragment>}</div>)}
            </div>
            {map(proxies['close'], props => <div {...{...props, className: `af-class-div-block-426 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/icon-close-button3x.png" alt="" className="af-class-image-50" /></React.Fragment>}</div>)}
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default LocationRetailModalView

/* eslint-enable */