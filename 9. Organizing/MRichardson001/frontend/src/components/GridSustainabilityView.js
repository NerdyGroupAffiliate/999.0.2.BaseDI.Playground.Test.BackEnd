/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import GridSustainabilityCardTitleView from './GridSustainabilityCardTitleView'
import GridSustainabilityCardImageView from './GridSustainabilityCardImageView'
import GridSustainabilityCardTextView from './GridSustainabilityCardTextView'
import GridSustainabilityCardStatsView from './GridSustainabilityCardStatsView'


let Controller

class GridSustainabilityView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GridSustainabilityController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GridSustainabilityView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== GridSustainabilityView ? transformProxies(this.props.children) : {
      'title': [],
      'subtitle': [],
      'grid': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-initiative-grid">
            <div className="af-class-initiative-grid-heading-wrap">
              {map(proxies['title'], props => <h2 {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Our Green Initiatives</React.Fragment>}</h2>)}
              {map(proxies['subtitle'], props => <div {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>A community’s sustainable features help provide a healthier and more efficient home, resident savings and a low impact lifestyle. </React.Fragment>}</div>)}
            </div>
            {map(proxies['grid'], props => <div {...{...props, className: `af-class-initiative-grid-wrap ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-initiatives-grid-container">
                <GridSustainabilityCardTitleView.Controller {...this.props} />
                <GridSustainabilityCardImageView.Controller {...this.props} />
                <GridSustainabilityCardTextView.Controller {...this.props} />
                <GridSustainabilityCardImageView.Controller {...this.props} />
                <GridSustainabilityCardTitleView.Controller {...this.props} />
                <GridSustainabilityCardImageView.Controller {...this.props} />
                <GridSustainabilityCardTitleView.Controller {...this.props} />
                <GridSustainabilityCardImageView.Controller {...this.props} />
                <GridSustainabilityCardTitleView.Controller {...this.props} />
                <GridSustainabilityCardImageView.Controller {...this.props} />
                <GridSustainabilityCardTitleView.Controller {...this.props} />
                <GridSustainabilityCardImageView.Controller {...this.props} />
                <GridSustainabilityCardTitleView.Controller {...this.props} />
                <GridSustainabilityCardImageView.Controller {...this.props} />
                <GridSustainabilityCardStatsView.Controller {...this.props} />
              </div>
            </React.Fragment>}</div>)}
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default GridSustainabilityView

/* eslint-enable */