/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyFloorplanSliderView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyFloorplanSliderController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyFloorplanSliderView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyFloorplanSliderView ? transformProxies(this.props.children) : {
      'title': [],
      'floorplan-name': [],
      'slider': [],
      'thumbnails': [],
      'thumbnail-list': [],
      'right': [],
      'right-arrow': [],
      'button-wrapper': [],
      'tour': [],
      'site-plan-button': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-div-block-218">
            <div className="af-class-div-block-224">
              <div className="af-class-div-block-228">
                {map(proxies['title'], props => <div {...{...props, className: `af-class-text-block-69 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Floorplans</React.Fragment>}</div>)}
                {map(proxies['floorplan-name'], props => <div {...{...props, className: `af-class-text-block-69 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>C620 - 2 Bedroom</React.Fragment>}</div>)}
              </div>
              {map(proxies['slider'], props => <div {...{...props, className: `af-class-div-block-225 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/Studio2x.png" alt="" className="af-class-image-68" /></React.Fragment>}</div>)}
              {map(proxies['thumbnails'], props => <div {...{...props, className: `af-class-div-block-226 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['thumbnail-list'], props => <div {...{...props, className: `af-class-div-block-230 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" className="af-class-image-38" /><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" className="af-class-image-38" /><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" className="af-class-image-38" /><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" className="af-class-image-38" /><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" className="af-class-image-38" /><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" className="af-class-image-38" /><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" className="af-class-image-38" /><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" className="af-class-image-38" /><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" className="af-class-image-38" /></React.Fragment>}</div>)}
                {map(proxies['right'], props => <div {...{...props, className: `af-class-div-block-229 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['right-arrow'], props => <div {...{...props, className: `af-class-right-arrow w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.92 155.56"><defs>
                        <style dangerouslySetInnerHTML={{__html: " .af-class-cls-1{fill:#ffffff!important;}" }} />
                      </defs>
                      <title>Chevron</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <polygon className="af-class-cls-1" points="28.28 77.78 91.92 14.14 77.78 0 14.14 63.64 0 77.78 14.14 91.92 77.78 155.56 91.92 141.42 28.28 77.78">
                          </polygon></g>
                      </g>
                    </svg></React.Fragment>}</div>)}
                </React.Fragment>)}</div>)}
              </React.Fragment>)}</div>)}
              {map(proxies['button-wrapper'], props => <div {...{...props, className: `af-class-div-block-227 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['tour'], props => <div {...{...props, className: `af-class-button--3d-tour af-class-no-margin ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <div className="af-class-button-tour-label">Take 3D Tour</div><img src="/images/icon-3d-tour.jpg" alt="" className="af-class-image-19" /></React.Fragment>}</div>)}
                {map(proxies['site-plan-button'], props => <a href="/#" {...{...props, className: `af-class-link-w-icon w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <div className="af-class-button-tour-label">View Site Plan</div>
                </React.Fragment>}</a>)}
              </React.Fragment>)}</div>)}
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyFloorplanSliderView

/* eslint-enable */