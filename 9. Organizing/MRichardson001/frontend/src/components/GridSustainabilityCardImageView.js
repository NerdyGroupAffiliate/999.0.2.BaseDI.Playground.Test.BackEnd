/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class GridSustainabilityCardImageView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GridSustainabilityCardImageController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GridSustainabilityCardImageView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== GridSustainabilityCardImageView ? transformProxies(this.props.children) : {
      'image': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-initiative-grid-block">
            {map(proxies['image'], props => <div {...{...props, className: `af-class-initiative-grid-image-block ${props.className || ''}`}}>{props.children}</div>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default GridSustainabilityCardImageView

/* eslint-enable */