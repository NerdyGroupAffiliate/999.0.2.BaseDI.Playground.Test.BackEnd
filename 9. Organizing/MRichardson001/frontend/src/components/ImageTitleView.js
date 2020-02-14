/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ImageTitleView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ImageTitleController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ImageTitleView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ImageTitleView ? transformProxies(this.props.children) : {
      'header-image': [],
      'header-title': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['header-image'], props => <header {...{...props, className: `af-class-about-header ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-about-header-blur-wrapper">
              <div className="w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n@media (min-width:768px) and (max-width:1024px) {\n   .af-class-about-header-title {\n    font-size: 48px\n  }\n}\n .af-class-about-header-blur-wrapper {\n  backdrop-filter:  blur(3px);\n  -webkit-backdrop-filter:  blur(3px);\n}\n" }} />
              </div>
              {map(proxies['header-title'], props => <h1 {...{...props, className: `af-class-about-header-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>An Enduring <span className="af-class-yellow-highlight">Commitment</span></React.Fragment>}</h1>)}
            </div>
          </React.Fragment>)}</header>)}
        </span>
      </React.Fragment>
    )
  }
}

export default ImageTitleView

/* eslint-enable */