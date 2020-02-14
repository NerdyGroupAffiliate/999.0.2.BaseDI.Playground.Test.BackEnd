/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import LocationRetailModalView from './LocationRetailModalView'


let Controller

class PropertyLocationMapView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyLocationMapController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyLocationMapView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyLocationMapView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'marker': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-property-location-map-map ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-map-icon af-class-perks">
              <LocationRetailModalView.Controller {...this.props} />
              {map(proxies['marker'], props => <div {...{...props, className: `w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                {/*?xml version="1.0" encoding="UTF-8"?*/}
                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                  {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                  <title>like - anticon</title>
                  <desc>Created with Sketch.</desc>
                  <g id="Locations" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" fontFamily="anticon" fontSize={26} fontWeight={400}>
                    <g transform="translate(-58.000000, -1830.000000)" fill="#FFFFFF" id="Group-45">
                      <g transform="translate(0.000000, 1764.000000)">
                        <g id="Group-33" transform="translate(50.000000, 40.000000)">
                          <g id="Group-34">
                            <g id="Group-18" transform="translate(0.000000, 20.000000)">
                              <g id="shopping-bag---FontAwesome">
                                <text id="like---anticon">
                                  <tspan x={7} y={28}></tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></React.Fragment>}</div>)}
            </div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyLocationMapView

/* eslint-enable */