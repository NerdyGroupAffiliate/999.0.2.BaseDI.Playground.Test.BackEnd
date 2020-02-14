/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ListResourcesView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListResourcesController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListResourcesView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListResourcesView ? transformProxies(this.props.children) : {
      'header-container': [],
      'subtitle': [],
      'title': [],
      'resource-list': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-list-amenities-resources">
            {map(proxies['header-container'], props => <div {...{...props, className: `af-class-div-block-163 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['subtitle'], props => <div {...{...props, className: `af-class-section-title af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>community features</React.Fragment>}</div>)}
              {map(proxies['title'], props => <div {...{...props, className: `af-class-section-tagline af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Programs Section Title Example</React.Fragment>}</div>)}
            </React.Fragment>)}</div>)}
            <div className="af-class-list-resources-list-container">
              {map(proxies['resource-list'], props => <div {...{...props, className: `af-class-div-block-167 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-div-block-166">
                  <div className="af-class-div-block-164">
                    <div className="af-class-div-block-165" /><img src="/images/placeholder2x.png" alt="" className="af-class-image-31" />
                    <h4 className="af-class-heading-20">48 Hour Service Guarantee</h4>
                    <div className="af-class-paragraph">Vestibulum id ligula porta felis euismod semper. </div>
                    <a href="/#" className="af-class-link-block-8 w-inline-block">
                      <div className="af-class-text-block-130">Learn&nbsp;more</div><img src="/images/icon-arrow--right--blue.svg" alt="" /></a>
                  </div>
                </div>
                <div className="af-class-div-block-166">
                  <div className="af-class-div-block-164">
                    <div className="af-class-div-block-165" /><img src="/images/placeholder2x.png" alt="" className="af-class-image-31" />
                    <h4 className="af-class-heading-20">Breatheasy Smokefree Living</h4>
                    <div className="af-class-paragraph">Vestibulum id ligula porta felis euismod semper. </div>
                  </div>
                </div>
                <div className="af-class-div-block-166 af-class-offset">
                  <div className="af-class-div-block-164">
                    <div className="af-class-div-block-165" /><img src="/images/placeholder2x.png" alt="" className="af-class-image-31" />
                    <h4 className="af-class-heading-20">Volunteering Programs</h4>
                    <div className="af-class-paragraph">Vestibulum id ligula porta felis euismod semper. </div>
                  </div>
                </div>
                <div className="af-class-div-block-166 af-class-offset">
                  <div className="af-class-div-block-164">
                    <div className="af-class-div-block-165" /><img src="/images/placeholder2x.png" alt="" className="af-class-image-31" />
                    <h4 className="af-class-heading-20">Concierge Service</h4>
                    <div className="af-class-paragraph">Vestibulum id ligula porta felis euismod semper. </div>
                  </div>
                </div>
              </React.Fragment>}</div>)}
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default ListResourcesView

/* eslint-enable */