/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ImageView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ImageController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ImageView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ImageView ? transformProxies(this.props.children) : {
      'header-image': [],
      'header-title': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['header-image'], props => <header {...{...props, className: `af-class-about-page-header af-class-corporate-gov ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['header-title'], props => <h1 {...{...props, className: `af-class-heading-13 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Corporate Governance</React.Fragment>}</h1>)}
          </React.Fragment>)}</header>)}
        </span>
      </React.Fragment>
    )
  }
}

export default ImageView

/* eslint-enable */