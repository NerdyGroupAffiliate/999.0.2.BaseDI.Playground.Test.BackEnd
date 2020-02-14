/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PageSubNavView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PageSubNavController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PageSubNavView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PageSubNavView ? transformProxies(this.props.children) : {
      'link-wrapper': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-sustainable-sub-nav">
            {map(proxies['link-wrapper'], props => <div {...{...props, className: `af-class-sustainable-sub-nav-container ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-sustainble-sub-nav-link">
                <div>Why We Care</div>
              </div>
              <div className="af-class-sustainble-sub-nav-link">
                <div>Certifications &amp; Awards</div>
              </div>
              <div className="af-class-sustainble-sub-nav-link">
                <div>Green Initiatives</div>
              </div>
              <div className="af-class-sustainble-sub-nav-link">
                <div>Advocacy &amp; Activism</div>
              </div>
              <div className="af-class-sustainble-sub-nav-link af-class-last-child">
                <div>In The News</div>
              </div>
            </React.Fragment>}</div>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default PageSubNavView

/* eslint-enable */