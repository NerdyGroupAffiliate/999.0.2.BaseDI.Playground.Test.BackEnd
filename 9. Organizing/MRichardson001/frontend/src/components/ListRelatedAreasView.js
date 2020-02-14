/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ListRelatedAreasView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListRelatedAreasController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListRelatedAreasView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListRelatedAreasView ? transformProxies(this.props.children) : {
      'subtitle': [],
      'title': [],
      'text-blurb': [],
      'cities-list': [],
      'neighborhoods-list': [],
      'zipcodes-list': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-wrapper af-class-list_related_areas">
            <div className="af-class-div-block-17">
              <div className="af-class-div-block-16">
                {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-list-blocks-b-section-label af-class-light ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>related areas</React.Fragment>}</h2>)}
                {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Still Looking?</React.Fragment>}</h3>)}
                {map(proxies['text-blurb'], props => <div {...{...props, className: `af-class-related-areas-description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Check out these other areas around Chicago.</React.Fragment>}</div>)}
              </div>
              <div className="af-class-related-areas-locations-wrapper">
                {map(proxies['cities-list'], props => <div {...{...props, className: `af-class-related-areas-location-column af-class-cities ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <h6 className="af-class-related-areas-location-title">cities</h6><a href="/#" className="af-class-city-text-link">Deerfield</a><a href="/#" className="af-class-city-text-link">River North</a><a href="/#" className="af-class-city-text-link">South Loop</a><a href="/#" className="af-class-city-text-link">Woodridge</a></React.Fragment>}</div>)}
                {map(proxies['neighborhoods-list'], props => <div {...{...props, className: `af-class-related-areas-location-column af-class-hoods ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <h6 className="af-class-related-areas-location-title">neighborhoods</h6><a href="/#" className="af-class-hood-text-link">Seven Bridges</a><a href="/#" className="af-class-hood-text-link">River North</a><a href="/#" className="af-class-hood-text-link">Streeterville</a><a href="/#" className="af-class-hood-text-link">South Loop</a><a href="/#" className="af-class-hood-text-link">Bucktown</a></React.Fragment>}</div>)}
                {map(proxies['zipcodes-list'], props => <div {...{...props, className: `af-class-related-areas-location-column af-class-zipcodes ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <h6 className="af-class-related-areas-location-title">zipcodes</h6><a href="/#" className="af-class-zipcode-text-link">60603</a><a href="/#" className="af-class-zipcode-text-link">60603</a><a href="/#" className="af-class-zipcode-text-link">60603</a><a href="/#" className="af-class-zipcode-text-link">60603</a><a href="/#" className="af-class-zipcode-text-link">60603</a><a href="/#" className="af-class-zipcode-text-link">60603</a><a href="/#" className="af-class-zipcode-text-link">60603</a></React.Fragment>}</div>)}
              </div>
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ListRelatedAreasView

/* eslint-enable */