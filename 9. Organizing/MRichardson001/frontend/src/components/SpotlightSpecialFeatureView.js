/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SpotlightSpecialFeatureView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SpotlightSpecialFeatureController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SpotlightSpecialFeatureView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SpotlightSpecialFeatureView ? transformProxies(this.props.children) : {
      'image-1': [],
      'center-wrapper': [],
      'title': [],
      'text-blurb': [],
      'link-url': [],
      'link-text': [],
      'image-2': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-spotlight-special-feature">
            <div className="af-class-div-block-142">
              {map(proxies['image-1'], props => <div {...{...props, className: `af-class-spotlight-special-feat-column af-class-left-col ${props.className || ''}`}}>{props.children}</div>)}
              {map(proxies['center-wrapper'], props => <div {...{...props, className: `af-class-spotlight-special-feat-column af-class-content ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['title'], props => <div {...{...props, className: `af-class-property-sub-section-tagline af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>At home, <br />on the water</React.Fragment>}</div>)}
                {map(proxies['text-blurb'], props => <p {...{...props, className: `af-class-paragraph af-class-small af-class-light af-class-margin-top ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>MARINA DEL REY offers exquisite shopping, fine dining and loads of ocean and waterfront activities. Or if you are looking for a home for your boat, we have slips available from 17 foot to 85 foot beginning January 2018. Make sure to explore surrounding beaches, waterside restaurants, Venice Pier, Abbot Kinney and all your future neighborhood has to offer. </React.Fragment>}</p>)}
                {map(proxies['link-url'], props => <a href="/#" {...{...props, className: `af-class-link-w-icon af-class-no-background af-class-property-color w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['link-text'], props => <div {...props}>{props.children ? props.children : <React.Fragment>Learn about boat slips</React.Fragment>}</div>)}<img src="/images/icon-arrow--right-no-shadow3x.png" alt="" className="af-class-image-22" /></React.Fragment>)}</a>)}
              </React.Fragment>)}</div>)}
              {map(proxies['image-2'], props => <div {...{...props, className: `af-class-spotlight-special-feat-column af-class-right-col ${props.className || ''}`}}>{props.children}</div>)}
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default SpotlightSpecialFeatureView

/* eslint-enable */