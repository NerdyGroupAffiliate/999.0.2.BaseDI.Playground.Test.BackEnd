/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SpotlightTourView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SpotlightTourController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SpotlightTourView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SpotlightTourView ? transformProxies(this.props.children) : {
      'background-image': [],
      'subtitle': [],
      'title': [],
      'text-blurb': [],
      'link-url': [],
      'link-text': [],
      'link-arrow': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-spotlight-tour">
            {map(proxies['background-image'], props => <div {...{...props, className: `af-class-spotlight-tour-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-div-block-155 af-class-blur">
                {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>schedule a tour</React.Fragment>}</h2>)}
                {map(proxies['title'], props => <h1 {...{...props, className: `af-class-section-tagline af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Wanna come look around?</React.Fragment>}</h1>)}
                {map(proxies['text-blurb'], props => <div {...{...props, className: `af-class-paragraph af-class-light af-class-margin-top ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus..</React.Fragment>}</div>)}
                {map(proxies['link-url'], props => <a href="/#" {...{...props, className: `af-class-button af-class-boss af-class-yellow af-class-no-margin w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['link-text'], props => <div {...{...props, className: `af-class-boos-button-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Visit Property</React.Fragment>}</div>)}{map(proxies['link-arrow'], props => <img src="/images/right-arrow.svg" alt="" {...{...props, className: `af-class-boss-right-arrow ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</a>)}
              </div>
            </React.Fragment>)}</div>)}
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default SpotlightTourView

/* eslint-enable */