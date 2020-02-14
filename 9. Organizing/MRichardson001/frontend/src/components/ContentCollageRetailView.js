/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import RetailCollageNumberItemView from './RetailCollageNumberItemView'


let Controller

class ContentCollageRetailView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentCollageRetailController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentCollageRetailView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentCollageRetailView ? transformProxies(this.props.children) : {
      'image-2': [],
      'image-3': [],
      'image-1': [],
      'title': [],
      'text-blurb': [],
      'retailCollageNumberItemViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-content-collage-retail">
            <div className="af-class-content-retail-collage-column">
              <div className="af-class-content-collage-split-images">
                <div className="af-class-div-block-54">
                  {map(proxies['image-2'], props => <div {...{...props, className: `af-class-content-collage-retail-split-image af-class-left ${props.className || ''}`}}>{props.children}</div>)}
                  {map(proxies['image-3'], props => <div {...{...props, className: `af-class-content-collage-retail-split-image af-class-right ${props.className || ''}`}}>{props.children}</div>)}
                </div>
              </div>
              {map(proxies['image-1'], props => <div {...{...props, className: `af-class-cert-collage-large-image ${props.className || ''}`}}>{props.children}</div>)}
            </div>
            <div className="af-class-content-collage-retail-content-column">
              <div className="af-class-retail-collage-content-container">
                {map(proxies['title'], props => <h2 {...{...props, className: `af-class-certification-block-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><span className="af-class-retail-collage-highlight">Retail</span> at AMLI,<br />by the numbers:</React.Fragment>}</h2>)}
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n   .af-class-retail-collage-highlight::after {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    background-color: #ecd925;\n    top: -15px;\n    height: 5px;\n  }\n  @media (max-width: 500px) {\n     .af-class-retail-collage-highlight:: after {\n      bottom: 10px;\n      top: -5px!important;\n    }\n  }\n" }} />
                </div>
                {map(proxies['text-blurb'], props => <div {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Retail spaces in AMLI properties increase economic output in every community. Here are a few highlights:</React.Fragment>}</div>)}
                {map(proxies['retailCollageNumberItemViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ContentCollageRetailView

/* eslint-enable */