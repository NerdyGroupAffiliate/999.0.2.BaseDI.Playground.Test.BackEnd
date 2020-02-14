/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContentVideoTestimonialItemView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentVideoTestimonialItemController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentVideoTestimonialItemView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentVideoTestimonialItemView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
      'text-blurb': [],
      'link-url': [],
      'link-text': [],
      'video-widget': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-content-video-testy-card ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-div-block-110">
              <div className="af-class-div-block-473">
                {map(proxies['title'], props => <h3 {...{...props, className: `af-class-content-video-testy-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Corporate</React.Fragment>}</h3>)}
                {map(proxies['text-blurb'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Aenean accumsan pellentesque est, et bibendum nunc fermentum in. Mauris vestibulum auctor metus at facilisis. Morbi eros lectus, varius ut nunc a, scelerisque varius turpis. </React.Fragment>}</p>)}
              </div>
              {map(proxies['link-url'], props => <a href="/#" {...{...props, className: `af-class-button af-class-boss af-class-yellow w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['link-text'], props => <div {...{...props, className: `af-class-boos-button-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Find Openings</React.Fragment>}</div>)}<img src="/../images/right-arrow.svg" alt="" className="af-class-boss-right-arrow" /></React.Fragment>)}</a>)}
            </div>
            <div className="af-class-div-block-109">
              {map(proxies['video-widget'], props => <div style={{paddingTop: '56.17021276595745%'}} id="w-node-1df28c14c032-a6565479" {...{...props, className: `af-class-video-2 w-video w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><iframe className="af-class-embedly-embed" src="/https://cdn.embedly.com/widgets/media?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F_113bAvc_LM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_113bAvc_LM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_113bAvc_LM%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube" scrolling="no" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen="true" /></React.Fragment>}</div>)}<img src="/../images/icon-play-circle3x.png" alt="" className="af-class-video-play-icon" /></div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default ContentVideoTestimonialItemView

/* eslint-enable */