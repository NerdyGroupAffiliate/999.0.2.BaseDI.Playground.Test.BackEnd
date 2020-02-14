/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class RegionNeighborhoodView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/RegionNeighborhoodController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = RegionNeighborhoodView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== RegionNeighborhoodView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
      'subtitle': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-lozenge--neighborhood ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        <img src="/images/icon-neighborhood3x_1.png" alt="" className="af-class-image-5" />
            <div className="af-class-map--neighborhood-label-wrapper">
              {map(proxies['title'], props => <div {...{...props, className: `af-class-text-block-2 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Neighborhood</React.Fragment>}</div>)}
              {map(proxies['subtitle'], props => <div {...{...props, className: `af-class-text-block-3 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>North Aurora</React.Fragment>}</div>)}
            </div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default RegionNeighborhoodView

/* eslint-enable */