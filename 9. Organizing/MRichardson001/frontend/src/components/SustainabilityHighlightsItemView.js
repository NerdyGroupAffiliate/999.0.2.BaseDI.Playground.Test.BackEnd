/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SustainabilityHighlightsItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SustainabilityHighlightsItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SustainabilityHighlightsItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SustainabilityHighlightsItemView ? transformProxies(this.props.children) : {
      'text': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <li className="af-class-phase-1-sustainable-list-item">
            {map(proxies['text'], props => <div {...{...props, className: `af-class-text-block-100 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Sustainable Landscaping</React.Fragment>}</div>)}
          </li>
        </span>
      </React.Fragment>
    )
  }
}

export default SustainabilityHighlightsItemView

/* eslint-enable */