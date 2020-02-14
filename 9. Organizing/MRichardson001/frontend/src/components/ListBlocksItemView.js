/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ListBlocksItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListBlocksItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListBlocksItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListBlocksItemView ? transformProxies(this.props.children) : {
      'item-wrapper': [],
      'icon': [],
      'title': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-list-block-column">
            {map(proxies['item-wrapper'], props => <div {...{...props, className: `af-class-list-block-details ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['icon'], props => <img src="/../images/icon-retail-collaborative.svg" alt="" {...{...props, className: `af-class-list-block-icon ${props.className || ''}`}}>{props.children}</img>)}
              {map(proxies['title'], props => <div {...{...props, className: `af-class-list-block-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Collaborative</React.Fragment>}</div>)}
            </React.Fragment>)}</div>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default ListBlocksItemView

/* eslint-enable */