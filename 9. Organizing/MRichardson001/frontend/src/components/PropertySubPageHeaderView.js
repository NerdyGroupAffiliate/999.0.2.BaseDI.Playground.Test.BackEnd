/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import StarActiveView from './StarActiveView'
import StarInactiveView from './StarInactiveView'


let Controller

class PropertySubPageHeaderView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertySubPageHeaderController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertySubPageHeaderView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertySubPageHeaderView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
      'placard-container': [],
      'property-name': [],
      'stars': [],
      'address': [],
      'phone': [],
      'details-wrapper': [],
      'specials': [],
      'beds': [],
      'price': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <header {...{...props, className: `af-class-property-sub-page-header af-class-amenities ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-property-sub-page-header-container">
              {map(proxies['title'], props => <h1 {...{...props, className: `af-class-heading-19 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Floorplans</React.Fragment>}</h1>)}
              {map(proxies['placard-container'], props => <div {...{...props, className: `af-class-property-subpage-placard ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n   .af-class-property-subpage-placard {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  }\n   .af-class-property-subpage-placard-brick.af-class-prop-details {\n  flex: 1;\n  }\n" }} />
                </div>
                <div className="af-class-property-subpage-placard-brick af-class-prop-name">
                  {map(proxies['property-name'], props => <div {...{...props, className: `af-class-property-phase--property-name ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI <strong className="af-class-bold-text">on <br />Eldridge Parkway</strong><br /></React.Fragment>}</div>)}
                  {map(proxies['stars'], props => <div {...{...props, className: `af-class-star-rating-wrapper ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <StarActiveView.Controller {...this.props} />
                    <div className="af-class-icon--star--active w-embed">
                      <style dangerouslySetInnerHTML={{__html: "\n .af-class-icon--star--active {\n  fill:#ecd925;\n  fill-rule: evenodd;\n}\n" }} />
                      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.02 18.09">
                        <g id="iPad">
                          <g id="Group-2">
                            <polygon id="Star" points="9.51 15 3.63 18.09 4.75 11.54 0 6.91 6.57 5.96 9.51 0 12.45 5.96 19.02 6.91 14.27 11.54 15.39 18.09 9.51 15" className="af-class-icon--star--active">
                            </polygon></g>
                        </g>
                      </svg></div>
                    <div className="af-class-icon--star--active w-embed">
                      <style dangerouslySetInnerHTML={{__html: "\n .af-class-icon--star--active {\n  fill:#ecd925;\n  fill-rule: evenodd;\n}\n" }} />
                      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.02 18.09">
                        <g id="iPad">
                          <g id="Group-2">
                            <polygon id="Star" points="9.51 15 3.63 18.09 4.75 11.54 0 6.91 6.57 5.96 9.51 0 12.45 5.96 19.02 6.91 14.27 11.54 15.39 18.09 9.51 15" className="af-class-icon--star--active">
                            </polygon></g>
                        </g>
                      </svg></div>
                    <div className="af-class-icon--star--active w-embed">
                      <style dangerouslySetInnerHTML={{__html: "\n .af-class-icon--star--active {\n  fill:#ecd925;\n  fill-rule: evenodd;\n}\n" }} />
                      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.02 18.09">
                        <g id="iPad">
                          <g id="Group-2">
                            <polygon id="Star" points="9.51 15 3.63 18.09 4.75 11.54 0 6.91 6.57 5.96 9.51 0 12.45 5.96 19.02 6.91 14.27 11.54 15.39 18.09 9.51 15" className="af-class-icon--star--active">
                            </polygon></g>
                        </g>
                      </svg></div>
                    <StarInactiveView.Controller {...this.props} />
                    <div className="af-class-text-block-50">(12)</div>
                  </React.Fragment>}</div>)}
                </div>
                <div className="af-class-property-subpage-placard-brick af-class-prop-address">
                  {map(proxies['address'], props => <div {...{...props, className: `af-class-text-block-39 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>850 S Clark St,<br />Chicago, IL 60605</React.Fragment>}</div>)}
                  {map(proxies['phone'], props => <div {...{...props, className: `af-class-text-block-38 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>312-462-1938</React.Fragment>}</div>)}
                </div>
                {map(proxies['details-wrapper'], props => <div {...{...props, className: `af-class-property-subpage-placard-brick af-class-prop-details ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['specials'], props => <div {...{...props, className: `af-class-div-block-157 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/icon-specials-fire.png" alt="" className="af-class-image-28" />
                    <div>Current Specials</div>
                  </React.Fragment>}</div>)}
                  <div className="af-class-div-block-158">
                    {map(proxies['beds'], props => <div {...{...props, className: `af-class-text-block-47 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Studio - 2 Bedroom</React.Fragment>}</div>)}
                    <div className="af-class-text-block-48">Starting at</div>
                    {map(proxies['price'], props => <div {...{...props, className: `af-class-text-block-49 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$1,607</React.Fragment>}</div>)}
                  </div>
                </React.Fragment>)}</div>)}
              </React.Fragment>)}</div>)}
            </div>
          </React.Fragment>)}</header>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertySubPageHeaderView

/* eslint-enable */