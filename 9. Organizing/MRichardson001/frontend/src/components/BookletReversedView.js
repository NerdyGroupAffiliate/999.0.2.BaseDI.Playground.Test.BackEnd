/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class BookletReversedView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/BookletReversedController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BookletReversedView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== BookletReversedView ? transformProxies(this.props.children) : {
      'sub-title-reversed': [],
      'title-reversed': [],
      'text-blurb-reversed': [],
      'image-reversed': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-content-booklet af-class-reversed">
            <div className="af-class-content-booklet-container af-class-reversed">
              <div className="af-class-content-booklet-content af-class-reversed">
                {map(proxies['sub-title-reversed'], props => <div {...{...props, className: `af-class-text-block-11 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>leave no famli behind</React.Fragment>}</div>)}
                {map(proxies['title-reversed'], props => <h2 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Peer Training</React.Fragment>}</h2>)}
                {map(proxies['text-blurb-reversed'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</React.Fragment>}</p>)}
                <div className="af-class-booklet-bind-block af-class-reversed" />
              </div>
              <div className="af-class-content-booklet-image-column">{map(proxies['image-reversed'], props => <img src="/../images/content-booklet-2.jpg" srcSet="../images/content-booklet-2-p-1080.jpeg 1080w, ../images/content-booklet-2.jpg 1448w" sizes="(max-width: 991px) 100vw, 55vw" alt="" {...{...props, className: `af-class-image-67 ${props.className || ''}`}}>{props.children}</img>)}</div>
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default BookletReversedView

/* eslint-enable */