/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SpotlightBillboardListItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SpotlightBillboardListItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SpotlightBillboardListItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SpotlightBillboardListItemView ? transformProxies(this.props.children) : {
      'item': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <li className="af-class-spotlight-bb-list-item"><img src="/images/icon--plus-sign.svg" alt="" className="af-class-spotlight-bb-list-icon" />
            {map(proxies['item'], props => <div {...props}>{props.children ? props.children : <React.Fragment>Career Development and Mobility</React.Fragment>}</div>)}
          </li>
        </span>
      </React.Fragment>
    )
  }
}

export default SpotlightBillboardListItemView

/* eslint-enable */