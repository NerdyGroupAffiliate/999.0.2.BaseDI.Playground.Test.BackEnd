/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import RegionNeighborhoodView from './RegionNeighborhoodView'
import MapNearbyView from './MapNearbyView'
import PropertyModalView from './PropertyModalView'


let Controller

class RegionMapView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/RegionMapController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = RegionMapView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== RegionMapView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'zoom-in': [],
      'zoom-out': [],
      'property-pin': [],
      'title': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-map-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <RegionNeighborhoodView.Controller {...this.props} />
            <div className="af-class-map-zoom-controls-wrapper">{map(proxies['zoom-in'], props => <img src="/images/icon-map-zoom--in3x.png" alt="" {...{...props, className: `af-class-map ${props.className || ''}`}}>{props.children}</img>)}{map(proxies['zoom-out'], props => <img src="/images/icon-map-zoom--out3x.png.png" alt="" {...{...props, className: `af-class-map ${props.className || ''}`}}>{props.children}</img>)}</div>
            <MapNearbyView.Controller {...this.props} />
            <PropertyModalView.Controller {...this.props} />{map(proxies['property-pin'], props => <a href="/sub-region" {...{...props, className: `af-class-link-block-6 w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/icon-property3x.png" alt="" className="af-class-image-52" /></React.Fragment>}</a>)}
            {map(proxies['title'], props => <h1 {...{...props, className: `af-class-heading-2 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><span className="af-class-seo-title">Apartments</span>Chicago</React.Fragment>}</h1>)}
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default RegionMapView

/* eslint-enable */