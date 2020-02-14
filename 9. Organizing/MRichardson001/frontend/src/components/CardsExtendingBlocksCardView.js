/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class CardsExtendingBlocksCardView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CardsExtendingBlocksCardController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CardsExtendingBlocksCardView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CardsExtendingBlocksCardView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
      'blurb': [],
      'teaser-wrapper': [],
      'teaser-text': [],
      'arrow': [],
      'content': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-benefit-card-wrapper ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-benefit-card-content-wrapper">
              {map(proxies['title'], props => <div {...{...props, className: `af-class-benefit-card-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Medical, Dental &amp; Vision Insurance</React.Fragment>}</div>)}
              {map(proxies['blurb'], props => <div {...{...props, className: `af-class-benefit-card-title-description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>cover expenses when you need it most</React.Fragment>}</div>)}
            </div>
            {map(proxies['teaser-wrapper'], props => <div {...{...props, className: `af-class-div-block-71 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['teaser-text'], props => <div {...{...props, className: `af-class-text-block-9 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Plan Highlights</React.Fragment>}</div>)}{map(proxies['arrow'], props => <img src="/../images/icon-arrow--benefit-open3x.png" alt="" {...{...props, className: `af-class-image-10 ${props.className || ''}`}}>{props.children}</img>)}
              {map(proxies['content'], props => <div {...{...props, className: `af-class-div-block-63 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div>AMLI’s FSA gives you the option to put aside pre-tax dollars for annual health and dependent care expenses </div>
                <div>AMLI allows employees who participate in the high-deductible health plan to set aside pre-tax money for medical expenses in an HAS.</div>
              </React.Fragment>}</div>)}
            </React.Fragment>)}</div>)}
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default CardsExtendingBlocksCardView

/* eslint-enable */