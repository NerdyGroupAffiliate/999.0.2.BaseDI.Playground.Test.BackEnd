/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContentBlockWithSpotlightsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentBlockWithSpotlightsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentBlockWithSpotlightsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentBlockWithSpotlightsView ? transformProxies(this.props.children) : {
      'top-text-wrapper': [],
      'title': [],
      'top-body': [],
      'main-body': [],
      'image': [],
      'event-title-1': [],
      'event-description-1': [],
      'event-title-2': [],
      'event-description-2': [],
      'event-title-3': [],
      'event-description-3': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-activism-advocacy">
            <div className="af-class-activism-advocacy-container">
              <div className="af-class-div-block-403">
                <div className="af-class-activism-details-col">
                  {map(proxies['top-text-wrapper'], props => <div {...{...props, className: `af-class-activism-content-block-w-bg ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    {map(proxies['title'], props => <h2 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Activism &amp; Advocacy</React.Fragment>}</h2>)}
                    {map(proxies['top-body'], props => <p {...{...props, className: `af-class-paragraph af-class-max-width ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>As good citizens who genuinely care about our planet, AMLI believes in making it a priority to minimize the impact of our apartment communities and the people who work and live in them. We want to help others protect our planet by setting a good example, influencing our industry, engaging our residents, and giving back to our local communities through sustainable volunteer activities.</React.Fragment>}</p>)}
                  </React.Fragment>)}</div>)}
                  {map(proxies['main-body'], props => <div {...{...props, className: `af-class-div-block-406 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <h3 className="af-class-activism-suub-heading">Influencing Our Industry</h3>
                    <p className="af-class-paragraph">AMLI’s Green Manifesto explains why apartment living provides a healthier, and more responsible lifestyle and invites the multifamily industry to seize the opportunity to make change for our planet.</p>
                    <a href="/#" className="af-class-button af-class-boss af-class-yellow w-inline-block">
                      <div className="af-class-boos-button-label">Button Text</div><img src="/images/right-arrow.svg" alt="" className="af-class-boss-right-arrow" /></a>
                  </React.Fragment>}</div>)}
                </div>
                <div className="af-class-div-block-404">{map(proxies['image'], props => <img src="/images/activism-woman-speaking2x.jpg" srcSet="images/activism-woman-speaking2x-p-500.jpeg 500w, images/activism-woman-speaking2x-p-800.jpeg 800w, images/activism-woman-speaking2x.jpg 984w" sizes="(max-width: 767px) 80vw, (max-width: 991px) 23vw, 30vw" alt="" {...{...props, className: `af-class-activism-image-offset ${props.className || ''}`}}>{props.children}</img>)}</div>
              </div>
              <div className="af-class-activisim-event-wrap">
                <div className="af-class-activism-event-col af-class-first-child">
                  {map(proxies['event-title-1'], props => <h5 {...{...props, className: `af-class-activism-event-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Sustainable denver summit</React.Fragment>}</h5>)}
                  {map(proxies['event-description-1'], props => <div {...{...props, className: `af-class-activism-event-description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Waste Diversion Challenges in Tenant-Occupied Spaces</React.Fragment>}</div>)}
                </div>
                <div className="af-class-activism-event-col">
                  {map(proxies['event-title-2'], props => <h5 {...{...props, className: `af-class-activism-event-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>mfe conference</React.Fragment>}</h5>)}
                  {map(proxies['event-description-2'], props => <div {...{...props, className: `af-class-activism-event-description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Waste Diversion Challenges in Tenant Occupied Spaces</React.Fragment>}</div>)}
                </div>
                <div className="af-class-activism-event-col af-class-last-child">
                  {map(proxies['event-title-3'], props => <h5 {...{...props, className: `af-class-activism-event-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>naa apartmentalize</React.Fragment>}</h5>)}
                  {map(proxies['event-description-3'], props => <div {...{...props, className: `af-class-activism-event-description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Waste Diversion Challenges in Tenant-Occupied Spaces</React.Fragment>}</div>)}
                </div>
              </div>
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ContentBlockWithSpotlightsView

/* eslint-enable */