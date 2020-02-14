/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ImageTitleCtaView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ImageTitleCtaController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ImageTitleCtaView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ImageTitleCtaView ? transformProxies(this.props.children) : {
      'header-image': [],
      'header-title': [],
      'cta-link': [],
      'cta-text': [],
      'cta-arrow': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['header-image'], props => <header {...{...props, className: `af-class-page-header af-class-career-overview ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-page-header-content af-class-light af-class-vertical">
              {map(proxies['header-title'], props => <h1 {...{...props, className: `af-class-career-page-heading af-class-career ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Join the <span className="af-class-page-header-title-highlight">AMLI FAMLI</span></React.Fragment>}</h1>)}
              {map(proxies['cta-link'], props => <a href="/#" {...{...props, className: `af-class-button af-class-boss af-class-yellow af-class-no-margin af-class-career-page-header-btn-offset w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['cta-text'], props => <div {...{...props, className: `af-class-boos-button-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Button Text</React.Fragment>}</div>)}{map(proxies['cta-arrow'], props => <img src="/images/right-arrow.svg" alt="" {...{...props, className: `af-class-boss-right-arrow ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</a>)}
              <div className="af-class-html-embed-2 w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n .af-class-page-header-content {\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n}\n .af-class-page-header-title-highlight::after {\n  background-color: #ECD925;\n  content: '';\n  display: block;\n  bottom: 10px;\n  left: -5px;\n  right: -5px;\n  top: 45%;\n  position: absolute;\n  z-index: -1;\n}\n" }} />
              </div>
            </div>
          </React.Fragment>)}</header>)}
        </span>
      </React.Fragment>
    )
  }
}

export default ImageTitleCtaView

/* eslint-enable */