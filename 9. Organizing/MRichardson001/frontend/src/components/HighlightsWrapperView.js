/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import HighlightItemView from './HighlightItemView'


let Controller

class HighlightsWrapperView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/HighlightsWrapperController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = HighlightsWrapperView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== HighlightsWrapperView ? transformProxies(this.props.children) : {
      'highlightItemViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-div-block-147">
            {map(proxies['highlightItemViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
        </span>
      </React.Fragment>
    )
  }
}

export default HighlightsWrapperView

/* eslint-enable */