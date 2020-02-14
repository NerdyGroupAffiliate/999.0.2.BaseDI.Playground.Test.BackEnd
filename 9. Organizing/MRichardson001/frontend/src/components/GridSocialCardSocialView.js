/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class GridSocialCardSocialView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GridSocialCardSocialController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GridSocialCardSocialView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== GridSocialCardSocialView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'social-image': [],
      'social-name': [],
      'social-description': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-div-block-458">
            {map(proxies['wrapper'], props => <a href="/#" {...{...props, className: `af-class-link-block-10 w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-div-block-459 af-class-blur">
                <div className="af-class-div-block-457">{map(proxies['social-image'], props => <img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" {...{...props, className: `af-class-social-grid-icon ${props.className || ''}`}}>{props.children}</img>)}
                  {map(proxies['social-name'], props => <div {...{...props, className: `af-class-social-grid-account-handle ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Social Handle</React.Fragment>}</div>)}
                </div>
                {map(proxies['social-description'], props => <div {...{...props, className: `af-class-social-grid-post-description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Check out the Dallas Patch article honoring AMLI West Plano's Environmental Star of Excellence Award!</React.Fragment>}</div>)}
              </div>
            </React.Fragment>)}</a>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default GridSocialCardSocialView

/* eslint-enable */