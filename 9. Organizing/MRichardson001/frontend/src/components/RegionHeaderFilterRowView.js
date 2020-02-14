/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class RegionHeaderFilterRowView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/RegionHeaderFilterRowController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = RegionHeaderFilterRowView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== RegionHeaderFilterRowView ? transformProxies(this.props.children) : {
      'min-value': [],
      'min-value-dot': [],
      'value-slider': [],
      'max-value': [],
      'max-value-dot': [],
      'min-housing': [],
      'min-housing-dot': [],
      'housing-slider': [],
      'max-housing': [],
      'max-housing-dot': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-filters-container">
            <div className="af-class-price-filter-container">
              <div className="af-class-filter-label">price</div>
              <div className="af-class-filter-content-container">
                <div className="af-class-filter-left-label">
                  {map(proxies['min-value'], props => <div {...{...props, className: `af-class-filter-option ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$1,257</React.Fragment>}</div>)}
                  {map(proxies['min-value-dot'], props => <div {...{...props, className: `af-class-circle--blue af-class-left ${props.className || ''}`}}>{props.children}</div>)}
                </div>
                {map(proxies['value-slider'], props => <div {...{...props, className: `af-class-filter-drag-line ${props.className || ''}`}}>{props.children}</div>)}
                <div className="af-class-filter-right-label">
                  {map(proxies['max-value'], props => <div {...{...props, className: `af-class-filter-option ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$4,589</React.Fragment>}</div>)}
                  {map(proxies['max-value-dot'], props => <div {...{...props, className: `af-class-circle--blue af-class-right ${props.className || ''}`}}>{props.children}</div>)}
                </div>
              </div>
            </div>
            <div className="af-class-border" />
            <div className="af-class-price-filter-container af-class-last-child">
              <div className="af-class-filter-label">bed</div>
              <div className="af-class-filter-content-container">
                <div className="af-class-filter-left-label">
                  {map(proxies['min-housing'], props => <div {...{...props, className: `af-class-filter-option ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Studio</React.Fragment>}</div>)}
                  {map(proxies['min-housing-dot'], props => <div {...{...props, className: `af-class-circle--blue af-class-left ${props.className || ''}`}}>{props.children}</div>)}
                </div>
                {map(proxies['housing-slider'], props => <div {...{...props, className: `af-class-filter-drag-line ${props.className || ''}`}}>{props.children}</div>)}
                <div className="af-class-filter-right-label">
                  {map(proxies['max-housing'], props => <div {...{...props, className: `af-class-filter-option ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>3</React.Fragment>}</div>)}
                  {map(proxies['max-housing-dot'], props => <div {...{...props, className: `af-class-circle--blue af-class-right ${props.className || ''}`}}>{props.children}</div>)}
                </div>
              </div>
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default RegionHeaderFilterRowView

/* eslint-enable */