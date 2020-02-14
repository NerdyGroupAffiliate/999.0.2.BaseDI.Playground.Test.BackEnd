/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class GridHoverActionView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GridHoverActionController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GridHoverActionView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== GridHoverActionView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'action-container': [],
      'card-container': [],
      'inner-wrapper': [],
      'tagline': [],
      'overlay': [],
      'action-container0': [],
      'overlay': [],
      'action-container1': [],
      'overlay': [],
      'action-container2': [],
      'overlay': [],
      'action-container3': [],
      'overlay': [],
      'action-container4': [],
      'overlay': [],
      'action-container5': [],
      'overlay': [],
      'action-container6': [],
      'overlay': [],
      'action-container7': [],
      'overlay': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <section {...{...props, className: `af-class-grid-hover-action ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['action-container'], props => <div {...{...props, className: `af-class-grid-hover-action-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['card-container'], props => <div {...{...props, className: `af-class-grid-hover-card-container af-class-first-child ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['inner-wrapper'], props => <div {...{...props, className: `af-class-grid-hover--card-content-wrap af-class-atlanta ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['tagline'], props => <div {...{...props, className: `af-class-grid-hover-action-card-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI Atlanta</React.Fragment>}</div>)}
                  {map(proxies['overlay'], props => <div {...{...props, className: `w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <style dangerouslySetInnerHTML={{__html: "\n .af-class-grid-hover-action-card-label {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n" }} />
                  </React.Fragment>}</div>)}
                </React.Fragment>)}</div>)}
              </React.Fragment>)}</div>)}
              {map(proxies['action-container0'], props => <div {...{...props, className: `af-class-grid-hover-card-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-grid-hover--card-content-wrap">
                  <div className="af-class-grid-hover-action-card-label">AMLI Atlanta</div>
                  {map(proxies['overlay'], props => <div {...{...props, className: `w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <style dangerouslySetInnerHTML={{__html: "\n .af-class-grid-hover-action-card-label {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n" }} />
                  </React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</div>)}
              {map(proxies['action-container1'], props => <div {...{...props, className: `af-class-grid-hover-card-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-grid-hover--card-content-wrap af-class-chicago">
                  <div className="af-class-grid-hover-action-card-label">AMLI Chicago</div>
                  {map(proxies['overlay'], props => <div {...{...props, className: `w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <style dangerouslySetInnerHTML={{__html: "\n .af-class-grid-hover-action-card-label {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n" }} />
                  </React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</div>)}
              {map(proxies['action-container2'], props => <div {...{...props, className: `af-class-grid-hover-card-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-grid-hover--card-content-wrap af-class-dallas">
                  <div className="af-class-grid-hover-action-card-label">AMLI Dallas</div>
                  {map(proxies['overlay'], props => <div {...{...props, className: `w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <style dangerouslySetInnerHTML={{__html: "\n .af-class-grid-hover-action-card-label {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n" }} />
                  </React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</div>)}
              {map(proxies['action-container3'], props => <div {...{...props, className: `af-class-grid-hover-card-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-grid-hover--card-content-wrap af-class-denver">
                  <div className="af-class-grid-hover-action-card-label">AMLI Denver</div>
                  {map(proxies['overlay'], props => <div {...{...props, className: `w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <style dangerouslySetInnerHTML={{__html: "\n .af-class-grid-hover-action-card-label {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n" }} />
                  </React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</div>)}
              {map(proxies['action-container4'], props => <div {...{...props, className: `af-class-grid-hover-card-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-grid-hover--card-content-wrap af-class-houston">
                  <div className="af-class-grid-hover-action-card-label">AMLI Houston</div>
                  {map(proxies['overlay'], props => <div {...{...props, className: `w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <style dangerouslySetInnerHTML={{__html: "\n .af-class-grid-hover-action-card-label {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n" }} />
                  </React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</div>)}
              {map(proxies['action-container5'], props => <div {...{...props, className: `af-class-grid-hover-card-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-grid-hover--card-content-wrap af-class-seattle">
                  <div className="af-class-grid-hover-action-card-label">AMLI Seattle</div>
                  {map(proxies['overlay'], props => <div {...{...props, className: `w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <style dangerouslySetInnerHTML={{__html: "\n .af-class-grid-hover-action-card-label {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n" }} />
                  </React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</div>)}
              {map(proxies['action-container6'], props => <div {...{...props, className: `af-class-grid-hover-card-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-grid-hover--card-content-wrap af-class-florida">
                  <div className="af-class-grid-hover-action-card-label">AMLI South Florida</div>
                  {map(proxies['overlay'], props => <div {...{...props, className: `w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <style dangerouslySetInnerHTML={{__html: "\n .af-class-grid-hover-action-card-label {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n" }} />
                  </React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</div>)}
              {map(proxies['action-container7'], props => <div {...{...props, className: `af-class-grid-hover-card-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                <div className="af-class-grid-hover--card-content-wrap af-class-california">
                  <div className="af-class-grid-hover-action-card-label">AMLI Southern California</div>
                  {map(proxies['overlay'], props => <div {...{...props, className: `w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <style dangerouslySetInnerHTML={{__html: "\n .af-class-grid-hover-action-card-label {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n" }} />
                  </React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</div>)}
            </React.Fragment>)}</div>)}
            <h2 className="af-class-grid-hover-action-header">Making an Impact</h2>
          </React.Fragment>)}</section>)}
        </span>
      </React.Fragment>
    )
  }
}

export default GridHoverActionView

/* eslint-enable */