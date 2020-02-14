/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import PropertyNavigationLinkView from './PropertyNavigationLinkView'
import PropertyNavigationModalView from './PropertyNavigationModalView'


let Controller

class PropertyFullView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyFullController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyFullView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyFullView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'logo': [],
      'links': [],
      'apply-button': [],
      'menu-container': [],
      'menu-label': [],
      'menu-line-one': [],
      'menu-line-two': [],
      'propertyNavigationLinkViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-property-navigation ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-property-nav-container">
              <div className="af-class-property-nav-brand-wrapper">{map(proxies['logo'], props => <img src="/images/loft-logo2x.jpg" alt="" {...{...props, className: `af-class-image-39 ${props.className || ''}`}}>{props.children}</img>)}</div>
              <div className="af-class-div-block-462">
                {map(proxies['links'], props => <div {...{...props, className: `af-class-property-nav-link-container ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>{map(proxies['propertyNavigationLinkViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}<div className="w-embed">
                    <style dangerouslySetInnerHTML={{__html: "\n  .af-class-full-screen-menu-item.af-class-last-child:after {\n   content: \"\";\n    display: block;\n    height: 100px;\n    position: absolute;\n    bottom: -100px;\n    width: 1px;\n  }\n   .af-class-property-nav-link-container, .af-view .af-class-af-view .af-class-full-screen-menu-background {\n    scrollbar-width: none; /* Firefox */\n    -ms-overflow-style: none;\n    -webkit-scrollbar-width: none;\n    -webkit-overflow-scrolling: touch;\n  }\n@media (min-width: 1400px) {\n   .af-class-property-nav-link {\n    font-size: 16px;\n  }\n   .af-class-property-nav-link.af-class-current {\n    font-size: 16px;\n  }\n}\n@media (max-width: 1075px) {\n   .af-class-property-nav-link-container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transform: translateY(100%);\n    padding: 20px 20px 20px 10px;\n    background: #fff;\n    border-top: 1px solid #d8d8d8;\n    border-bottom: 1px solid #d8d8d8;\n  }\n   .af-class-div-block-462 {\n    justify-content: flex-end;\n    width: 100%;\n  }\n}\n@media screen and (min-width: 1075px) and (max-width: 1135px) {\n   .af-class-property-nav-link {\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 1075px) {\n   .af-class-breadcrumb-container {\n    top: 60px!important;\n  }\n}\n@media screen and (min-width: 900px) and (max-width: 1075px) {\n   .af-class-property-nav-link-container {\n    justify-content: center;\n  }\n}\n@media screen and (max-width: 875px) {\n   .af-class-property-nav-link.af-class-last-child:after {\n    content: \"\";\n    display: block;\n    height: 1px;\n    position: absolute;\n    right: -50px;\n    width: 50px;\n    overflow-y: scroll;\n  }\n   .af-class-full-screen-menu-item.af-class-last-child:after {\n    content: \"\";\n    display: block;\n    height: 50px;\n    position: absolute;\n    bottom: -50px;\n    width: 1px;\n  }\n}\n@media screen and (max-width: 768px) {\n   .af-class-property-nav-link.af-class-last-child:after {\n    right: -30px;\n    width: 30px;\n  }\n   .af-class-full-screen-menu-background {\n    padding-top: 0!important;\n  }\n}\n  " }} />
                  </div>
                </React.Fragment>}</div>)}{map(proxies['apply-button'], props => <a href="/#" {...{...props, className: `af-class-button-7 w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Apply</React.Fragment>}</a>)}</div>
              {map(proxies['menu-container'], props => <div data-w-id="890e9041-c8c6-4bdf-a202-a24f882d5134" {...{...props, className: `af-class-div-block-240 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['menu-label'], props => <div {...{...props, className: `af-class-menu-icon-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Menu</React.Fragment>}</div>)}
                {map(proxies['menu-line-one'], props => <div {...{...props, className: `af-class-property-menu-line af-class-top ${props.className || ''}`}}>{props.children}</div>)}
                {map(proxies['menu-line-two'], props => <div {...{...props, className: `af-class-property-menu-line ${props.className || ''}`}}>{props.children}</div>)}
              </React.Fragment>)}</div>)}
              <div className="af-class-div-block-477" />
            </div>
            <PropertyNavigationModalView.Controller {...this.props} />
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyFullView

/* eslint-enable */