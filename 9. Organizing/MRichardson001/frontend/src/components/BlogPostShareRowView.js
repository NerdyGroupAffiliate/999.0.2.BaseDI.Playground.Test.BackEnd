/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class BlogPostShareRowView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/BlogPostShareRowController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BlogPostShareRowView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== BlogPostShareRowView ? transformProxies(this.props.children) : {
      'social-share-icons-wrapper': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-blog-share-row">
            <div className="af-class-blog-share-container">
              <div className="af-class-article-share-heading">share this post</div>
              {map(proxies['social-share-icons-wrapper'], props => <div {...props}>{props.children ? props.children : <React.Fragment><img src="/images/twitter3x_1.png" alt="" className="af-class-blog-article--social-icon" /><img src="/images/pinterest3x.png" alt="" className="af-class-blog-article--social-icon" /></React.Fragment>}</div>)}
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default BlogPostShareRowView

/* eslint-enable */