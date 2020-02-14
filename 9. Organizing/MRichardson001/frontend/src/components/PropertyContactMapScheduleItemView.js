/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyContactMapScheduleItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyContactMapScheduleItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyContactMapScheduleItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyContactMapScheduleItemView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
      'value': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-property-contact-detail-col ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['title'], props => <div {...{...props, className: `af-class-property-contact-detail-col-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>mon-sat</React.Fragment>}</div>)}
            {map(proxies['value'], props => <div {...{...props, className: `af-class-property-contact-detail-col-detail ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>10AM - 6PM</React.Fragment>}</div>)}
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyContactMapScheduleItemView

/* eslint-enable */