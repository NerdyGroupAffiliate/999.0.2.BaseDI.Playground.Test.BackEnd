/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class HighlightItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/HighlightItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = HighlightItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== HighlightItemView ? transformProxies(this.props.children) : {
      'highlight-image': [],
      'highlight-title': [],
      'highlight-text': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-div-block-151">
            <div className="af-class-div-block-153">{map(proxies['highlight-image'], props => <img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" {...{...props, className: `af-class-image-25 ${props.className || ''}`}}>{props.children}</img>)}
              <div className="af-class-div-block-152" />
            </div>
            <div className="af-class-div-block-154">
              {map(proxies['highlight-title'], props => <h5 {...{...props, className: `af-class-heading-18 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Electric Car Charging Stations</React.Fragment>}</h5>)}
              {map(proxies['highlight-text'], props => <div {...{...props, className: `af-class-paragraph af-class-sustainable-feature ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</React.Fragment>}</div>)}
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default HighlightItemView

/* eslint-enable */