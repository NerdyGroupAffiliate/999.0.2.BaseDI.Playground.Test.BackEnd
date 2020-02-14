/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContentRetailShowcaseView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentRetailShowcaseController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentRetailShowcaseView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentRetailShowcaseView ? transformProxies(this.props.children) : {
      'image': [],
      'title-container': [],
      'subtitle': [],
      'title': [],
      'body-container': [],
      'retail-items-wrapper': [],
      'row-container': [],
      'link-url': [],
      'partners-container': [],
      'logo-list-title': [],
      'retail-logo-list': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['image'], props => <section {...{...props, className: `af-class-content-retail-showcase ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-div-block-344">
              <div className="af-class-div-block-351">
                {map(proxies['title-container'], props => <div {...{...props, className: `af-class-div-block-352 af-class-loft ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Retail</React.Fragment>}</h2>)}
                  {map(proxies['title'], props => <div {...{...props, className: `af-class-section-tagline-large af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>25,158 sqft of possibilities</React.Fragment>}</div>)}
                </React.Fragment>)}</div>)}
                {map(proxies['body-container'], props => <div {...{...props, className: `af-class-div-block-356 af-class-loft ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['retail-items-wrapper'], props => <div {...{...props, className: `af-class-div-block-354 af-class-div-block-355 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <div className="af-class-p1-retail-item af-class-no-top-padding">
                      <div className="af-class-text-block-103">Retail Service</div>
                      <div className="af-class-p1-retail-item-description">Introduce the certifications that make this property sustainable/ green. </div>
                    </div>
                    <div className="af-class-p1-retail-item af-class-no-top-padding">
                      <div className="af-class-text-block-103">Retail Service</div>
                      <div className="af-class-p1-retail-item-description">Introduce the certifications that make this property sustainable/ green. </div>
                    </div>
                    <div className="af-class-p1-retail-item">
                      <div className="af-class-text-block-103">Retail Service</div>
                      <div className="af-class-p1-retail-item-description">Introduce the certifications that make this property sustainable/ green. </div>
                    </div>
                    <div className="af-class-p1-retail-item">
                      <div className="af-class-text-block-103">Retail Service</div>
                      <div className="af-class-p1-retail-item-description">Introduce the certifications that make this property sustainable/ green. </div>
                    </div>
                    <div className="af-class-html-embed-28 w-embed">
                      <style dangerouslySetInnerHTML={{__html: "\n@media screen and (min-width: 991px) and (max-width: 1024px) {\n   .af-class-p1-retail-item {\n    padding: 30px;\n  }\n}\n" }} />
                    </div>
                  </React.Fragment>}</div>)}
                </React.Fragment>)}</div>)}
              </div>
            </div>
            {map(proxies['row-container'], props => <div {...{...props, className: `af-class-retail-showcase-cta-row af-class-loft ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-text-block-102">Interested in joining us?</div>
              {map(proxies['link-url'], props => <a href="/#" {...{...props, className: `af-class-link-block-5 w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-text-block-104">Contact Us</div><img src="/images/icon-arrow--right-no-shadow3x.png" alt="" className="af-class-image-45" /></React.Fragment>}</a>)}
            </React.Fragment>)}</div>)}
            {map(proxies['partners-container'], props => <div {...{...props, className: `af-class-div-block-346 af-class-loft ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-div-block-347">
                {map(proxies['logo-list-title'], props => <div {...{...props, className: `af-class-text-block-101 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Some of our awesome partner's title</React.Fragment>}</div>)}
                {map(proxies['retail-logo-list'], props => <div {...{...props, className: `af-class-div-block-345 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <div className="af-class-logo-holder"><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" /></div>
                  <div className="af-class-logo-holder"><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" /></div>
                  <div className="af-class-logo-holder"><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" /></div>
                  <div className="af-class-logo-holder"><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" /></div>
                </React.Fragment>}</div>)}
              </div>
            </React.Fragment>)}</div>)}
          </React.Fragment>)}</section>)}
        </span>
      </React.Fragment>
    )
  }
}

export default ContentRetailShowcaseView

/* eslint-enable */