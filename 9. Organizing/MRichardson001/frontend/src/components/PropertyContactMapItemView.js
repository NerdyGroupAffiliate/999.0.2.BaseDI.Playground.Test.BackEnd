/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyContactMapItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyContactMapItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyContactMapItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyContactMapItemView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'image': [],
      'label': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-property-contact-social-col ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['image'], props => <img src="/images/instagram3x_1.png" alt="" {...{...props, className: `af-class-image-49 ${props.className || ''}`}}>{props.children}</img>)}
            {map(proxies['label'], props => <div {...{...props, className: `af-class-text-block-115 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>@AMLILofts</React.Fragment>}</div>)}
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyContactMapItemView

/* eslint-enable */