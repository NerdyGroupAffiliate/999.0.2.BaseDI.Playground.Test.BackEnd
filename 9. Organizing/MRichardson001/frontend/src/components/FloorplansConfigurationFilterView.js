/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import FloorplanConfigurationOptionView from './FloorplanConfigurationOptionView'


let Controller

class FloorplansConfigurationFilterView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FloorplansConfigurationFilterController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FloorplansConfigurationFilterView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FloorplansConfigurationFilterView ? transformProxies(this.props.children) : {
      'configuration-list': [],
      'move-in': [],
      'move-in-date': [],
      'apply': [],
      'site-plan-button': [],
      'fees-link': [],
      'floorplanConfigurationOptionViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-sticky-floorplan-wrapper">
            <div className="af-class-div-block-177">
              {map(proxies['configuration-list'], props => <ul {...{...props, className: `af-class-floorplan-link-list w-list-unstyled ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                {map(proxies['floorplanConfigurationOptionViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</React.Fragment>}</ul>)}
              <div className="af-class-div-block-208">
                <div className="af-class-div-block-180">
                  <div className="af-class-text-block-55">Move-in</div>
                  {map(proxies['move-in'], props => <div {...{...props, className: `af-class-div-block-179 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    <div className="w-embed"><svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
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
                      </svg></div>
                    {map(proxies['move-in-date'], props => <div {...{...props, className: `af-class-text-block-54 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>3/28/19</React.Fragment>}</div>)}
                  </React.Fragment>)}</div>)}
                </div>
                {map(proxies['apply'], props => <div {...{...props, className: `af-class-floorplan-apply-btn ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['site-plan-button'], props => <a href="/#" {...{...props, className: `af-class-link-w-icon af-class-small-shadow w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <div className="af-class-text-block-137">View Site Plan</div>
                  </React.Fragment>}</a>)}
                </React.Fragment>)}</div>)}
                <div>{map(proxies['fees-link'], props => <a href="/#" {...{...props, className: `af-class-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Understanding Fees</React.Fragment>}</a>)}</div>
              </div>
              <div className="af-class-html-embed-24 w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 992px) and (max-width: 1024px) {\n   .af-class-floorplan-nav-link {\n    margin-left: 15px;\n    padding-left: 15px;\n  }\n   .af-class-floorplan-apply-btn {\n    margin-left: 20px;\n    margin-right: 20px;\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n   .af-class-floorplan-link-list {\n    margin-bottom: 0px;\n  }\n   .af-class-floorplans-card-column-labels {\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 800px) {\n   .af-class-floorplan-link-list {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    -webkit-overflow-scrolling: touch;\n  }\n   .af-class-floorplan-link-list::-webkit-scrollbar {\n    width: 0;\n    height: 0;\n}\n}\n" }} />
              </div>
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default FloorplansConfigurationFilterView

/* eslint-enable */