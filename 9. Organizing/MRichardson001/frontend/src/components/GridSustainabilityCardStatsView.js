/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class GridSustainabilityCardStatsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GridSustainabilityCardStatsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GridSustainabilityCardStatsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== GridSustainabilityCardStatsView ? transformProxies(this.props.children) : {
      'stat-one-value': [],
      'stat-one-label': [],
      'stat-two-value': [],
      'stat-two-label': [],
      'stat-three-value': [],
      'stat-three-label': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-initiative-grid-block">
            <div className="af-class-initiative-factoid-block af-class-no-image">
              <div className="af-class-div-block-402">
                {map(proxies['stat-one-value'], props => <div {...{...props, className: `af-class-benchmark-leed-level-number ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>30</React.Fragment>}</div>)}
                {map(proxies['stat-one-label'], props => <div {...{...props, className: `af-class-initiaive-block-fact ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Smoke-free Communities</React.Fragment>}</div>)}
              </div>
              <div className="af-class-div-block-402">
                {map(proxies['stat-two-value'], props => <div {...{...props, className: `af-class-benchmark-leed-level-number ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>100</React.Fragment>}</div>)}
                {map(proxies['stat-two-label'], props => <div {...{...props, className: `af-class-initiaive-block-fact ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>kw generated from our solar panel pilot</React.Fragment>}</div>)}
              </div>
              <div className="af-class-div-block-402">
                {map(proxies['stat-three-value'], props => <div {...{...props, className: `af-class-benchmark-leed-level-number ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>99</React.Fragment>}</div>)}
                {map(proxies['stat-three-label'], props => <div {...{...props, className: `af-class-initiaive-block-fact ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>annual energy savings from our led retrofit program</React.Fragment>}</div>)}
              </div>
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default GridSustainabilityCardStatsView

/* eslint-enable */