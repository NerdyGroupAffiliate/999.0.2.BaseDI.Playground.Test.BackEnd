/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ListStaffLeaderView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListStaffLeaderController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListStaffLeaderView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListStaffLeaderView ? transformProxies(this.props.children) : {
      'image': [],
      'name': [],
      'role': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-list-staff-leader-column">{map(proxies['image'], props => <img src="/../images/Gregory-Mutz3x.jpg" alt="" {...{...props, className: `af-class-list-staff-leader-profile af-class-gregory ${props.className || ''}`}}>{props.children}</img>)}
            {map(proxies['name'], props => <div {...{...props, className: `af-class-list-staff-leader-name ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Gregory Mutz</React.Fragment>}</div>)}
            {map(proxies['role'], props => <div {...{...props, className: `af-class-list-staff-leader-position ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Chairman &amp; CEO</React.Fragment>}</div>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default ListStaffLeaderView

/* eslint-enable */