/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class UnitLeaseDatePickerView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UnitLeaseDatePickerController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnitLeaseDatePickerView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== UnitLeaseDatePickerView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'left-arrow': [],
      'datepicker': [],
      'start-date': [],
      'middle-arrow': [],
      'end-date': [],
      'right-arrow': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-div-block-387 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['left-arrow'], props => <div {...{...props, className: `af-class-div-block-385 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-arrow-left--chevron af-class-black w-embed">
                {/*?xml version="1.0" encoding="UTF-8"?*/}
                <svg viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                  {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                  <title>ion-android-close - Ionicons</title>
                  <desc>Created with Sketch.</desc>
                  <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                    <g id="UI/Icons/Open" fill="#3f3f3f">
                      <polygon id="ion-android-close---Ionicons" points="12 1.17318436 6 7 0 1.17318436 1.20805369 0 6 4.65363128 10.7919463 0" />
                    </g>
                  </g>
                </svg></div>
            </React.Fragment>}</div>)}
            {map(proxies['datepicker'], props => <div {...{...props, className: `af-class-date-range-wrap ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['start-date'], props => <div {...{...props, className: `af-class-text-block-125 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Jan 07</React.Fragment>}</div>)}{map(proxies['middle-arrow'], props => <img src="/images/arrow--long-right.png" alt="" {...{...props, className: `af-class-image-54 ${props.className || ''}`}}>{props.children}</img>)}
              {map(proxies['end-date'], props => <div {...props}>{props.children ? props.children : <React.Fragment>Jan 13</React.Fragment>}</div>)}
            </React.Fragment>)}</div>)}
            {map(proxies['right-arrow'], props => <div {...{...props, className: `af-class-div-block-385 af-class-next ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-arrow-left--chevron af-class-black w-embed">
                {/*?xml version="1.0" encoding="UTF-8"?*/}
                <svg viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                  {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                  <title>ion-android-close - Ionicons</title>
                  <desc>Created with Sketch.</desc>
                  <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                    <g id="UI/Icons/Open" fill="#3f3f3f">
                      <polygon id="ion-android-close---Ionicons" points="12 1.17318436 6 7 0 1.17318436 1.20805369 0 6 4.65363128 10.7919463 0" />
                    </g>
                  </g>
                </svg></div>
            </React.Fragment>}</div>)}
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default UnitLeaseDatePickerView

/* eslint-enable */