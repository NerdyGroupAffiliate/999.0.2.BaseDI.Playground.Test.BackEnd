/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SliderGalleryView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SliderGalleryController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SliderGalleryView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SliderGalleryView ? transformProxies(this.props.children) : {
      'subtitle': [],
      'title': [],
      'prev-arrow': [],
      'left-wrapper': [],
      'next-arrow': [],
      'right-wrapper': [],
      'prev-arrow-btn': [],
      'next-arrow-btn': [],
      'slider': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-slider-gallery">
            <div className="af-class-div-block-360">
              <div className="af-class-div-block-359">
                {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Gallery</React.Fragment>}</h2>)}
                {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline af-class-loft af-class-max-width ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Gallery placeholder title phrase for lengthy title.</React.Fragment>}</h3>)}
              </div>
            </div>
            {map(proxies['prev-arrow'], props => <div {...{...props, className: `af-class-slider-gallery-prev-arrow ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['left-wrapper'], props => <div {...{...props, className: `af-class-slider-gallery-prev-arrow-icon w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <style dangerouslySetInnerHTML={{__html: "\n .af-class-arrow-l-chevron {\n  fill:#4c698f;\n  fill-rule: evenodd;\n}\n" }} />
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.13 22.02">
                  <title>Arrow-Chevron</title>
                  <g id="Symbols">
                    <polygon id="ion-ios-arrow-forward---Ionicons" points="13.13 2.2 10.94 0 0 11.01 10.94 22.02 13.13 19.82 4.44 11.01 13.13 2.2" className="af-class-arrow--chevron">
                    </polygon></g>
                </svg></React.Fragment>}</div>)}
            </React.Fragment>)}</div>)}
            {map(proxies['next-arrow'], props => <div {...{...props, className: `af-class-slider-gallery-next-arrow ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['right-wrapper'], props => <div {...{...props, className: `af-class-html-embed-9 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <style dangerouslySetInnerHTML={{__html: "\n .af-class-arrow--chevron {\n  fill: #4c698f;\n  fill-rule: evenodd;\n}\n" }} />
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.13 22.02">
                  <title>Arrow -- Black</title>
                  <g id="Symbols">
                    <polygon id="ion-ios-arrow-forward---Ionicons" points="0 19.82 2.19 22.02 13.13 11.01 2.19 0 0 2.2 8.68 11.01 0 19.82" className="af-class-arrow--chevron">
                    </polygon></g>
                </svg></React.Fragment>}</div>)}
            </React.Fragment>)}</div>)}
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n   .af-class-slider-gallery {\n    overflow-x: hidden;\n    overflow-y: visible;\n  }\n" }} />
            </div>
            {map(proxies['prev-arrow-btn'], props => <div {...{...props, className: `af-class-slider-gallery-image-preview af-class-prev ${props.className || ''}`}}>{props.children}</div>)}
            {map(proxies['next-arrow-btn'], props => <div {...{...props, className: `af-class-slider-gallery-image-preview af-class-next ${props.className || ''}`}}>{props.children}</div>)}
            {map(proxies['slider'], props => <div {...{...props, className: `af-class-div-block-358 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-slider-gallery-image-caption af-class-blur">Rooftop &amp; Lounge Area</div>
            </React.Fragment>}</div>)}
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default SliderGalleryView

/* eslint-enable */