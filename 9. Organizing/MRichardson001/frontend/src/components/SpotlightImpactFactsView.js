/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SpotlightImpactFactsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SpotlightImpactFactsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SpotlightImpactFactsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SpotlightImpactFactsView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'subtitle': [],
      'title': [],
      'factoid-list-wrapper': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <section {...{...props, className: `af-class-div-block-370 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-div-block-369">
              <div className="af-class-div-block-371">
                {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>community impact</React.Fragment>}</h2>)}
                {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline af-class-large af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Maecenas faucibus mollis interdum.</React.Fragment>}</h3>)}
              </div>
              {map(proxies['factoid-list-wrapper'], props => <div {...{...props, className: `af-class-div-block-368 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-div-block-367">
                  <div className="af-class-text-block-106">Factoid</div>
                  <div className="af-class-text-block-107">Vestibulum id ligula porta felis euismod semper. </div>
                </div>
                <div className="af-class-div-block-367">
                  <div className="af-class-text-block-106">1,300</div>
                  <div className="af-class-text-block-107">Vestibulum id ligula porta felis euismod semper. </div>
                </div>
                <div className="af-class-div-block-367">
                  <div className="af-class-impact-factiod-statement">Example of a different kind of impact statistic.</div>
                </div>
                <div className="af-class-div-block-367">
                  <div className="af-class-text-block-106">1,300</div>
                  <div className="af-class-text-block-107">Vestibulum id ligula porta felis euismod semper. </div>
                </div>
              </React.Fragment>}</div>)}
            </div>
          </React.Fragment>)}</section>)}
        </span>
      </React.Fragment>
    )
  }
}

export default SpotlightImpactFactsView

/* eslint-enable */