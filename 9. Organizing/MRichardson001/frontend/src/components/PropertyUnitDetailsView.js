/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import PropertyUnitFeatureView from './PropertyUnitFeatureView'
import PropertyUnitCostsContainerView from './PropertyUnitCostsContainerView'


let Controller

class PropertyUnitDetailsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyUnitDetailsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyUnitDetailsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyUnitDetailsView ? transformProxies(this.props.children) : {
      'details': [],
      'features': [],
      'unit-features': [],
      'propertyUnitFeatureViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['details'], props => <div {...{...props, className: `af-class-floorplan-unit-details-wrapper ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['features'], props => <div {...{...props, className: `af-class-unit-feature-list-wrapper ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['unit-features'], props => <div {...{...props, className: `af-class-floorplan-unit-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Unit Features</React.Fragment>}</div>)}
              <ul className="af-class-unordered-list-3">
                {map(proxies['propertyUnitFeatureViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</ul>
            </React.Fragment>)}</div>)}
            <PropertyUnitCostsContainerView.Controller {...this.props} />
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyUnitDetailsView

/* eslint-enable */