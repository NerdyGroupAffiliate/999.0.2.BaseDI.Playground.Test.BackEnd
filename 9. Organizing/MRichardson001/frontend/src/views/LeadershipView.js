/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/LeadershipView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import ListStaffView from '../components/ListStaffView'
import FooterView from '../components/FooterView'


let Controller

class LeadershipView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/LeadershipController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = LeadershipView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== LeadershipView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/LeadershipMeta")
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
            <NavigationHeaderView.Controller {...this.props} />
            <section className="af-class-about-page-header af-class-leadership">
              <h1 className="af-class-heading-13">Leadership</h1>
            </section>
            <ListStaffView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default LeadershipView

/* eslint-enable */