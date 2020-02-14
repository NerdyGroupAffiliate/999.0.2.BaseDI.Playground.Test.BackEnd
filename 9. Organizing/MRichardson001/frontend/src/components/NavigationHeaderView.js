/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class NavigationHeaderView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NavigationHeaderController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NavigationHeaderView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== NavigationHeaderView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'logo': [],
      'mobile-menu-button': [],
      'navbar': [],
      'contact': [],
      'blog': [],
      'resident-portal': [],
      'login': [],
      'languages': [],
      'languages-list': [],
      'locations': [],
      'locations-list': [],
      'aboutus': [],
      'aboutus-list': [],
      'careers': [],
      'careers-list': [],
      'sustainability': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div data-collapse="small" data-animation="default" data-duration={400} data-doc-height={1} {...{...props, className: `af-class-navbar w-nav ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-container-2 w-container"><a href="/" className="af-class-brand w-nav-brand">{map(proxies['logo'], props => <img src="/images/Logo_Dark.svg" alt="" {...{...props, className: `af-class-image-13 ${props.className || ''}`}}>{props.children}</img>)}</a>
              {map(proxies['mobile-menu-button'], props => <div {...{...props, className: `af-class-menu-button w-nav-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="w-icon-nav-menu" />
              </React.Fragment>}</div>)}
              {map(proxies['navbar'], props => <nav role="navigation" {...{...props, className: `af-class-nav-menu w-nav-menu ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <ul className="af-class-top-nav-menu-list w-list-unstyled">
                  <li className="af-class-nav-top-menu-link-wrap">{map(proxies['contact'], props => <a href="/#" {...{...props, className: `af-class-nav-top-menulink ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Contact</React.Fragment>}</a>)}</li>
                  <li className="af-class-nav-top-menu-link-wrap">{map(proxies['blog'], props => <a href="/#" {...{...props, className: `af-class-nav-top-menulink ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Blog</React.Fragment>}</a>)}</li>
                  <li className="af-class-nav-top-menu-link-wrap">{map(proxies['login'], props => <a href="/#" {...{...props, className: `af-class-nav-top-menulink ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Login</React.Fragment>}</a>)}</li>
                  <li className="af-class-nav-top-menu-link-wrap">
                    <div data-delay={0} className="w-dropdown">
                      {map(proxies['languages'], props => <div {...{...props, className: `af-class-dropdown-toggle-3 w-dropdown-toggle ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                        <div className="af-class-nav-top-menulink">en</div>
                        <div className="af-class-nav-link-chevron af-class-translation-chveron w-icon-dropdown-toggle" />
                      </React.Fragment>}</div>)}
                      {map(proxies['languages-list'], props => <nav {...{...props, className: `af-class-dropdown-list-3 w-dropdown-list ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><a href="/careers" className="af-class-nav-dropdown-link w-dropdown-link">English</a><a href="/careers/culture" className="af-class-nav-dropdown-link w-dropdown-link">Spanish</a><a href="/careers/benefits" className="af-class-nav-dropdown-link w-dropdown-link">Portuguese</a><a href="/careers/professional-development" className="af-class-nav-dropdown-link w-dropdown-link">French</a><a href="/careers/giving-back" className="af-class-nav-dropdown-link w-dropdown-link">Italian</a></React.Fragment>}</nav>)}
                    </div>
                  </li>
                  <li className="af-class-nav-top-menu-link-wrap">{map(proxies['resident-portal'], props => <a href="/#" {...{...props, className: `af-class-nav-top-menulink af-class-nav-top-menulink2 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Resident Portal</React.Fragment>}</a>)}</li>
                </ul>
                <ul className="af-class-bottom-nav-menu-list w-list-unstyled">
                  <li className="af-class-nav-bottom-menu-link-wrap">
                    <div data-delay={0} data-hover={1} className="af-class-dropdown-5 w-dropdown">
                      {map(proxies['locations'], props => <div {...{...props, className: `af-class-bottom-menu-dropdown-toggle w-dropdown-toggle ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                        <div className="af-class-nav-bottom-link-label">Locations</div>
                        <div className="af-class-nav-link-chevron w-icon-dropdown-toggle" />
                      </React.Fragment>}</div>)}
                      {map(proxies['locations-list'], props => <nav {...{...props, className: `af-class-dropdown-list-2 w-dropdown-list ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><a href="/region" className="af-class-nav-dropdown-link w-dropdown-link">Region</a><a href="/sub-region" className="af-class-nav-dropdown-link w-dropdown-link">Sub-Region</a><a href="/property-phase-one" className="af-class-nav-dropdown-link w-dropdown-link">Property Phase 1</a><a href="/property-phase-two" className="af-class-nav-dropdown-link w-dropdown-link">Property Phase 2</a><a href="/property-phase-three" className="af-class-nav-dropdown-link w-dropdown-link">Property Phase 3 - 5</a><a href="/amenities" className="af-class-nav-dropdown-link w-dropdown-link">Amenities</a><a href="/floorplans" className="af-class-nav-dropdown-link w-dropdown-link">Floor Plans</a><a href="/floorplan-unit-chosen" className="af-class-nav-dropdown-link w-dropdown-link">Floor Plan - Unit Chosen</a><a href="/floor-plan-the-grid" className="af-class-nav-dropdown-link w-dropdown-link">Floor Plan - The Grid</a><a href="/floorplan-create-profile" className="af-class-nav-dropdown-link w-dropdown-link">Floor Plan - Create Profile</a><a href="/floorplan-quote-summary" className="af-class-nav-dropdown-link w-dropdown-link">Floor Plan - Quote Summary</a><a href="/landing-page-template" className="af-class-nav-dropdown-link w-dropdown-link">Feedback Landing Template</a><a href="/user-account-overview" className="af-class-nav-dropdown-link w-dropdown-link">User Account Overview</a></React.Fragment>}</nav>)}
                    </div>
                  </li>
                  <li className="af-class-nav-bottom-menu-link-wrap">
                    <div data-delay={0} data-hover={1} className="af-class-dropdown-5 w-dropdown">
                      {map(proxies['aboutus'], props => <div {...{...props, className: `af-class-bottom-menu-dropdown-toggle w-dropdown-toggle ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                        <div className="af-class-nav-bottom-link-label">About Us</div>
                        <div className="af-class-nav-link-chevron w-icon-dropdown-toggle" />
                      </React.Fragment>}</div>)}
                      {map(proxies['aboutus-list'], props => <nav {...{...props, className: `af-class-dropdown-list-2 w-dropdown-list ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><a href="/about-us" className="af-class-nav-dropdown-link w-dropdown-link">Overview</a><a href="/about-us/retail" className="af-class-nav-dropdown-link w-dropdown-link">Retail</a><a href="/about-us/development" className="af-class-nav-dropdown-link w-dropdown-link">Development</a><a href="/about-us/leadership" className="af-class-nav-dropdown-link w-dropdown-link">Leadership</a><a href="/about-us/corporate-governance" className="af-class-nav-dropdown-link w-dropdown-link">Corporate Governance</a></React.Fragment>}</nav>)}
                    </div>
                  </li>
                  <li className="af-class-nav-bottom-menu-link-wrap">
                    <div data-delay={0} data-hover={1} className="af-class-dropdown-5 w-dropdown">
                      {map(proxies['careers'], props => <div {...{...props, className: `af-class-bottom-menu-dropdown-toggle w-dropdown-toggle ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                        <div className="af-class-nav-bottom-link-label">Careers</div>
                        <div className="af-class-nav-link-chevron w-icon-dropdown-toggle" />
                      </React.Fragment>}</div>)}
                      {map(proxies['careers-list'], props => <nav {...{...props, className: `af-class-dropdown-list-2 w-dropdown-list ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><a href="/careers" className="af-class-nav-dropdown-link w-dropdown-link">Overview</a><a href="/careers/culture" className="af-class-nav-dropdown-link w-dropdown-link">Culture</a><a href="/careers/benefits" className="af-class-nav-dropdown-link w-dropdown-link">Benefits</a><a href="/careers/professional-development" className="af-class-nav-dropdown-link w-dropdown-link">Professional Development</a><a href="/careers/giving-back" className="af-class-nav-dropdown-link w-dropdown-link">Giving Back</a><a href="/careers/find-your-career" className="af-class-nav-dropdown-link w-dropdown-link">Find Your Career</a></React.Fragment>}</nav>)}
                    </div>
                  </li>
                  <li className="af-class-nav-bottom-menu-link-wrap-sustainability">{map(proxies['sustainability'], props => <a href="/sustainability" {...{...props, className: `af-class-nav-bottom-link-label af-class-sustainability ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Sustainability</React.Fragment>}</a>)}</li>
                </ul>
              </React.Fragment>)}</nav>)}
              <div className="af-class-html-embed-30 w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n .w-container::before, .af-view .af-class-af-view .w-container::after {\n  content: initial;\n}\n@media screen and (max-width: 767px) {\n   .af-class-dropdown-list-2 {\n    position: absolute!important;\n  }\n   .w-nav[data-collapse=\"small\"] .w-dropdown-list {\n    position: absolute;\n  }\n}\n@media screen and (max-width: 480px) {\n   .af-class-dropdown-list-2 {\n    position: relative!important;\n  }\n   .w-nav[data-collapse=\"small\"] .w-dropdown-list {\n    position: relative;\n  }\n}\n" }} />
              </div>
            </div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default NavigationHeaderView

/* eslint-enable */