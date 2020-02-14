/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SpotlightTextAndImageView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SpotlightTextAndImageController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SpotlightTextAndImageView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SpotlightTextAndImageView ? transformProxies(this.props.children) : {
      'title': [],
      'text-blurb': [],
      'image': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-spotlight-text-image af-class-no-cta">
            <div className="af-class-spotlight-text-image-content-column af-class-no-cta">
              <div className="af-class-spotlight-text-image-content">
                {map(proxies['title'], props => <h2 {...{...props, className: `af-class-spotlight-text-image-border-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>The AMLI&nbsp;FAMLI</React.Fragment>}</h2>)}
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n .af-class-spotlight-text-image-border-heading::after, .af-view .af-class-af-view .af-class-list-compact-border-heading::after {\nbackground-color: #ECD925;\ncontent: '';\ndisplay: block;\ntop: -20px;\nheight: 5px;\nposition: absolute;\nwidth: 50px;\n}\n" }} />
                </div>
                {map(proxies['text-blurb'], props => <div {...{...props, className: `af-class-paragraph af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>The FAMLI that not only works but plays together, stays together. We offer an energizing environment in which to grow and learn. AMLI encourages employees to embrace a work-life balance -- a balance that ensures that they achieve their everyday goals, reflecting the enjoyment of their job as well as their personal lives.</React.Fragment>}</div>)}
              </div>
            </div>
            <div className="af-class-div-block-37">
              {map(proxies['image'], props => <div {...{...props, className: `af-class-div-block-55 ${props.className || ''}`}}>{props.children}</div>)}
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default SpotlightTextAndImageView

/* eslint-enable */