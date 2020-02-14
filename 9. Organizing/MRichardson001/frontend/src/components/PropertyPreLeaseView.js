/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyPreLeaseView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyPreLeaseController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyPreLeaseView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyPreLeaseView ? transformProxies(this.props.children) : {
      'background-image': [],
      'property-name': [],
      'address': [],
      'phone-number': [],
      'about': [],
      'dev-start-date': [],
      'prelease-start-date': [],
      'opening-date': [],
      'progress-bar': [],
      'breadcrumb-container': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['background-image'], props => <div {...{...props, className: `af-class-phase-1-header ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-p2-header-content">
              {map(proxies['property-name'], props => <h1 {...{...props, className: `af-class-p2-header-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI Lofts</React.Fragment>}</h1>)}
              {map(proxies['address'], props => <div {...{...props, className: `af-class-p2-header-content-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>850 S Clark St.<br />Chicago IL, 60605</React.Fragment>}</div>)}
              {map(proxies['phone-number'], props => <div {...{...props, className: `af-class-p2-header-content-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>312-462-1938</React.Fragment>}</div>)}
              {map(proxies['about'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</React.Fragment>}</p>)}
            </div>
            <div className="af-class-phase-2-dev-phase">
              <div className="af-class-div-block-325">
                <div className="af-class-dev-phase-column">
                  <div className="af-class-radiant-container">
                    <div className="af-class-radiant-large" />
                    <div className="af-class-radiant-medium" />
                    <div className="af-class-radiant-small" />
                  </div>
                  <div className="af-class-dev-phase-label">Development</div>
                  {map(proxies['dev-start-date'], props => <div {...{...props, className: `af-class-dev-phase-date ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Starts 1/12/18</React.Fragment>}</div>)}
                </div>
                <div className="af-class-dev-phase-column">
                  <div className="af-class-radiant-container">
                    <div className="af-class-radiant-large" />
                    <div className="af-class-radiant-medium" />
                    <div className="af-class-radiant-small" />
                  </div>
                  <div className="af-class-dev-phase-label">Pre-Lease</div>
                  {map(proxies['prelease-start-date'], props => <div {...{...props, className: `af-class-dev-phase-date ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Starts 1/12/18</React.Fragment>}</div>)}
                </div>
                <div className="af-class-dev-phase-column af-class-not-yet">
                  <div className="af-class-radiant-container">
                    <div className="af-class-radiant-large" />
                    <div className="af-class-radiant-medium" />
                    <div className="af-class-radiant-small" />
                  </div>
                  <div className="af-class-dev-phase-label">First Move-Ins</div>
                  {map(proxies['opening-date'], props => <div {...{...props, className: `af-class-dev-phase-date ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Starts 1/12/18</React.Fragment>}</div>)}
                </div>
                <div className="af-class-dotted-timline" />
                {map(proxies['progress-bar'], props => <div {...{...props, className: `af-class-phase-2-progress-bar ${props.className || ''}`}}>{props.children}</div>)}
              </div>
            </div>
            {map(proxies['breadcrumb-container'], props => <div {...{...props, className: `af-class-breadcrumb-container af-class-blur af-class-light-bg ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><a href="/" className="af-class-phase-2-breadcrumb-link">AMLI Home</a>
              <div className="af-class-breadcrumb-divider" /><a href="/region" className="af-class-phase-2-breadcrumb-link">Chicago</a>
              <div className="af-class-breadcrumb-divider" /><a href="/sub-region" className="af-class-phase-2-breadcrumb-link">South Loop Apartments</a></React.Fragment>}</div>)}
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyPreLeaseView

/* eslint-enable */