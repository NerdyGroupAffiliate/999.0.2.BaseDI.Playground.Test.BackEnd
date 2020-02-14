/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class UnitAddonStorageEntryView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UnitAddonStorageEntryController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnitAddonStorageEntryView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== UnitAddonStorageEntryView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
      'value': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-lease-option af-class-button-style af-class-margin-bottom ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['title'], props => <div {...{...props, className: `af-class-text-block-84 af-class-padding-left ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>One time fee</React.Fragment>}</div>)}
            {map(proxies['value'], props => <div {...{...props, className: `af-class-text-block-83 af-class-padding-right ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$350 / per pet</React.Fragment>}</div>)}
            <div className="af-class-div-block-277" />
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default UnitAddonStorageEntryView

/* eslint-enable */