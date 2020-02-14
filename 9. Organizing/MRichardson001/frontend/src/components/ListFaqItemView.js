/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ListFaqItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListFaqItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListFaqItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListFaqItemView ? transformProxies(this.props.children) : {
      'item-wrapper': [],
      'question': [],
      'icon': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['item-wrapper'], props => <li {...{...props, className: `af-class-list-faq-item-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['question'], props => <div {...{...props, className: `af-class-list-faq-question-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Where are your standard lease terms?</React.Fragment>}</div>)}
            <div className="af-class-div-block-80">{map(proxies['icon'], props => <img src="/../images/icon--plus-sign.svg" alt="" {...{...props, className: `af-class-faq-plus ${props.className || ''}`}}>{props.children}</img>)}</div>
          </React.Fragment>)}</li>)}
        </span>
      </React.Fragment>
    )
  }
}

export default ListFaqItemView

/* eslint-enable */