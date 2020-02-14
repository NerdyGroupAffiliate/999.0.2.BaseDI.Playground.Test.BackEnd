/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import UnitLeaseDatePickerView from './UnitLeaseDatePickerView'
import UnitLeaseTableView from './UnitLeaseTableView'
import UnitGridLeaseAddonsView from './UnitGridLeaseAddonsView'
import UnitGridPaymentBreakdownView from './UnitGridPaymentBreakdownView'


let Controller

class UnitLeaseGridView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UnitLeaseGridController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnitLeaseGridView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== UnitLeaseGridView ? transformProxies(this.props.children) : {

    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-the-grid-wrapper">
            <div className="af-class-div-block-274">
              <div className="af-class-grid-step-wrapper af-class-div-block-273 af-class-date-picker">
                <div className="af-class-grid-step-header">1. Select your lease terms</div>
                <UnitLeaseDatePickerView.Controller {...this.props} />
              </div>
              <div>
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n .af-class-customTable {\n  display: table;\n  width: 100%;\n  max-width: 775px;\n}\n .af-class-tableHead {\n  display: table-header-group;\n  border: 1px solid #333;\n}\n .af-class-tableRow {\n  display: table-row;\n}\n .af-class-tableHeaderCell {\n  display: table-cell;\n  writing-mode: vertical-lr;\n  width: 1%;\n  background: #fafafa;\n  vertical-align: middle;\n  height: 40px;\n  text-align: center;\n  border-right: 1px solid #eaeaea;\n  padding-bottom: 5px;\n  padding-left: 6px;\n  padding-right: 6px;\n  padding-top: 5px;\n}\n .af-class-tableHeaderCell > * {\n  writing-mode: vertical-lr;\n  white-space: nowrap;\n  font-size: 11px;\n}\n .af-class-tableHeaderColCellempty {\n  width: auto!important;\n  display: table-cell;\n  background: #fafafa;\n  height: 30px;\n}\n .af-class-lastHeader {\n  border-bottom: 1px solid #333;\n}\n .af-class-tableCell {\n  display: table-cell;\n  vertical-align: middle;\n  border-bottom: 1px solid #eaeaea;\n  border-right: 1px solid #eaeaea;\n  text-align: center;\n}\n .af-class-tableHeaderColCell {\n  display: table-cell;\n  background: #fafafa;\n  text-align: center;\n  width: 40px;\n  padding: 5px 0;\n}\n .af-class-border-left {\n  border-left: 1px solid #333;\n}\n .af-class-border-right {\n  border-right: 1px solid #333;\n}\n .af-class-hovered { background: #F0F7F8; }\n .af-class-active { background: #018094; color: white; }\n .af-class-selected-date {\n  background: #fff;\n  border: 2px solid #018094;\n  box-shadow: 0 0 10px 1px rgba(0,0,0,0.15);\n}\n .af-class-selected-label { font-size: 11px; color: #777; display: block; }\n .af-class-cheap-label {\n  font-size: 11px;\n  color: #666;;\n  display: block;\n  text-transform: uppercase;\n}\n .af-class-headHovered {\n  background: #018094;\n  color: white;\n}\n .af-class-firstRow {\n  border-top: 1px solid #eaeaea;\n}\n@media (max-width:1024px) {\n   .af-class-lastCol {\n    display: none;\n  }\n   .af-class-grid-step-header {\n    font-size: 20px;\n  }\n   .af-class-date-range-wrap {\n    font-size: 18px;\n  }\n   .af-class-sticky-card-column {\n    flex-basis: 450px;\n  }\n   .af-class-floorplan-sticky-card {\n    max-width: 360px;\n  }\n}\n@media (max-width:600px) {\n   .af-class-secondLastCol {\n    display: none;\n  }\n}\n@media (max-width:500px) {\n   .af-class-thirdLastCol {\n    display: none;\n  }\n}\n" }} />
                  <UnitLeaseTableView.Controller {...this.props} />
                </div>
              </div>
              <UnitGridLeaseAddonsView.Controller {...this.props} />
              <UnitGridPaymentBreakdownView.Controller {...this.props} />
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default UnitLeaseGridView

/* eslint-enable */