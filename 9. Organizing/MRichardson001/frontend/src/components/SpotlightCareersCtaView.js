/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SpotlightCareersCtaView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SpotlightCareersCtaController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SpotlightCareersCtaView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SpotlightCareersCtaView ? transformProxies(this.props.children) : {
      'title': [],
      'link-url': [],
      'link-text': [],
      'link-arrow': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-find-career-short-callout-band">
            {map(proxies['title'], props => <div {...{...props, className: `af-class-text-block-21 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Join the AMLI FAMLI Today</React.Fragment>}</div>)}
            {map(proxies['link-url'], props => <a href="/#" {...{...props, className: `af-class-button af-class-boss af-class-yellow af-class-career-callout-band w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['link-text'], props => <div {...{...props, className: `af-class-boos-button-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Find Openings</React.Fragment>}</div>)}{map(proxies['link-arrow'], props => <img src="/../images/right-arrow.svg" alt="" {...{...props, className: `af-class-boss-right-arrow ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</a>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default SpotlightCareersCtaView

/* eslint-enable */