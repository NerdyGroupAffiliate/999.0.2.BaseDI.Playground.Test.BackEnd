/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import PropertyNavigationModalLinkView from './PropertyNavigationModalLinkView'
import PropertyNavigationModalAboutLinkView from './PropertyNavigationModalAboutLinkView'


let Controller

class PropertyNavigationModalView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyNavigationModalController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyNavigationModalView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyNavigationModalView ? transformProxies(this.props.children) : {
      'modal': [],
      'locations': [],
      'about-us': [],
      'careers': [],
      'sustainability': [],
      'contact': [],
      'blog': [],
      'resident-portal': [],
      'language': [],
      'propertyNavigationModalLinkViewList0': [],
      'propertyNavigationModalAboutLinkViewList9': [],
      'propertyNavigationModalAboutLinkViewList10': [],
      'propertyNavigationModalAboutLinkViewList11': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['modal'], props => <div data-w-id="a266fcab-6719-6205-54ce-b8ab2436fe68" {...{...props, className: `af-class-full-screen-menu-background ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-div-block-398" />
            <ul className="af-class-unordered-list-10 w-list-unstyled">
              <li className="af-class-full-screen-menu-item">{map(proxies['locations'], props => <a href="/" {...{...props, className: `af-class-full-screen-menu-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Locations</React.Fragment>}</a>)}
                <ul className="af-class-unordered-list-11 w-list-unstyled">
                  {map(proxies['propertyNavigationModalLinkViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</ul>
              </li>
              <li className="af-class-full-screen-menu-item">{map(proxies['about-us'], props => <a href="/about-us" {...{...props, className: `af-class-full-screen-menu-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>About Us</React.Fragment>}</a>)}
                <ul className="af-class-unordered-list-11 w-list-unstyled">
                  {map(proxies['propertyNavigationModalAboutLinkViewList9'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</ul>
              </li>
              <li className="af-class-full-screen-menu-item">{map(proxies['careers'], props => <a href="/careers" {...{...props, className: `af-class-full-screen-menu-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Careers</React.Fragment>}</a>)}
                <ul className="af-class-unordered-list-11 w-list-unstyled">
                  {map(proxies['propertyNavigationModalAboutLinkViewList10'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</ul>
              </li>
              <li className="af-class-full-screen-menu-item">{map(proxies['sustainability'], props => <a href="/sustainability" {...{...props, className: `af-class-full-screen-menu-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Sustainability</React.Fragment>}</a>)}</li>
              <li className="af-class-full-screen-menu-item af-class-last-child">{map(proxies['contact'], props => <a href="/landing-page-template" {...{...props, className: `af-class-full-screen-menu-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Contact</React.Fragment>}</a>)}</li>
              <li className="af-class-full-screen-menu-item af-class-last-child">{map(proxies['blog'], props => <a href="/landing-page-template" {...{...props, className: `af-class-full-screen-menu-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Blog</React.Fragment>}</a>)}</li>
              <li className="af-class-full-screen-menu-item af-class-last-child">{map(proxies['resident-portal'], props => <a href="/landing-page-template" {...{...props, className: `af-class-full-screen-menu-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Resident Portal</React.Fragment>}</a>)}</li>
              <li className="af-class-full-screen-menu-item af-class-last-child">{map(proxies['language'], props => <a href="/landing-page-template" {...{...props, className: `af-class-full-screen-menu-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Language</React.Fragment>}</a>)}
                <ul className="af-class-unordered-list-11 w-list-unstyled">
                  {map(proxies['propertyNavigationModalAboutLinkViewList11'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</ul>
              </li>
            </ul>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyNavigationModalView

/* eslint-enable */