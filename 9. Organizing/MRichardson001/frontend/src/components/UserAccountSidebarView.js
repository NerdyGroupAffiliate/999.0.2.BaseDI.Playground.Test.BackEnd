/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class UserAccountSidebarView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UserAccountSidebarController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UserAccountSidebarView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== UserAccountSidebarView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
      'signout': [],
      'specials-block': [],
      'blurb': [],
      'expiration': [],
      'cta': [],
      'specials-tag': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-profile-sidebar ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-div-block-396">
              {map(proxies['title'], props => <div {...{...props, className: `af-class-text-block-113 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Hey Dennis,<br />Here's your quote Summary.</React.Fragment>}</div>)}{map(proxies['signout'], props => <a href="/#" {...{...props, className: `af-class-link-5 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Logout</React.Fragment>}</a>)}</div>
            {map(proxies['specials-block'], props => <div {...{...props, className: `af-class-div-block-392 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['blurb'], props => <div {...{...props, className: `af-class-paragraph af-class-small ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lease within 48 hours of touring and we'll take care of the admin fee.</React.Fragment>}</div>)}
              <div className="af-class-div-block-391">
                {map(proxies['expiration'], props => <div {...props}>{props.children ? props.children : <React.Fragment>Exp. 1/30/19</React.Fragment>}</div>)}{map(proxies['cta'], props => <a href="/#" {...{...props, className: `af-class-link-text ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Call for details</React.Fragment>}</a>)}</div>
              {map(proxies['specials-tag'], props => <div {...{...props, className: `af-class-lozenge--specials af-class-quote-summary ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-text-block">Current Specials</div><img src="/images/icon-special-fire3x.svg" alt="" className="af-class-icon-fire" /></React.Fragment>}</div>)}
            </React.Fragment>)}</div>)}
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default UserAccountSidebarView

/* eslint-enable */