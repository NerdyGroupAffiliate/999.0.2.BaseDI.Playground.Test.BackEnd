/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SpotlightCareerView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SpotlightCareerController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SpotlightCareerView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SpotlightCareerView ? transformProxies(this.props.children) : {
      'background-image': [],
      'title': [],
      'link-url': [],
      'link-text': [],
      'link-arrow': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['background-image'], props => <section {...{...props, className: `af-class-spotlight-career ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-spotlight-career-blur-box">
              {map(proxies['title'], props => <h2 {...{...props, className: `af-class-section-tagline af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Join the AMLI&nbsp;FAMLI Today</React.Fragment>}</h2>)}
              {map(proxies['link-url'], props => <a href="/#" {...{...props, className: `af-class-button af-class-boss af-class-yellow af-class-no-margin af-class-hide-on-mobile w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['link-text'], props => <div {...{...props, className: `af-class-boos-button-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Find Openings</React.Fragment>}</div>)}{map(proxies['link-arrow'], props => <img src="/images/right-arrow.svg" alt="" {...{...props, className: `af-class-boss-right-arrow ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</a>)}
              <div className="w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n .af-class-spotlight-career-blur-box {\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n" }} />
              </div>
            </div>
          </React.Fragment>)}</section>)}
        </span>
      </React.Fragment>
    )
  }
}

export default SpotlightCareerView

/* eslint-enable */