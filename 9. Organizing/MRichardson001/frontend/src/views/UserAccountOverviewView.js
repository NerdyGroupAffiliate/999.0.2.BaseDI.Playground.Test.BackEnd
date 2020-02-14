/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/UserAccountOverviewView.css"
import PropertyFullView from '../components/PropertyFullView'
import UserAccountView from '../components/UserAccountView'
import FooterView from '../components/FooterView'


let Controller

class UserAccountOverviewView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UserAccountOverviewController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UserAccountOverviewView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== UserAccountOverviewView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/UserAccountOverviewMeta")
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
            <PropertyFullView.Controller {...this.props} />
            <UserAccountView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default UserAccountOverviewView

/* eslint-enable */