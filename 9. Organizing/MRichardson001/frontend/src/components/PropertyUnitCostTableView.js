/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import PropertyUnitCostTableItemView from './PropertyUnitCostTableItemView'


let Controller

class PropertyUnitCostTableView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyUnitCostTableController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyUnitCostTableView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyUnitCostTableView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
      'total-label': [],
      'total-value': [],
      'propertyUnitCostTableItemViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...props}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['title'], props => <div {...{...props, className: `af-class-floorplan-unit-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Upfront Costs</React.Fragment>}</div>)}
            <ul className="af-class-unordered-list-4 w-list-unstyled">
              {map(proxies['propertyUnitCostTableItemViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</ul>
            <div className="af-class-div-block-236">
              {map(proxies['total-label'], props => <div {...props}>{props.children ? props.children : <React.Fragment>Upfront Cost</React.Fragment>}</div>)}
              {map(proxies['total-value'], props => <div {...props}>{props.children ? props.children : <React.Fragment>$700</React.Fragment>}</div>)}
            </div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyUnitCostTableView

/* eslint-enable */