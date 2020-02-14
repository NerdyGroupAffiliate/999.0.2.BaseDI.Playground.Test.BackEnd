/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SliderPointOfInterestView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SliderPointOfInterestController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SliderPointOfInterestView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SliderPointOfInterestView ? transformProxies(this.props.children) : {
      'container': [],
      'sub-title': [],
      'title': [],
      'text-wrapper': [],
      'g-titile': [],
      'g-blurb': [],
      'g-blurb-fact': [],
      'next-arrow': [],
      'prev-arrow': [],
      'pagination': [],
      'Slider': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['container'], props => <section {...{...props, className: `af-class-wrapper af-class-slider_points_of_interest ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-slider-poi-content-wrapper">
              <div className="af-class-slider_poi_headers">
                {map(proxies['sub-title'], props => <h2 {...{...props, className: `af-class-list-blocks-b-section-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>entertainment &amp; shopping</React.Fragment>}</h2>)}
                {map(proxies['title'], props => <h3 {...{...props, className: `af-class-slider-poi-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Here there's never a dull moment.</React.Fragment>}</h3>)}
              </div>
              {map(proxies['text-wrapper'], props => <div {...{...props, className: `af-class-slide_info_wrapper ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['g-titile'], props => <div {...{...props, className: `af-class-point-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Chicago Theatre</React.Fragment>}</div>)}
                <div className="af-class-poi_slide_title_border" />
                {map(proxies['g-blurb'], props => <p {...{...props, className: `af-class-point_blurb ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>The Loop’s 5,000-seat Chicago is just a couple minutes walk from our AMLI Lofts &nbsp;in West Loop. Wording content like this will help ensure quality SEO practices.</React.Fragment>}</p>)}{map(proxies['g-blurb-fact'], props => <a href="/#" {...{...props, className: `af-class-point_fact ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>0.2 miles from <span className="af-class-poi_slide_distance_property">AMLI Lofts</span></React.Fragment>}</a>)}
                {map(proxies['next-arrow'], props => <div {...{...props, className: `af-class-poi_slide_next_arrow ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/icon-arrow--right--blue.svg" alt="" className="af-class-image-46" /></React.Fragment>}</div>)}
                {map(proxies['prev-arrow'], props => <div {...{...props, className: `af-class-poi_slide_prev_arrow ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/icon-arrow--right--blue.svg" alt="" className="af-class-arrow--right" /></React.Fragment>}</div>)}
                {map(proxies['pagination'], props => <div {...{...props, className: `af-class-poi_slider_pagination_wrapper ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <div className="af-class-slider_pagination_dot af-class-active" />
                  <div className="af-class-slider_pagination_dot" />
                  <div className="af-class-slider_pagination_dot" />
                  <div className="af-class-slider_pagination_dot" />
                </React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}
            </div>
            {map(proxies['slider'], props => <div {...{...props, className: `af-class-slider_poi_image_wrapper ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-slider_poi_image af-class-current" />
              <div className="af-class-slider_poi_image" />
            </React.Fragment>}</div>)}
          </React.Fragment>)}</section>)}
        </span>
      </React.Fragment>
    )
  }
}

export default SliderPointOfInterestView

/* eslint-enable */