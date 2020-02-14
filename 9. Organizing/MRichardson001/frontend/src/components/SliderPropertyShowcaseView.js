/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import SliderPropertyListItemView from './SliderPropertyListItemView'


let Controller

class SliderPropertyShowcaseView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SliderPropertyShowcaseController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SliderPropertyShowcaseView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SliderPropertyShowcaseView ? transformProxies(this.props.children) : {
      'subtitle': [],
      'title': [],
      'list': [],
      'back-arrow': [],
      'next-arrow': [],
      'dots': [],
      'slider': [],
      'sliderPropertyListItemViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-slider-property-showcase">
            <div className="af-class-slider_property_content_wrapper">
              <div className="af-class-slider-property-headers">
                <div className="af-class-div-block-46">
                  <div className="w-embed">
                    <style dangerouslySetInnerHTML={{__html: "\n   .af-class-section-label.af-class-slider-property::after {\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: #ecd925;\n    height: 3px;\n  }\n" }} />
                  </div>
                  {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>properties in development</React.Fragment>}</h2>)}
                  {map(proxies['title'], props => <div {...{...props, className: `af-class-slider-property-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Name of Property</React.Fragment>}</div>)}
                  {map(proxies['list'], props => <ul {...{...props, className: `af-class-slider-property-list-items w-list-unstyled ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    {map(proxies['sliderPropertyListItemViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</React.Fragment>}</ul>)}
                </div>
              </div>
              <div className="af-class-slider-property-controls-wrapper">
                <div className="af-class-div-block-45">
                  {map(proxies['back-arrow'], props => <div {...{...props, className: `af-class-property_slide_next_arrow ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" /></React.Fragment>}</div>)}
                  {map(proxies['next-arrow'], props => <div {...{...props, className: `af-class-property_slide_prev_arrow ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" /></React.Fragment>}</div>)}
                </div>
                {map(proxies['dots'], props => <div {...{...props, className: `af-class-property_slider_pagination_wrapper ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <div className="af-class-slider_pagination_dot af-class-active" />
                  <div className="af-class-slider_pagination_dot" />
                  <div className="af-class-slider_pagination_dot" />
                  <div className="af-class-slider_pagination_dot" />
                </React.Fragment>}</div>)}
              </div>
            </div>
            {map(proxies['slider'], props => <div {...{...props, className: `af-class-slider-property-image-wrapper ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-slider-property-image af-class-current" />
              <div className="af-class-slider-property-image af-class-next-slide" />
            </React.Fragment>}</div>)}
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default SliderPropertyShowcaseView

/* eslint-enable */