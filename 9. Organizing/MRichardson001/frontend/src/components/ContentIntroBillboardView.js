/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContentIntroBillboardView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentIntroBillboardController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentIntroBillboardView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentIntroBillboardView ? transformProxies(this.props.children) : {
      'bg-image': [],
      'title': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-wrapper af-class-content_intro_billboard">
            {map(proxies['bg-image'], props => <div {...{...props, className: `af-class-div-block-18 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-content_intro_billboard_blur_box">
                {map(proxies['title'], props => <h2 {...{...props, className: `af-class-content_intro_billboard_title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Get to know the neighborhood</React.Fragment>}</h2>)}
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n .af-class-content_intro_billboard_blur_box {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n" }} />
                </div>
              </div>
            </React.Fragment>)}</div>)}
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ContentIntroBillboardView

/* eslint-enable */