/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class CommunityContactItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CommunityContactItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CommunityContactItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CommunityContactItemView ? transformProxies(this.props.children) : {
      'title': [],
      'address': [],
      'phone-tag': [],
      'phone': [],
      'fax-tag': [],
      'fax': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-contact--community-block">
            {map(proxies['title'], props => <h5 {...{...props, className: `af-class-heading-29 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Atlanta Office</React.Fragment>}</h5>)}
            {map(proxies['address'], props => <div {...{...props, className: `af-class-text-block-118 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>260 Peachtree St. NW, Suite 1700<br />Atlanta, GA 30303</React.Fragment>}</div>)}
            <div className="af-class-div-block-427">
              {map(proxies['phone-tag'], props => <div {...{...props, className: `af-class-text-block-119 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>P</React.Fragment>}</div>)}
              {map(proxies['phone'], props => <div {...{...props, className: `af-class-text-block-120 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>(770) 281 3300</React.Fragment>}</div>)}
            </div>
            <div className="af-class-div-block-427">
              {map(proxies['fax-tag'], props => <div {...{...props, className: `af-class-text-block-119 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>F</React.Fragment>}</div>)}
              {map(proxies['fax'], props => <div {...{...props, className: `af-class-text-block-120 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>(770) 281 3300</React.Fragment>}</div>)}
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default CommunityContactItemView

/* eslint-enable */