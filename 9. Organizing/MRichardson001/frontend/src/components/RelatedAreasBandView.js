/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class RelatedAreasBandView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/RelatedAreasBandController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = RelatedAreasBandView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== RelatedAreasBandView ? transformProxies(this.props.children) : {
      'subtitle': [],
      'title': [],
      'subregion-wrapper-1': [],
      'subregion-name-1': [],
      'subregion-wrapper-2': [],
      'subregion-name-2': [],
      'subregion-wrapper-3': [],
      'subregion-name-3': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-related-areas-band">
            <div className="af-class-div-block-26">
              {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Nearby Neighborhoods</React.Fragment>}</h2>)}
              {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Check out your neighbors.</React.Fragment>}</h3>)}
            </div>
            <section className="af-class-div-block-27">
              {map(proxies['subregion-wrapper-1'], props => <a href="/#" {...{...props, className: `af-class-related-area-band-column af-class-evanston w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-related-area-column-overlay" />
                <div className="af-class-related-area-band-label">
                  {map(proxies['subregion-name-1'], props => <div {...{...props, className: `af-class-text-block-4 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Evanston</React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</a>)}
              {map(proxies['subregion-wrapper-2'], props => <a href="/#" {...{...props, className: `af-class-related-area-band-column w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-related-area-column-overlay" />
                <div className="af-class-related-area-band-label">
                  {map(proxies['subregion-name-2'], props => <div {...{...props, className: `af-class-text-block-4 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Buckhead</React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</a>)}
              {map(proxies['subregion-wrapper-3'], props => <a href="/#" {...{...props, className: `af-class-related-area-band-column af-class-deerfield w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-related-area-column-overlay" />
                <div className="af-class-related-area-band-label">
                  {map(proxies['subregion-name-3'], props => <div {...{...props, className: `af-class-text-block-4 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Deerfield</React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</a>)}
            </section>
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 768px) {\n   .af-class-related-area-band-label {\n    backdrop-filter: blur(3px);\n    -webkit-backdrop-filter: blur(3px);\n  }\n}\n" }} />
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default RelatedAreasBandView

/* eslint-enable */