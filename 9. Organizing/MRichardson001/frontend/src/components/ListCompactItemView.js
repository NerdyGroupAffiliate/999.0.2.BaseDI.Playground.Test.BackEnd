/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ListCompactItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListCompactItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListCompactItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListCompactItemView ? transformProxies(this.props.children) : {
      'item': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <li className="af-class-list-compact-list-item"><img src="/images/icon--checkmark-circled3x.png" alt="" className="af-class-list-compact-list-item-icon" />
            {map(proxies['item'], props => <div {...props}>{props.children ? props.children : <React.Fragment>Health Package</React.Fragment>}</div>)}
          </li>
        </span>
      </React.Fragment>
    )
  }
}

export default ListCompactItemView

/* eslint-enable */