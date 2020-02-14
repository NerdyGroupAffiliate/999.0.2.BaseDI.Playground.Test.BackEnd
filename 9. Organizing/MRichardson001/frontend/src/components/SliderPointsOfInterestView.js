/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SliderPointsOfInterestView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SliderPointsOfInterestController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SliderPointsOfInterestView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SliderPointsOfInterestView ? transformProxies(this.props.children) : {

    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-wrapper">
            <div className="af-class-container" />
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default SliderPointsOfInterestView

/* eslint-enable */