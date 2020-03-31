/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class UnitAddonPetsEntryView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UnitAddonPetsEntryController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnitAddonPetsEntryView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== UnitAddonPetsEntryView ? transformProxies(this.props.children) : {
      'label': [],
      'value': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-div-block-276">
            {map(proxies['label'], props => <div {...{...props, className: `af-class-text-block-84 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>One time fee</React.Fragment>}</div>)}
            {map(proxies['value'], props => <div {...{...props, className: `af-class-text-block-83 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$350 / per pet</React.Fragment>}</div>)}
            <div className="af-class-div-block-277" />
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default UnitAddonPetsEntryView

/* eslint-enable */