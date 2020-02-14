/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ExtraTextWithHighlightView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ExtraTextWithHighlightController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ExtraTextWithHighlightView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ExtraTextWithHighlightView ? transformProxies(this.props.children) : {
      'subtitle': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-content-intro-descriptive af-class-centered">
            <div className="af-class-content-intro-descriptive-section-highlight" />
            <div className="af-class-div-block-36">
              <div className="w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n .af-class-content-intro-descriptive-highlight::after {\n  bottom: 0;\n  background-color: #CADBF0;\n  position: absolute;\n  left: -5px;\n  right: -5px;\n  content: '';\n  display: block;\n  top: 15px;\n  z-index: -1;\n}\n" }} />
              </div>
              {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-content-intro-descriptive-title af-class-centered ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>We believe people need <span className="af-class-content-intro-descriptive-highlight">recognition</span> and the opportunity for personal and career development.</React.Fragment>}</h2>)}
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ExtraTextWithHighlightView

/* eslint-enable */