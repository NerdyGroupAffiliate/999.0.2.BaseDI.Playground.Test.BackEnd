/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ListTallView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListTallController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListTallView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListTallView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
      'text-blurb': [],
      'list': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-list-tall ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        <img src="/../images/career-pro-dev-benefits2x.jpg" srcSet="../images/career-pro-dev-benefits2x-p-1080.jpeg 1080w, ../images/career-pro-dev-benefits2x-p-1600.jpeg 1600w, ../images/career-pro-dev-benefits2x-p-2000.jpeg 2000w, ../images/career-pro-dev-benefits2x.jpg 2534w" sizes="100vw" alt="" className="af-class-list-tall-image-mobile" />
            <div className="af-class-list-tall-content-wrapper af-class-blur">
              <div className="af-class-div-block-77">
                {map(proxies['title'], props => <h2 {...{...props, className: `af-class-list-tall-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI Academy</React.Fragment>}</h2>)}
                {map(proxies['text-blurb'], props => <p {...{...props, className: `af-class-paragraph af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Proin at diam nec lectus congue imperdiet at at orci. Nulla cursus iaculis cursus. Aliquam sit amet tempor orci. Aliquam at lacus quis dolor sollicitudin tincidunt et id ante. Sed luctus egestas neque. </React.Fragment>}</p>)}
                {map(proxies['list'], props => <ul {...{...props, className: `af-class-unordered-list ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <li className="af-class-list-item"><img src="/../images/icon-plus-career-benefit.svg" alt="" className="af-class-image-11" />
                    <div className="af-class-text-block-10">Training 'Area' 1</div>
                  </li>
                  <li className="af-class-list-item"><img src="/../images/icon-plus-career-benefit.svg" alt="" className="af-class-image-11" />
                    <div className="af-class-text-block-10">Training 'Area' 2</div>
                  </li>
                  <li className="af-class-list-item"><img src="/../images/icon-plus-career-benefit.svg" alt="" className="af-class-image-11" />
                    <div className="af-class-text-block-10">Training 'Area' 3</div>
                  </li>
                  <li className="af-class-list-item"><img src="/../images/icon-plus-career-benefit.svg" alt="" className="af-class-image-11" />
                    <div className="af-class-text-block-10">Training 'Area' 4</div>
                  </li>
                  <li className="af-class-list-item"><img src="/../images/icon-plus-career-benefit.svg" alt="" className="af-class-image-11" />
                    <div className="af-class-text-block-10">Training 'Area' 5</div>
                  </li>
                </React.Fragment>}</ul>)}
              </div>
              <div className="w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n  .af-class-blur {\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n }\n  .af-class-list-tall-header::after {\n   position: absolute;\n   content: '';\n   display: block;\n   background-color: yellow;\n   top: -25%;\n   height: 5px;\n   width: 75px;\n }\n @media (min-width: 1500px) {\n    .af-class-list-tall {\n     min-height: 50vh;\n   }\n }\n" }} />
              </div>
            </div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default ListTallView

/* eslint-enable */