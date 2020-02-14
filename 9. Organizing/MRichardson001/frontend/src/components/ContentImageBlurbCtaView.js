/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContentImageBlurbCtaView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentImageBlurbCtaController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentImageBlurbCtaView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentImageBlurbCtaView ? transformProxies(this.props.children) : {
      'image': [],
      'home-careers-container': [],
      'subtitle': [],
      'text-blurb': [],
      'link-url': [],
      'link-text': [],
      'link-arrow': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-content_image_blurb_cta">
            {map(proxies['image'], props => <div {...{...props, className: `af-class-container af-class-image-background af-class-full-width ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['home-careers-container'], props => <div {...{...props, className: `af-class-inner-content-container af-class-home-careers ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Culture</React.Fragment>}</h2>)}
                {map(proxies['text-blurb'], props => <h3 {...{...props, className: `af-class-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>We take pride in providing a rewarding place to work, where diversity and individuality are embraced.</React.Fragment>}</h3>)}
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n   .af-class-inner-content-container {\n    backdrop-filter: blur(3px);\n    -webkit-backdrop-filter: blur(3px);\n  }\n" }} />
                </div>
                {map(proxies['link-url'], props => <a data-w-id="53244158-be12-ee88-9165-0a788d461493" href="/#" {...{...props, className: `af-class-button af-class-boss af-class-yellow w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['link-text'], props => <div {...{...props, className: `af-class-boos-button-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Button Text</React.Fragment>}</div>)}{map(proxies['link-arrow'], props => <img src="/images/right-arrow.svg" alt="" {...{...props, className: `af-class-boss-right-arrow ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</a>)}
              </React.Fragment>)}</div>)}
            </React.Fragment>)}</div>)}
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ContentImageBlurbCtaView

/* eslint-enable */