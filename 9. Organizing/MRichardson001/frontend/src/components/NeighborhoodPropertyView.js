/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class NeighborhoodPropertyView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NeighborhoodPropertyController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NeighborhoodPropertyView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== NeighborhoodPropertyView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'link': [],
      'name': [],
      'configuration': [],
      'pricing': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <li {...{...props, className: `af-class-list-item-8 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['link'], props => <a href="/#" {...{...props, className: `af-class-link-block-7 w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['name'], props => <h5 {...{...props, className: `af-class-heading-32 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI at Seven Bridges</React.Fragment>}</h5>)}
              <div className="af-class-div-block-443">
                {map(proxies['configuration'], props => <div {...{...props, className: `af-class-text-block-127 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Studio - 3 Bedrooms</React.Fragment>}</div>)}
                {map(proxies['pricing'], props => <div {...{...props, className: `af-class-text-block-128 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>from $1,403</React.Fragment>}</div>)}
              </div>
            </React.Fragment>)}</a>)}
          </React.Fragment>)}</li>)}
        </span>
      </React.Fragment>
    )
  }
}

export default NeighborhoodPropertyView

/* eslint-enable */