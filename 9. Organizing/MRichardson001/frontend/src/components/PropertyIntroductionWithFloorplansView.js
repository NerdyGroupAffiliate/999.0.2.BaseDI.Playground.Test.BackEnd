/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import FloorplanCardListView from './FloorplanCardListView'


let Controller

class PropertyIntroductionWithFloorplansView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyIntroductionWithFloorplansController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyIntroductionWithFloorplansView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyIntroductionWithFloorplansView ? transformProxies(this.props.children) : {
      'subtitle': [],
      'title': [],
      'text-blurb': [],
      'small-image': [],
      'big-image': [],
      'body-wrapper': [],
      'empty': [],
      'title-wrapper': [],
      'lower-subtitle': [],
      'lower-title': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-property-intro-floorplans">
            <div className="af-class-property-intro-copy-wrapper">
              <div className="af-class-property-intro-copy">
                <div className="af-class-property-intro-copy-container">
                  {map(proxies['subtitle'], props => <h1 {...{...props, className: `af-class-section-title af-class-loft ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>southloop apartments</React.Fragment>}</h1>)}
                  {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline af-class-large af-class-loft ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>More than lofty ideals, it's the ideal loft.</React.Fragment>}</h3>)}
                  {map(proxies['text-blurb'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Our downtown Chicago apartments offer convertibles, one- and two-bedrooms floor plans with soft loft contemporary interiors featuring exposed concrete and spiral ductwork, quartz countertops, stainless steel appliances, full-size washers and dryers, wood flooring, ten-foot ceilings, and awesome city views. </React.Fragment>}</p>)}
                  <div className="w-embed">
                    <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 1600px) {\n   .af-class-property-intro-copy-container {\n    max-width: 545px;\n  }\n}\n" }} />
                  </div>
                </div>{map(proxies['small-image'], props => <img src="/images/lofts-amenity-exterior-clubroom2x.jpg" srcSet="images/lofts-amenity-exterior-clubroom2x-p-500.jpeg 500w, images/lofts-amenity-exterior-clubroom2x-p-1080.jpeg 1080w, images/lofts-amenity-exterior-clubroom2x.jpg 1366w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 65vw, (max-width: 2732px) 50vw, 1366px" alt="" {...{...props, className: `af-class-image-20 ${props.className || ''}`}}>{props.children}</img>)}
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 992px) and (max-width:1278px) {\n   .af-class-property-intro-copy {\n    padding-bottom: 210px;\n  }\n}\n@media (min-width: 1750px) {\n   .af-class-property-intro-copy {\n    padding-bottom: 270px;\n  }\n}\n@media (min-width: 2000px) {\n   .af-class-property-intro-copy {\n    padding-bottom: 300px;\n  }\n}\n@media (min-width: 2500px) {\n   .af-class-property-intro-copy {\n    padding-bottom: 330px;\n  }\n}\n" }} />
                </div>
              </div>
              {map(proxies['big-image'], props => <div {...{...props, className: `af-class-property-intro-image-column ${props.className || ''}`}}>{props.children}</div>)}
            </div>
            {map(proxies['body-wrapper'], props => <section {...{...props, className: `af-class-property-intro-floorplan-wrapper ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-div-block-131">
                {map(proxies['empty'], props => <div {...{...props, className: `af-class-empty-column-50vw ${props.className || ''}`}}>{props.children}</div>)}
                {map(proxies['title-wrapper'], props => <div {...{...props, className: `af-class-div-block-133 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['lower-subtitle'], props => <h2 {...{...props, className: `af-class-section-title af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>floor plans &amp; pricing</React.Fragment>}</h2>)}
                  {map(proxies['lower-title'], props => <h3 {...{...props, className: `af-class-section-tagline af-class-large af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Floor plan Highlights</React.Fragment>}</h3>)}
                </React.Fragment>)}</div>)}
              </div>
              <div className="af-class-property-floorplans-wrapper">
                <FloorplanCardListView.Controller {...this.props} />
              </div>
            </React.Fragment>)}</section>)}
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyIntroductionWithFloorplansView

/* eslint-enable */