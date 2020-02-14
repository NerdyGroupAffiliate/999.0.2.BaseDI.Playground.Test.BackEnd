/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import CardsExtendingBlocksCardView from './CardsExtendingBlocksCardView'


let Controller

class CardsExtendingBlocksMediumImageView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CardsExtendingBlocksMediumImageController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CardsExtendingBlocksMediumImageView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CardsExtendingBlocksMediumImageView ? transformProxies(this.props.children) : {
      'left-column': [],
      'right-column': [],
      'tag': [],
      'title': [],
      'stamp': [],
      'image-wrapper': [],
      'cardsExtendingBlocksCardViewList0': [],
      'cardsExtendingBlocksCardViewList1': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-cards-career-benefit-blocks af-class-reversed">
            <div className="af-class-career-benefit-blocks-content-column af-class-reversed">
              <div className="af-class-career-benefit-cards af-class-reversed">
                <div className="af-class-career-benefit-cards-offset af-class-reversed">
                  {map(proxies['left-column'], props => <div {...{...props, className: `af-class-career-benefit-card-column af-class-reversed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    {map(proxies['cardsExtendingBlocksCardViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</React.Fragment>}</div>)}
                  {map(proxies['right-column'], props => <div {...{...props, className: `af-class-career-benefit-card-column-offset af-class-reversed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    {map(proxies['cardsExtendingBlocksCardViewList1'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</React.Fragment>}</div>)}
                </div>
              </div>
            </div>
            <div className="af-class-div-block-73">
              <div className="af-class-career-benefit-blocks-header af-class-reversed af-class-flex-end">
                {map(proxies['tag'], props => <h2 {...{...props, className: `af-class-career-benefits-section-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Family &amp; Future</React.Fragment>}</h2>)}
                {map(proxies['title'], props => <h3 {...{...props, className: `af-class-career-benefit-section-tag ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$3,999 Company Match for 401(k)</React.Fragment>}</h3>)}{map(proxies['stamp'], props => <img src="/../images/icon-benefit-stamp2x.jpg" alt="" {...{...props, className: `af-class-career-benefits-header-icon af-class-flex ${props.className || ''}`}}>{props.children}</img>)}</div>
              {map(proxies['image-wrapper'], props => <div {...{...props, className: `af-class-career-benefit-image-column af-class-reversed ${props.className || ''}`}}>{props.children}</div>)}
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default CardsExtendingBlocksMediumImageView

/* eslint-enable */