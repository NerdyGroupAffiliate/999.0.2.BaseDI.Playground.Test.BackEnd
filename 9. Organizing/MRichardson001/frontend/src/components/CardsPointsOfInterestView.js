/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class CardsPointsOfInterestView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CardsPointsOfInterestController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CardsPointsOfInterestView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CardsPointsOfInterestView ? transformProxies(this.props.children) : {
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
          <div className="af-class-cards_points_of_interest">
            <div className="af-class-poi_card_container">
              <div className="af-class-poi_card">
                {map(proxies['point-image-1'], props => <figure {...{...props, className: `af-class-poi_card_image af-class-restaurant ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  <div className="af-class-poi_card_tag">
                    {map(proxies['point-tag-1'], props => <div {...{...props, className: `af-class-poi_card_label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>restaurants</React.Fragment>}</div>)}
                  </div>
                </React.Fragment>)}</figure>)}
                <div className="af-class-poi_card_content">
                  {map(proxies['point-title-1'], props => <h3 {...{...props, className: `af-class-heading-3 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Girl &amp; the Goat</React.Fragment>}</h3>)}{map(proxies['point-fact-1'], props => <a href="/#" {...{...props, className: `af-class-point_fact-2 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>0.2 miles from <span className="af-class-poi_slide_distance_property-2">AMLI Lofts</span></React.Fragment>}</a>)}
                  {map(proxies['point-blurb-1'], props => <p {...{...props, className: `af-class-poi_card_description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Description provided by the restaurant that ties AMLI back into the conversation whether it’s from distance to the food or what have you.</React.Fragment>}</p>)}
                </div>
              </div>
              <div className="af-class-poi_card">
                {map(proxies['point-image-2'], props => <figure {...{...props, className: `af-class-poi_card_image af-class-brunch ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  <div className="af-class-poi_card_tag">
                    {map(proxies['point-tag-2'], props => <div {...{...props, className: `af-class-poi_card_label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>restaurants</React.Fragment>}</div>)}
                  </div>
                </React.Fragment>)}</figure>)}
                <div className="af-class-poi_card_content">
                  {map(proxies['point-title-2'], props => <h3 {...{...props, className: `af-class-heading-3 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Girl &amp; the Goat</React.Fragment>}</h3>)}{map(proxies['point-fact-2'], props => <a href="/#" {...{...props, className: `af-class-point_fact-2 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>0.2 miles from <span className="af-class-poi_slide_distance_property-2">AMLI Lofts</span></React.Fragment>}</a>)}
                  {map(proxies['point-blurb-2'], props => <p {...{...props, className: `af-class-poi_card_description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Description provided by the restaurant that ties AMLI back into the conversation whether it’s from distance to the food or what have you.</React.Fragment>}</p>)}
                </div>
              </div>
              <div className="af-class-poi_card">
                {map(proxies['point-image-3'], props => <figure {...{...props, className: `af-class-poi_card_image af-class-drinks ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  <div className="af-class-poi_card_tag">
                    {map(proxies['point-tag-3'], props => <div {...{...props, className: `af-class-poi_card_label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>restaurants</React.Fragment>}</div>)}
                  </div>
                </React.Fragment>)}</figure>)}
                <div className="af-class-poi_card_content">
                  {map(proxies['point-title-3'], props => <h3 {...{...props, className: `af-class-heading-3 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Girl &amp; the Goat</React.Fragment>}</h3>)}{map(proxies['point-fact-3'], props => <a href="/#" {...{...props, className: `af-class-point_fact-2 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>0.2 miles from <span className="af-class-poi_slide_distance_property-2">AMLI Lofts</span></React.Fragment>}</a>)}
                  {map(proxies['point-blurb-3'], props => <p {...{...props, className: `af-class-poi_card_description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Description provided by the restaurant that ties AMLI back into the conversation whether it’s from distance to the food or what have you.</React.Fragment>}</p>)}
                </div>
              </div>
              <div className="af-class-html-embed w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n .af-class-poi_card_tag {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n" }} />
              </div>
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default CardsPointsOfInterestView

/* eslint-enable */