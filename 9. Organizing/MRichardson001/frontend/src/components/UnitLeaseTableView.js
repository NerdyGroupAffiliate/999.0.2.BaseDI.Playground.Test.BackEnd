/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class UnitLeaseTableView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UnitLeaseTableController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnitLeaseTableView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== UnitLeaseTableView ? transformProxies(this.props.children) : {
      'wrapper': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-customTable ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
            <div className="af-class-tableHead">
              <div className="af-class-tableRow">
                <div className="af-class-tableHeaderColCellempty" />
                <div className="af-class-tableHeaderColCell">01 Mon</div>
                <div className="af-class-tableHeaderColCell">02 Tues</div>
                <div className="af-class-tableHeaderColCell">03 Wed</div>
                <div className="af-class-tableHeaderColCell af-class-headHovered">04 Thurs</div>
                <div className="af-class-tableHeaderColCell af-class-thirdLastCol">05 Fri</div>
                <div className="af-class-tableHeaderColCell af-class-secondLastCol">06 Sat</div>
                <div className="af-class-tableHeaderColCell af-class-lastCol">07 Sun</div>
              </div>
            </div>
            <div className="af-class-tableRow">
              <div className="af-class-tableHeaderCell">
                <div>3 Mo</div>
              </div>
              <div className="af-class-tableCell af-class-firstRow">$1,300</div>
              <div className="af-class-tableCell af-class-firstRow">$1,300</div>
              <div className="af-class-tableCell af-class-firstRow">$1,300</div>
              <div className="af-class-tableCell af-class-hovered af-class-firstRow">$1,300</div>
              <div className="af-class-tableCell af-class-firstRow af-class-thirdLastCol">$1,300</div>
              <div className="af-class-tableCell af-class-firstRow af-class-secondLastCol">$1,300</div>
              <div className="af-class-tableCell af-class-firstRow af-class-lastCol">$1,300</div>
            </div>
            <div className="af-class-tableRow">
              <div className="af-class-tableHeaderCell">
                <div>4 Mo</div>
              </div>
              <div className="af-class-tableCell">$1,400</div>
              <div className="af-class-tableCell">$1,400</div>
              <div className="af-class-tableCell">$1,400</div>
              <div className="af-class-tableCell af-class-hovered">$1,400</div>
              <div className="af-class-tableCell af-class-thirdLastCol">$1,400</div>
              <div className="af-class-tableCell af-class-secondLastCol">$1,400</div>
              <div className="af-class-tableCell af-class-lastCol">$1,400</div>
            </div>
            <div className="af-class-tableRow">
              <div className="af-class-tableHeaderCell">
                <div>5 Mo</div>
              </div>
              <div className="af-class-tableCell">$1,500</div>
              <div className="af-class-tableCell">$1,500</div>
              <div className="af-class-tableCell">$1,500</div>
              <div className="af-class-tableCell af-class-hovered">$1,500</div>
              <div className="af-class-tableCell af-class-thirdLastCol">$1,500</div>
              <div className="af-class-tableCell af-class-selected-date  af-class-secondLastCol">$1,500<span className="af-class-selected-label">Monthly Rent</span></div>
              <div className="af-class-tableCell af-class-lastCol">$1,500</div>
            </div>
            <div className="af-class-tableRow">
              <div className="af-class-tableHeaderCell">
                <div>6 Mo</div>
              </div>
              <div className="af-class-tableCell">$1,600</div>
              <div className="af-class-tableCell">$1,600</div>
              <div className="af-class-tableCell">$1,600</div>
              <div className="af-class-tableCell af-class-hovered">$1,600</div>
              <div className="af-class-tableCell af-class-thirdLastCol">$1,600</div>
              <div className="af-class-tableCell af-class-secondLastCol">$1,600</div>
              <div className="af-class-tableCell af-class-lastCol">$1,600</div>
            </div>
            <div className="af-class-tableRow">
              <div className="af-class-tableHeaderCell">
                <div>7 Mo</div>
              </div>
              <div className="af-class-tableCell">$1,700</div>
              <div className="af-class-tableCell">$1,700</div>
              <div className="af-class-tableCell">$1,700</div>
              <div className="af-class-tableCell af-class-hovered">$1,700</div>
              <div className="af-class-tableCell af-class-thirdLastCol">$1,700</div>
              <div className="af-class-tableCell af-class-secondLastCol">$1,700</div>
              <div className="af-class-tableCell af-class-lastCol">$1,700</div>
            </div>
            <div className="af-class-tableRow">
              <div className="af-class-tableHeaderCell">
                <div>8 Mo</div>
              </div>
              <div className="af-class-tableCell">$1,800</div>
              <div className="af-class-tableCell">$1,800</div>
              <div className="af-class-tableCell">$1,800</div>
              <div className="af-class-tableCell af-class-hovered">$1,800</div>
              <div className="af-class-tableCell af-class-thirdLastCol">$1,800</div>
              <div className="af-class-tableCell af-class-secondLastCol">$1,800<span className="af-class-cheap-label">Cheapest</span></div>
              <div className="af-class-tableCell af-class-lastCol">$1,800</div>
            </div>
            <div className="af-class-tableRow">
              <div className="af-class-tableHeaderCell af-class-active">
                <div>9 Mo</div>
              </div>
              <div className="af-class-tableCell af-class-hovered">$1,900</div>
              <div className="af-class-tableCell af-class-hovered">$1,900</div>
              <div className="af-class-tableCell af-class-hovered">$1,900</div>
              <div className="af-class-tableCell af-class-hovered af-class-active">$1,900</div>
              <div className="af-class-tableCell af-class-thirdLastCol">$1,900</div>
              <div className="af-class-tableCell af-class-secondLastCol">$1,900</div>
              <div className="af-class-tableCell af-class-lastCol">$1,900</div>
            </div>
            <div className="af-class-tableRow">
              <div className="af-class-tableHeaderCell">
                <div>10 Mo</div>
              </div>
              <div className="af-class-tableCell">$1,600</div>
              <div className="af-class-tableCell">$1,600</div>
              <div className="af-class-tableCell">$1,600</div>
              <div className="af-class-tableCell">$1,600</div>
              <div className="af-class-tableCell af-class-thirdLastCol">$1,600</div>
              <div className="af-class-tableCell af-class-secondLastCol">$1,600</div>
              <div className="af-class-tableCell af-class-lastCol">$1,600</div>
            </div>
            <div className="af-class-tableRow">
              <div className="af-class-tableHeaderCell">
                <div>11 Mo</div>
              </div>
              <div className="af-class-tableCell">$1,700</div>
              <div className="af-class-tableCell">$1,700</div>
              <div className="af-class-tableCell">$1,700</div>
              <div className="af-class-tableCell">$1,700</div>
              <div className="af-class-tableCell af-class-thirdLastCol">$1,700</div>
              <div className="af-class-tableCell af-class-secondLastCol">$1,700</div>
              <div className="af-class-tableCell af-class-lastCol">$1,700</div>
            </div>
            <div className="af-class-tableRow">
              <div className="af-class-tableHeaderCell" scope="row">
                <div>12 Mo</div>
              </div>
              <div className="af-class-tableCell">$1,800</div>
              <div className="af-class-tableCell">$1,800</div>
              <div className="af-class-tableCell">$1,800</div>
              <div className="af-class-tableCell">$1,800</div>
              <div className="af-class-tableCell af-class-thirdLastCol">$1,800</div>
              <div className="af-class-tableCell af-class-secondLastCol">$1,800</div>
              <div className="af-class-tableCell af-class-lastCol">$1,800</div>
            </div>
          </React.Fragment>}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default UnitLeaseTableView

/* eslint-enable */