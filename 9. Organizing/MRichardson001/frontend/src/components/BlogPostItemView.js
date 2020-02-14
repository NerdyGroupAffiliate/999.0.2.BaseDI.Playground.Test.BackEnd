/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class BlogPostItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/BlogPostItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BlogPostItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== BlogPostItemView ? transformProxies(this.props.children) : {
      'link': [],
      'image': [],
      'tags-container': [],
      'author': [],
      'published-date': [],
      'title': [],
      'summary': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-blog-card--w-image">
            {map(proxies['link'], props => <a href="/blog-article" {...{...props, className: `af-class-link-block-3 w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['image'], props => <div {...{...props, className: `af-class-blog-card-image-container ${props.className || ''}`}}>{props.children}</div>)}
              <div className="af-class-blog-card--content-container">
                {map(proxies['tags-container'], props => <div {...{...props, className: `af-class-div-block-297 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <div className="af-class-blog-card--tag af-class-blue">around the area</div>
                  <div className="af-class-blog-card--tag af-class-yellow">around the area</div>
                </React.Fragment>}</div>)}
                <div className="af-class-blog-card--publish-info">
                  <div className="af-class-text-block-89">By {map(proxies['author'], props => <span {...{...props, className: `af-class-author ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Jack Morgan</React.Fragment>}</span>)}</div>
                  {map(proxies['published-date'], props => <div {...{...props, className: `af-class-blog-card--date ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Nov 21st, 2018</React.Fragment>}</div>)}
                </div>
                {map(proxies['title'], props => <h3 {...{...props, className: `af-class-blog-card--title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Simple ways to reduce energy costs this winter</React.Fragment>}</h3>)}
                {map(proxies['summary'], props => <p {...{...props, className: `af-class-paragraph af-class-small ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Heating and cooling your apartment, especially in regions with greater shifts in temperature, can be one of the more...</React.Fragment>}</p>)}
              </div>
            </React.Fragment>)}</a>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default BlogPostItemView

/* eslint-enable */