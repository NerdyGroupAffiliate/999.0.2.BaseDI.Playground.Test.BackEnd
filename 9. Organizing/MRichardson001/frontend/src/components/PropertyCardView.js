/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyCardView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyCardController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyCardView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyCardView ? transformProxies(this.props.children) : {
      'name': [],
      'address': [],
      'phone': [],
      'configuration': [],
      'pricing-container': [],
      'pricing-link': [],
      'pricing': [],
      'cat': [],
      'dog': [],
      'leed': [],
      'smoking': [],
      'slider': [],
      'dots': [],
      'slider-left': [],
      'slider-right': [],
      'specials': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-property-card">
            <div className="af-class-property-card-left-border" />
            <div className="af-class-property-card-info-wrapper">
              <div className="af-class-property-card-title-wrapper">
                {map(proxies['name'], props => <div {...{...props, className: `af-class-property-card-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI at Seven Bri...</React.Fragment>}</div>)}
              </div>
              <div className="af-class-property-card-info-wtrapper">{map(proxies['address'], props => <a href="/#" {...{...props, className: `af-class-property-card-address ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>900 S Clark St.<br />Chicago, IL 60605</React.Fragment>}</a>)}{map(proxies['phone'], props => <a href="/#" {...{...props, className: `af-class-property-card-phone ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>713-234-8591</React.Fragment>}</a>)}
                {map(proxies['configuration'], props => <div {...{...props, className: `af-class-property-card-bedroom ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Studio - 3 Bedroom</React.Fragment>}</div>)}
                {map(proxies['pricing-container'], props => <div {...{...props, className: `af-class-property-card-cta w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['pricing-link'], props => <a href="/#" {...props}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['pricing'], props => <div {...{...props, className: `af-class-property-card-cta-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Starting at $1,374</React.Fragment>}</div>)}<img src="/images/right-arrow.svg" alt="" className="af-class-property-card-cta-arrow" /></React.Fragment>)}</a>)}</React.Fragment>)}</div>)}
                <div className="af-class-property-card af-class-icon-wrapper">{map(proxies['cat'], props => <img src="/images/icon-Cat.svg" alt="" {...{...props, className: `af-class-property-card-icon ${props.className || ''}`}}>{props.children}</img>)}{map(proxies['dog'], props => <img src="/images/icon-Dog.svg" alt="" {...{...props, className: `af-class-property-card-icon ${props.className || ''}`}}>{props.children}</img>)}{map(proxies['leed'], props => <img src="/images/icon-LEED.png" alt="" {...{...props, className: `af-class-property-card-icon ${props.className || ''}`}}>{props.children}</img>)}{map(proxies['smoking'], props => <img src="/images/icon-Smoking.png" alt="" {...{...props, className: `af-class-property-card-icon ${props.className || ''}`}}>{props.children}</img>)}</div>
              </div>
            </div>
            {map(proxies['slider'], props => <div {...{...props, className: `af-class-property-card-slide-default ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['dots'], props => <img src="/images/slider-bubbles.svg" alt="" {...{...props, className: `af-class-image-2 ${props.className || ''}`}}>{props.children}</img>)}{map(proxies['slider-left'], props => <img src="/images/icon-arrow--slide-left3x.png" alt="" {...{...props, className: `af-class-image-3 ${props.className || ''}`}}>{props.children}</img>)}{map(proxies['slider-right'], props => <img src="/images/icon-arrow--slide-right3x.png" alt="" {...{...props, className: `af-class-image-3 af-class-slide-right ${props.className || ''}`}}>{props.children}</img>)}
              {map(proxies['specials'], props => <div {...{...props, className: `af-class-lozenge--specials ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-text-block">Current Specials</div><img src="/images/icon-special-fire3x.svg" alt="" className="af-class-icon-fire" /></React.Fragment>}</div>)}
            </React.Fragment>)}</div>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyCardView

/* eslint-enable */