/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContentIntroDescriptiveView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentIntroDescriptiveController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentIntroDescriptiveView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentIntroDescriptiveView ? transformProxies(this.props.children) : {
      'title': [],
      'text-blurb': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-content-intro-descriptive">
            <div className="af-class-div-block-36">
              <div className="w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n .af-class-content-intro-descriptive-highlight::after {\n  bottom: 0;\n  background-color: #CADBF0;\n  position: absolute;\n  left: -5px;\n  right: -5px;\n  content: '';\n  display: block;\n  top: 15px;\n  z-index: -1;\n}\n" }} />
              </div>
              {map(proxies['title'], props => <h2 {...{...props, className: `af-class-content-intro-descriptive-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>A reputation built on thoughtfully-designed, <span className="af-class-content-intro-descriptive-highlight">successful</span> developments</React.Fragment>}</h2>)}
              {map(proxies['text-blurb'], props => <div {...{...props, className: `af-class-paragraph af-class-dark ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>By combining great locations with the vision of AMLI’s experienced development team, AMLI has a proven track record of providing above market returns on its developments as well as providing our residents with the best living experience possible.</React.Fragment>}</div>)}
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ContentIntroDescriptiveView

/* eslint-enable */