/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class HighlightWithPictureItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/HighlightWithPictureItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = HighlightWithPictureItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== HighlightWithPictureItemView ? transformProxies(this.props.children) : {
      'highlight-text': [],
      'background-circle': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <li className="af-class-list-item-6">
            {map(proxies['highlight-text'], props => <div {...{...props, className: `af-class-text-block-105 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Location-proximity to the loop, retail, restaurants, public transit, highways, schools, Medical District, etc.</React.Fragment>}</div>)}
            {map(proxies['background-circle'], props => <div {...{...props, className: `af-class-div-block-365 ${props.className || ''}`}}>{props.children}</div>)}
          </li>
        </span>
      </React.Fragment>
    )
  }
}

export default HighlightWithPictureItemView

/* eslint-enable */