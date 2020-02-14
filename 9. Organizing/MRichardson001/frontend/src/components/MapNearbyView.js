/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class MapNearbyView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/MapNearbyController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = MapNearbyView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== MapNearbyView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'restaurants': [],
      'groceries': [],
      'shopping': [],
      'entertainment': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-sub-region-map-poi-bar-wrapper ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['restaurants'], props => <div id="w-node-24297faa08b6-b00fa005" {...{...props, className: `af-class-map-poi-column ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/Restaurants3x.png" alt="" className="af-class-map-poi-icon" />
              <div className="af-class-map-poi-label">Restaurants</div>
            </React.Fragment>}</div>)}
            {map(proxies['groceries'], props => <div id="w-node-14a336dcbcd3-b00fa005" {...{...props, className: `af-class-map-poi-column ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/Groceries3x.png" alt="" className="af-class-map-poi-icon" />
              <div className="af-class-map-poi-label">Groceries</div>
            </React.Fragment>}</div>)}
            {map(proxies['shopping'], props => <div id="w-node-fbc54c333def-b00fa005" {...{...props, className: `af-class-map-poi-column ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/Shopping3x.png" alt="" className="af-class-map-poi-icon" />
              <div className="af-class-map-poi-label">Shopping</div>
            </React.Fragment>}</div>)}
            {map(proxies['entertainment'], props => <div id="w-node-eb5e826539aa-b00fa005" {...{...props, className: `af-class-map-poi-column af-class-last-child ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/Entertainment3x.png" alt="" className="af-class-map-poi-icon" />
              <div className="af-class-map-poi-label">Entertainment</div>
            </React.Fragment>}</div>)}
            <div className="af-class-text-block-26">Whats Nearby</div>
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 922px) and (max-width: 1160px) {\n  .af-class-sub-region-map-poi-bar-wrapper {\n display: inline-flex;\n}\n  .af-class-map-poi-icon {\n  padding-right: 0;\n  width: 25px;\n }\n   .af-class-map-poi-label {\n   font-size: 12px!important;\n   margin-left: 8px;\n  }\n   .af-class-map-poi-column {\n   padding-left: 15px;\n   padding-right: 15px;\n }\n}\n" }} />
            </div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default MapNearbyView

/* eslint-enable */