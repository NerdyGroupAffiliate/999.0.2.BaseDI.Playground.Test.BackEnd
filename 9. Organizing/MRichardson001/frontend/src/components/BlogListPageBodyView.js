/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import BlogPostItemView from './BlogPostItemView'
import PopularBlogPostView from './PopularBlogPostView'


let Controller

class BlogListPageBodyView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/BlogListPageBodyController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BlogListPageBodyView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== BlogListPageBodyView ? transformProxies(this.props.children) : {
      'popular-title': [],
      'twitter-card': [],
      'twitter-image': [],
      'twitter-content': [],
      'pinterest-card': [],
      'pinterest-image': [],
      'pinterest-text': [],
      'instagram-card': [],
      'instagram-image': [],
      'instagram-text': [],
      'blogPostItemViewList0': [],
      'popularBlogPostViewList6': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <main className="af-class-blog-posts">
            <div className="af-class-blog-posts-container">
              <div className="af-class-blog-post-cards-column">
                {map(proxies['blogPostItemViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
              <div className="af-class-blog-sidebar-column">
                <div className="af-class-blog-sidebar-section">
                  {map(proxies['popular-title'], props => <h2 {...{...props, className: `af-class-blog-sidebar-section-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Most Popular Posts</React.Fragment>}</h2>)}
                  <div className="af-class-card-guide-track">
                    {map(proxies['popularBlogPostViewList6'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
                </div>
                <div className="af-class-blog-sidebar-section">
                  <h2 className="af-class-blog-sidebar-section-heading">Follow Us</h2>
                  <div className="af-class-card-guide-track">
                    {map(proxies['twitter-card'], props => <div {...{...props, className: `af-class-social-card ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                      {map(proxies['twitter-image'], props => <div {...{...props, className: `af-class-social-card--image-container ${props.className || ''}`}}>{props.children}</div>)}
                      <div className="af-class-social-card--content-container">
                        <div className="af-class-social-card-header-wrapper"><img src="/images/twitter3x_1.png" alt="" className="af-class-social-card--icon" />
                          <div className="af-class-social-card--title">AMLIapts</div>
                        </div>
                        {map(proxies['twitter-content'], props => <p {...{...props, className: `af-class-social-card--description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This green household cleaner is one of the best. https://bit.ly/2uSsCSh </React.Fragment>}</p>)}
                      </div>
                    </React.Fragment>)}</div>)}
                    {map(proxies['pinterest-card'], props => <div {...{...props, className: `af-class-social-card ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                      {map(proxies['pinterest-image'], props => <div {...{...props, className: `af-class-social-card--image-container ${props.className || ''}`}}>{props.children}</div>)}
                      <div className="af-class-social-card--content-container">
                        <div className="af-class-social-card-header-wrapper"><img src="/images/pinterest3x.png" alt="" className="af-class-social-card--icon" />
                          <div className="af-class-social-card--title">AMLI Residential</div>
                        </div>
                        {map(proxies['pinterest-text'], props => <p {...{...props, className: `af-class-social-card--description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Easy Ways to Transform your Apartment Bathroom</React.Fragment>}</p>)}
                      </div>
                    </React.Fragment>)}</div>)}
                    {map(proxies['instagram-card'], props => <div {...{...props, className: `af-class-social-card ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                      {map(proxies['instagram-image'], props => <div {...{...props, className: `af-class-social-card--image-container ${props.className || ''}`}}>{props.children}</div>)}
                      <div className="af-class-social-card--content-container">
                        <div className="af-class-social-card-header-wrapper"><img src="/images/instagram3x_1.png" alt="" className="af-class-social-card--icon" />
                          <div className="af-class-social-card--title">AMLIapts</div>
                        </div>
                        {map(proxies['instagram-text'], props => <p {...{...props, className: `af-class-social-card--description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Monday blues have never looked better. Find this blue-tiful floor plan at AMLI Deerfield, just 30 minutes north of Chicago. #livelifelovelife </React.Fragment>}</p>)}
                      </div>
                    </React.Fragment>)}</div>)}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </span>
      </React.Fragment>
    )
  }
}

export default BlogListPageBodyView

/* eslint-enable */