/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import ApartmentFeatureView from './ApartmentFeatureView'


let Controller

class ListApartmentFeaturesView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListApartmentFeaturesController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListApartmentFeaturesView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListApartmentFeaturesView ? transformProxies(this.props.children) : {
      'title': [],
      'body-container': [],
      'subtitle': [],
      'image': [],
      'apartmentFeatureViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-div-block-285">
            <div className="af-class-div-block-283">
              {map(proxies['title'], props => <h3 {...{...props, className: `af-class-short-term-list-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Reserve an apartment, pick up your keys and move in. It's that easy. Seriously.</React.Fragment>}</h3>)}
            </div>
            {map(proxies['body-container'], props => <div {...{...props, className: `af-class-short-term-list-wrapper ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-div-block-286">
                {map(proxies['subtitle'], props => <div {...{...props, className: `af-class-text-block-88 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>What's included...</React.Fragment>}</div>)}
                <ul className="af-class-short-term-list w-list-unstyled">
                  {map(proxies['apartmentFeatureViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</ul>{map(proxies['image'], props => <img src="/images/property-intro-image-loft2x.jpg" srcSet="images/property-intro-image-loft2x-p-500.jpeg 500w, images/property-intro-image-loft2x-p-800.jpeg 800w, images/property-intro-image-loft2x-p-1080.jpeg 1080w, images/property-intro-image-loft2x.jpg 1516w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 600px" alt="" {...{...props, className: `af-class-image-41 ${props.className || ''}`}}>{props.children}</img>)}</div>
              <div className="w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 360px) and (max-width: 400px) {\n   .af-class-short-term-list-wrapper {\n    padding-top: 350px;\n  }\n}\n@media (min-width: 401px) and (max-width: 480px) {\n   .af-class-short-term-list-wrapper {\n    padding-top: 410px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1278px) {\n   .af-class-short-term-list-tagline {\n    font-size: 26px;\n    line-height: 32px;\n    transform: translateY(-60%);\n  }\n}\n" }} />
              </div>
            </React.Fragment>)}</div>)}
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ListApartmentFeaturesView

/* eslint-enable */