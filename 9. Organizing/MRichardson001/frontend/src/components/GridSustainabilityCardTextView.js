/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class GridSustainabilityCardTextView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GridSustainabilityCardTextController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GridSustainabilityCardTextView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== GridSustainabilityCardTextView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
      'text': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-initiative-grid-block">
            {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-initiative-descriptive-block af-class-highlight ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['title'], props => <div {...{...props, className: `af-class-initiative-block-small-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Solar &amp; Renewable Energy</React.Fragment>}</div>)}
              {map(proxies['text'], props => <div {...{...props, className: `af-class-paragraph af-class-light ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI is producing onsite, renewable energy at AMLI Campion Trail, AMLI West Plano, AMLI at the Ballpark and AMLI Frisco Crossing.<br /><br />AMLI communities in Dallas and Texas purchase 100% renewable energy for common area spaces.</React.Fragment>}</div>)}
            </React.Fragment>)}</div>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default GridSustainabilityCardTextView

/* eslint-enable */