/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import BlogListItemView from './BlogListItemView'


let Controller

class ListNewsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListNewsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListNewsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListNewsView ? transformProxies(this.props.children) : {
      'background-image': [],
      'list-container': [],
      'title': [],
      'left-arrow': [],
      'right-arrow': [],
      'blogListItemViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['background-image'], props => <section {...{...props, className: `af-class-sustainable-posts ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['list-container'], props => <div {...{...props, className: `af-class-div-block-260 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-div-block-258">
                {map(proxies['title'], props => <div {...{...props, className: `af-class-text-block-82 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Neighborhood Buzz</React.Fragment>}</div>)}
                <div className="af-class-div-block-257">
                  {map(proxies['left-arrow'], props => <div {...{...props, className: `af-class-arrow-chevron-white-circled af-class-left ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <div className="af-class-html-embed-21 w-embed">
                      {/*?xml version="1.0" encoding="UTF-8"?*/}
                      <svg viewBox="0 0 19 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                        {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                        <title>ion-ios-arrow-forward - Ionicons</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Locations" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" fontFamily="Ionicons" fontSize={49} fontWeight={400}>
                          <g transform="translate(-1163.000000, -1978.000000)" fill="#fff" id="ion-ios-arrow-forward---Ionicons">
                            <text>
                              <tspan x={1163} y={2012}></tspan>
                            </text>
                          </g>
                        </g>
                      </svg></div>
                  </React.Fragment>}</div>)}
                  {map(proxies['right-arrow'], props => <div {...{...props, className: `af-class-arrow-chevron-white-circled ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <div className="af-class-html-embed-21 w-embed">
                      {/*?xml version="1.0" encoding="UTF-8"?*/}
                      <svg viewBox="0 0 19 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                        {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                        <title>ion-ios-arrow-forward - Ionicons</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Locations" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" fontFamily="Ionicons" fontSize={49} fontWeight={400}>
                          <g transform="translate(-1163.000000, -1978.000000)" fill="#fff" id="ion-ios-arrow-forward---Ionicons">
                            <text>
                              <tspan x={1163} y={2012}></tspan>
                            </text>
                          </g>
                        </g>
                      </svg></div>
                  </React.Fragment>}</div>)}
                </div>
              </div>
              <div>
                <ul className="af-class-unordered-list-6 w-list-unstyled">
                  {map(proxies['blogListItemViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</ul>
              </div>
            </React.Fragment>)}</div>)}
          </React.Fragment>)}</section>)}
        </span>
      </React.Fragment>
    )
  }
}

export default ListNewsView

/* eslint-enable */