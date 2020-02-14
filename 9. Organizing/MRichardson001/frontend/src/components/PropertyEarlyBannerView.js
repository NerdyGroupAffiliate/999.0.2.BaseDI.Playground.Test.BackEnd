/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyEarlyBannerView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyEarlyBannerController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyEarlyBannerView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyEarlyBannerView ? transformProxies(this.props.children) : {
      'container': [],
      'breadcrumbs': [],
      'subtitle': [],
      'title': [],
      'body': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <header className="af-class-phase-1-banner-content">
            {map(proxies['container'], props => <div {...{...props, className: `af-class-phase-1-banner-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['breadcrumbs'], props => <div {...{...props, className: `af-class-breadcrumb-container af-class-blur ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><a href="/#" className="af-class-phase-1-breadcrumb-link">Chicago</a>
                <div className="af-class-breadcrumb-divider" /><a href="/#" className="af-class-phase-1-breadcrumb-link">South Loop Apartments</a></React.Fragment>}</div>)}
              <div className="af-class-phase-1-header-content">
                {map(proxies['subtitle'], props => <h1 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>southloop apartments</React.Fragment>}</h1>)}
                {map(proxies['title'], props => <h2 {...{...props, className: `af-class-p2-header-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>9218 Rockledge Street Chicago, IL 32259</React.Fragment>}</h2>)}
                {map(proxies['body'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</React.Fragment>}</p>)}
              </div>
            </React.Fragment>)}</div>)}
          </header>
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyEarlyBannerView

/* eslint-enable */