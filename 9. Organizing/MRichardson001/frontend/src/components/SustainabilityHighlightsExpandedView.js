/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import HighlightsWrapperView from './HighlightsWrapperView'


let Controller

class SustainabilityHighlightsExpandedView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SustainabilityHighlightsExpandedController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SustainabilityHighlightsExpandedView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SustainabilityHighlightsExpandedView ? transformProxies(this.props.children) : {
      'main-image': [],
      'subtitle': [],
      'title': [],
      'text-blurb': [],
      'leed-logo': [],
      'secondary-image': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-sustainability-highlights-expanded">{map(proxies['main-image'], props => <img src="/images/sustainable-banner2x.jpg" srcSet="images/sustainable-banner2x-p-500.jpeg 500w, images/sustainable-banner2x-p-800.jpeg 800w, images/sustainable-banner2x-p-2000.jpeg 2000w, images/sustainable-banner2x-p-2600.jpeg 2600w, images/sustainable-banner2x.jpg 2880w" sizes="100vw" alt="" {...{...props, className: `af-class-image-64 ${props.className || ''}`}}>{props.children}</img>)}
            <div className="af-class-div-block-145">
              <div className="af-class-div-block-146">
                <div className="af-class-div-block-149">
                  <div className="af-class-div-block-150">
                    {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title af-class-loft ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>sustainability</React.Fragment>}</h2>)}
                    {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline af-class-loft ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lowering our environmental footprint.</React.Fragment>}</h3>)}
                    {map(proxies['text-blurb'], props => <p {...{...props, className: `af-class-paragraph af-class-margin-top ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</React.Fragment>}</p>)}
                  </div>{map(proxies['leed-logo'], props => <img src="/images/LEED-gold3x.png" srcSet="images/LEED-gold3x-p-500.png 500w, images/LEED-gold3x.png 591w" sizes="(max-width: 479px) 130px, 150px" alt="" {...{...props, className: `af-class-image-24 ${props.className || ''}`}}>{props.children}</img>)}</div>{map(proxies['secondary-image'], props => <img src="/images/sustainable-running2x.jpg" srcSet="images/sustainable-running2x-p-500.jpeg 500w, images/sustainable-running2x-p-1080.jpeg 1080w, images/sustainable-running2x.jpg 1100w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 52vw, 45vw" alt="" {...{...props, className: `af-class-image-27 ${props.className || ''}`}}>{props.children}</img>)}</div>
              <HighlightsWrapperView.Controller {...this.props} />
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default SustainabilityHighlightsExpandedView

/* eslint-enable */