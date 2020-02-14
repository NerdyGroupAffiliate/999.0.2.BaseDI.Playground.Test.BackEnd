/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import FloorplansFloorplanCardView from './FloorplansFloorplanCardView'


let Controller

class FloorplansCardContainerView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FloorplansCardContainerController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FloorplansCardContainerView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FloorplansCardContainerView ? transformProxies(this.props.children) : {
      'banner': [],
      'title': [],
      'floorplan-grid': [],
      'floorplansFloorplanCardViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-div-block-189">
            <div className="af-class-floorplan-section-heading-wrapper">{map(proxies['banner'], props => <img src="/images/bedroom-banner2x.jpg" srcSet="images/bedroom-banner2x-p-500.jpeg 500w, images/bedroom-banner2x-p-800.jpeg 800w, images/bedroom-banner2x-p-1080.jpeg 1080w, images/bedroom-banner2x-p-2000.jpeg 2000w, images/bedroom-banner2x.jpg 2020w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 679.359375px, 100vw" alt="" {...{...props, className: `af-class-image-35 ${props.className || ''}`}}>{props.children}</img>)}
              <div className="af-class-div-block-190" />
              {map(proxies['title'], props => <h2 {...{...props, className: `af-class-floorplan-section-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Studios</React.Fragment>}</h2>)}
            </div>
            <div className="af-class-floorplan-section-cards-container">
              {map(proxies['floorplan-grid'], props => <div {...{...props, className: `af-class-div-block-192 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                {map(proxies['floorplansFloorplanCardViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</React.Fragment>}</div>)}
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default FloorplansCardContainerView

/* eslint-enable */