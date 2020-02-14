/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class GridHighlightImagesView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GridHighlightImagesController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GridHighlightImagesView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== GridHighlightImagesView ? transformProxies(this.props.children) : {
      'subtitle': [],
      'title': [],
      'image-1': [],
      'image-tagline-1': [],
      'image-2': [],
      'image-tagline-2': [],
      'image-3': [],
      'image-tagline-3': [],
      'image-4': [],
      'image-tagline-4': [],
      'link-background-image': [],
      'link-url': [],
      'link-text': [],
      'link-arrow': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-grid-highlight-images">
            <div className="af-class-div-block-141">
              <div className="af-class-grid-highlight-column af-class-first-col">
                <div className="af-class-grid-highlight-brick af-class-intro">
                  <div className="af-class-grid-highlight-intro-headings">
                    {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title af-class-loft ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Amenities &amp; features</React.Fragment>}</h2>)}
                    {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline af-class-loft ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Amenities &amp; Features tagline example here.</React.Fragment>}</h3>)}
                  </div>
                  {map(proxies['image-1'], props => <div {...{...props, className: `af-class-grid-highlight-image ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    {map(proxies['image-tagline-1'], props => <div {...{...props, className: `af-class-grid-highlight-image-caption af-class-blur ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Outdoor bar &amp; kitchen</React.Fragment>}</div>)}
                  </React.Fragment>)}</div>)}
                </div>
                <div className="af-class-grid-highlight-brick af-class-intro">
                  {map(proxies['image-2'], props => <div {...{...props, className: `af-class-grid-highlight-image af-class-helper-text ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    {map(proxies['image-tagline-2'], props => <div {...{...props, className: `af-class-grid-highlight-image-caption af-class-blur ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>State of the art fitness center</React.Fragment>}</div>)}
                  </React.Fragment>)}</div>)}
                </div>
              </div>
              <div className="af-class-grid-highlight-column af-class-_2nd-column">
                <div className="af-class-grid-highlight-brick af-class-intro">
                  {map(proxies['image-3'], props => <div {...{...props, className: `af-class-grid-highlight-image ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    {map(proxies['image-tagline-3'], props => <div {...{...props, className: `af-class-grid-highlight-image-caption af-class-blur ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Private on-site Theatre</React.Fragment>}</div>)}
                  </React.Fragment>)}</div>)}
                </div>
                <div className="af-class-grid-highlight-brick af-class-intro">
                  {map(proxies['image-4'], props => <div {...{...props, className: `af-class-grid-highlight-image af-class-helper-text ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    {map(proxies['image-tagline-4'], props => <div {...{...props, className: `af-class-grid-highlight-image-caption af-class-blur ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Private Dining / Library Room</React.Fragment>}</div>)}
                  </React.Fragment>)}</div>)}
                  <div className="af-class-grid-highlight-cta-brick">
                    {map(proxies['link-background-image'], props => <div {...{...props, className: `af-class-div-block-137 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                      {map(proxies['link-url'], props => <div {...{...props, className: `af-class-div-block-136 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                        {map(proxies['link-text'], props => <div {...{...props, className: `af-class-text-block-44 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>View All Amenities &amp; Features</React.Fragment>}</div>)}
                        {map(proxies['link-arrow'], props => <div {...{...props, className: `af-class-icon-arrow--right w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                          <style dangerouslySetInnerHTML={{__html: "\n  .af-class-arrow-svg {\n   fill: #3f3f3f;\n   fill-rule: evenodd\n}\n@media (max-width: 992px) {\n   .af-class-arrow-svg {\n    fill: white;\n  }\n}\n" }} />
                          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.88 12.65">
                            <title>icon-arrow--long--right--dark</title>
                            <g id="Sustainability">
                              <g id="Sustainability_Desktop_updated" data-name="Sustainability Desktop updated">
                                <g id="Group-20">
                                  <g id="Group-8">
                                    <g id="Mask">
                                      <path className="af-class-arrow-svg" d="M17.62.59h0a.83.83,0,0,0,0,1.17l4.06,4.07H.83A.84.84,0,0,0,0,6.67H0a.83.83,0,0,0,.83.83H21.68l-4.06,4.07a.85.85,0,0,0,0,1.18h0a.85.85,0,0,0,1.18,0l6.08-6.08L18.8.59A.83.83,0,0,0,17.62.59Z" transform="translate(0 -0.34)" />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg></React.Fragment>}</div>)}
                      </React.Fragment>)}</div>)}
                    </React.Fragment>)}</div>)}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default GridHighlightImagesView

/* eslint-enable */