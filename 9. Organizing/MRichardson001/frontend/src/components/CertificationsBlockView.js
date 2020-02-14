/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import CertificationsListItemView from './CertificationsListItemView'


let Controller

class CertificationsBlockView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CertificationsBlockController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CertificationsBlockView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CertificationsBlockView ? transformProxies(this.props.children) : {
      'image': [],
      'title': [],
      'text-blurb': [],
      'link-url': [],
      'link-text': [],
      'link-arrow': [],
      'certificationsListItemViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-certifications-block">
            <div className="af-class-cert-block-collage-column">
              {map(proxies['image'], props => <div {...{...props, className: `af-class-cert-collage-large-image ${props.className || ''}`}}>{props.children}</div>)}
            </div>
            <div className="af-class-content-collage-retail-content-column">
              {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Better Choice for Your City-Why?</React.Fragment>}</h3>)}
              {map(proxies['text-blurb'], props => <div {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>By building up instead of out horizontally, apartments create a healthier community and save taxpayer money.</React.Fragment>}</div>)}
              {map(proxies['certificationsListItemViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}{map(proxies['link-url'], props => <a data-w-id="53244158-be12-ee88-9165-0a788d461493" href="/#" {...{...props, className: `af-class-button af-class-boss af-class-yellow w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['link-text'], props => <div {...{...props, className: `af-class-boos-button-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Button Text</React.Fragment>}</div>)}{map(proxies['link-arrow'], props => <img src="/../images/right-arrow.svg" alt="" {...{...props, className: `af-class-boss-right-arrow ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</a>)}
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default CertificationsBlockView

/* eslint-enable */