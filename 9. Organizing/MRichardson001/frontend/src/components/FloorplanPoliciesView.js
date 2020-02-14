/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import FloorplanPoliciesTabView from './FloorplanPoliciesTabView'
import FloorplanPoliciesItemView from './FloorplanPoliciesItemView'


let Controller

class FloorplanPoliciesView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FloorplanPoliciesController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FloorplanPoliciesView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FloorplanPoliciesView ? transformProxies(this.props.children) : {
      'header': [],
      'title': [],
      'image-wrapper': [],
      'image': [],
      'floorplanPoliciesTabViewList0': [],
      'floorplanPoliciesItemViewList4': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-floorplan-policies">
            <div className="af-class-policies-tabs">
              <div className="af-class-div-block-206">
                <div className="af-class-div-block-210">
                  {map(proxies['header'], props => <h2 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>policies</React.Fragment>}</h2>)}
                  {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Apartment Add Ons</React.Fragment>}</h3>)}
                </div>
                <div className="af-class-tabbed-content-wrap">
                  <div className="af-class-tab-labels-wrap">
                    {map(proxies['floorplanPoliciesTabViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}<div className="af-class-div-block-203" />
                  </div>
                  <div className="af-class-active-tab-content-wrap">
                    {map(proxies['floorplanPoliciesItemViewList4'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
                </div>
              </div>
            </div>
            {map(proxies['image-wrapper'], props => <div {...{...props, className: `af-class-div-block-200 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['image'], props => <img src="/images/fees-background2x.jpg" srcSet="images/fees-background2x-p-500.jpeg 500w, images/fees-background2x-p-800.jpeg 800w, images/fees-background2x-p-1080.jpeg 1080w, images/fees-background2x.jpg 1440w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 90vw, (max-width: 2880px) 50vw, 1440px" alt="" {...{...props, className: `af-class-image-37 ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</div>)}
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default FloorplanPoliciesView

/* eslint-enable */