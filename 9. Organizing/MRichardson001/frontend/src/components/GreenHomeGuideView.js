/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class GreenHomeGuideView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GreenHomeGuideController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GreenHomeGuideView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== GreenHomeGuideView ? transformProxies(this.props.children) : {
      'title': [],
      'main-body-text': [],
      'region-dropdown': [],
      'sub-body-text': [],
      'image-1': [],
      'image-2': [],
      'image-3': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-div-block-408">
            <div className="af-class-div-block-407">
              <div className="af-class-div-block-414">
                <div className="af-class-residents-details-col">
                  {map(proxies['title'], props => <h2 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Influencing Our Industry</React.Fragment>}</h2>)}
                  {map(proxies['main-body-text'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI’s Green Manifesto explains why apartment living provides a healthier, and more responsible lifestyle and invites the multifamily industry to seize the opportunity to make change for our planet.</React.Fragment>}</p>)}
                  <div className="af-class-home-guide-wrap">
                    <h3 className="af-class-heading-28">Green home guides by region</h3>
                    {map(proxies['region-dropdown'], props => <div data-delay={0} {...{...props, className: `af-class-home-guide-dropdown w-dropdown ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <div className="af-class-industry-influence-dropdown w-dropdown-toggle">
                        <div className="af-class-text-block-94">Select Community</div>
                        <div className="af-class-div-block-322">
                          <div className="af-class-icon w-icon-dropdown-toggle" />
                        </div>
                      </div>
                      <nav className="af-class-dropdown-list-4 w-dropdown-list"><a href="/#" className="af-class-community-dropdown-link w-dropdown-link">Community 1</a><a href="/#" className="af-class-community-dropdown-link w-dropdown-link">Community 2</a><a href="/#" className="af-class-community-dropdown-link w-dropdown-link">Community 3</a></nav>
                    </React.Fragment>}</div>)}
                  </div>
                  {map(proxies['sub-body-text'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI’s Green Manifesto explains why apartment living provides a healthier, and more responsible lifestyle and invites the multifamily industry to seize the opportunity to make change for our planet.</React.Fragment>}</p>)}
                  <div className="af-class-div-block-411">
                    <div className="af-class-div-block-412">{map(proxies['image-1'], props => <img src="/images/impact-group2x.jpg" srcSet="images/impact-group2x-p-500.jpeg 500w, images/impact-group2x-p-800.jpeg 800w, images/impact-group2x.jpg 956w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 41vw, (max-width: 991px) 28vw, 26vw" alt="" {...{...props, className: `af-class-image-15 ${props.className || ''}`}}>{props.children}</img>)}</div>
                    <div className="af-class-div-block-412">{map(proxies['image-2'], props => <img src="/images/resident-plant2x.jpg" srcSet="images/resident-plant2x-p-500.jpeg 500w, images/resident-plant2x.jpg 718w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 41vw, (max-width: 991px) 28vw, 26vw" alt="" {...{...props, className: `af-class-image-15 ${props.className || ''}`}}>{props.children}</img>)}</div>
                  </div>
                </div>
              </div>
              {map(proxies['image-3'], props => <figure {...{...props, className: `af-class-div-block-413 ${props.className || ''}`}}>{props.children}</figure>)}
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default GreenHomeGuideView

/* eslint-enable */