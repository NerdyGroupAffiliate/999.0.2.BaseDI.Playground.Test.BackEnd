/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class VideoWithBlurbView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/VideoWithBlurbController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = VideoWithBlurbView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== VideoWithBlurbView ? transformProxies(this.props.children) : {
      'title': [],
      'text-blurb': [],
      'i-frame-video': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-video-w-blurb">
            <div className="af-class-video-w-blurb-container">
              <div className="af-class-div-block-96">
                {map(proxies['title'], props => <h2 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI is dedicated</React.Fragment>}</h2>)}
                {map(proxies['text-blurb'], props => <div {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>to providing opportunities for employees and residents to be good citizens and give back to the community in charitable and sustainable ways. </React.Fragment>}</div>)}
              </div>
              {map(proxies['i-frame-video'], props => <div {...{...props, className: `af-class-div-block-461 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div style={{paddingTop: '56.17021276595745%'}} id="w-node-d358bc799fe8-c9c1f5db" className="af-class-video w-video w-embed"><iframe className="af-class-embedly-embed" src="/https://cdn.embedly.com/widgets/media?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F_113bAvc_LM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_113bAvc_LM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_113bAvc_LM%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" scrolling="no" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen="true" /></div>
              </React.Fragment>}</div>)}
            </div>
            <div className="af-class-video-w-blurb-left-bg" />
            <div className="af-class-video-w-blurb-right-bg" />
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default VideoWithBlurbView

/* eslint-enable */