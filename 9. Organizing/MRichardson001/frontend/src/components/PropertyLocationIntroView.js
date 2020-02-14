/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class PropertyLocationIntroView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PropertyLocationIntroController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PropertyLocationIntroView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== PropertyLocationIntroView ? transformProxies(this.props.children) : {
      'region-panel': [],
      'text-wrapper': [],
      'location-title': [],
      'subregion-name': [],
      'subregion-description': [],
      'subregion-primary-image': [],
      'benefits-container': [],
      'benefit-1-wrapper': [],
      'highlight-attribute-icon-1': [],
      'highlight-attribute-text-1': [],
      'benefit-2-wrapper': [],
      'highlight-attribute-icon-2': [],
      'highlight-attribute-text-2': [],
      'benefit-3-wrapper': [],
      'highlight-attribute-icon-3': [],
      'highlight-attribute-text-3': [],
      'scores-container': [],
      'score-1-wrapper': [],
      'score-number-1': [],
      'score-title-1': [],
      'score-2-wrapper': [],
      'score-number-2': [],
      'score-title-2': [],
      'near-by-list': [],
      'near-by-li1': [],
      'near-by-li2': [],
      'near-by-li3': [],
      'near-by-li4': [],
      'near-by-li5': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-property-location-intro">
            <div className="af-class-div-block-242">
              {map(proxies['region-panel'], props => <div {...{...props, className: `af-class-div-block-243 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['text-wrapper'], props => <div {...{...props, className: `af-class-div-block-249 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['location-title'], props => <h2 {...{...props, className: `af-class-section-title af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Location</React.Fragment>}</h2>)}
                  {map(proxies['subregion-name'], props => <h3 {...{...props, className: `af-class-section-tagline af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>South Loop</React.Fragment>}</h3>)}
                  {map(proxies['subregion-description'], props => <p {...{...props, className: `af-class-paragraph af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</React.Fragment>}</p>)}{map(proxies['subregion-primary-image'], props => <img src="/images/intro-column2x.jpg" srcSet="images/intro-column2x-p-800.jpeg 800w, images/intro-column2x-p-1080.jpeg 1080w, images/intro-column2x.jpg 1240w" sizes="100vw" alt="" {...{...props, className: `af-class-image-40 ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</div>)}
              </React.Fragment>)}</div>)}
              <div className="af-class-div-block-244">
                <div className="af-class-div-block-250">
                  <div className="af-class-div-block-245">
                    <div className="af-class-div-block-264">
                      {map(proxies['benefits-container'], props => <ul {...{...props, className: `af-class-unordered-list-7 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                        {map(proxies['benefit-1-wrapper'], props => <li {...{...props, className: `af-class-location-benefit-list-item ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['highlight-attribute-icon-1'], props => <img src="/images/ev-charging-icon3x.png" alt="" {...{...props, className: `af-class-location-benefit-icon ${props.className || ''}`}}>{props.children}</img>)}
                          {map(proxies['highlight-attribute-text-1'], props => <div {...{...props, className: `af-class-text-block-74 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>EV Charging</React.Fragment>}</div>)}
                        </React.Fragment>)}</li>)}
                        {map(proxies['benefit-2-wrapper'], props => <li {...{...props, className: `af-class-location-benefit-list-item ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['highlight-attribute-icon-2'], props => <img src="/images/bike-trail-3x.png" alt="" {...{...props, className: `af-class-location-benefit-icon ${props.className || ''}`}}>{props.children}</img>)}
                          {map(proxies['highlight-attribute-text-2'], props => <div {...{...props, className: `af-class-text-block-74 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Bike Trail</React.Fragment>}</div>)}
                        </React.Fragment>)}</li>)}
                        {map(proxies['benefit-3-wrapper'], props => <li {...{...props, className: `af-class-location-benefit-list-item ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['highlight-attribute-icon-3'], props => <img src="/images/no-smoking3x.png" alt="" {...{...props, className: `af-class-location-benefit-icon ${props.className || ''}`}}>{props.children}</img>)}
                          {map(proxies['highlight-attribute-text-3'], props => <div {...{...props, className: `af-class-text-block-74 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Smoke Free Living</React.Fragment>}</div>)}
                        </React.Fragment>)}</li>)}
                      </React.Fragment>)}</ul>)}
                    </div>
                    {map(proxies['scores-container'], props => <div {...{...props, className: `af-class-div-block-246 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                      {map(proxies['score-1-wrapper'], props => <div {...{...props, className: `af-class-div-block-251 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                        {map(proxies['score-number-1'], props => <div {...{...props, className: `af-class-location-score-number ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>100</React.Fragment>}</div>)}
                        {map(proxies['score-title-1'], props => <div {...{...props, className: `af-class-location-score-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>walk score</React.Fragment>}</div>)}
                        <div className="w-embed">
                          <style dangerouslySetInnerHTML={{__html: "\n .af-class-location-score-number::after {\n  background-color: #ECD925;\n  content: '';\n  display: block;\n  top: -15px;\n  height: 5px;\n  position: absolute;\n  width: 50px;\n}\n@media (min-width: 992px) and (max-width: 1200px) {\n   .af-class-location-score-number {\n    font-size: 48px;\n  }\n}\n" }} />
                        </div>
                      </React.Fragment>)}</div>)}
                      {map(proxies['score-2-wrapper'], props => <div {...{...props, className: `af-class-div-block-251 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                        {map(proxies['score-number-2'], props => <div {...{...props, className: `af-class-location-score-number ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>97</React.Fragment>}</div>)}
                        {map(proxies['score-title-2'], props => <div {...{...props, className: `af-class-location-score-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>transit score</React.Fragment>}</div>)}
                      </React.Fragment>)}</div>)}
                    </React.Fragment>)}</div>)}
                  </div>
                  <h2 className="af-class-text-block-77">From Your Doorstep...</h2>
                  {map(proxies['near-by-list'], props => <ul {...{...props, className: `af-class-unordered-list-5 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    {map(proxies['near-by-li1'], props => <li {...{...props, className: `af-class-list-item-4 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <div className="af-class-location-distance-label">Roosevelt Station</div>
                      <div className="af-class-div-block-248" />
                      <div className="af-class-div-block-247">
                        <div className="af-class-text-block-76">0.5 mi</div>
                        <div className="af-class-text-block-76">0.5 mi</div>
                        <div className="af-class-text-block-76 af-class-last-child">0.5 mi</div>
                      </div>
                    </React.Fragment>}</li>)}
                    {map(proxies['near-by-li2'], props => <li {...{...props, className: `af-class-list-item-4 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <div className="af-class-location-distance-label">Grant Park</div>
                      <div className="af-class-div-block-248" />
                      <div className="af-class-div-block-247">
                        <div className="af-class-text-block-76">0.5 mi</div>
                        <div className="af-class-text-block-76">0.5 mi</div>
                        <div className="af-class-text-block-76 af-class-last-child">0.5 mi</div>
                      </div>
                    </React.Fragment>}</li>)}
                    {map(proxies['near-by-li3'], props => <li {...{...props, className: `af-class-list-item-4 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <div className="af-class-location-distance-label">University of Illinois at Chicago</div>
                      <div className="af-class-div-block-248" />
                      <div className="af-class-div-block-247">
                        <div className="af-class-text-block-76">0.5 mi</div>
                        <div className="af-class-text-block-76">0.5 mi</div>
                        <div className="af-class-text-block-76 af-class-last-child">0.5 mi</div>
                      </div>
                    </React.Fragment>}</li>)}
                    {map(proxies['near-by-li4'], props => <li {...{...props, className: `af-class-list-item-4 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <div className="af-class-location-distance-label">Milennium Park</div>
                      <div className="af-class-div-block-248" />
                      <div className="af-class-div-block-247">
                        <div className="af-class-text-block-76">0.5 mi</div>
                        <div className="af-class-text-block-76">0.5 mi</div>
                        <div className="af-class-text-block-76 af-class-last-child">0.5 mi</div>
                      </div>
                    </React.Fragment>}</li>)}
                    {map(proxies['near-by-li5'], props => <li {...{...props, className: `af-class-list-item-4 af-class-last-child ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <div className="af-class-location-distance-label">Shedd Aquarium</div>
                      <div className="af-class-div-block-248" />
                      <div className="af-class-div-block-247">
                        <div className="af-class-text-block-76">0.5 mi</div>
                        <div className="af-class-text-block-76">0.5 mi</div>
                        <div className="af-class-text-block-76 af-class-last-child">0.5 mi</div>
                      </div>
                    </React.Fragment>}</li>)}
                  </React.Fragment>)}</ul>)}
                </div>
              </div>
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default PropertyLocationIntroView

/* eslint-enable */