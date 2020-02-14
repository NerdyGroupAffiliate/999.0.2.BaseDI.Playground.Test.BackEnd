/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import ValueListItemView from './ValueListItemView'


let Controller

class ListDetailedView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListDetailedController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListDetailedView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListDetailedView ? transformProxies(this.props.children) : {
      'block-title': [],
      'block-bold-text': [],
      'block-text-blurb': [],
      'block-image': [],
      'list-title': [],
      'valueListItemViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-list_detailed">
            <div className="af-class-list-detailed-image-column">
              <div className="af-class-div-block-29">
                <div className="af-class-list-detailed-image-content">
                  {map(proxies['block-title'], props => <h1 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Our Mission:</React.Fragment>}</h1>)}
                  {map(proxies['block-bold-text'], props => <div {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Provide an Outstanding Living Environment for Our Residents</React.Fragment>}</div>)}
                  {map(proxies['block-text-blurb'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Each day, every person who is part of the AMLI FAMLI is focused on doing all he or she can to achieve AMLI’s mission.</React.Fragment>}</p>)}
                </div>
              </div>
              {map(proxies['block-image'], props => <div {...{...props, className: `af-class-div-block-30 ${props.className || ''}`}}>{props.children}</div>)}
            </div>
            <div className="af-class-list-detailed-lists-column">
              <div className="af-class-list-detailed-list-content">
                {map(proxies['list-title'], props => <h2 {...{...props, className: `af-class-heading-7 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI Brand Values</React.Fragment>}</h2>)}
                {map(proxies['valueListItemViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ListDetailedView

/* eslint-enable */