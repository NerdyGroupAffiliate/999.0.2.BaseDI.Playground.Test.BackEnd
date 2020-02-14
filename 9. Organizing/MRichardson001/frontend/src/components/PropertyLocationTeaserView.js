/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyLocationTeaserView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyLocationTeaserController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyLocationTeaserView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyLocationTeaserView ? transformProxies(this.props.children) : {
      'map-background': [],
      'textbox-wrapper': [],
      'location': [],
      'tagline': [],
      'link-wrapper': [],
      'view-location': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['map-background'], props => <section {...{...props, className: `af-class-property-location-teaser ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-div-block-332">
              {map(proxies['textbox-wrapper'], props => <div {...{...props, className: `af-class-div-block-333 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['location'], props => <h2 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Location</React.Fragment>}</h2>)}
                {map(proxies['tagline'], props => <div {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Check out what's nearby.</React.Fragment>}</div>)}
                {map(proxies['link-wrapper'], props => <a href="/#" {...{...props, className: `af-class-link-block-4 w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['view-location'], props => <div {...{...props, className: `af-class-text-block-134 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>View Location</React.Fragment>}</div>)}<img src="/images/long-arrow-amli-blue.png" alt="" className="af-class-image-63" /></React.Fragment>)}</a>)}
              </React.Fragment>)}</div>)}
            </div>
          </React.Fragment>)}</section>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyLocationTeaserView

/* eslint-enable */