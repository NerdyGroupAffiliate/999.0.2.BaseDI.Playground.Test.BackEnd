/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SliderStoryView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SliderStoryController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SliderStoryView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SliderStoryView ? transformProxies(this.props.children) : {
      'title': [],
      'text-blurb': [],
      'slider': [],
      'story-year': [],
      'story-text-blurb': [],
      'controls': [],
      'left-arrow': [],
      'right-arrow': [],
      'pagination': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-slider_story">
            <div className="af-class-slider-story-header">
              <div className="af-class-slider-story-header-container">
                {map(proxies['title'], props => <h2 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Supporting the community since the beginning.</React.Fragment>}</h2>)}
                {map(proxies['text-blurb'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Founded in 1980 as AMLI Realty Co., AMLI has grown to be a prominent real estate firm focused on the development, management and long-term ownership of luxury apartment communities throughout the U.S. &nbsp;Ranging from urban high-rise to suburban garden, AMLI communities are characterized by high-quality construction, beautiful and efficient design, and exceptional customer service. </React.Fragment>}</p>)}
              </div>
            </div>
            {map(proxies['slider'], props => <div {...{...props, className: `af-class-slider-story-image-track ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-slider-story-slide af-class-first-slide af-class-not-active" />
              <div className="af-class-slider-story-slide af-class-_2nd-slide af-class-active" />
              <div className="af-class-slider-story-slide af-class-_3rd-slide af-class-not-active" />
              <div className="af-class-slider-story-slide af-class-last-slide" />
            </React.Fragment>}</div>)}
            <div className="af-class-slider-story-slide-info">
              <div className="af-class-slider-story-slide-info-container">
                {map(proxies['story-year'], props => <div {...{...props, className: `af-class-slider-story-slide-year ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1983</React.Fragment>}</div>)}
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n   .af-class-slider-story-slide-year::after {\n   content: '';\n   background-color: #ECD925;\n   display: block;\n   top: 0;\n   left: 0;\n   height: 3px;\n   right: 0;\n   position: absolute;\n  }\n" }} />
                </div>
                {map(proxies['story-text-blurb'], props => <div {...{...props, className: `af-class-slider-story-slide-description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI developed its first apartment community in Marietta, GA. It comprised of 308 garden style apartments and was valued at $11.5 Million. </React.Fragment>}</div>)}
              </div>
              {map(proxies['controls'], props => <div {...{...props, className: `af-class-slider-story-controls-wrapper ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['left-arrow'], props => <div {...{...props, className: `af-class-slider-story-arrow ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" className="af-class-image-7" /></React.Fragment>}</div>)}
                {map(proxies['right-arrow'], props => <div {...{...props, className: `af-class-slider-story-arrow ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" /></React.Fragment>}</div>)}
                {map(proxies['pagination'], props => <div {...{...props, className: `af-class-slider-story-pagination ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <div className="af-class-slider_pagination_dot af-class-active" />
                  <div className="af-class-slider_pagination_dot" />
                  <div className="af-class-slider_pagination_dot" />
                  <div className="af-class-slider_pagination_dot" />
                </React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default SliderStoryView

/* eslint-enable */