/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import ListBlocksItemView from './ListBlocksItemView'


let Controller

class ListBlocksView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListBlocksController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListBlocksView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListBlocksView ? transformProxies(this.props.children) : {
      'title': [],
      'listBlocksItemViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-list-blocks">
            {map(proxies['title'], props => <div {...{...props, className: `af-class-list-blocks-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Our Values</React.Fragment>}</div>)}
            <div className="af-class-list-blocks-container">
              {map(proxies['listBlocksItemViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ListBlocksView

/* eslint-enable */