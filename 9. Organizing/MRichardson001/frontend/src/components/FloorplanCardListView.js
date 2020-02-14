/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import FloorplanCardView from './FloorplanCardView'


let Controller

class FloorplanCardListView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FloorplanCardListController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FloorplanCardListView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FloorplanCardListView ? transformProxies(this.props.children) : {
      'card-list-wrapper': [],
      'special-card': [],
      'special-card-container': [],
      'special-title': [],
      'special-text': [],
      'special-exp-date': [],
      'special-button-text': [],
      'special-button-arrow': [],
      'floorplanCardViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['card-list-wrapper'], props => <div {...{...props, className: `af-class-property-floorplans-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['floorplanCardViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}{map(proxies['special-card'], props => <div {...{...props, className: `af-class-property-floorplan-card-col ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['special-card-container'], props => <div {...{...props, className: `af-class-property-floorplan-special-card ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-div-block-134"><img src="/images/icon-specials-fire.png" alt="specials-icon" className="af-class-floorplan-special-card-icon" />
                  {map(proxies['special-title'], props => <div {...{...props, className: `af-class-text-block-43 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Current Special</React.Fragment>}</div>)}
                </div>
                <div>
                  {map(proxies['special-text'], props => <div {...{...props, className: `af-class-text-block-40 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lease within 48 hours of touring and we'll take care of the admin fee.</React.Fragment>}</div>)}
                  {map(proxies['special-exp-date'], props => <div {...{...props, className: `af-class-text-block-41 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Exp. 04/21/19</React.Fragment>}</div>)}
                  <div className="af-class-div-block-135">
                    {map(proxies['special-button-text'], props => <div {...{...props, className: `af-class-text-block-42 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>View All Floorplans</React.Fragment>}</div>)}{map(proxies['special-button-arrow'], props => <img src="/images/icon-arrow--right--blue.svg" alt="" {...props}>{props.children}</img>)}</div>
                </div>
              </React.Fragment>)}</div>)}
            </React.Fragment>)}</div>)}
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default FloorplanCardListView

/* eslint-enable */