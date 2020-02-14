/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ListAmenitiesSimpleView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListAmenitiesSimpleController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListAmenitiesSimpleView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListAmenitiesSimpleView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'subtitle': [],
      'title': [],
      'list': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <section {...{...props, className: `af-class-div-block-336 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-div-block-335">
              <div className="af-class-div-block-334">
                {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Brookside downtown</React.Fragment>}</h2>)}
                {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline af-class-amli-blue ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Amenities headline</React.Fragment>}</h3>)}
                {map(proxies['list'], props => <ul {...{...props, className: `af-class-phase-1-amenity-list ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <li className="af-class-phase-1-amenity-list-item">
                    <div>Full-service fitness center with private studio for yoga or fitness classes on demand.</div>
                  </li>
                  <li className="af-class-phase-1-amenity-list-item">
                    <div>Convertible, one-bedroom &amp; two-bedroom floor plans</div>
                  </li>
                  <li className="af-class-phase-1-amenity-list-item">
                    <div>24-hour lounge with fireplace, TV's, billiards and foosball table.</div>
                  </li>
                  <li className="af-class-phase-1-amenity-list-item">
                    <div>10ft ceilings with exposed concrete and spiral duct work</div>
                  </li>
                  <li className="af-class-phase-1-amenity-list-item">
                    <div>Kitchen/ lounge with coffee bar</div>
                  </li>
                  <li className="af-class-phase-1-amenity-list-item">
                    <div>Wood flooring throughout*</div>
                  </li>
                  <li className="af-class-phase-1-amenity-list-item">
                    <div>Tech lounge and private meeting room</div>
                  </li>
                  <li className="af-class-phase-1-amenity-list-item">
                    <div>Elegant quartz countertops in kitchens and baths</div>
                  </li>
                  <li className="af-class-phase-1-amenity-list-item">
                    <div>Silver IP Gigabit broadband</div>
                  </li>
                  <li className="af-class-phase-1-amenity-list-item">
                    <div>Fully-equipped kitchens with stainless steel GE&nbsp;ENERGY STAR® appliances</div>
                  </li>
                  <li className="af-class-phase-1-amenity-list-item">
                    <div>Pool and BBQ area</div>
                  </li>
                  <li className="af-class-phase-1-amenity-list-item">
                    <div>Espresso or slate gray kitchen cabinets with designer tile bakcsplashes</div>
                  </li>
                  <li className="af-class-phase-1-amenity-list-item">
                    <div>Sport court &amp; multi-purpose green space</div>
                  </li>
                  <li className="af-class-phase-1-amenity-list-item">
                    <div>LEED Silver® &amp; ENERGY&nbsp;STAR® certified</div>
                  </li>
                  <li className="af-class-phase-1-amenity-list-item">
                    <div>Electric car charging stations</div>
                  </li>
                  <li className="af-class-phase-1-amenity-list-item">
                    <div>5,000 sqft of ground floor retail</div>
                  </li>
                </React.Fragment>}</ul>)}
              </div>
            </div>
          </React.Fragment>)}</section>)}
        </span>
      </React.Fragment>
    )
  }
}

export default ListAmenitiesSimpleView

/* eslint-enable */