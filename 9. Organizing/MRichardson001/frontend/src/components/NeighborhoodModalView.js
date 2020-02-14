/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import NeighborhoodPropertyView from './NeighborhoodPropertyView'


let Controller

class NeighborhoodModalView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NeighborhoodModalController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NeighborhoodModalView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== NeighborhoodModalView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'header-container': [],
      'name': [],
      'close': [],
      'explore': [],
      'neighborhoodPropertyViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-neighborhood-modal ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['header-container'], props => <div {...{...props, className: `af-class-neighbor-modal-header ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['name'], props => <div {...{...props, className: `af-class-text-block-126 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>South Loop</React.Fragment>}</div>)}{map(proxies['close'], props => <img src="/images/Filter-Opened.png" alt="" {...{...props, className: `af-class-image-58 ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</div>)}
            {map(proxies['explore'], props => <a href="/#" {...{...props, className: `af-class-neighbor-modal-cta w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div>Explore the Region</div><img src="/images/icon-arrow--right--blue.svg" alt="" className="af-class-image-57" /></React.Fragment>}</a>)}
            <div className="af-class-neighbor-modal-listings">
              <div className="af-class-section-title">properties</div>
              <ul className="w-list-unstyled">
                {map(proxies['neighborhoodPropertyViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</ul>
            </div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default NeighborhoodModalView

/* eslint-enable */