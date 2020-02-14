/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ListCompactListItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListCompactListItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListCompactListItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListCompactListItemView ? transformProxies(this.props.children) : {
      'item': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <li className="af-class-list-compact-list-item"><img src="/images/icon--checkmark-circled3x.png" alt="" className="af-class-list-compact-list-item-icon" />
            {map(proxies['item'], props => <div {...props}>{props.children ? props.children : <React.Fragment>Compensation &amp; Bonuses</React.Fragment>}</div>)}
          </li>
        </span>
      </React.Fragment>
    )
  }
}

export default ListCompactListItemView

/* eslint-enable */