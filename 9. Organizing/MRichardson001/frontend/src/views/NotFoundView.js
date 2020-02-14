/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/NotFoundView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'


let Controller

class NotFoundView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NotFoundController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NotFoundView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== NotFoundView ? transformProxies(this.props.children) : {
      'try-looking': [],
      'keep-exploring': [],
    }


    let Metadata
    try {
      Metadata = require("../meta/NotFoundMeta")
      Metadata = Metadata.default || Metadata
    } catch (e) {
      // pass
      Metadata = null;
    }
    try {
      Metadata = require("../meta/defaultMeta")
      Metadata = Metadata.default || Metadata
    } catch (e) {
      // pass
      Metadata = null;
    }



    return (
      <React.Fragment>
        {Metadata ? <Metadata {...this.props} /> : null}
        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div>
            <NavigationHeaderView.Controller {...this.props} />
            <div className="af-class-utility-page-wrap">
              <div className="af-class-utility-page-content"><img src="/images/404-image.png" srcSet="images/404-image-p-500.png 500w, images/404-image.png 600w" sizes="(max-width: 479px) 90px, 110px" alt="" className="af-class-image-43" />
                <div className="af-class-div-block-323">
                  <div className="af-class-text-block-96">Error 404</div>
                  <h2 className="af-class-heading-26">Well this is embarrassing...</h2>
                  <div className="af-class-text-block-95">No one seems to be home. In the mean time, try looking {map(proxies['try-looking'], props => <a href="/#" {...{...props, className: `af-class-_404-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>here</React.Fragment>}</a>)} for another community or keep exploring us {map(proxies['keep-exploring'], props => <a href="/#" {...{...props, className: `af-class-_404-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>here</React.Fragment>}</a>)}.</div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default NotFoundView

/* eslint-enable */