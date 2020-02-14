/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import PropertyUnitDetailsView from './PropertyUnitDetailsView'


let Controller

class FloorplanUnitItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FloorplanUnitItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FloorplanUnitItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FloorplanUnitItemView ? transformProxies(this.props.children) : {
      'name': [],
      'pets': [],
      'pets-label': [],
      'pets-value': [],
      'floor': [],
      'floor-value': [],
      'movein': [],
      'movein-label': [],
      'movein-value': [],
      'lease': [],
      'lease-value': [],
      'sqft': [],
      'sqft-min': [],
      'sqft-max': [],
      'price': [],
      'price-label': [],
      'price-value': [],
      'toggle-info': [],
      'toggle-label': [],
      'toggle-icon': [],
      'quote': [],
      'quote-label': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-floorplann-unit-row af-class-selected">
            <div className="af-class-floorplan-unit-column-container">
              {map(proxies['name'], props => <div {...{...props, className: `af-class-floorplan-name-container af-class-floorplan-name ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-text-block-65">Polk - 814</div>
              </React.Fragment>}</div>)}
              {map(proxies['pets'], props => <div {...{...props, className: `af-class-floorplan-unit-column ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['pets-label'], props => <div {...{...props, className: `af-class-floorplan-unit-column-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Pets</React.Fragment>}</div>)}
                {map(proxies['pets-value'], props => <div {...{...props, className: `af-class-floorplan-unit-column-value ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>4</React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}
              {map(proxies['floor'], props => <div {...{...props, className: `af-class-floorplan-unit-column ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-floorplan-unit-column-label">Floor</div>
                {map(proxies['floor-value'], props => <div {...{...props, className: `af-class-floorplan-unit-column-value ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>4</React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}
              {map(proxies['movein'], props => <div {...{...props, className: `af-class-floorplan-unit-column ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['movein-label'], props => <div {...{...props, className: `af-class-floorplan-unit-column-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Move-in</React.Fragment>}</div>)}
                <div className="af-class-div-block-215">
                  {map(proxies['movein-value'], props => <div {...{...props, className: `af-class-floorplan-unit-column-value ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Dec 25th</React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</div>)}
              {map(proxies['lease'], props => <div {...{...props, className: `af-class-floorplan-unit-column ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-floorplan-unit-column-label">Lease Term</div>
                <div className="af-class-div-block-215">
                  {map(proxies['lease-value'], props => <div {...{...props, className: `af-class-floorplan-unit-column-value ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>12 mo.</React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</div>)}
              {map(proxies['sqft'], props => <div {...{...props, className: `af-class-floorplan-unit-column ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-floorplan-unit-column-label">Sqft</div>
                <div className="af-class-div-block-215">
                  {map(proxies['sqft-min'], props => <div {...{...props, className: `af-class-floorplan-unit-column-value ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>780</React.Fragment>}</div>)}
                  <div>-</div>
                  {map(proxies['sqft-max'], props => <div {...{...props, className: `af-class-floorplan-unit-column-value ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>825</React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</div>)}
              {map(proxies['price'], props => <div {...{...props, className: `af-class-floorplan-unit-column ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['price-label'], props => <div {...{...props, className: `af-class-floorplan-unit-column-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Starting at</React.Fragment>}</div>)}
                <div className="af-class-div-block-215">
                  {map(proxies['price-value'], props => <div {...{...props, className: `af-class-floorplan-unit-column-value ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$1,467</React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</div>)}
              <div className="af-class-floorplan-unit-column-container af-class-ctas">
                <div className="af-class-floorplan-lease-term-container">
                  {map(proxies['toggle-info'], props => <div {...{...props, className: `af-class-div-block-215 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    {map(proxies['toggle-label'], props => <div {...{...props, className: `af-class-text-block-66 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Close</React.Fragment>}</div>)}
                    {map(proxies['toggle-icon'], props => <div {...{...props, className: `af-class-close w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      {/*?xml version="1.0" encoding="UTF-8"?*/}
                      <svg width="13px" height="9px" viewBox="0 0 13 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                        {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                        <title>ion-ios-arrow-back - Ionicons</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <g id="Components/Floor-Plans/-Unit-Row---Desktop" transform="translate(-683.000000, -14.000000)" fill="#666667">
                            <polygon id="ion-ios-arrow-back---Ionicons" transform="translate(689.750000, 18.500000) rotate(-90.000000) translate(-689.750000, -18.500000) " points="693.5 13.5 688.539062 18.5 693.5 23.5 692.25 24.75 686 18.5 692.25 12.25" />
                          </g>
                        </g>
                      </svg></React.Fragment>}</div>)}
                  </React.Fragment>)}</div>)}
                </div>
                {map(proxies['quote'], props => <div {...{...props, className: `af-class-div-block-216 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['quote-label'], props => <div {...{...props, className: `af-class-text-block-67 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Get Quote</React.Fragment>}</div>)}
                </React.Fragment>)}</div>)}
              </div>
              <div className="w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 992px) and (max-width: 1284px) {\n   .af-class-floorplan-unit-column-container {\n    justify-content: flex-end;\n  }\n   .af-class-floorplan-unit-column-container.af-class-ctas {\n    justify-content: space-between;\n    padding-right: 15px;\n    padding-top: 20px;\n  }\n   .af-class-unit-feature-list-wrapper {\n    padding-right: 30px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1640px) {\n   .af-class-floorplann-unit-row.af-class-selected {\n    align-items: center;\n  }\n}\n " }} />
              </div>
            </div>
            <PropertyUnitDetailsView.Controller {...this.props} />
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default FloorplanUnitItemView

/* eslint-enable */