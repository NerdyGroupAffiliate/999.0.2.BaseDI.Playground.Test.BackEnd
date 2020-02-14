/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SpotlightKeyFactView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SpotlightKeyFactController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SpotlightKeyFactView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SpotlightKeyFactView ? transformProxies(this.props.children) : {
      'background-image': [],
      'key-fact-image': [],
      'score': [],
      'score-label': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['background-image'], props => <section {...{...props, className: `af-class-spotlight-key-fact ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-spotlight-key-fact-container">{map(proxies['key-fact-image'], props => <img src="/images/spotlight-key-fact-logo2x.png" alt="" {...{...props, className: `af-class-image-21 ${props.className || ''}`}}>{props.children}</img>)}
              {map(proxies['score'], props => <div {...{...props, className: `af-class-spotlight-key-fact-big-text ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>97%</React.Fragment>}</div>)}
              {map(proxies['score-label'], props => <div {...{...props, className: `af-class-spotlight-key-fact-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Recommended Score</React.Fragment>}</div>)}
            </div><img src="/images/spotlight-key-fact-banner-mobile2x.jpg" srcSet="images/spotlight-key-fact-banner-mobile2x-p-500.jpeg 500w, images/spotlight-key-fact-banner-mobile2x.jpg 750w" sizes="100vw" alt="" className="af-class-image-26" /></React.Fragment>)}</section>)}
        </span>
      </React.Fragment>
    )
  }
}

export default SpotlightKeyFactView

/* eslint-enable */