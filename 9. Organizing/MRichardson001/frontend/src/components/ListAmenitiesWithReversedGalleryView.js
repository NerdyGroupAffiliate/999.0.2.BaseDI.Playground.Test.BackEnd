/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ListAmenitiesWithReversedGalleryView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListAmenitiesWithReversedGalleryController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListAmenitiesWithReversedGalleryView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListAmenitiesWithReversedGalleryView ? transformProxies(this.props.children) : {
      'header-container': [],
      'subtitle': [],
      'title': [],
      'gallery': [],
      'amenities-list': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-list-amenities-w-gallery af-class-reversed">
            {map(proxies['header-container'], props => <div {...{...props, className: `af-class-amenity-slider-heading af-class-reversed ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-div-block-160">
                {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Apartment amenities</React.Fragment>}</h2>)}
                {map(proxies['title'], props => <div {...{...props, className: `af-class-section-tagline af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Tagline summary of community features slider section.</React.Fragment>}</div>)}
              </div>
            </React.Fragment>)}</div>)}
            {map(proxies['gallery'], props => <div {...{...props, className: `af-class-amenities-image-slider-container af-class-reversed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/amenity-slider-current-image2x.jpg" srcSet="images/amenity-slider-current-image2x-p-500.jpeg 500w, images/amenity-slider-current-image2x-p-800.jpeg 800w, images/amenity-slider-current-image2x-p-1080.jpeg 1080w, images/amenity-slider-current-image2x.jpg 1352w" sizes="(max-width: 479px) 100vw, (max-width: 991px) 82vw, 41vw" alt="" className="af-class-amenity-slider-image" /><img src="/images/grid-highlight-kitchen2x.jpg" srcSet="images/grid-highlight-kitchen2x-p-1080.jpeg 1080w, images/grid-highlight-kitchen2x.jpg 1504w" sizes="(max-width: 479px) 100vw, (max-width: 991px) 14vw, 7vw" alt="" className="af-class-amenity-slider-image--next" />
              <div className="af-class-html-embed-6 w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n   .af-class-amenity-slider-image, .af-view .af-class-af-view .af-class-amenity-slider-image--next {\n    object-fit: cover;\n  }\n" }} />
              </div>
              <div className="af-class-amenities-slider-toolbar af-class-reversed">
                <div className="af-class-html-embed-8 w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n .af-class-arrow-l-chevron {\n  fill:#4c698f;\n  fill-rule: evenodd;\n}\n" }} />
                  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.13 22.02">
                    <title>Arrow-Chevron</title>
                    <g id="Symbols">
                      <polygon id="ion-ios-arrow-forward---Ionicons" points="13.13 2.2 10.94 0 0 11.01 10.94 22.02 13.13 19.82 4.44 11.01 13.13 2.2" className="af-class-arrow--chevron">
                      </polygon></g>
                  </svg></div>
                <div className="af-class-slider-dot af-class-active af-class-last" />
                <div className="af-class-slider-dot af-class-active af-class-next" />
                <div className="af-class-slider-dot af-class-active" />
                <div className="af-class-slider-dot af-class-active af-class-next" />
                <div className="af-class-slider-dot af-class-active af-class-last" />
                <div className="af-class-html-embed-9 w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n .af-class-arrow--chevron {\n  fill: #4c698f;\n  fill-rule: evenodd;\n}\n" }} />
                  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.13 22.02">
                    <title>Arrow -- Black</title>
                    <g id="Symbols">
                      <polygon id="ion-ios-arrow-forward---Ionicons" points="0 19.82 2.19 22.02 13.13 11.01 2.19 0 0 2.2 8.68 11.01 0 19.82" className="af-class-arrow--chevron">
                      </polygon></g>
                  </svg></div>
              </div>
            </React.Fragment>}</div>)}
            <div className="af-class-div-block-159 af-class-reversed">
              {map(proxies['amenities-list'], props => <ul {...{...props, className: `af-class-amenities-slider-list-wrap ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <li className="af-class-amenities-slider-list-item">
                  <div>Full-service fitness center with private studio for yoga or fitness classes on demand.</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>Outdoor lounge with banquette seating, TVs, kitchen, built-in grills, fire pit and lush landscaping</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>24-hour lounge with fireplace, TVs, billiards and foosball table</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>Walking distance to grocery stores, restaurants, coffee shops, cafes &amp; gyms</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>Kitchen/ lounge with coffee bar</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>Rooftop Sundecks</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>Tech lounge and private meeting room.</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>Dog park and dog wash</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>SilverIP Gigabit broadband</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>Recycling center</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>Pool &amp; BBQ area</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>On-site dry cleaner drop off &amp; pickup</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>Sport court &amp; multi-purpose green space</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>Breatheasy® smoke-free community -- inside and out</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>LEED Silver® &amp; ENERGY STAR® certified community</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>Two parking garages (one in each building)</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>Electric car chargin stations</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>Glass enclosed center walkway between building</div>
                </li>
                <li className="af-class-amenities-slider-list-item">
                  <div>5,000 sqft of ground floor retail </div>
                </li>
              </React.Fragment>}</ul>)}
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default ListAmenitiesWithReversedGalleryView

/* eslint-enable */