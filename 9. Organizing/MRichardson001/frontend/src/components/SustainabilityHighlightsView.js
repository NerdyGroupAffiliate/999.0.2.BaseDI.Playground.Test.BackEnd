/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import SustainabilityHighlightsItemView from './SustainabilityHighlightsItemView'


let Controller

class SustainabilityHighlightsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SustainabilityHighlightsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SustainabilityHighlightsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SustainabilityHighlightsView ? transformProxies(this.props.children) : {
      'image': [],
      'subtitle': [],
      'title': [],
      'text-blurb': [],
      'list': [],
      'leed-logo': [],
      'sustainabilityHighlightsItemViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-phase-1-sustainability">
            {map(proxies['image'], props => <div {...{...props, className: `af-class-p1-sustainable-image-col ${props.className || ''}`}}>{props.children}</div>)}
            <div className="af-class-p1-sustainable-content-col">
              <div className="af-class-p1-sustainable-content-container">
                <div className="af-class-div-block-342">
                  {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Community Impact</React.Fragment>}</h2>)}
                  {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lowering our environmental footprint.</React.Fragment>}</h3>)}
                  {map(proxies['text-blurb'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Introduce the certifications that make this property sustainable/ green. This can be a couple sentences long if the space is needed.</React.Fragment>}</p>)}
                </div>
                {map(proxies['list'], props => <ul {...{...props, className: `af-class-unordered-list-8 w-list-unstyled ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  {map(proxies['sustainabilityHighlightsItemViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</React.Fragment>}</ul>)}{map(proxies['leed-logo'], props => <img src="/images/LEED-gold3x.png" srcSet="images/LEED-gold3x-p-500.png 500w, images/LEED-gold3x.png 591w" sizes="150px" alt="" {...{...props, className: `af-class-image-44 ${props.className || ''}`}}>{props.children}</img>)}</div>
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default SustainabilityHighlightsView

/* eslint-enable */