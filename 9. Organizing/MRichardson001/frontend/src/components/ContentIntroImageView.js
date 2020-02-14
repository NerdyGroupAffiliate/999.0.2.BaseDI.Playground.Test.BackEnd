/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContentIntroImageView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentIntroImageController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentIntroImageView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentIntroImageView ? transformProxies(this.props.children) : {
      'bg-image': [],
      'title': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-wrapper af-class-content_intro_image">
            {map(proxies['bg-image'], props => <div {...{...props, className: `af-class-container af-class-image-background af-class-full-width af-class-min-height ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['title'], props => <h2 {...{...props, className: `af-class-content_intro_image_title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI's Guide to Chicago</React.Fragment>}</h2>)}
            </React.Fragment>)}</div>)}
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ContentIntroImageView

/* eslint-enable */