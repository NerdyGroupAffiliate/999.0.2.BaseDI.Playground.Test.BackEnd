/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class BlogPostRelatedPostsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/BlogPostRelatedPostsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BlogPostRelatedPostsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== BlogPostRelatedPostsView ? transformProxies(this.props.children) : {
      'blog-posts-wrapper': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-blog-related-posts">
            <div className="af-class-blog-related-posts-container">
              <h3 className="af-class-heading-22">Related Blog Posts</h3>
              {map(proxies['blog-posts-wrapper'], props => <div {...{...props, className: `af-class-div-block-306 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-blog-card--small af-class-related">
                  <div className="af-class-blog-card--tag af-class-yellow af-class-small">apartment life</div>
                  <div className="af-class-blog-card--publish-info">
                    <div className="af-class-text-block-89">By <span className="af-class-author">Jack Morgan</span></div>
                    <div className="af-class-blog-card--date">Nov 21st, 2018</div>
                  </div>
                  <h3 className="af-class-blog-card--small-title">Simple ways to reduce energy costs this winter</h3>
                </div>
                <div className="af-class-blog-card--small af-class-related">
                  <div className="af-class-blog-card--tag af-class-yellow af-class-small">apartment life</div>
                  <div className="af-class-blog-card--publish-info">
                    <div className="af-class-text-block-89">By <span className="af-class-author">Jack Morgan</span></div>
                    <div className="af-class-blog-card--date">Nov 21st, 2018</div>
                  </div>
                  <h3 className="af-class-blog-card--small-title">Simple ways to reduce energy costs this winter</h3>
                </div>
                <div className="af-class-blog-card--small af-class-related">
                  <div className="af-class-blog-card--tag af-class-yellow af-class-small">apartment life</div>
                  <div className="af-class-blog-card--publish-info">
                    <div className="af-class-text-block-89">By <span className="af-class-author">Jack Morgan</span></div>
                    <div className="af-class-blog-card--date">Nov 21st, 2018</div>
                  </div>
                  <h3 className="af-class-blog-card--small-title">Simple ways to reduce energy costs this winter</h3>
                </div>
              </React.Fragment>}</div>)}
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default BlogPostRelatedPostsView

/* eslint-enable */