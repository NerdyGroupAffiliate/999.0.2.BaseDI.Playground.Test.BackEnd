/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ResidentPortalFeedbackView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ResidentPortalFeedbackController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ResidentPortalFeedbackView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ResidentPortalFeedbackView ? transformProxies(this.props.children) : {
      'title': [],
      'text': [],
      'community-dropdown': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-div-block-319">
            <div className="af-class-div-block-320">
              <div className="af-class-div-block-321 af-class-blur">
                {map(proxies['title'], props => <h1 {...{...props, className: `af-class-heading-25 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Welcome to AMLI's Resident Portal</React.Fragment>}</h1>)}
                {map(proxies['text'], props => <div {...{...props, className: `af-class-paragraph af-class-light ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Choose your community and then log in to connect with AMLI's convenient resident services and programs.</React.Fragment>}</div>)}
                {map(proxies['community-dropdown'], props => <div data-delay={0} {...{...props, className: `af-class-dropdown w-dropdown ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <div className="af-class-dropdown-toggle w-dropdown-toggle">
                    <div className="af-class-text-block-94">Select Community</div>
                    <div className="af-class-div-block-322">
                      <div className="af-class-icon w-icon-dropdown-toggle" />
                    </div>
                  </div>
                  <nav className="af-class-dropdown-list-4 w-dropdown-list"><a href="/#" className="af-class-community-dropdown-link w-dropdown-link">Community 1</a><a href="/#" className="af-class-community-dropdown-link w-dropdown-link">Community 2</a><a href="/#" className="af-class-community-dropdown-link w-dropdown-link">Community 3</a></nav>
                </React.Fragment>}</div>)}
              </div>
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default ResidentPortalFeedbackView

/* eslint-enable */