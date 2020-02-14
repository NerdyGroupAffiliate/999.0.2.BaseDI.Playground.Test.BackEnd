/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContentImageAndRichBlurbCtaView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentImageAndRichBlurbCtaController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentImageAndRichBlurbCtaView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentImageAndRichBlurbCtaView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'image': [],
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
          <section className="af-class-wrapper af-class-home--about">
            {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-container af-class-flex af-class-home--about ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['image'], props => <div {...{...props, className: `af-class-two-thirds-column af-class-home--about-img-bg ${props.className || ''}`}}>{props.children}</div>)}
              <div className="af-class-div-block-2">
                <div className="af-class-inner-content-container">
                  {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>About us</React.Fragment>}</h2>)}
                  {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Location.<br />Community.<br />Responsibility.</React.Fragment>}</h3>)}
                  {map(proxies['text-blurb'], props => <p {...{...props, className: `af-class-paragraph-text ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI’s stylish, health-focused apartment homes are ideally located in nine markets across the U.S. and provide opportunities for residents and employees to give back to the community in sustainable and charitable ways.</React.Fragment>}</p>)}
                  {map(proxies['link-url'], props => <a data-w-id="53244158-be12-ee88-9165-0a788d461493" href="/#" {...{...props, className: `af-class-button af-class-boss af-class-yellow w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    {map(proxies['link-text'], props => <div {...{...props, className: `af-class-boos-button-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Button Text</React.Fragment>}</div>)}{map(proxies['link-arrow'], props => <img src="/images/right-arrow.svg" alt="" {...{...props, className: `af-class-boss-right-arrow ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</a>)}
                </div>
              </div>
            </React.Fragment>)}</div>)}
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ContentImageAndRichBlurbCtaView

/* eslint-enable */