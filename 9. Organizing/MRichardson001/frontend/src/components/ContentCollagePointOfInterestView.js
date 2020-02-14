/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContentCollagePointOfInterestView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentCollagePointOfInterestController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentCollagePointOfInterestView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentCollagePointOfInterestView ? transformProxies(this.props.children) : {
      'subtitle-1': [],
      'text-blurb-1': [],
      'collage-paragraph-light': [],
      'image-1': [],
      'image-2': [],
      'subtitle-2': [],
      'text-blurb-2': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-wrapper af-class-content_collage_point_of_interest">
            <div className="af-class-content_collage_left_column">
              <div className="af-class-content-collage-intro">
                {map(proxies['subtitle-1'], props => <h2 {...{...props, className: `af-class-content-collage-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>introduction</React.Fragment>}</h2>)}
                {map(proxies['text-blurb-1'], props => <p {...{...props, className: `af-class-collage-paragraph af-class-light ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.</React.Fragment>}</p>)}
                {map(proxies['collage-paragraph-light'], props => <p {...{...props, className: `af-class-collage-paragraph af-class-light af-class-padding-top ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.</React.Fragment>}</p>)}
              </div>
              {map(proxies['image-1'], props => <div {...{...props, className: `af-class-collage-poi-image-bleed ${props.className || ''}`}}>{props.children}</div>)}
            </div>
            <div className="af-class-content_collage_right_column">
              <div className="af-class-collage-color-band" />
              {map(proxies['image-2'], props => <div {...{...props, className: `af-class-collage-poi-framed-image ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 1600px) {\n   .af-class-collage-poi-framed-image {\n    padding-bottom: 250px;\n    padding-top: 250px;\n  }\n}\n" }} />
                </div>
              </React.Fragment>}</div>)}
              <div className="af-class-div-block-25">
                {map(proxies['subtitle-2'], props => <h2 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>entertainment</React.Fragment>}</h2>)}
                {map(proxies['text-blurb-2'], props => <h3 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This 35-acre zoo houses more than 1,000 animals and is one of the few remaining free zoos in the country.</React.Fragment>}</h3>)}
              </div>
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ContentCollagePointOfInterestView

/* eslint-enable */