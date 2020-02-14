/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import ContentVideoTestimonialItemView from './ContentVideoTestimonialItemView'


let Controller

class ContentVideoTestimonialView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentVideoTestimonialController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentVideoTestimonialView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentVideoTestimonialView ? transformProxies(this.props.children) : {
      'contentVideoTestimonialItemViewList0': [],
      'contentVideoTestimonialItemViewList1': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-content-video-testimonial">
            <div className="af-class-content-video-testimonial-container">
              <div className="af-class-content-video-testy-column">
                {map(proxies['contentVideoTestimonialItemViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
              <div className="af-class-content-video-testy-column">
                {map(proxies['contentVideoTestimonialItemViewList1'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
            </div>
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n .af-class-content-video-testy-header::after {\n  content: '';\n  position: absolute;\n  display: block;\n  top: -15px;\n  left: 0;\n  width: 50px;\n  height: 5px;\n  background-color: #ecd925;\n}\n" }} />
            </div>
            <div className="af-class-content-video-testimonial-bg-blue-right" />
            <div className="af-class-content-video-testimonial-bg-blue-left" />
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ContentVideoTestimonialView

/* eslint-enable */