/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyEarlyPhaseView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyEarlyPhaseController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyEarlyPhaseView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyEarlyPhaseView ? transformProxies(this.props.children) : {
      'phase1-label': [],
      'phase1-date': [],
      'phase2-label': [],
      'phase2-date': [],
      'phase3-label': [],
      'phase3-date': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-phase-1-dev-phase">
            <div className="af-class-div-block-325">
              <div className="af-class-dev-phase-column">
                <div className="af-class-radiant-container">
                  <div className="af-class-radiant-large" />
                  <div className="af-class-radiant-medium" />
                  <div className="af-class-radiant-small" />
                </div>
                {map(proxies['phase1-label'], props => <div {...{...props, className: `af-class-dev-phase-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Development</React.Fragment>}</div>)}
                {map(proxies['phase1-date'], props => <div {...{...props, className: `af-class-dev-phase-date ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Starts 1/12/18</React.Fragment>}</div>)}
              </div>
              <div className="af-class-dev-phase-column af-class-not-yet">
                <div className="af-class-radiant-container">
                  <div className="af-class-radiant-large" />
                  <div className="af-class-radiant-medium" />
                  <div className="af-class-radiant-small" />
                </div>
                {map(proxies['phase2-label'], props => <div {...{...props, className: `af-class-dev-phase-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Pre-Lease</React.Fragment>}</div>)}
                {map(proxies['phase2-date'], props => <div {...{...props, className: `af-class-dev-phase-date ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Starts 1/12/18</React.Fragment>}</div>)}
              </div>
              <div className="af-class-dev-phase-column af-class-not-yet">
                <div className="af-class-radiant-container">
                  <div className="af-class-radiant-large" />
                  <div className="af-class-radiant-medium" />
                  <div className="af-class-radiant-small" />
                </div>
                {map(proxies['phase3-label'], props => <div {...{...props, className: `af-class-dev-phase-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>First Move-Ins</React.Fragment>}</div>)}
                {map(proxies['phase3-date'], props => <div {...{...props, className: `af-class-dev-phase-date ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Starts 1/12/18</React.Fragment>}</div>)}
              </div>
              <div className="af-class-dotted-timline" />
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyEarlyPhaseView

/* eslint-enable */