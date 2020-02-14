/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PopularBlogPostView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PopularBlogPostController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PopularBlogPostView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PopularBlogPostView ? transformProxies(this.props.children) : {
      'blog-post-wrapper': [],
      'tag': [],
      'author': [],
      'published-date': [],
      'title': [],
      'summary': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['blog-post-wrapper'], props => <div {...{...props, className: `af-class-blog-card--small ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['tag'], props => <div {...{...props, className: `af-class-blog-card--tag af-class-yellow af-class-small ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>apartment life</React.Fragment>}</div>)}
            <div className="af-class-blog-card--publish-info">
              <div className="af-class-text-block-89">By {map(proxies['author'], props => <span {...{...props, className: `af-class-author ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Jack Morgan</React.Fragment>}</span>)}</div>
              {map(proxies['published-date'], props => <div {...{...props, className: `af-class-blog-card--date ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Nov 21st, 2018</React.Fragment>}</div>)}
            </div>
            {map(proxies['title'], props => <h3 {...{...props, className: `af-class-blog-card--small-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Simple ways to reduce energy costs this winter</React.Fragment>}</h3>)}
            {map(proxies['summary'], props => <p {...{...props, className: `af-class-paragraph af-class-small ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Heating and cooling your apartment, especially in regions with greater shifts in temperature, can be one of the more...</React.Fragment>}</p>)}
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default PopularBlogPostView

/* eslint-enable */