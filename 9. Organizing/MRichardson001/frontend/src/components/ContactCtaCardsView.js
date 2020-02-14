/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContactCtaCardsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContactCtaCardsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContactCtaCardsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContactCtaCardsView ? transformProxies(this.props.children) : {
      'careers-cta': [],
      'landing-feedback-cta': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-div-block-433">
            <div className="af-class-div-block-431">
              <h3 className="af-class-heading-31">Careers</h3>
              <div className="af-class-text-block-122">Have a question about working at AMLI that was not answered in Careers?</div>
              {map(proxies['careers-cta'], props => <div {...{...props, className: `af-class-div-block-430 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-text-block-121">Contact Careers</div><img src="/images/arrow--long-right.png" alt="" className="af-class-image-51" /></React.Fragment>}</div>)}
            </div>
            <div className="af-class-div-block-431">
              <h3 className="af-class-heading-31">feedback</h3>
              <div className="af-class-text-block-122">We want to hear from you!</div>
              {map(proxies['landing-feedback-cta'], props => <div {...{...props, className: `af-class-div-block-430 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-text-block-121">Landing Page Feedback</div><img src="/images/arrow--long-right.png" alt="" className="af-class-image-51" /></React.Fragment>}</div>)}
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default ContactCtaCardsView

/* eslint-enable */