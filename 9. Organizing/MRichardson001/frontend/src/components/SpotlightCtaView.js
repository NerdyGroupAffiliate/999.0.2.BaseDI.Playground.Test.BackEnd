/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SpotlightCtaView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SpotlightCtaController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SpotlightCtaView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SpotlightCtaView ? transformProxies(this.props.children) : {
      'background-image': [],
      'title': [],
      'link-url-1': [],
      'link-text-1': [],
      'link-arrow-1': [],
      'apply-wrapper': [],
      'link-url-2': [],
      'link-text-2': [],
      'link-arrow-2': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['background-image'], props => <section {...{...props, className: `af-class-spotlight-cta ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-spotlight-cta-container">
              {map(proxies['title'], props => <h2 {...{...props, className: `af-class-spotlight-cta-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Interested in coming to take a look inside?</React.Fragment>}</h2>)}
              <div className="af-class-spotlight-cta-button-row">
                {map(proxies['link-url-1'], props => <a href="/#" {...{...props, className: `af-class-button af-class-boss af-class-yellow af-class-no-margin w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['link-text-1'], props => <div {...{...props, className: `af-class-boos-button-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Visit Property</React.Fragment>}</div>)}{map(proxies['link-arrow-1'], props => <img src="/images/right-arrow.svg" alt="" {...{...props, className: `af-class-boss-right-arrow ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</a>)}
                {map(proxies['apply-wrapper'], props => <div {...props}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['link-url-2'], props => <a href="/#" {...{...props, className: `af-class-minion-button w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    {map(proxies['link-text-2'], props => <div {...{...props, className: `af-class-button-apply-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Apply</React.Fragment>}</div>)}{map(proxies['link-arrow-2'], props => <img src="/images/icon-arrow--right-no-shadow3x.png" alt="" {...{...props, className: `af-class-button-apply-arrow ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</a>)}
                </React.Fragment>)}</div>)}
              </div>
            </div>
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 1750px) {\n   .af-class-spotlight-cta {\n  align-items: center;\n  }\n   .af-class-spotlight-cta-container {\n    max-width: 1600px;\n    width: 90%;\n  }\n}\n" }} />
            </div>
          </React.Fragment>)}</section>)}
        </span>
      </React.Fragment>
    )
  }
}

export default SpotlightCtaView

/* eslint-enable */