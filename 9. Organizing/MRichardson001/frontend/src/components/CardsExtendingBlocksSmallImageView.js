/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import CardsExtendingBlocksCardView from './CardsExtendingBlocksCardView'


let Controller

class CardsExtendingBlocksSmallImageView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CardsExtendingBlocksSmallImageController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CardsExtendingBlocksSmallImageView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CardsExtendingBlocksSmallImageView ? transformProxies(this.props.children) : {
      'tag': [],
      'title': [],
      'stamp': [],
      'right-column': [],
      'image-wrapper': [],
      'cardsExtendingBlocksCardViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-cards-career-benefit-blocks">
            <section className="af-class-career-benefit-blocks-content-column">
              <div className="af-class-div-block-74">
                <div className="af-class-career-benefit-blocks-header">
                  {map(proxies['tag'], props => <h2 {...{...props, className: `af-class-career-benefits-section-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Health and Wellness</React.Fragment>}</h2>)}
                  {map(proxies['title'], props => <h3 {...{...props, className: `af-class-career-benefit-section-tag ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$600 - $1,200 Savings for Wellbeing Program Participation</React.Fragment>}</h3>)}{map(proxies['stamp'], props => <img src="/../images/icon-benefit-stamp2x.jpg" alt="" {...{...props, className: `af-class-career-benefits-header-icon af-class-offset-100 ${props.className || ''}`}}>{props.children}</img>)}</div>
                <div className="af-class-career-benefit-cards">
                  <div className="af-class-career-benefit-cards-offset">
                    <div className="af-class-career-benefit-card-column">
                      {map(proxies['cardsExtendingBlocksCardViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
                    {map(proxies['right-column'], props => <div {...{...props, className: `af-class-career-benefit-card-column-offset ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <CardsExtendingBlocksCardView.Controller {...this.props} />
                    </React.Fragment>}</div>)}
                    <div className="w-embed">
                      <style dangerouslySetInnerHTML={{__html: "\n .af-class-career-benefit-cards-offset {\n  transform: translateY(0%) translateX(0%);\n}\n@media (min-width: 992px) and (max-width: 1025px) {\n   .af-class-career-benefit-cards-offset {\n    transform: translateY(0) translateX(5%);\n  }\n}\n@media (min-width: 700px) and (max-width: 991px) {\n   .af-class-career-benefit-cards-offset {\n    transform: translateY(0) translateX(0);\n  }\n}\n" }} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {map(proxies['image-wrapper'], props => <div {...{...props, className: `af-class-career-benefit-image-column ${props.className || ''}`}}>{props.children}</div>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default CardsExtendingBlocksSmallImageView

/* eslint-enable */