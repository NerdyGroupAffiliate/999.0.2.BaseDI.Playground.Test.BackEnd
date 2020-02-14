/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SpotlightNextStepsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SpotlightNextStepsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SpotlightNextStepsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SpotlightNextStepsView ? transformProxies(this.props.children) : {
      'container': [],
      'link-url': [],
      'title': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-spotlight-next-steps">
            {map(proxies['container'], props => <div {...{...props, className: `af-class-spotlight-next-steps-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-div-block-175">
                <div className="af-class-spotlight-next-steps-label">Next steps</div>
                {map(proxies['link-url'], props => <div {...{...props, className: `af-class-div-block-176 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['title'], props => <div {...{...props, className: `af-class-text-block-53 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>View Floorplans</React.Fragment>}</div>)}
                  <div className="af-class-next-steps-arrow w-embed">
                    <style dangerouslySetInnerHTML={{__html: "\n .af-class-arrow--next-steps {\n  fill: #fff;\n}\n" }} />
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.75 42.75">
                      <path d="M0,24.62V19.38H32.5l-14.88-15L21.38.62,42.75,22,21.38,43.38,17.5,39.62l15-15Z" transform="translate(0 -0.63)" className="af-class-arrow--next-steps" />
                    </svg></div>
                </React.Fragment>)}</div>)}
              </div>
            </React.Fragment>)}</div>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default SpotlightNextStepsView

/* eslint-enable */