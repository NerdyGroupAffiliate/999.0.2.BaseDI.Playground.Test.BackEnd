/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import NewsCardView from './NewsCardView'


let Controller

class CardsNewsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CardsNewsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CardsNewsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CardsNewsView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'label': [],
      'sub-title': [],
      'newsCardViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-wrapper af-class-cards_news ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-cards-news-container">
              <div className="af-class-cards-news-header">
                {map(proxies['label'], props => <h1 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>around the area</React.Fragment>}</h1>)}
                {map(proxies['sub-title'], props => <div {...{...props, className: `af-class-section-tagline af-class-light ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Stay in the loop.</React.Fragment>}</div>)}
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n .af-class-cards_news_header {\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n}\n" }} />
                </div>
              </div>
              <div className="af-class-div-block-15">
                {map(proxies['newsCardViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
            </div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default CardsNewsView

/* eslint-enable */