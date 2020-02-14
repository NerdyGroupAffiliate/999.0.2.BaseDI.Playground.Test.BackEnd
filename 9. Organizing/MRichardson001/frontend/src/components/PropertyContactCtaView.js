/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyContactCtaView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyContactCtaController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyContactCtaView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyContactCtaView ? transformProxies(this.props.children) : {
      'image': [],
      'subtitle': [],
      'title': [],
      'text-blurb': [],
      'cta-link': [],
      'cta-text': [],
      'cta-arrow': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-property-contact-cta">
            {map(proxies['image'], props => <div {...{...props, className: `af-class-div-block-446 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-div-block-155 af-class-blur af-class-max-width">
                {map(proxies['subtitle'], props => <div {...{...props, className: `af-class-section-title af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Contact</React.Fragment>}</div>)}
                {map(proxies['title'], props => <div {...{...props, className: `af-class-property-sub-section-tagline af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Need to speak to someone?</React.Fragment>}</div>)}
                {map(proxies['text-blurb'], props => <div {...{...props, className: `af-class-paragraph af-class-light af-class-margin-top ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</React.Fragment>}</div>)}
                {map(proxies['cta-link'], props => <a href="/#" {...{...props, className: `af-class-button af-class-boss af-class-yellow af-class-no-margin w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['cta-text'], props => <div {...{...props, className: `af-class-boos-button-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Visit Property</React.Fragment>}</div>)}{map(proxies['cta-arrow'], props => <img src="/images/right-arrow.svg" alt="" {...{...props, className: `af-class-boss-right-arrow ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</a>)}
              </div>
            </React.Fragment>)}</div>)}
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyContactCtaView

/* eslint-enable */