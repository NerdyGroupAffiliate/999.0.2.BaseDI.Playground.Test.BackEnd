/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class GridSocialCardView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GridSocialCardController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GridSocialCardView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== GridSocialCardView ? transformProxies(this.props.children) : {
      'wrapper': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-div-block-458">{map(proxies['wrapper'], props => <a href="/#" {...{...props, className: `af-class-link-block-10 w-inline-block ${props.className || ''}`}}>{props.children}</a>)}</div>
        </span>
      </React.Fragment>
    )
  }
}

export default GridSocialCardView

/* eslint-enable */