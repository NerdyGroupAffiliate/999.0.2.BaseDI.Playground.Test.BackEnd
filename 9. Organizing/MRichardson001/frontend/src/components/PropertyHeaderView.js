/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyHeaderView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyHeaderController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyHeaderView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyHeaderView ? transformProxies(this.props.children) : {
      'slider': [],
      'left-arrow': [],
      'right-arrow': [],
      'property-infot-banner': [],
      'move-in': [],
      'property-info-bar-slogan': [],
      'property-info-bar-date': [],
      'property-info-bar-top-row': [],
      'property-info-bar-property-address': [],
      'property-info-bar-property-number': [],
      'property-info-card-right-wrapper': [],
      'property-info-bar-property-rooms': [],
      'property-info-bar-property-starting-at': [],
      'link-url': [],
      'link-text': [],
      'link-arrow': [],
      'button-container': [],
      'all-photos': [],
      'view-photos-button': [],
      'tour': [],
      'site-plan-button': [],
      'property-breadcrumb': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['slider'], props => <header {...{...props, className: `af-class-property-header ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-html-embed-4 w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n  @media screen and (min-width: 992px) {\n     .af-class-property-header {\n      height: calc(100vh - 80px);\n      max-height: 900px;\n    }\n  }\n" }} />
            </div>
            {map(proxies['left-arrow'], props => <div {...{...props, className: `af-class-property-slider-arrow af-class-left ${props.className || ''}`}}>{props.children}</div>)}
            {map(proxies['right-arrow'], props => <div {...{...props, className: `af-class-property-slider-arrow af-class-right ${props.className || ''}`}}>{props.children}</div>)}
            {map(proxies['property-infot-banner'], props => <div {...{...props, className: `af-class-property-banner-info-wrapper ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-property-info-card-wrapper">
                {map(proxies['move-in'], props => <div {...{...props, className: `af-class-move-in-date-wrapper ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['property-info-bar-slogan'], props => <div {...{...props, className: `af-class-text-block-33 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>We'll be move-in ready</React.Fragment>}</div>)}
                  {map(proxies['property-info-bar-date'], props => <div {...{...props, className: `af-class-text-block-34 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Feb 24, 2019</React.Fragment>}</div>)}
                  <div className="af-class-move-in-date-dash-line" />
                </React.Fragment>)}</div>)}
                <div className="af-class-property-info-card-details">
                  <div className="af-class-property-info-card-location-info">
                    {map(proxies['property-info-bar-top-row'], props => <div {...{...props, className: `af-class-property-card-location-top-row ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <h2 className="af-class-property-phase--property-name">AMLI on<br />Eldridge Parkway</h2>
                    </React.Fragment>}</div>)}
                    <div className="af-class-property-card-location-bottom-row">
                      {map(proxies['property-info-bar-property-address'], props => <div {...{...props, className: `af-class-text-block-39 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>850 S Clark St<br />Chicago, IL 60605</React.Fragment>}</div>)}
                      {map(proxies['property-info-bar-property-number'], props => <div {...{...props, className: `af-class-text-block-38 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>312-462-1938</React.Fragment>}</div>)}
                    </div>
                  </div>
                  <div className="af-class-property-info-card-price-info">
                    {map(proxies['property-info-card-right-wrapper'], props => <div {...{...props, className: `af-class-div-block-130 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                      {map(proxies['property-info-bar-property-rooms'], props => <div {...{...props, className: `af-class-text-block-35 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Studio - 3 Bedroom</React.Fragment>}</div>)}
                      <div className="af-class-text-block-37">Starting at</div>
                      {map(proxies['property-info-bar-property-starting-at'], props => <div {...{...props, className: `af-class-text-block-36 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$1,607</React.Fragment>}</div>)}
                    </React.Fragment>)}</div>)}
                    {map(proxies['link-url'], props => <a href="/#" {...{...props, className: `af-class-button af-class-boss af-class-yellow af-class-no-margin w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                      {map(proxies['link-text'], props => <div {...{...props, className: `af-class-boos-button-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Visit Property</React.Fragment>}</div>)}{map(proxies['link-arrow'], props => <img src="/images/right-arrow.svg" alt="" {...{...props, className: `af-class-boss-right-arrow ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</a>)}
                  </div>
                </div>
              </div>
              {map(proxies['button-container'], props => <div {...{...props, className: `af-class-property-header-button-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['all-photos'], props => <a href="/#" {...{...props, className: `af-class-link-w-icon w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        <img src="/images/icon-view-photos.svg" alt="" className="af-class-link-icon-svg af-class-margin-right" />{map(proxies['view-photos-button'], props => <div {...props}>{props.children ? props.children : <React.Fragment>View All Photos</React.Fragment>}</div>)}</React.Fragment>)}</a>)}
                {map(proxies['tour'], props => <a href="/#" {...{...props, className: `af-class-link-w-icon w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <div>Take 3D Tour</div><img src="/images/icon-3d-tour.jpg" alt="" className="af-class-link-icon-svg af-class-margin-left" /></React.Fragment>}</a>)}
                {map(proxies['site-plan-button'], props => <a href="/#" {...{...props, className: `af-class-link-w-icon w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <div>View Site Plan</div>
                </React.Fragment>}</a>)}
              </React.Fragment>)}</div>)}
            </React.Fragment>)}</div>)}
            <div className="af-class-property-scroll-down-text">Scroll to keep discovering</div>
            {map(proxies['property-breadcrumb'], props => <div {...{...props, className: `af-class-breadcrumb-container af-class-blur af-class-light-bg ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><a href="/" className="af-class-phase-2-breadcrumb-link">AMLI Home</a>
              <div className="af-class-breadcrumb-divider" /><a href="/region" className="af-class-phase-2-breadcrumb-link">Chicago</a>
              <div className="af-class-breadcrumb-divider" /><a href="/sub-region" className="af-class-phase-2-breadcrumb-link">South Loop Apartments</a></React.Fragment>}</div>)}
          </React.Fragment>)}</header>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyHeaderView

/* eslint-enable */