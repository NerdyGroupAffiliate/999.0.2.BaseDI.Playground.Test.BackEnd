/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ListFaqItemExpandedView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListFaqItemExpandedController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListFaqItemExpandedView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListFaqItemExpandedView ? transformProxies(this.props.children) : {
      'item-wrapper': [],
      'question': [],
      'icon': [],
      'answer': [],
      'contact': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['item-wrapper'], props => <li {...{...props, className: `af-class-list-faq-item-container af-class-selected ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-list-faq-question-container af-class-active">
              {map(proxies['question'], props => <div {...{...props, className: `af-class-list-faq-question-title af-class-active ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Do you have any requirements for prospective partners?</React.Fragment>}</div>)}
              <div className="af-class-div-block-80">{map(proxies['icon'], props => <img src="/../images/icon--plus-sign.svg" alt="" {...{...props, className: `af-class-faq-plus af-class-active ${props.className || ''}`}}>{props.children}</img>)}</div>
            </div>
            <div className="af-class-list-faq-answer-container">
              {map(proxies['answer'], props => <p {...{...props, className: `af-class-paragraph af-class-faq-answer ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</React.Fragment>}</p>)}
              {map(proxies['contact'], props => <a href="/#" {...{...props, className: `af-class-list-faq-answer-cta w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-text-block-14">Contact Us</div><img src="/../images/icon-arrow--right--blue.svg" alt="" className="af-class-image-12" /></React.Fragment>}</a>)}
            </div>
          </React.Fragment>)}</li>)}
        </span>
      </React.Fragment>
    )
  }
}

export default ListFaqItemExpandedView

/* eslint-enable */