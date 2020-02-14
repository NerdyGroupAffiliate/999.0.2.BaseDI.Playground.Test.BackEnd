/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import PropertyContactMapScheduleItemView from './PropertyContactMapScheduleItemView'
import PropertyContactMapItemView from './PropertyContactMapItemView'


let Controller

class PropertyContactMapView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyContactMapController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyContactMapView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyContactMapView ? transformProxies(this.props.children) : {
      'container': [],
      'map': [],
      'info': [],
      'info-header': [],
      'subtitle': [],
      'address': [],
      'details': [],
      'schedule': [],
      'phone-container': [],
      'phone-title': [],
      'phone-number': [],
      'contact-title': [],
      'contact-value': [],
      'follow-title': [],
      'social': [],
      'propertyContactMapScheduleItemViewList0': [],
      'propertyContactMapItemViewList2': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['container'], props => <div {...{...props, className: `af-class-div-block-416 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['map'], props => <div {...{...props, className: `af-class-div-block-417 ${props.className || ''}`}}>{props.children}</div>)}
            {map(proxies['info'], props => <div {...{...props, className: `af-class-div-block-418 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['info-header'], props => <div {...{...props, className: `af-class-div-block-419 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div>
                  {map(proxies['subtitle'], props => <h1 {...{...props, className: `af-class-section-title af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>amli lofts chicago</React.Fragment>}</h1>)}
                  {map(proxies['address'], props => <div {...{...props, className: `af-class-section-tagline af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>850 S Clark St<br />Chicago, IL 60605</React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</div>)}
              {map(proxies['details'], props => <div {...{...props, className: `af-class-property-contact-details-wrap ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-property-contact-details-content">
                  {map(proxies['schedule'], props => <div {...{...props, className: `af-class-div-block-420 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    {map(proxies['propertyContactMapScheduleItemViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</React.Fragment>}</div>)}
                  <div className="af-class-div-block-421">
                    {map(proxies['phone-container'], props => <div {...{...props, className: `af-class-property-contact-detail-col ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                      {map(proxies['phone-title'], props => <div {...{...props, className: `af-class-property-contact-detail-col-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>contact us</React.Fragment>}</div>)}
                      {map(proxies['phone-number'], props => <div {...{...props, className: `af-class-property-contact-detail-col-detail ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>888.826.3223</React.Fragment>}</div>)}
                    </React.Fragment>)}</div>)}
                    <div className="af-class-property-contact-detail-col af-class-top-padding">
                      {map(proxies['contact-title'], props => <div {...{...props, className: `af-class-property-contact-detail-col-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>still need help?</React.Fragment>}</div>)}
                      {map(proxies['contact-value'], props => <div {...{...props, className: `af-class-property-contact-detail-col-detail ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Contact Us</React.Fragment>}</div>)}
                    </div>
                  </div>
                  <div className="af-class-div-block-420">
                    <div className="af-class-property-contact-detail-col">
                      {map(proxies['follow-title'], props => <div {...{...props, className: `af-class-property-contact-detail-col-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>follow us</React.Fragment>}</div>)}
                      {map(proxies['social'], props => <div {...{...props, className: `af-class-div-block-422 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                        {map(proxies['propertyContactMapItemViewList2'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</React.Fragment>}</div>)}
                    </div>
                  </div>
                </div>
              </React.Fragment>)}</div>)}
            </React.Fragment>)}</div>)}
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyContactMapView

/* eslint-enable */