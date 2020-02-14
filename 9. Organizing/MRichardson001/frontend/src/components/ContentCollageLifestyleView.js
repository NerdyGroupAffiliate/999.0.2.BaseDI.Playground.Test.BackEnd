/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContentCollageLifestyleView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentCollageLifestyleController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentCollageLifestyleView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentCollageLifestyleView ? transformProxies(this.props.children) : {
      'subtitle': [],
      'title-line-1': [],
      'title-line-2': [],
      'text-blurb': [],
      'link-url': [],
      'link-text': [],
      'link-arrow': [],
      'image-1': [],
      'image-3': [],
      'image-2': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-wrapper">
            <section className="af-class-container af-class-home-intro">
              <div className="af-class-home-intro-content">
                <div className="af-class-home-intro-content-container">
                  {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lifestyle</React.Fragment>}</h2>)}
                  <h1 className="af-class-home-amli-tagline">{map(proxies['title-line-1'], props => <span {...{...props, className: `af-class-amli-tag-thin ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Live Life</React.Fragment>}</span>)}<br />{map(proxies['title-line-2'], props => <span {...{...props, className: `af-class-amli-tag-thick ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Love Life</React.Fragment>}</span>)}</h1>
                  {map(proxies['text-blurb'], props => <p {...{...props, className: `af-class-paragraph-text ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI apartments provide an exclusive, modern living experience with incomparable customer service standards, convenient resident programs and a dedication to the surrounding community. More than an apartment, we provide a home and a carefree lifestyle.</React.Fragment>}</p>)}
                  {map(proxies['link-url'], props => <a data-w-id="53244158-be12-ee88-9165-0a788d461493" href="/#" {...{...props, className: `af-class-button af-class-boss af-class-yellow w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    {map(proxies['link-text'], props => <div {...{...props, className: `af-class-boos-button-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Button Text</React.Fragment>}</div>)}{map(proxies['link-arrow'], props => <img src="/images/right-arrow.svg" alt="" {...{...props, className: `af-class-boss-right-arrow ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</a>)}
                </div>
              </div>
              {map(proxies['image-1'], props => <div {...{...props, className: `af-class-home-intro-images ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['image-3'], props => <img src="/images/home--lifestyle-bike-ride.jpg" srcSet="images/home--lifestyle-bike-ride-p-500.jpeg 500w, images/home--lifestyle-bike-ride.jpg 800w" sizes="(max-width: 479px) 49vw, (max-width: 767px) 24vw, (max-width: 991px) 27vw, 30vw" alt="" {...{...props, className: `af-class-home-intro-image af-class-right-offset ${props.className || ''}`}}>{props.children}</img>)}{map(proxies['image-2'], props => <img src="/images/home--lifestyle-couple-dining.jpg" srcSet="images/home--lifestyle-couple-dining-p-500.jpeg 500w, images/home--lifestyle-couple-dining.jpg 800w" sizes="(max-width: 479px) 49vw, (max-width: 767px) 24vw, (max-width: 991px) 27vw, 30vw" alt="" {...{...props, className: `af-class-home-intro-image af-class-left-offset ${props.className || ''}`}}>{props.children}</img>)}
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 991px) {\n   .af-class-home-intro-images {\n    background-size: 150%;\n  }\n}\n" }} />
                </div>
              </React.Fragment>)}</div>)}
            </section>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ContentCollageLifestyleView

/* eslint-enable */