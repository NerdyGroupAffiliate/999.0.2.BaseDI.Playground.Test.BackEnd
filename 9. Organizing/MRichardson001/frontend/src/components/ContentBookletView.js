/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContentBookletView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentBookletController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentBookletView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentBookletView ? transformProxies(this.props.children) : {
      'sub-title': [],
      'title': [],
      'text-blurb-1': [],
      'image-1': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-content-booklet">
            <div className="af-class-content-booklet-container">
              <div className="af-class-content-booklet-content">
                {map(proxies['sub-title'], props => <div {...{...props, className: `af-class-text-block-11 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>next steps with amli</React.Fragment>}</div>)}
                {map(proxies['title'], props => <h2 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Planning Your Path</React.Fragment>}</h2>)}
                {map(proxies['text-blurb-1'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</React.Fragment>}</p>)}
                <div className="af-class-booklet-bind-block" />
              </div>
              <div className="af-class-content-booklet-image-column">{map(proxies['image-1'], props => <img src="/../images/content-booklet-1.jpg" srcSet="../images/content-booklet-1-p-500.jpeg 500w, ../images/content-booklet-1-p-1080.jpeg 1080w, ../images/content-booklet-1.jpg 1448w" sizes="(max-width: 991px) 100vw, 55vw" alt="" {...{...props, className: `af-class-image-65 ${props.className || ''}`}}>{props.children}</img>)}</div>
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ContentBookletView

/* eslint-enable */