/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import CardsExtendingBlocksCardView from './CardsExtendingBlocksCardView'


let Controller

class CardsExtendingBlocksLargeImageView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CardsExtendingBlocksLargeImageController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CardsExtendingBlocksLargeImageView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CardsExtendingBlocksLargeImageView ? transformProxies(this.props.children) : {
      'image-wrapper': [],
      'right-column': [],
      'title-wrapper': [],
      'tag': [],
      'logo': [],
      'title': [],
      'cardsExtendingBlocksCardViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-cards-extending-blocks-large-image">{map(proxies['image-wrapper'], props => <img src="/../images/career-benefit-billboard2x.jpg" srcSet="../images/career-benefit-billboard2x-p-500.jpeg 500w, ../images/career-benefit-billboard2x-p-800.jpeg 800w, ../images/career-benefit-billboard2x-p-1600.jpeg 1600w, ../images/career-benefit-billboard2x-p-2600.jpeg 2600w, ../images/career-benefit-billboard2x.jpg 2948w" sizes="100vw" alt="" {...{...props, className: `af-class-image-59 ${props.className || ''}`}}>{props.children}</img>)}
            <div className="af-class-div-block-449">
              <div className="af-class-career-benefit-cards-offset af-class-_401k-reversed">
                {map(proxies['right-column'], props => <div {...{...props, className: `af-class-career-benefit-card-column af-class-reversed af-class-extends-large ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <CardsExtendingBlocksCardView.Controller {...this.props} />
                </React.Fragment>}</div>)}
                <div className="af-class-career-benefit-card-column-offset af-class-reversed af-class-extends-large">
                  {map(proxies['cardsExtendingBlocksCardViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
              </div>
              <div className="af-class-div-block-451">
                {map(proxies['title-wrapper'], props => <div {...{...props, className: `af-class-career-benefit-blocks-header af-class-reversed af-class-extend-large ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['tag'], props => <h2 {...{...props, className: `af-class-career-benefits-section-label af-class-no-margin ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Family &amp; Future</React.Fragment>}</h2>)}
                  <div className="af-class-div-block-450">{map(proxies['logo'], props => <img src="/../images/icon-benefit-stamp2x.jpg" alt="" {...{...props, className: `af-class-career-benefits-header-icon af-class-extend-large ${props.className || ''}`}}>{props.children}</img>)}
                    {map(proxies['title'], props => <h3 {...{...props, className: `af-class-career-benefit-section-tag af-class-extends-large ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$3,999 Company Match for 401(k)</React.Fragment>}</h3>)}
                  </div>
                </React.Fragment>)}</div>)}
              </div>
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default CardsExtendingBlocksLargeImageView

/* eslint-enable */