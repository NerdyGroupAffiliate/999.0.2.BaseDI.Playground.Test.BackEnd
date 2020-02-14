/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import SpotlightBillboardListItemView from './SpotlightBillboardListItemView'


let Controller

class SpotlightBillboardListView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SpotlightBillboardListController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SpotlightBillboardListView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SpotlightBillboardListView ? transformProxies(this.props.children) : {
      'background-image': [],
      'content-wrapper': [],
      'title': [],
      'text-blurb': [],
      'cta-link': [],
      'cta-text': [],
      'cta-arrow': [],
      'spotlightBillboardListItemViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['background-image'], props => <section {...{...props, className: `af-class-spotlight-billboard-list ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['content-wrapper'], props => <div {...{...props, className: `af-class-spotlight-billlboard-list-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['title'], props => <h2 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI means work that you love-in a positive and rewarding environment.</React.Fragment>}</h2>)}
              {map(proxies['text-blurb'], props => <p {...{...props, className: `af-class-spotlight-bb-list-description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI focuses on our employees’ personal and professional development. Our team members connect with each other and their career goals through our Continuing Education and Peer Training programs. We prepare our team members for the next step and open up opportunities for a successful experience at AMLI. We promote from within and offer transfers to different locations and/or functional areas.</React.Fragment>}</p>)}
              <ul className="af-class-spotlight-bb-list-benefit-list">
                {map(proxies['spotlightBillboardListItemViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</ul>
              {map(proxies['cta-link'], props => <a href="/#" {...{...props, className: `af-class-button af-class-boss af-class-yellow af-class-no-margin w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['cta-text'], props => <div {...{...props, className: `af-class-boos-button-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Learn More About Benefits</React.Fragment>}</div>)}{map(proxies['cta-arrow'], props => <img src="/images/right-arrow.svg" alt="" {...{...props, className: `af-class-boss-right-arrow ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</a>)}
              <div className="w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n .af-class-spotlight-billlboard-list-container {\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n}\n" }} />
              </div>
            </React.Fragment>)}</div>)}
          </React.Fragment>)}</section>)}
        </span>
      </React.Fragment>
    )
  }
}

export default SpotlightBillboardListView

/* eslint-enable */