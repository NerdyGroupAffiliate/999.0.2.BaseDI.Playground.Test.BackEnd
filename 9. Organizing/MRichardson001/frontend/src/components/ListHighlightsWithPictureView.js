/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import HighlightWithPictureItemView from './HighlightWithPictureItemView'


let Controller

class ListHighlightsWithPictureView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListHighlightsWithPictureController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListHighlightsWithPictureView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListHighlightsWithPictureView ? transformProxies(this.props.children) : {
      'subtitle': [],
      'title': [],
      'image': [],
      'highlightWithPictureItemViewList0': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-div-block-361">
            <div className="af-class-div-block-363">
              <div className="af-class-div-block-366">
                {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Community Highlights</React.Fragment>}</h2>)}
                {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>It's all about the benefits.<br />So are we.</React.Fragment>}</h3>)}
                <ul className="af-class-unordered-list-9 w-list-unstyled">
                  {map(proxies['highlightWithPictureItemViewList0'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</ul>
              </div>
            </div>
            {map(proxies['image'], props => <div {...{...props, className: `af-class-div-block-362 ${props.className || ''}`}}>{props.children}</div>)}
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ListHighlightsWithPictureView

/* eslint-enable */