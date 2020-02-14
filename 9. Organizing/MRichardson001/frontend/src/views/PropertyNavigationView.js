/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/PropertyNavigationView.css"


let Controller

class PropertyNavigationView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyNavigationController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyNavigationView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyNavigationView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/PropertyNavigationMeta")
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
            <div className="af-class-property-navigation">
              <div className="af-class-property-nav-container">
                <div className="af-class-property-nav-brand-wrapper"><img src="/images/loft-logo2x.jpg" alt="" className="af-class-image-39" /></div>
                <div className="af-class-property-nav-link-container"><a href="/property-phase-three" className="af-class-property-nav-link">Overview</a><a href="/floorplans" className="af-class-property-nav-link">Floor Plans &amp; Pricing</a><a href="/amenities" className="af-class-property-nav-link">Amenities &amp; Features</a><a href="/location" className="af-class-property-nav-link">Location</a><a href="/short-term-furnished" className="af-class-property-nav-link">Short-term Furnished</a><a href="/property-contact" className="af-class-property-nav-link">Contact Us</a>
                  <div className="w-embed">
                    <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 992px) and (max-width: 1024px) {\n  .af-view .af-class-propoerty-nav-link {\n    font-size: 12px;\n  }\n}\n" }} />
                  </div>
                </div>
                <nav data-w-id="dc900613-0baa-e7fd-5bc8-93a285191b75" className="af-class-div-block-240">
                  <div className="af-class-menu-icon-label">Menu</div>
                  <div className="af-class-property-menu-line af-class-top" />
                  <div className="af-class-property-menu-line" />
                </nav>
              </div>
              <div data-w-id="dc900613-0baa-e7fd-5bc8-93a285191b7a" style={{display: 'none'}} className="af-class-full-screen-menu-background">
                <div className="af-class-div-block-398" />
                <div className="af-class-div-block-447">
                  <div className="af-class-property-menu-items"><a href="/" className="af-class-full-screen-menu-link">AMLi Lofts</a>
                    <ul className="af-class-unordered-list-11 w-list-unstyled">
                      <li className="af-class-full-screen-sub-menu-item"><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link">Overview</a></li>
                      <li className="af-class-full-screen-sub-menu-item"><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link">Location</a></li>
                      <li className="af-class-full-screen-sub-menu-item"><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link">Floor Plans &amp; Pricing</a></li>
                      <li className="af-class-full-screen-sub-menu-item"><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link">Short-term Furnished</a></li>
                      <li className="af-class-full-screen-sub-menu-item"><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link">Amenities &amp; Features</a></li>
                      <li className="af-class-full-screen-sub-menu-item"><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link">Contact Property</a></li>
                    </ul>
                  </div>
                  <div data-delay={0} className="af-class-dropdown-3 w-dropdown">
                    <div className="af-class-dropdown-toggle-5 w-dropdown-toggle">
                      <div className="af-class-icon-4 w-icon-dropdown-toggle" />
                      <div className="af-class-full-screen-menu-link">Location</div>
                    </div>
                    <nav className="af-class-dropdown-list-6 w-dropdown-list"><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Austin</a><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Atlanta</a><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Dallas</a><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Denver</a><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Chicago</a><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Houston</a><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Southern California</a><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">South East Florida</a><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Settle</a></nav>
                  </div>
                  <div data-delay={0} className="af-class-dropdown-3 w-dropdown">
                    <div className="af-class-dropdown-toggle-5 w-dropdown-toggle">
                      <div className="af-class-icon-4 w-icon-dropdown-toggle" />
                      <div className="af-class-full-screen-menu-link">About Us</div>
                    </div>
                    <nav className="af-class-dropdown-list-6 w-dropdown-list"><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Overview</a><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Retail</a><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Development</a><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Leadership</a><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Corporate Governance</a></nav>
                  </div>
                  <div data-delay={0} className="af-class-dropdown-3 w-dropdown">
                    <div className="af-class-dropdown-toggle-5 w-dropdown-toggle">
                      <div className="af-class-icon-4 w-icon-dropdown-toggle" />
                      <div className="af-class-full-screen-menu-link">Careers</div>
                    </div>
                    <nav className="af-class-dropdown-list-6 w-dropdown-list"><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Overview</a><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Benefits</a><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Professional Development</a><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Giving Back</a><a href="/#" className="af-class-full-screen-menu-link af-class-sub-link w-dropdown-link">Join&nbsp;us</a></nav>
                  </div><a href="/index" className="af-class-full-sreen-main-link">Sustainability</a><a href="/index" className="af-class-full-sreen-main-link af-class-last-child">Contact</a></div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyNavigationView

/* eslint-enable */