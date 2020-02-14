/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import PropertyUnitCostTableView from './PropertyUnitCostTableView'


let Controller

class PropertyUnitCostsContainerView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyUnitCostsContainerController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyUnitCostsContainerView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyUnitCostsContainerView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'get-quote': [],
      'propertyUnitCostTableViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-div-block-235 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['propertyUnitCostTableViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}{map(proxies['get-quote'], props => <a href="/floor-plan-the-grid" {...{...props, className: `af-class-button-5 w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Get Quote</React.Fragment>}</a>)}</React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyUnitCostsContainerView

/* eslint-enable */