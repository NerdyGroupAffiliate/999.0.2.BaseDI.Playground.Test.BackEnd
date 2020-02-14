/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class FloorplansFloorplanCardView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FloorplansFloorplanCardController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FloorplansFloorplanCardView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FloorplansFloorplanCardView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'card-header': [],
      'name': [],
      'price-wrapper': [],
      'price-label': [],
      'price': [],
      'image': [],
      'beds': [],
      'bath-logo': [],
      'bath': [],
      'min-sqft': [],
      'sqft-arrow': [],
      'max-sqft': [],
      'bottom-container': [],
      'available-units': [],
      'view': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-floorplans-card ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['card-header'], props => <div {...{...props, className: `af-class-card-header ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['name'], props => <div {...{...props, className: `af-class-text-block-61 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>E22</React.Fragment>}</div>)}
              {map(proxies['price-wrapper'], props => <div {...{...props, className: `af-class-div-block-193 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['price-label'], props => <div {...{...props, className: `af-class-text-block-62 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Starting at</React.Fragment>}</div>)}
                {map(proxies['price'], props => <div {...{...props, className: `af-class-text-block-63 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$1,607</React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}
            </React.Fragment>)}</div>)}{map(proxies['image'], props => <img src="/images/Studio2x.png" alt="" {...{...props, className: `af-class-image-36 ${props.className || ''}`}}>{props.children}</img>)}
            <div className="af-class-div-block-194">
              <div className="af-class-floorplans-card-beds-column">
                <div className="w-embed"><svg width="13px" height="22px" viewBox="0 0 13 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g id="UI/Icons/Bedroom" transform="translate(-5.000000, 0.000000)" fill="#3F3F3F" fillRule="nonzero">
                        <path d="M8.76757469,0 L8.76757469,0.941882524 L5,0.941882524 L5,19.7343469 L6.39286982,19.7343469 L6.39286982,2.30366599 L8.76757469,2.30366599 L8.76757469,21.3571429 L18,19.7343469 L18,17.078906 L18,1.62617839 L8.76757469,0 Z M10.4660038,11.4105252 C10.1556542,11.4105252 9.90403013,11.0904499 9.90403013,10.6956138 C9.90403013,10.300821 10.1556542,9.98074576 10.4660038,9.98074576 C10.7763535,9.98074576 11.0279776,10.300821 11.0279776,10.6956138 C11.0279776,11.0904499 10.7763535,11.4105252 10.4660038,11.4105252 Z" id="Shape" />
                      </g>
                    </g>
                  </svg></div>
                {map(proxies['beds'], props => <div {...{...props, className: `af-class-floorplans-card-column-labels ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1 Bed</React.Fragment>}</div>)}
              </div>
              <div className="af-class-floorplans-card-beds-column af-class-bordered">
                {map(proxies['bath-logo'], props => <div {...{...props, className: `w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><svg width="13px" height="22px" viewBox="0 0 13 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g id="UI/Icons/Bedroom" transform="translate(-5.000000, 0.000000)" fill="#3F3F3F" fillRule="nonzero">
                        <path d="M8.76757469,0 L8.76757469,0.941882524 L5,0.941882524 L5,19.7343469 L6.39286982,19.7343469 L6.39286982,2.30366599 L8.76757469,2.30366599 L8.76757469,21.3571429 L18,19.7343469 L18,17.078906 L18,1.62617839 L8.76757469,0 Z M10.4660038,11.4105252 C10.1556542,11.4105252 9.90403013,11.0904499 9.90403013,10.6956138 C9.90403013,10.300821 10.1556542,9.98074576 10.4660038,9.98074576 C10.7763535,9.98074576 11.0279776,10.300821 11.0279776,10.6956138 C11.0279776,11.0904499 10.7763535,11.4105252 10.4660038,11.4105252 Z" id="Shape" />
                      </g>
                    </g>
                  </svg></React.Fragment>}</div>)}
                {map(proxies['bath'], props => <div {...{...props, className: `af-class-floorplans-card-column-labels ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1 Bath</React.Fragment>}</div>)}
              </div>
              <div className="af-class-div-block-196">
                {map(proxies['min-sqft'], props => <div {...{...props, className: `af-class-floorplans-card-col-sqft-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1522</React.Fragment>}</div>)}
                {map(proxies['sqft-arrow'], props => <div {...{...props, className: `af-class-html-embed-11 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><svg width="16px" height="10px" viewBox="0 0 16 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" fontFamily="Ionicons" fontSize={25} fontWeight={400}>
                      <g id="Components/Floor-Plans/FP-Unit-Card" transform="translate(-290.000000, -372.000000)" fill="#000000">
                        <g id="Group-2" transform="translate(0.000000, 69.000000)">
                          <g id="SQFT-Range" transform="translate(243.000000, 295.000000)">
                            <text id="ion-ios-arrow-thin-right---Ionicons">
                              <tspan x={47} y={22}></tspan>
                            </text>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg></React.Fragment>}</div>)}
                {map(proxies['max-sqft'], props => <div {...{...props, className: `af-class-floorplans-card-col-sqft-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>2695</React.Fragment>}</div>)}
                <div className="af-class-floorplans-card-col-sqft-label">sqft</div>
              </div>
            </div>
            {map(proxies['bottom-container'], props => <div {...{...props, className: `af-class-floorplans-card-cta-row ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['available-units'], props => <div {...{...props, className: `af-class-floorplans-card-unit-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>4 Available Units</React.Fragment>}</div>)}
              <div className="af-class-div-block-197">
                {map(proxies['view'], props => <div {...{...props, className: `af-class-text-block-60 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>View Floorplan</React.Fragment>}</div>)}
                <div className="af-class-html-embed-12 w-embed">
                  {/*?xml version="1.0" encoding="UTF-8"?*/}
                  <svg width="8px" height="13px" viewBox="0 0 8 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    {/*  Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch  */}
                    <title>ion-ios-arrow-forward - Ionicons</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Symbols" stroke="#4C698F" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g id="UI/Icons/Arrow" transform="translate(0.000000, -4.000000)" fill="#4C698F">
                        <polygon id="ion-ios-arrow-forward---Ionicons" points="0 5.5 1.25 4.25 7.5 10.5 1.25 16.75 0 15.5 4.9609375 10.5" />
                      </g>
                    </g>
                  </svg></div>
              </div>
            </React.Fragment>)}</div>)}
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default FloorplansFloorplanCardView

/* eslint-enable */