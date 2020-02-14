/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class FloorplansSpecialSpotlightView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FloorplansSpecialSpotlightController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FloorplansSpecialSpotlightView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FloorplansSpecialSpotlightView ? transformProxies(this.props.children) : {
      'image': [],
      'icon': [],
      'special-text': [],
      'text': [],
      'date': [],
      'cta': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-spotlight-current-specials">
            <div className="af-class-div-block-182">
              <div className="af-class-div-block-186">{map(proxies['image'], props => <img src="/images/spotlight-tour-kitchen2x.jpg" srcSet="images/spotlight-tour-kitchen2x-p-500.jpeg 500w, images/spotlight-tour-kitchen2x-p-1080.jpeg 1080w, images/spotlight-tour-kitchen2x-p-2000.jpeg 2000w, images/spotlight-tour-kitchen2x-p-2600.jpeg 2600w, images/spotlight-tour-kitchen2x.jpg 2636w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 193.8125px, (max-width: 991px) 245.5px, 17vw" alt="" {...{...props, className: `af-class-image-34 ${props.className || ''}`}}>{props.children}</img>)}
                <div className="af-class-div-block-187" />
              </div>
              <div className="af-class-div-block-184">{map(proxies['icon'], props => <img src="/images/icon-specials-fire.png" alt="" {...{...props, className: `af-class-image-33 ${props.className || ''}`}}>{props.children}</img>)}
                {map(proxies['special-text'], props => <div {...{...props, className: `af-class-text-block-58 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>current specials</React.Fragment>}</div>)}
              </div>
              <div className="af-class-div-block-185">
                {map(proxies['text'], props => <div {...{...props, className: `af-class-text-block-56 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lease within 48 hours of touring and well take care of the admin fee.</React.Fragment>}</div>)}
                {map(proxies['date'], props => <div {...{...props, className: `af-class-text-block-57 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Exp. 11/30/18</React.Fragment>}</div>)}
              </div>{map(proxies['cta'], props => <a href="/#" {...{...props, className: `af-class-button-4 w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Call for details</React.Fragment>}</a>)}</div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default FloorplansSpecialSpotlightView

/* eslint-enable */