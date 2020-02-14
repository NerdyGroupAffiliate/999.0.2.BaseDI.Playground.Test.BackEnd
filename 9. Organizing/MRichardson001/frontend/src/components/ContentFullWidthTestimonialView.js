/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContentFullWidthTestimonialView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentFullWidthTestimonialController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentFullWidthTestimonialView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentFullWidthTestimonialView ? transformProxies(this.props.children) : {
      'text-blurb': [],
      'written-by': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-div-block-78">
            <div className="af-class-div-block-79">
              {map(proxies['text-blurb'], props => <div {...{...props, className: `af-class-text-block-12 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>“AMLI offers all kind of opportunities and <span className="af-class-blue-highlight">resources to grow</span> within the company. I truly feel that we are all part of a FAMLI, where we are always open to hearing from one another.”</React.Fragment>}</div>)}
              {map(proxies['written-by'], props => <div {...{...props, className: `af-class-text-block-13 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>—Joshua , Senior Leasing Professional </React.Fragment>}</div>)}
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ContentFullWidthTestimonialView

/* eslint-enable */