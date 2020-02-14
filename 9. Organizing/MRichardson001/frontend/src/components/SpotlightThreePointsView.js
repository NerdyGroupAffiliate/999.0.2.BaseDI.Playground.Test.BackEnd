/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SpotlightThreePointsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SpotlightThreePointsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SpotlightThreePointsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SpotlightThreePointsView ? transformProxies(this.props.children) : {
      'title': [],
      'point-text-1': [],
      'point-image-1': [],
      'point-image-2': [],
      'point-text-2': [],
      'point-text-3': [],
      'point-image-3': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-spotlight-3-points">
            <div className="af-class-spotlight-3-first-column">
              <div className="af-class-spotlight-3-first-column-container">
                {map(proxies['title'], props => <h2 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>The AMLI Edge</React.Fragment>}</h2>)}
                {map(proxies['point-text-1'], props => <div {...{...props, className: `af-class-_3-spotlight-description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><span className="af-class-_3-spotlight-bold-description">AMLI's integrated approach</span> leverages our development and management teams’ expertise and strong collaboration to provide innovative apartment homes that enhance our residents’ lives.</React.Fragment>}</div>)}
              </div>
              {map(proxies['point-image-1'], props => <div {...{...props, className: `af-class-spotlight-3-point-full-bleed-img ${props.className || ''}`}}>{props.children}</div>)}
            </div>
            <div className="af-class-spotlight-3-point-column">{map(proxies['point-image-2'], props => <img src="/images/community-long-term2x.jpg" alt="" {...{...props, className: `af-class-spotlight-3-points-image ${props.className || ''}`}}>{props.children}</img>)}
              {map(proxies['point-text-2'], props => <div {...{...props, className: `af-class-_3-spotlight-description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><span className="af-class-_3-spotlight-bold-description">Owning our communities for the long-term</span> &nbsp;allows us to build an enduring commitment to our residents and the neighborhoods they call home.</React.Fragment>}</div>)}
            </div>
            <div className="af-class-spotlight-3-point-column af-class-reversed">
              {map(proxies['point-text-3'], props => <div {...{...props, className: `af-class-_3-spotlight-description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><span className="af-class-_3-spotlight-bold-description">The AMLI<strong>®</strong> brand</span> &nbsp;signifies exceptional quality and service, and managing our own communities ensures those high standards are maintained and protects our brand every single day.</React.Fragment>}</div>)}{map(proxies['point-image-3'], props => <img src="/images/AMLI-brand-lofts2x.jpg" alt="" {...{...props, className: `af-class-spotlight-3-points-image ${props.className || ''}`}}>{props.children}</img>)}</div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default SpotlightThreePointsView

/* eslint-enable */