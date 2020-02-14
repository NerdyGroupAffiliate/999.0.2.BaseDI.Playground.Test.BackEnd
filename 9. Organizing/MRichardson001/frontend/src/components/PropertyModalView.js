/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyModalView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyModalController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyModalView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyModalView ? transformProxies(this.props.children) : {
      'modal-wrapper': [],
      'title': [],
      'address': [],
      'phone': [],
      'images': [],
      'pricing': [],
      'configuration': [],
      'highlights': [],
      'highlight-list': [],
      'dog': [],
      'dog': [],
      'cat': [],
      'cat': [],
      'leed': [],
      'leed': [],
      'smocking': [],
      'smocking': [],
      'link': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['modal-wrapper'], props => <div {...{...props, className: `af-class-property-modal-wrapper ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-div-block-122">
              {map(proxies['title'], props => <div {...{...props, className: `af-class-text-block-27 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI at Seven Bridges</React.Fragment>}</div>)}
              <div className="af-class-div-block-121">
                {map(proxies['address'], props => <div {...{...props, className: `af-class-property-modal-text ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1525 Lake Cook Rd<br />Deerfield, IL 60015</React.Fragment>}</div>)}
                {map(proxies['phone'], props => <div {...{...props, className: `af-class-property-modal-text ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>713-234-8591</React.Fragment>}</div>)}
              </div>
            </div>
            {map(proxies['images'], props => <div {...{...props, className: `af-class-div-block-128 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/chicago-property-highlight2x.jpg" srcSet="images/chicago-property-highlight2x-p-500.jpeg 500w, images/chicago-property-highlight2x.jpg 618w" sizes="320px" alt="" /><img src="/images/chicago-property-highlight2x.jpg" srcSet="images/chicago-property-highlight2x-p-500.jpeg 500w, images/chicago-property-highlight2x.jpg 618w" sizes="320px" alt="" /><img src="/images/chicago-property-highlight2x.jpg" srcSet="images/chicago-property-highlight2x-p-500.jpeg 500w, images/chicago-property-highlight2x.jpg 618w" sizes="320px" alt="" /></React.Fragment>}</div>)}
            <div className="af-class-div-block-124">
              {map(proxies['pricing'], props => <div {...{...props, className: `af-class-text-block-29 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Available now from the $1,490's</React.Fragment>}</div>)}
              {map(proxies['configuration'], props => <div {...{...props, className: `af-class-text-block-30 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Studio - 2 Bedroom</React.Fragment>}</div>)}
            </div>
            {map(proxies['highlights'], props => <div {...{...props, className: `af-class-div-block-123 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-property-modal-feat-title">highlights</div>
              {map(proxies['highlight-list'], props => <ul {...{...props, className: `af-class-property-card-modal-feat-list w-list-unstyled ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <li className="af-class-property-card-modal-feat-list-item">Kitchen / lounge with coffee bar</li>
                <li className="af-class-property-card-modal-feat-list-item">10ft ceilings with exposed concrete and spiral duct work</li>
                <li className="af-class-property-card-modal-feat-list-item">Elegant quartz countertops in kitchen and baths</li>
              </React.Fragment>}</ul>)}
            </React.Fragment>)}</div>)}
            <div className="af-class-div-block-126">
              {map(proxies['dog'], props => <div {...{...props, className: `af-class-div-block-125 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['dog'], props => <img src="/images/icon-Dog.svg" alt="" {...{...props, className: `af-class-property-card-icon ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</div>)}
              {map(proxies['cat'], props => <div {...{...props, className: `af-class-div-block-125 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['cat'], props => <img src="/images/icon-Cat.svg" alt="" {...{...props, className: `af-class-property-card-icon ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</div>)}
              {map(proxies['leed'], props => <div {...{...props, className: `af-class-div-block-125 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['leed'], props => <img src="/images/icon-LEED.png" alt="" {...{...props, className: `af-class-property-card-icon ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</div>)}
              {map(proxies['smocking'], props => <div {...{...props, className: `af-class-div-block-125 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['smocking'], props => <img src="/images/icon-Smoking.png" alt="" {...{...props, className: `af-class-property-card-icon ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</div>)}
            </div>
            {map(proxies['link'], props => <div {...{...props, className: `af-class-div-block-127 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-text-block-28">View Property</div><img src="/images/icon-arrow--right--blue.svg" alt="" className="af-class-image-17" /></React.Fragment>}</div>)}
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n  .af-class-property-card-modal-feat-list-item::after {\n  position: absolute;\n  content: '';\n  display: block;\n  left: -15px;\n  top: 50%;\n  background-color: #ddd;\n  border-radius: 50%;\n  width: 5px;\n  height: 5px;\n  transform: translateY(-50%);\n}\n" }} />
            </div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyModalView

/* eslint-enable */