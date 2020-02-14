/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class VideoTestimonialView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/VideoTestimonialController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = VideoTestimonialView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== VideoTestimonialView ? transformProxies(this.props.children) : {
      'testimonial': [],
      'name-and-position': [],
      'video-widget': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-video-testimonial">
            <div className="af-class-video-testimonial-container">
              <div className="af-class-div-block-107">
                {map(proxies['testimonial'], props => <div {...{...props, className: `af-class-text-block-19 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>“I <span className="af-class-blue-highlight">love working for AMLI</span> because of the diversity, the culture, and the growth potential that is tangible.”</React.Fragment>}</div>)}
                {map(proxies['name-and-position'], props => <div {...{...props, className: `af-class-text-block-20 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>- Sean, Assistant Community manager</React.Fragment>}</div>)}
              </div>
              <div className="af-class-div-block-108">
                {map(proxies['video-widget'], props => <div id="https-www.youtube.com-watch-v-aQeIYVM3YBM-t-1169s" style={{paddingTop: '56.17021276595745%'}} {...{...props, className: `w-node-5dfeac1ea0de-a6565479 w-video w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><iframe className="af-class-embedly-embed" src="/https://cdn.embedly.com/widgets/media?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F_113bAvc_LM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_113bAvc_LM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_113bAvc_LM%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" scrolling="no" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen="true" /></React.Fragment>}</div>)}
              </div>
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default VideoTestimonialView

/* eslint-enable */