/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContentRetailShowcaseCondensedView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentRetailShowcaseCondensedController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentRetailShowcaseCondensedView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentRetailShowcaseCondensedView ? transformProxies(this.props.children) : {
      'subtitle': [],
      'title': [],
      'text-blurb': [],
      'image': [],
      'retail-description': [],
      'active-carrot': [],
      'retail-logo-list': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-content-retail-showcase-condensed">
            <div className="af-class-div-block-138">
              <div className="af-class-div-block-140">
                {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title af-class-loft ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>retail</React.Fragment>}</h2>)}
                {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline af-class-loft ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Enjoy these onsite benefits from our retail partners</React.Fragment>}</h3>)}
                {map(proxies['text-blurb'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>We have established partners with some of the finest around to offer you a completely unique experience without ever have to leave the property.</React.Fragment>}</p>)}
              </div>
              <div className="af-class-div-block-139">
                {map(proxies['image'], props => <div {...{...props, className: `af-class-div-block-144 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['retail-description'], props => <div {...{...props, className: `af-class-retail-image-caption-wrap af-class-blur ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Enjoy a romantic dinner. Have a cocktail after work. Do whatever you need to feel stress free at Three Forks on AMLI River North.</React.Fragment>}</div>)}
                  {map(proxies['active-carrot'], props => <div {...{...props, className: `af-class-html-embed-5 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <style dangerouslySetInnerHTML={{__html: "\n   .af-class-retail-active-triangle {\n    fill: #fff;\n  }\n" }} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.23 7.62">
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <polygon points="0 7.62 7.62 0 15.23 7.62 0 7.62" className="af-class-retail-active-triangle">
                          </polygon></g>
                      </g>
                    </svg></React.Fragment>}</div>)}
                </React.Fragment>)}</div>)}
                {map(proxies['retail-logo-list'], props => <div {...{...props, className: `af-class-div-block-143 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" className="af-class-image-23" /><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" className="af-class-image-23" /><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" className="af-class-image-23" /><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" className="af-class-image-23" />
                  <div className="w-embed">
                    <style dangerouslySetInnerHTML={{__html: "\n .af-class-div-block-143 {\n\tscrollbar-width: none; /* Firefox */\n  -ms-overflow-style: none;\n  -webkit-scrollbar-width: none;\n  -webkit-overflow-scrolling: touch;\n}\n" }} />
                  </div>
                </React.Fragment>}</div>)}
              </div>
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ContentRetailShowcaseCondensedView

/* eslint-enable */