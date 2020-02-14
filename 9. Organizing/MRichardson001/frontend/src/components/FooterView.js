/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class FooterView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FooterController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FooterView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FooterView ? transformProxies(this.props.children) : {
      'logo': [],
      'social-media-logos': [],
      'link-list': [],
      'copyright-text': [],
      'equal-housing-logo': [],
      'terms-link': [],
      'privacy': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <footer className="af-class-wrapper af-class-footer">
            <div className="af-class-container af-class-footer af-class-flex">
              <div className="af-class-footer-top">
                <div className="af-class-div-block-6">{map(proxies['logo'], props => <img src="/images/Logo_White.svg" alt="" {...{...props, className: `af-class-image ${props.className || ''}`}}>{props.children}</img>)}
                  {map(proxies['social-media-logos'], props => <div {...{...props, className: `af-class-div-block-156 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/facebook3x.png" alt="" className="af-class-social-icon" /><img src="/images/instagram3x.png" alt="" className="af-class-social-icon" /><img src="/images/twitter3x.png" alt="" className="af-class-social-icon af-class-last-child" /></React.Fragment>}</div>)}
                </div>
                {map(proxies['link-list'], props => <div {...{...props, className: `af-class-div-block-5 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><a href="/#" className="af-class-footer-text-link">Investor Portal</a><a href="/#" className="af-class-footer-text-link">Vendors</a><a href="/contact" className="af-class-footer-text-link">Contact</a></React.Fragment>}</div>)}
              </div>
              <div className="af-class-footer-bottom">
                <div className="af-class-div-block-4">
                  {map(proxies['copyright-text'], props => <div {...{...props, className: `af-class-footer-text ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>2018 © AMLI Copyright. All Rights Reserved.</React.Fragment>}</div>)}
                </div>
                <div className="af-class-div-block-3">{map(proxies['equal-housing-logo'], props => <img src="/images/equal-housing-opportunity3x.png" alt="" {...{...props, className: `af-class-footer-equal-housing-logo ${props.className || ''}`}}>{props.children}</img>)}{map(proxies['terms-link'], props => <a href="/#" {...{...props, className: `af-class-footer-text-link af-class-legal ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Terms &amp; Conditions</React.Fragment>}</a>)}{map(proxies['privacy'], props => <a href="/#" {...{...props, className: `af-class-footer-text-link af-class-legal ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Privacy Policy</React.Fragment>}</a>)}</div>
              </div>
            </div>
          </footer>
        </span>
      </React.Fragment>
    )
  }
}

export default FooterView

/* eslint-enable */