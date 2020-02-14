/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class UnitAddonItemEntryView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UnitAddonItemEntryController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnitAddonItemEntryView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== UnitAddonItemEntryView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
      'value': [],
      'unit-addon-selector': [],
      'minus-button': [],
      'quantity': [],
      'plus-button': [],
      'plus-icon': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-lease-option af-class-button-style af-class-margin-bottom af-class-selected ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-div-block-478">
              {map(proxies['title'], props => <div {...{...props, className: `af-class-text-block-84 af-class-padding-left af-class-selected ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Reserved Parking Deck Space</React.Fragment>}</div>)}
              {map(proxies['value'], props => <div {...{...props, className: `af-class-text-block-83 af-class-padding-right af-class-selected ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$50 / per pet</React.Fragment>}</div>)}
              <div className="af-class-div-block-277" />
            </div>
            {map(proxies['unit-addon-selector'], props => <div {...{...props, className: `af-class-counter ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['minus-button'], props => <div {...{...props, className: `af-class-div-block-279 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-div-block-280" />
              </React.Fragment>}</div>)}
              {map(proxies['quantity'], props => <div {...{...props, className: `af-class-text-block-85 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>2</React.Fragment>}</div>)}
              {map(proxies['plus-button'], props => <div {...{...props, className: `af-class-div-block-279 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['plus-icon'], props => <div {...{...props, className: `af-class-div-block-280 ${props.className || ''}`}}>{props.children}</div>)}
              </React.Fragment>)}</div>)}
            </React.Fragment>)}</div>)}
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default UnitAddonItemEntryView

/* eslint-enable */