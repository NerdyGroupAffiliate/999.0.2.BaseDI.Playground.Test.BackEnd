/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class CardsPointsOfInterestDetailView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CardsPointsOfInterestDetailController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CardsPointsOfInterestDetailView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CardsPointsOfInterestDetailView ? transformProxies(this.props.children) : {
      'title': [],
      'text-blurb': [],
      'point-image-1': [],
      'point-tag-1': [],
      'point-title-1': [],
      'point-fact-1': [],
      'point-blurb-1': [],
      'point-image-2': [],
      'point-tag-2': [],
      'point-title-2': [],
      'point-fact-2': [],
      'point-blurb-2': [],
      'point-image-3': [],
      'point-tag-3': [],
      'point-title-3': [],
      'point-fact-3': [],
      'point-blurb-3': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-wrapper af-class-cards_content_offset">
            <div className="af-class-content-image-offset-header">
              <div className="af-class-div-block-11">
                <div className="af-class-cards-poi-detail-headers">
                  <h1 className="af-class-section-title">restaurants &amp; drinks</h1>
                  {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>A true calling to all foodies</React.Fragment>}</h3>)}
                </div>
                {map(proxies['text-blurb'], props => <p {...{...props, className: `af-class-content-image-offset-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>By virtue of being an epicenter of office buildings, hotels and many of the city's top tourist attractions, restaurants in the Loop tend to be either grab-and-go breakfast and lunch spots.</React.Fragment>}</p>)}
              </div>
            </div>
            <div className="af-class-content_image_offset_cards">
              <div className="af-class-poi_card_container">
                <div className="af-class-poi_card">
                  {map(proxies['point-image-1'], props => <div {...{...props, className: `af-class-poi_card_image af-class-restaurant ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    <div className="af-class-poi_card_tag">
                      {map(proxies['point-tag-1'], props => <div {...{...props, className: `af-class-poi_card_label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>restaurants</React.Fragment>}</div>)}
                    </div>
                  </React.Fragment>)}</div>)}
                  <div className="af-class-poi_card_content">
                    {map(proxies['point-title-1'], props => <h5 {...{...props, className: `af-class-heading-3 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Girl &amp; the Goat</React.Fragment>}</h5>)}{map(proxies['point-fact-1'], props => <a href="/#" {...{...props, className: `af-class-point_fact ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>0.2 miles from <span className="af-class-poi_slide_distance_property">AMLI Lofts</span></React.Fragment>}</a>)}
                    {map(proxies['point-blurb-1'], props => <p {...{...props, className: `af-class-poi_card_description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Description provided by the restaurant that ties AMLI back into the conversation whether it’s from distance to the food or what have you.</React.Fragment>}</p>)}
                  </div>
                </div>
                <div className="af-class-poi_card">
                  {map(proxies['point-image-2'], props => <div {...{...props, className: `af-class-poi_card_image af-class-brunch ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    <div className="af-class-poi_card_tag">
                      {map(proxies['point-tag-2'], props => <div {...{...props, className: `af-class-poi_card_label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>restaurants</React.Fragment>}</div>)}
                    </div>
                  </React.Fragment>)}</div>)}
                  <div className="af-class-poi_card_content">
                    {map(proxies['point-title-2'], props => <h5 {...{...props, className: `af-class-heading-3 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Girl &amp; the Goat</React.Fragment>}</h5>)}{map(proxies['point-fact-2'], props => <a href="/#" {...{...props, className: `af-class-point_fact ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>0.2 miles from <span className="af-class-poi_slide_distance_property">AMLI Lofts</span></React.Fragment>}</a>)}
                    {map(proxies['point-blurb-2'], props => <p {...{...props, className: `af-class-poi_card_description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Description provided by the restaurant that ties AMLI back into the conversation whether it’s from distance to the food or what have you.</React.Fragment>}</p>)}
                  </div>
                </div>
                <div className="af-class-poi_card">
                  {map(proxies['point-image-3'], props => <div {...{...props, className: `af-class-poi_card_image af-class-drinks ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    <div className="af-class-poi_card_tag">
                      {map(proxies['point-tag-3'], props => <div {...{...props, className: `af-class-poi_card_label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>restaurants</React.Fragment>}</div>)}
                    </div>
                  </React.Fragment>)}</div>)}
                  <div className="af-class-poi_card_content">
                    {map(proxies['point-title-3'], props => <h5 {...{...props, className: `af-class-heading-3 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Girl &amp; the Goat</React.Fragment>}</h5>)}{map(proxies['point-fact-3'], props => <a href="/#" {...{...props, className: `af-class-point_fact ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>0.2 miles from <span className="af-class-poi_slide_distance_property">AMLI Lofts</span></React.Fragment>}</a>)}
                    {map(proxies['point-blurb-3'], props => <p {...{...props, className: `af-class-poi_card_description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Description provided by the restaurant that ties AMLI back into the conversation whether it’s from distance to the food or what have you.</React.Fragment>}</p>)}
                  </div>
                </div>
                <div className="af-class-html-embed w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n .af-class-poi_card_tag {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n" }} />
                </div>
              </div>
            </div>
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 1900px) {\n   .af-class-content_image_offset_header {\n    padding-bottom: 10%;\n  }\n}\n" }} />
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default CardsPointsOfInterestDetailView

/* eslint-enable */