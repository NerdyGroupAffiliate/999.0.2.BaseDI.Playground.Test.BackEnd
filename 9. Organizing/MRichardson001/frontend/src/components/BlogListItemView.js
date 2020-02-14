/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class BlogListItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/BlogListItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BlogListItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== BlogListItemView ? transformProxies(this.props.children) : {
      'date': [],
      'author': [],
      'summary': [],
      'link': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <li className="af-class-list-item-5">
            <div className="af-class-div-block-263">
              {map(proxies['date'], props => <div {...props}>{props.children ? props.children : <React.Fragment>Oct 24, 2018</React.Fragment>}</div>)}
              {map(proxies['author'], props => <div {...props}>{props.children ? props.children : <React.Fragment>By Builder and Developer</React.Fragment>}</div>)}
            </div>
            <div className="af-class-div-block-262">
              {map(proxies['summary'], props => <div {...{...props, className: `af-class-text-block-81 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI Ponce Park Becomes First Multifamily Development in Atlanta to receive Fitwel</React.Fragment>}</div>)}
              {map(proxies['link'], props => <div {...{...props, className: `af-class-div-block-261 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-yellow-highlight-half">Read full article</div>
                <div className="af-class-right-arrow--dark w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n .af-view .af-class-arrow--read-article {\n  fill: #3f3f3f;\n}\n" }} />
                  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.75 42.75">
                    <path d="M0,24.62V19.38H32.5l-14.88-15L21.38.62,42.75,22,21.38,43.38,17.5,39.62l15-15Z" transform="translate(0 -0.63)" className="af-class-arrow--read-article" />
                  </svg></div>
              </React.Fragment>}</div>)}
            </div>
          </li>
        </span>
      </React.Fragment>
    )
  }
}

export default BlogListItemView

/* eslint-enable */