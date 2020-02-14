/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import CommunityContactItemView from './CommunityContactItemView'


let Controller

class CommunityContactsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CommunityContactsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CommunityContactsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CommunityContactsView ? transformProxies(this.props.children) : {
      'title': [],
      'communityContactItemViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div>
            <main className="af-class-div-block-429">
              {map(proxies['title'], props => <h1 {...{...props, className: `af-class-heading-30 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI&nbsp;Community Contacts</React.Fragment>}</h1>)}
              <div className="af-class-div-block-428">
                {map(proxies['communityContactItemViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
            </main>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default CommunityContactsView

/* eslint-enable */