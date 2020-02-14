/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyPhaseOneTabView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyPhaseOneTabController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyPhaseOneTabView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyPhaseOneTabView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-div-block-331 af-class-current ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['title'], props => <div {...props}>{props.children ? props.children : <React.Fragment>Overview</React.Fragment>}</div>)}
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyPhaseOneTabView

/* eslint-enable */