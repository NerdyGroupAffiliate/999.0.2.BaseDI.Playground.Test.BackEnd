/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import ListStaffLeaderView from './ListStaffLeaderView'


let Controller

class ListStaffView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListStaffController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListStaffView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListStaffView ? transformProxies(this.props.children) : {
      'tabs': [],
      'mobile-dropdown': [],
      'listStaffLeaderViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-list-staff">
            {map(proxies['tabs'], props => <div {...{...props, className: `af-class-list-staff-tab-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-leadership-tab af-class-active">
                <div>Executive</div>
              </div>
              <div className="af-class-leadership-tab">
                <div>Corporate</div>
              </div>
              <div className="af-class-leadership-tab">
                <div>Investment</div>
              </div>
              <div className="af-class-leadership-tab">
                <div>Property</div>
              </div>
              <div className="af-class-leadership-tab">
                <div>Development</div>
              </div>
            </React.Fragment>}</div>)}
            {map(proxies['mobile-dropdown'], props => <div data-delay={0} {...{...props, className: `af-class-list-staff-tab-header-dropdown w-dropdown ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-staff-dropdown-toggle w-dropdown-toggle">
                <div className="w-icon-dropdown-toggle" />
                <div className="af-class-text-block-16">Executive</div>
              </div>
              <nav className="w-dropdown-list"><a href="/#" className="w-dropdown-link">Link 1</a><a href="/#" className="w-dropdown-link">Link 2</a><a href="/#" className="w-dropdown-link">Link 3</a></nav>
            </React.Fragment>}</div>)}
            <div className="af-class-list-staff-leaders-row">
              {map(proxies['listStaffLeaderViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ListStaffView

/* eslint-enable */