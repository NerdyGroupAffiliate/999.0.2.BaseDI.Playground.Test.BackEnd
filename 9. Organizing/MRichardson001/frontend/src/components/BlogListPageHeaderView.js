/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class BlogListPageHeaderView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/BlogListPageHeaderController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BlogListPageHeaderView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== BlogListPageHeaderView ? transformProxies(this.props.children) : {
      'bg-image': [],
      'featured-blog-post-container': [],
      'tag': [],
      'author': [],
      'published-date': [],
      'title': [],
      'summary': [],
      'search-field': [],
      'topic-dropdown': [],
      'region-dropdown': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['bg-image'], props => <header {...{...props, className: `af-class-blog-banner ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['featured-blog-post-container'], props => <div {...{...props, className: `af-class-blog-card--featured af-class-blur ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['tag'], props => <div {...{...props, className: `af-class-blog-card--tag af-class-yellow ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>apartment life</React.Fragment>}</div>)}
              <div className="af-class-blog-card--publish-info">
                <div className="af-class-text-block-89">By {map(proxies['author'], props => <span {...{...props, className: `af-class-author ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Jack Morgan</React.Fragment>}</span>)}</div>
                {map(proxies['published-date'], props => <div {...{...props, className: `af-class-blog-card--date ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Nov 21st, 2018</React.Fragment>}</div>)}
              </div>
              {map(proxies['title'], props => <h3 {...{...props, className: `af-class-blog-card--featured-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Simple ways to reduce energy costs this winter</React.Fragment>}</h3>)}
              {map(proxies['summary'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Heating and cooling your apartment, especially in regions with greater shifts in temperature, can be one of the more...</React.Fragment>}</p>)}
            </React.Fragment>)}</div>)}
            <div className="af-class-blog--search-bar af-class-blur">
              <div className="af-class-blog-search-bar-container">
                {map(proxies['search-field'], props => <div {...{...props, className: `af-class-blog-search-bar--search-field ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <div className="af-class-search-icon w-embed">
                    {/*?xml version="1.0" encoding="UTF-8"?*/}
                    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                      {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                      <title>search - material</title>
                      <desc>Created with Sketch.</desc>
                      <g id="Blogs" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" fontFamily="material" fontSize={20} fontWeight="normal">
                        <g id="Blogs_Overview" transform="translate(-135.000000, -720.000000)" fill="#3F3F3F">
                          <g id="Group-2" transform="translate(132.000000, 718.000000)">
                            <text id="search---material">
                              <tspan x={1} y={17}></tspan>
                            </text>
                          </g>
                        </g>
                      </g>
                    </svg></div>
                </React.Fragment>}</div>)}
                <div className="af-class-div-block-290">
                  <div className="af-class-div-block-288 af-class-margin-right">
                    <div>Search by Topic</div>
                    {map(proxies['topic-dropdown'], props => <div {...{...props, className: `af-class-div-block-289 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <div>Topics</div>
                      <div className="af-class-arrow-chevron-down w-embed">
                        {/*?xml version="1.0" encoding="UTF-8"?*/}
                        <svg width="8px" height="13px" viewBox="0 0 8 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                          {/*  Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch  */}
                          <title>ion-ios-arrow-forward - Ionicons</title>
                          <desc>Created with Sketch.</desc>
                          <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g id="UI/Icons/Arrow" transform="translate(0.000000, -4.000000)" fill="#4C698F">
                              <polygon id="ion-ios-arrow-forward---Ionicons" points="0 5.5 1.25 4.25 7.5 10.5 1.25 16.75 0 15.5 4.9609375 10.5" />
                            </g>
                          </g>
                        </svg></div>
                    </React.Fragment>}</div>)}
                  </div>
                  <div className="af-class-div-block-288">
                    <div>Search by Region</div>
                    {map(proxies['region-dropdown'], props => <div {...{...props, className: `af-class-div-block-289 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <div>Regions</div>
                      <div className="af-class-arrow-chevron-down w-embed">
                        {/*?xml version="1.0" encoding="UTF-8"?*/}
                        <svg width="8px" height="13px" viewBox="0 0 8 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                          {/*  Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch  */}
                          <title>ion-ios-arrow-forward - Ionicons</title>
                          <desc>Created with Sketch.</desc>
                          <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g id="UI/Icons/Arrow" transform="translate(0.000000, -4.000000)" fill="#4C698F">
                              <polygon id="ion-ios-arrow-forward---Ionicons" points="0 5.5 1.25 4.25 7.5 10.5 1.25 16.75 0 15.5 4.9609375 10.5" />
                            </g>
                          </g>
                        </svg></div>
                    </React.Fragment>}</div>)}
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>)}</header>)}
        </span>
      </React.Fragment>
    )
  }
}

export default BlogListPageHeaderView

/* eslint-enable */