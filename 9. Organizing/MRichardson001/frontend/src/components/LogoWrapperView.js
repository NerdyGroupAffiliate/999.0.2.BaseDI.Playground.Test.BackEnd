/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class LogoWrapperView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/LogoWrapperController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = LogoWrapperView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== LogoWrapperView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'image': [],
      'title': [],
      'subtitle': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-list-blocks-blurb-column af-class-awards ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['image'], props => <img src="/images/orange-theory-fitness3x.png" srcSet="images/orange-theory-fitness3x-p-500.png 500w, images/orange-theory-fitness3x.png 609w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 35vw, (max-width: 991px) 250px, 100vw" alt="" {...{...props, className: `af-class-award-image ${props.className || ''}`}}>{props.children}</img>)}
            {map(proxies['title'], props => <div {...{...props, className: `af-class-text-block-32 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Award Name Here</React.Fragment>}</div>)}
            {map(proxies['subtitle'], props => <div {...{...props, className: `af-class-paragraph af-class-small ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipis.</React.Fragment>}</div>)}
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default LogoWrapperView

/* eslint-enable */