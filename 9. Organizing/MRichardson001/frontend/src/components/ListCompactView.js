/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import ListCompactItemView from './ListCompactItemView'
import ListCompactListItemView from './ListCompactListItemView'


let Controller

class ListCompactView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListCompactController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListCompactView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListCompactView ? transformProxies(this.props.children) : {
      'image': [],
      'title': [],
      'text-blurb': [],
      'link-url': [],
      'link-text': [],
      'link-arrow': [],
      'list-wrapper': [],
      'mobile-link-url': [],
      'mobile-link-text': [],
      'mobile-link-arrow': [],
      'listCompactListItemViewList1': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-list-compact">
            <div className="af-class-div-block-41">
              <div className="af-class-div-block-40">
                {map(proxies['image'], props => <div {...{...props, className: `af-class-div-block-43 ${props.className || ''}`}}>{props.children}</div>)}
              </div>
              <div className="af-class-div-block-42">
                <div className="af-class-list--compact-description-wrap">
                  {map(proxies['title'], props => <h2 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Our Benefits</React.Fragment>}</h2>)}
                  {map(proxies['text-blurb'], props => <div {...{...props, className: `af-class-list-compact-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI focuses on our employees’ personal and professional development by offering a comprehensive benefits package in addition to competitive pay.</React.Fragment>}</div>)}
                  {map(proxies['link-url'], props => <a href="/#" {...{...props, className: `af-class-button af-class-boss af-class-yellow af-class-no-margin af-class-hide-on-mobile w-hidden-small w-hidden-tiny w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    {map(proxies['link-text'], props => <div {...{...props, className: `af-class-boos-button-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Learn More About Benefits</React.Fragment>}</div>)}{map(proxies['link-arrow'], props => <img src="/images/right-arrow.svg" alt="" {...{...props, className: `af-class-boss-right-arrow ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</a>)}
                </div>
                {map(proxies['list-wrapper'], props => <ul {...{...props, className: `af-class-list-compact-list-container w-list-unstyled ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <ListCompactItemView.Controller {...this.props} />
                  {map(proxies['listCompactListItemViewList1'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</React.Fragment>}</ul>)}
                {map(proxies['mobile-link-url'], props => <a href="/#" {...{...props, className: `af-class-button af-class-boss af-class-yellow af-class-no-margin af-class-hide-desktop w-hidden-main w-hidden-medium w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['mobile-link-text'], props => <div {...{...props, className: `af-class-boos-button-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Learn More About Benefits</React.Fragment>}</div>)}{map(proxies['mobile-link-arrow'], props => <img src="/images/right-arrow.svg" alt="" {...{...props, className: `af-class-boss-right-arrow ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</a>)}
              </div>
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ListCompactView

/* eslint-enable */