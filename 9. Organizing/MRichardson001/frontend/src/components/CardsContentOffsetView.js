/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class CardsContentOffsetView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CardsContentOffsetController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CardsContentOffsetView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CardsContentOffsetView ? transformProxies(this.props.children) : {
      'image-1': [],
      'title-1': [],
      'text-blurb-1': [],
      'image-2': [],
      'title-2': [],
      'text-blurb-2': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-cards-content-offset">
            <div className="af-class-html-embed-3 w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n .af-class-card-content-offset-angle {\n  position: absolute;\n  top: 50%;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: skewY(-6deg);\n  transform-origin: top left;\n  z-index: 0;\n}\n .af-class-cards-content-offset-title::after {\n  position: absolute;\n  top: -25px;\n  width: 50px;\n  height: 5px;\n  left: 0;\n  content: '';\n  display: block;\n  background-color: #ECD925;\n}\n" }} />
            </div>
            <div className="af-class-div-block-94">
              <div className="af-class-card-content-offset-outer-wrap">
                <div className="af-class-cards-content-offset--card">{map(proxies['image-1'], props => <img src="/../images/certified-manager-card2x.jpg" srcSet="../images/certified-manager-card2x-p-500.jpeg 500w, ../images/certified-manager-card2x-p-1080.jpeg 1080w, ../images/certified-manager-card2x.jpg 1444w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 600px, 48vw" alt="" {...{...props, className: `af-class-image-66 ${props.className || ''}`}}>{props.children}</img>)}
                  <div className="af-class-content-card-offset-inner-wrap">
                    {map(proxies['title-1'], props => <h3 {...{...props, className: `af-class-cards-content-offset-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Certified Manager Program (ACM)</React.Fragment>}</h3>)}
                    {map(proxies['text-blurb-1'], props => <p {...{...props, className: `af-class-paragraph af-class-light af-class-no-max-width ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI's Certified Manager Program (ACM) is a comprehensive leadership training program for our Community Managers. The course helps participants develop additional skills in personnel leadership, financial management, and resident retention. This course includes an eight-part series as well as a community evaluation project that helps participants identify strengths and weaknesses of an asset and strategize/recommend opportunities for improvement.</React.Fragment>}</p>)}<img src="/../images/card-content-offset-angle.svg" alt="" className="af-class-image-14" /></div>
                </div>
              </div>
              <div className="af-class-card-content-offset-outer-wrap af-class-reversed">
                <div className="af-class-cards-content-offset--card af-class-reversed">{map(proxies['image-2'], props => <img src="/../images/certified-manager-card2x.jpg" srcSet="../images/certified-manager-card2x-p-500.jpeg 500w, ../images/certified-manager-card2x-p-1080.jpeg 1080w, ../images/certified-manager-card2x.jpg 1444w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 600px, 48vw" alt="" {...{...props, className: `af-class-image-66 ${props.className || ''}`}}>{props.children}</img>)}
                  <div className="af-class-content-card-offset-inner-wrap">
                    {map(proxies['title-2'], props => <h3 {...{...props, className: `af-class-cards-content-offset-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Tuition Reimbursements</React.Fragment>}</h3>)}
                    {map(proxies['text-blurb-2'], props => <p {...{...props, className: `af-class-paragraph af-class-light af-class-no-max-width ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper suscipit feugiat. Pellentesque id metus quis felis tempus ultrices. Nunc cursus rhoncus auctor. Morbi quis ipsum scelerisque, ullamcorper nisi ut, imperdiet augue. Vestibulum quis elit eget justo efficitur sodales a mollis elit. Integer ornare lacinia mi a interdum. Sed pretium sollicitudin consectetur. Cras at nunc eros. Praesent augue mi, dapibus non odio sit amet, molestie blandit odio. Donec auctor eu est aliquam dapibus.</React.Fragment>}</p>)}<img src="/../images/card-content-offset-angle.svg" alt="" className="af-class-image-14 af-class-reversed" /></div>
                </div>
              </div>
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default CardsContentOffsetView

/* eslint-enable */