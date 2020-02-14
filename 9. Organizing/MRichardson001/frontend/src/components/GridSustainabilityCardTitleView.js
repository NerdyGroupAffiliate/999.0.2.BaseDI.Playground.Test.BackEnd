/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class GridSustainabilityCardTitleView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GridSustainabilityCardTitleController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GridSustainabilityCardTitleView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== GridSustainabilityCardTitleView ? transformProxies(this.props.children) : {
      'title': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-initiative-grid-block">
            <div className="af-class-initiative-header-block af-class-highlight">
              {map(proxies['title'], props => <h2 {...{...props, className: `af-class-initiative-grid-big-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Sustainability Certifications</React.Fragment>}</h2>)}
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default GridSustainabilityCardTitleView

/* eslint-enable */