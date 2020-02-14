/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class BlogPostHeaderView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/BlogPostHeaderController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BlogPostHeaderView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== BlogPostHeaderView ? transformProxies(this.props.children) : {
      'header-image': [],
      'back-to-home-link': [],
      'link-arrow': [],
      'tag': [],
      'blog-title': [],
      'author': [],
      'date': [],
      'social-media-share': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <header className="af-class-blog-article-banner">
            {map(proxies['header-image'], props => <div {...{...props, className: `af-class-blog-article-header-image ${props.className || ''}`}}>{props.children}</div>)}
            <div className="af-class-blog-article-banner-content-col">
              <div className="af-class-div-block-301">
                {map(proxies['back-to-home-link'], props => <div {...{...props, className: `af-class-blog-article-back-button ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['link-arrow'], props => <div {...{...props, className: `af-class-back-arrow--long w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    {/*?xml version="1.0" encoding="UTF-8"?*/}
                    <svg width="14px" height="13px" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                      {/*  Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch  */}
                      <title>Mask</title>
                      <desc>Created with Sketch.</desc>
                      <defs>
                        <path d="M431.079167,10.5875 L431.079167,10.5875 C430.754614,10.9120523 430.754379,11.438183 431.07864,11.7630257 L435.141667,15.8333333 L425.833333,15.8333333 C425.373096,15.8333333 425,16.2064294 425,16.6666667 L425,16.6666667 C425,17.126904 425.373096,17.5 425.833333,17.5 L435.141667,17.5 L431.07864,21.5703076 C430.754379,21.8951504 430.754614,22.421281 431.079167,22.7458333 L431.079167,22.7458333 C431.403634,23.0703006 431.929699,23.0703006 432.254167,22.7458333 L438.333333,16.6666667 L432.254167,10.5875 C431.929699,10.2630327 431.403634,10.2630327 431.079167,10.5875 Z" id="path-1" />
                      </defs>
                      <g id="Sustainability" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <g id="Sustainability_Desktop_updated" transform="translate(-1072.000000, -1360.000000)">
                          <g id="Group-20" transform="translate(575.000000, 1158.000000)">
                            <g id="Group-8" transform="translate(72.000000, 192.000000)">
                              <mask id="mask-2" fill="white">
                                <use href="/#path-1" />
                              </mask>
                              <use id="Mask" fill="#3F3F3F" transform="translate(431.666667, 16.666667) rotate(-360.000000) translate(-431.666667, -16.666667) " href="/#path-1" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg></React.Fragment>}</div>)}
                  <div className="af-class-text-block-92">Back to Blog Home</div>
                </React.Fragment>)}</div>)}
                <div className="af-class-div-block-304">
                  {map(proxies['tag'], props => <div {...{...props, className: `af-class-blog-card--tag af-class-yellow ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>apartment life</React.Fragment>}</div>)}
                  {map(proxies['blog-title'], props => <h1 {...{...props, className: `af-class-blog-article-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Simple ways to reduce energy costs this winter</React.Fragment>}</h1>)}
                  <div className="af-class-div-block-302">
                    <div className="af-class-div-block-303">
                      <div className="af-class-div-block-308">
                        <div className="af-class-article-heading-author-prefix">by</div>
                        {map(proxies['author'], props => <div {...{...props, className: `af-class-blog-article-author ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lauren Fischer</React.Fragment>}</div>)}
                      </div>
                      {map(proxies['date'], props => <div {...{...props, className: `af-class-blog-article-publsih-date ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>November 21, 2018</React.Fragment>}</div>)}
                    </div>
                    {map(proxies['social-media-share'], props => <div {...{...props, className: `af-class-div-block-307 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/twitter3x_1.png" alt="" className="af-class-blog-article--social-icon af-class-no-margin" /><img src="/images/pinterest3x.png" alt="" className="af-class-blog-article--social-icon" /></React.Fragment>}</div>)}
                  </div>
                </div>
              </div>
            </div>
          </header>
        </span>
      </React.Fragment>
    )
  }
}

export default BlogPostHeaderView

/* eslint-enable */