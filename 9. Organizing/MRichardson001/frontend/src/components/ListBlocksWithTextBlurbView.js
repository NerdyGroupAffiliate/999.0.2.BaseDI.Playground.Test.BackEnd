/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import LogoWrapperView from './LogoWrapperView'


let Controller

class ListBlocksWithTextBlurbView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListBlocksWithTextBlurbController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListBlocksWithTextBlurbView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListBlocksWithTextBlurbView ? transformProxies(this.props.children) : {
      'content': [],
      'details-wrapper': [],
      'subtitle': [],
      'title': [],
      'wrapper': [],
      'image': [],
      'title': [],
      'subtitle': [],
      'logoWrapperViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-list-blocks-with-text-blurb">
            {map(proxies['content'], props => <div {...{...props, className: `af-class-list-blocks-blurb-content ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['details-wrapper'], props => <div {...{...props, className: `af-class-list-blocks-b-content-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>awards and accolades</React.Fragment>}</h2>)}
                {map(proxies['title'], props => <div {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Awards in Sustainability</React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}
            </React.Fragment>)}</div>)}
            <div className="af-class-list-blocks-blurb-column-wrapper">
              {map(proxies['logoWrapperViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}{map(proxies['wrapper'], props => <div al-el="logo-wrapper" {...{...props, className: `af-class-list-blocks-blurb-column af-class-awards ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['image'], props => <img src="/images/orange-theory-fitness3x.png" srcSet="images/orange-theory-fitness3x-p-500.png 500w, images/orange-theory-fitness3x.png 609w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 35vw, (max-width: 991px) 250px, 100vw" alt="" {...{...props, className: `af-class-award-image ${props.className || ''}`}}>{props.children}</img>)}
                {map(proxies['title'], props => <div {...{...props, className: `af-class-text-block-32 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Award Name Here</React.Fragment>}</div>)}
                {map(proxies['subtitle'], props => <div {...{...props, className: `af-class-paragraph af-class-small ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipis.</React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}
              <LogoWrapperView.Controller {...this.props} />
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ListBlocksWithTextBlurbView

/* eslint-enable */