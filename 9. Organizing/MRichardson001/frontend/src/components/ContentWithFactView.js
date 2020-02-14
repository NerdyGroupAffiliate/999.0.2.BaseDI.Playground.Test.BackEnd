/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContentWithFactView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentWithFactController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentWithFactView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentWithFactView ? transformProxies(this.props.children) : {
      'image': [],
      'title': [],
      'body': [],
      'fact': [],
      'link-url': [],
      'link-text': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-sustainable-why-we-care">
            {map(proxies['image'], props => <div {...{...props, className: `af-class-div-block-87 ${props.className || ''}`}}>{props.children}</div>)}
            <div className="af-class-div-block-86">
              <div className="af-class-div-block-88">
                {map(proxies['title'], props => <h1 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI Life is <span className="af-class-green-highlight">Greener</span></React.Fragment>}</h1>)}
                {map(proxies['body'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI builds green, healthy apartment communities from the ground up. As a leader in multifamily LEED® and ENERGY STAR® certifications, AMLI offers environmentally responsible homes. Our communities use land, water and energy more efficiently. We work hard to provide clean-air initiatives and lifestyle amenities that allow residents to live more sustainably every day.<br />‍<br />AMLI also works to educate, engage and empower our residents to do the same.</React.Fragment>}</p>)}
              </div>
              <div className="af-class-div-block-84">
                <div className="af-class-div-block-85">
                  {map(proxies['fact'], props => <div {...{...props, className: `af-class-section-tagline af-class-small ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>83% of AMLI Residents believe living in a green community is beneficial to their health.</React.Fragment>}</div>)}
                  {map(proxies['link-url'], props => <a href="/#" {...{...props, className: `af-class-sustainable-intro-cta w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    {map(proxies['link-text'], props => <div {...{...props, className: `af-class-text-block-17 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Read the AMLI 2018 Sustainable Living Index</React.Fragment>}</div>)}<img src="/images/icon-arrow--long--right--dark.svg" alt="" /></React.Fragment>)}</a>)}
                </div>
              </div>
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default ContentWithFactView

/* eslint-enable */