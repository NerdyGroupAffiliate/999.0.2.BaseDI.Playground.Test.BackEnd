/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import UnitAddonPetsEntryView from './UnitAddonPetsEntryView'
import UnitAddonStorageEntryView from './UnitAddonStorageEntryView'
import UnitAddonItemEntryView from './UnitAddonItemEntryView'


let Controller

class UnitGridLeaseAddonsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UnitGridLeaseAddonsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnitGridLeaseAddonsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== UnitGridLeaseAddonsView ? transformProxies(this.props.children) : {
      'section-title': [],
      'pets': [],
      'unit-addon-pets-selector-cat': [],
      'cat-icon': [],
      'cat-minus-button': [],
      'cat-value': [],
      'cat-plus-button': [],
      'cat-plus-icon': [],
      'unit-addon-pets-selector-dog': [],
      'dog-icon': [],
      'dog-minus-button': [],
      'dog-value': [],
      'dog-plug-button': [],
      'dog-plus-icon': [],
      'storage': [],
      'storage-title': [],
      'parking': [],
      'parking-title': [],
      'other': [],
      'other-title': [],
      'unitAddonPetsEntryViewList0': [],
      'unitAddonStorageEntryViewList2': [],
      'unitAddonItemEntryViewList5': [],
      'unitAddonItemEntryViewList6': [],
      'unitAddonItemEntryViewList7': [],
      'unitAddonItemEntryViewList8': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-lease-step-wrap">
            <div className="af-class-grid-step-wrapper af-class-next-step">
              {map(proxies['section-title'], props => <div {...{...props, className: `af-class-grid-step-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>2. Lease Optional Add-ons</React.Fragment>}</div>)}
            </div>
            <div className="af-class-lease-options-wrapper">
              <div className="af-class-div-block-475">
                {map(proxies['pets'], props => <div {...{...props, className: `af-class-div-block-275 af-class-first-child ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  <div className="af-class-text-block-86">Pets</div>
                  {map(proxies['unitAddonPetsEntryViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}<div className="af-class-div-block-281">
                    {map(proxies['unit-addon-pets-selector-cat'], props => <div {...{...props, className: `af-class-pet-counter ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                      {map(proxies['cat-icon'], props => <div {...{...props, className: `af-class-icon--dog w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                        {/*?xml version="1.0" encoding="UTF-8"?*/}
                        <svg viewBox="0 0 23 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                          {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                          <title>Group</title>
                          <desc>Created with Sketch.</desc>
                          <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g id="UI/Icons/-Dog" transform="translate(0.000000, -2.000000)">
                              <g id="Group" transform="translate(0.000000, 2.000000)">
                                <path d="M10.1265188,0.173585468 C5.03361091,0.147434456 1.65810465,2.53435895 1.0658141e-14,7.33435895 C0.0200523355,7.29712227 0.629397499,9.37305577 3.34074057,9.54896874 C3.33357951,9.55145955 1.92202058,14.2302258 5.61401364,17.1172743 C8.07534234,19.0419733 11.1872896,19.5429063 14.9498554,18.6200732 C19.2408866,16.9417466 20.8746114,13.9180451 19.8510296,9.54896874 C19.8486426,9.54564767 22.2151618,9.33435895 23,7.33435895 C22.9799974,7.34159818 21.5147354,0.0128119867 13,0.173585468 C12.9886856,0.176295534 12.5869462,-0.0478860235 11.5,0.00935895021 C11.2441258,0.0228347888 10.7862987,0.0775769616 10.1265188,0.173585468 Z" id="Path-7" fill="#7F7773" />
                                <path d="M4.52679225,8.67806255 C3.6101733,11.5020008 3.88974265,13.7354287 5.36550029,15.3783462 C7.57913674,17.8427225 14.2644041,18.9427727 17.5105591,15.3783462 C17.4902568,15.4265972 19.6649947,13.1234519 18.3605273,8.86814851 C17.9213393,7.43547316 16.8847356,6.41949375 16.1030446,5.17806255 C15.5922774,4.36689497 14.8036712,3.13497689 13.737226,1.48230831 C12.5188967,0.839230565 10.8812987,0.839230565 8.82443176,1.48230831 C8.84374829,1.51449631 7.41120178,3.91308106 4.52679225,8.67806255 Z" id="Path-6" fill="#FFFFFF" />
                                <path d="M11.2768161,15.8476959 C12.1378082,15.9212193 13.0362703,15.3780956 13.9722024,14.2183248 C13.9749399,14.2094617 14.718648,13.3289762 14.554556,12.2183248 C14.5426765,12.2134997 14.2660908,11.0028757 11.4089687,11.0028757 C11.4017377,10.9993118 8.45396976,10.9019553 8.01969669,12.2183248 C8.01396354,12.2264122 7.85136939,13.3487596 8.56935582,14.2183248 C9.3954801,15.3156253 10.2979669,15.858749 11.2768161,15.8476959 Z" id="Path-8" fill="#7F7773" />
                                <circle id="Oval" fill="#7F7773" cx={8} cy={8} r={1} />
                                <circle id="Oval" fill="#7F7773" cx={15} cy={8} r={1} />
                              </g>
                            </g>
                          </g>
                        </svg></React.Fragment>}</div>)}
                      {map(proxies['cat-minus-button'], props => <div {...{...props, className: `af-class-div-block-279 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                        <div className="af-class-div-block-280" />
                      </React.Fragment>}</div>)}
                      {map(proxies['cat-value'], props => <div {...{...props, className: `af-class-text-block-85 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>2</React.Fragment>}</div>)}
                      {map(proxies['cat-plus-button'], props => <div {...{...props, className: `af-class-div-block-279 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                        {map(proxies['cat-plus-icon'], props => <div {...{...props, className: `af-class-div-block-280 ${props.className || ''}`}}>{props.children}</div>)}
                      </React.Fragment>)}</div>)}
                    </React.Fragment>)}</div>)}
                    {map(proxies['unit-addon-pets-selector-dog'], props => <div {...{...props, className: `af-class-pet-counter ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                      {map(proxies['dog-icon'], props => <div {...{...props, className: `af-class-icon--dog w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                        {/*?xml version="1.0" encoding="UTF-8"?*/}
                        <svg viewBox="0 0 23 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                          {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                          <title>Group</title>
                          <desc>Created with Sketch.</desc>
                          <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g id="UI/Icons/-Dog" transform="translate(0.000000, -2.000000)">
                              <g id="Group" transform="translate(0.000000, 2.000000)">
                                <path d="M10.1265188,0.173585468 C5.03361091,0.147434456 1.65810465,2.53435895 1.0658141e-14,7.33435895 C0.0200523355,7.29712227 0.629397499,9.37305577 3.34074057,9.54896874 C3.33357951,9.55145955 1.92202058,14.2302258 5.61401364,17.1172743 C8.07534234,19.0419733 11.1872896,19.5429063 14.9498554,18.6200732 C19.2408866,16.9417466 20.8746114,13.9180451 19.8510296,9.54896874 C19.8486426,9.54564767 22.2151618,9.33435895 23,7.33435895 C22.9799974,7.34159818 21.5147354,0.0128119867 13,0.173585468 C12.9886856,0.176295534 12.5869462,-0.0478860235 11.5,0.00935895021 C11.2441258,0.0228347888 10.7862987,0.0775769616 10.1265188,0.173585468 Z" id="Path-7" fill="#7F7773" />
                                <path d="M4.52679225,8.67806255 C3.6101733,11.5020008 3.88974265,13.7354287 5.36550029,15.3783462 C7.57913674,17.8427225 14.2644041,18.9427727 17.5105591,15.3783462 C17.4902568,15.4265972 19.6649947,13.1234519 18.3605273,8.86814851 C17.9213393,7.43547316 16.8847356,6.41949375 16.1030446,5.17806255 C15.5922774,4.36689497 14.8036712,3.13497689 13.737226,1.48230831 C12.5188967,0.839230565 10.8812987,0.839230565 8.82443176,1.48230831 C8.84374829,1.51449631 7.41120178,3.91308106 4.52679225,8.67806255 Z" id="Path-6" fill="#FFFFFF" />
                                <path d="M11.2768161,15.8476959 C12.1378082,15.9212193 13.0362703,15.3780956 13.9722024,14.2183248 C13.9749399,14.2094617 14.718648,13.3289762 14.554556,12.2183248 C14.5426765,12.2134997 14.2660908,11.0028757 11.4089687,11.0028757 C11.4017377,10.9993118 8.45396976,10.9019553 8.01969669,12.2183248 C8.01396354,12.2264122 7.85136939,13.3487596 8.56935582,14.2183248 C9.3954801,15.3156253 10.2979669,15.858749 11.2768161,15.8476959 Z" id="Path-8" fill="#7F7773" />
                                <circle id="Oval" fill="#7F7773" cx={8} cy={8} r={1} />
                                <circle id="Oval" fill="#7F7773" cx={15} cy={8} r={1} />
                              </g>
                            </g>
                          </g>
                        </svg></React.Fragment>}</div>)}
                      {map(proxies['dog-minus-button'], props => <div {...{...props, className: `af-class-div-block-279 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                        <div className="af-class-div-block-280" />
                      </React.Fragment>}</div>)}
                      {map(proxies['dog-value'], props => <div {...{...props, className: `af-class-text-block-85 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>2</React.Fragment>}</div>)}
                      {map(proxies['dog-plug-button'], props => <div {...{...props, className: `af-class-div-block-279 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                        {map(proxies['dog-plus-icon'], props => <div {...{...props, className: `af-class-div-block-280 ${props.className || ''}`}}>{props.children}</div>)}
                      </React.Fragment>)}</div>)}
                    </React.Fragment>)}</div>)}
                  </div>
                </React.Fragment>)}</div>)}
                {map(proxies['storage'], props => <div {...{...props, className: `af-class-div-block-275 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['storage-title'], props => <div {...{...props, className: `af-class-text-block-86 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Storage</React.Fragment>}</div>)}
                  {map(proxies['unitAddonStorageEntryViewList2'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</React.Fragment>)}</div>)}
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n@media screen and (min-width: 992px) and (max-width: 1200px) {\n .af-view .af-class-div-block-475 {\n   flex-direction: column;\n }\n}\n" }} />
                </div>
              </div>
              {map(proxies['parking'], props => <div {...{...props, className: `af-class-div-block-275 af-class-full-width ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-div-block-474 af-class-padding-right">
                  {map(proxies['parking-title'], props => <div {...{...props, className: `af-class-text-block-86 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Parking</React.Fragment>}</div>)}
                  {map(proxies['unitAddonItemEntryViewList5'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
                <div className="af-class-div-block-474">
                  {map(proxies['unitAddonItemEntryViewList6'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n@media screen and (min-width: 992px) and (max-width: 1100px) {\n   .af-view .af-class-div-block-275.af-class-full-width {\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n   .af-view .af-class-div-block-474,  .af-class-af-view .af-class-div-block-474.af-class-padding-right {\n    width: 100%;\n    padding-right: 0;\n  }\n}\n" }} />
                </div>
              </React.Fragment>)}</div>)}
              {map(proxies['other'], props => <div {...{...props, className: `af-class-div-block-275 af-class-full-width ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-div-block-474 af-class-padding-right">
                  {map(proxies['other-title'], props => <div {...{...props, className: `af-class-text-block-86 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Other</React.Fragment>}</div>)}
                  {map(proxies['unitAddonItemEntryViewList7'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
                <div className="af-class-div-block-474">
                  {map(proxies['unitAddonItemEntryViewList8'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n@media screen and (min-width: 992px) and (max-width: 1100px) {\n   .af-view .af-class-div-block-275.af-class-full-width {\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n   .af-view .af-class-div-block-474,  .af-class-af-view .af-class-div-block-474.af-class-padding-right {\n    width: 100%;\n    padding-right: 0;\n  }\n}\n" }} />
                </div>
              </React.Fragment>)}</div>)}
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default UnitGridLeaseAddonsView

/* eslint-enable */