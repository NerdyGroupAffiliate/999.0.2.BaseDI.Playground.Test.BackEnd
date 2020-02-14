/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class GridSocialCardTaglineTitleView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GridSocialCardTaglineTitleController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GridSocialCardTaglineTitleView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== GridSocialCardTaglineTitleView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
      'description': [],
      'button': [],
      'label': [],
      'arrow': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-div-block-458">
            {map(proxies['wrapper'], props => <a href="/#" {...{...props, className: `af-class-link-block-10 af-class-no-img-bg w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-div-block-459 af-class-blur af-class-cover">
                <div className="af-class-div-block-457">
                  <div className="af-class-social-grid-program-title">{map(proxies['title'], props => <span {...{...props, className: `af-class-social-grid-yellow-hightlight ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>FAMLI Volunteer Program</React.Fragment>}</span>)}</div>
                </div>
                {map(proxies['description'], props => <div {...{...props, className: `af-class-social-grid-post-description af-class-large ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Our FAMLI Volunteer program helps our employees feel connected to our residents and each other, and most importantly, give back to local communities.</React.Fragment>}</div>)}
                {map(proxies['button'], props => <div {...{...props, className: `af-class-div-block-460 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['label'], props => <div {...{...props, className: `af-class-text-block-131 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Learn More</React.Fragment>}</div>)}{map(proxies['arrow'], props => <img src="/../images/arrow--long-right.png" alt="" {...{...props, className: `af-class-image-60 ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</div>)}
              </div>
            </React.Fragment>)}</a>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default GridSocialCardTaglineTitleView

/* eslint-enable */