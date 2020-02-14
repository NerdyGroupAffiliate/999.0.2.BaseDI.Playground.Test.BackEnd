/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class NeighborhoodCardView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NeighborhoodCardController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NeighborhoodCardView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== NeighborhoodCardView ? transformProxies(this.props.children) : {
      'title-container': [],
      'title': [],
      'body': [],
      'button': [],
      'button-label': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-neighborhood-card">
            {map(proxies['title-container'], props => <div {...{...props, className: `af-class-neighborhood-card-top ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['title'], props => <div {...{...props, className: `af-class-neighborhood-card-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>South Loop</React.Fragment>}</div>)}
            </React.Fragment>)}</div>)}
            <div className="af-class-neighborhood-card-bottom">
              {map(proxies['body'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. </React.Fragment>}</p>)}
              {map(proxies['button'], props => <div {...{...props, className: `af-class-button-apply af-class-no-margin ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['button-label'], props => <div {...{...props, className: `af-class-button-apply-label ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Explore South Loop</React.Fragment>}</div>)}<img src="/images/icon-arrow--right-no-shadow3x.png" alt="" className="af-class-button-apply-arrow" /></React.Fragment>)}</div>)}
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default NeighborhoodCardView

/* eslint-enable */