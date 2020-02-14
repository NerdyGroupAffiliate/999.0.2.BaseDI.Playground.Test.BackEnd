/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/UnauthorizedView.css"


let Controller

class UnauthorizedView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UnauthorizedController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnauthorizedView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== UnauthorizedView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/UnauthorizedMeta")
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
            <div>
              <div className="w-password-page w-form">
                <form action="/.wf_auth" method="post" className="af-class-utility-page-form w-password-page"><img src="/https://d3e54v103j8qbb.cloudfront.net/static/password-page-lock.832ca8e2c9.svg" alt="" />
                  <h2>Protected Page</h2><input type="password" autofocus="true" maxLength={256} name="pass" placeholder="Enter your password" className="w-password-page w-input" /><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="w-password-page w-button" />
                  <div className="w-password-page w-form-fail">
                    <div>Incorrect password. Please try again.</div>
                  </div>
                  <div style={{display: 'none'}} className="w-password-page w-embed w-script"><input type="hidden" name="path" defaultValue="<%WF_FORM_VALUE_PATH%>" /><input type="hidden" name="page" defaultValue="<%WF_FORM_VALUE_PAGE%>" /></div>
                  <div style={{display: 'none'}} className="w-password-page w-embed w-script">
                  </div>
                </form>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default UnauthorizedView

/* eslint-enable */