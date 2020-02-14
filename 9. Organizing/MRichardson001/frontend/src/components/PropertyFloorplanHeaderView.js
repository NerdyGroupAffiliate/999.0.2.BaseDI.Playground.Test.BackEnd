/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyFloorplanHeaderView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyFloorplanHeaderController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyFloorplanHeaderView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyFloorplanHeaderView ? transformProxies(this.props.children) : {
      'back': [],
      'title': [],
      'date-picker': [],
      'calendar-icon': [],
      'date': [],
      'filters': [],
      'filter-label': [],
      'filter-icon': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-div-block-223">
            {map(proxies['back'], props => <div {...{...props, className: `af-class-div-block-220 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-left-arrrow w-embed">
                {/*?xml version="1.0" encoding="UTF-8"?*/}
                <svg width="13px" height="9px" viewBox="0 0 13 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                  {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                  <title>ion-ios-arrow-back - Ionicons</title>
                  <desc>Created with Sketch.</desc>
                  <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                    <g id="Components/Floor-Plans/-Unit-Row---Desktop" transform="translate(-683.000000, -14.000000)" fill="#3f3f3f">
                      <polygon id="ion-ios-arrow-back---Ionicons" transform="translate(689.750000, 18.500000) rotate(-90.000000) translate(-689.750000, -18.500000) " points="693.5 13.5 688.539062 18.5 693.5 23.5 692.25 24.75 686 18.5 692.25 12.25" />
                    </g>
                  </g>
                </svg></div>
              <div className="af-class-text-block-70">All Floor Plans</div>
            </React.Fragment>}</div>)}
            <div className="af-class-div-block-221">
              {map(proxies['title'], props => <div {...{...props, className: `af-class-floorplan-units-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>C620 Available Units</React.Fragment>}</div>)}
              <div className="af-class-div-block-208">
                <div className="af-class-div-block-180">
                  <div className="af-class-text-block-55">Move-in</div>
                  {map(proxies['date-picker'], props => <div {...{...props, className: `af-class-div-block-179 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    {map(proxies['calendar-icon'], props => <div {...{...props, className: `af-class-html-embed-22 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                        <g id="UI/Icons/Calendar" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <g id="Group-9">
                            <rect id="Rectangle" stroke="#727272" fill="#FAFAFA" x="0.5" y="2.5" width={21} height={19} rx={4} />
                            <path d="M-4.61852778e-14,7.5 L22,7.5" id="Line" stroke="#727272" />
                            <path d="M5,0 L5,4.5" id="Line-2" stroke="#727272" />
                            <path d="M17.5,-2.27373675e-13 L17.5,4.5" id="Line-2" stroke="#727272" />
                            <circle id="Oval" fill="#727272" cx={5} cy={12} r={1} />
                            <circle id="Oval" fill="#727272" cx={5} cy={17} r={1} />
                            <circle id="Oval" fill="#727272" cx={9} cy={12} r={1} />
                            <circle id="Oval" fill="#727272" cx={9} cy={17} r={1} />
                            <circle id="Oval" fill="#727272" cx={13} cy={12} r={1} />
                            <circle id="Oval" fill="#727272" cx={13} cy={17} r={1} />
                            <circle id="Oval" fill="#727272" cx={17} cy={12} r={1} />
                            <circle id="Oval" fill="#727272" cx={17} cy={17} r={1} />
                          </g>
                        </g>
                      </svg></React.Fragment>}</div>)}
                    {map(proxies['date'], props => <div {...{...props, className: `af-class-text-block-54 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>3/28/19</React.Fragment>}</div>)}
                  </React.Fragment>)}</div>)}
                </div>
                {map(proxies['filters'], props => <div {...{...props, className: `af-class-div-block-222 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['filter-label'], props => <div {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Filters</React.Fragment>}</div>)}
                  {map(proxies['filter-icon'], props => <div {...{...props, className: `af-class-html-embed-19 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146 94"><defs><style dangerouslySetInnerHTML={{__html: " .af-class-cls-1{fill:#008d94;} .af-class-cls-2{fill:none;stroke:#008d94;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6px;}" }} /></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle className="af-class-cls-1" cx={29} cy={14} r={14} /><line className="af-class-cls-2" x1={3} y1={14} x2={143} y2={14} /><circle className="af-class-cls-1" cx={117} cy={80} r={14} /><line className="af-class-cls-2" x1={143} y1={80} x2={3} y2={80} /></g></g></svg></React.Fragment>}</div>)}
                </React.Fragment>)}</div>)}
              </div>
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyFloorplanHeaderView

/* eslint-enable */