/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import ListFaqItemExpandedView from './ListFaqItemExpandedView'
import ListFaqItemView from './ListFaqItemView'


let Controller

class ListFaqView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListFaqController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListFaqView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListFaqView ? transformProxies(this.props.children) : {
      'title': [],
      'faq-list': [],
      'question': [],
      'icon': [],
      'listFaqItemViewList1': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-list-faq">
            {map(proxies['title'], props => <h2 {...{...props, className: `af-class-section-heading af-class-faq ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Frequently Asked Questions</React.Fragment>}</h2>)}
            {map(proxies['faq-list'], props => <ul {...{...props, className: `af-class-list-faq-items ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <li className="af-class-list-faq-item-container af-class-first-child">
                {map(proxies['question'], props => <div {...{...props, className: `af-class-list-faq-question-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>How do I become a retail partner?</React.Fragment>}</div>)}
                <div className="af-class-div-block-80">{map(proxies['icon'], props => <img src="/../images/icon--plus-sign.svg" alt="" {...{...props, className: `af-class-faq-plus ${props.className || ''}`}}>{props.children}</img>)}</div>
              </li>
              <ListFaqItemExpandedView.Controller {...this.props} />
              {map(proxies['listFaqItemViewList1'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</React.Fragment>)}</ul>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default ListFaqView

/* eslint-enable */