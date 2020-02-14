/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ValueListItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ValueListItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ValueListItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ValueListItemView ? transformProxies(this.props.children) : {
      'icon': [],
      'title': [],
      'description': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-value-list-item">{map(proxies['icon'], props => <img src="/images/icon--about-value3x.png" alt="" {...{...props, className: `af-class-image-6 ${props.className || ''}`}}>{props.children}</img>)}
            <div className="af-class-div-block-33">
              {map(proxies['title'], props => <div {...{...props, className: `af-class-value-list-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Quality</React.Fragment>}</div>)}
              {map(proxies['description'], props => <div {...{...props, className: `af-class-brand-value-description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI® is a brand name representing high quality, exceptional service and superior value. </React.Fragment>}</div>)}
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default ValueListItemView

/* eslint-enable */