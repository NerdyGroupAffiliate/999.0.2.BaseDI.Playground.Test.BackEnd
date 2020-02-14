/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class FloorplanPoliciesItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FloorplanPoliciesItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FloorplanPoliciesItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FloorplanPoliciesItemView ? transformProxies(this.props.children) : {
      'title': [],
      'price': [],
      'body': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-tab-content-details-row">
            <div className="af-class-div-block-204">
              {map(proxies['title'], props => <div {...{...props, className: `af-class-tabbed-breakdown-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Appplication</React.Fragment>}</div>)}
              <div className="af-class-tabbed-content-dotted-line" />
              {map(proxies['price'], props => <div {...{...props, className: `af-class-tabbed-breakdown-price ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$50</React.Fragment>}</div>)}
            </div>
            {map(proxies['body'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.</React.Fragment>}</p>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default FloorplanPoliciesItemView

/* eslint-enable */