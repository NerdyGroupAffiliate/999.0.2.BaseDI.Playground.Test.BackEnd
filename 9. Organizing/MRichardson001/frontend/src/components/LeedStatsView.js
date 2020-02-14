/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class LeedStatsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/LeedStatsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = LeedStatsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== LeedStatsView ? transformProxies(this.props.children) : {
      'title': [],
      'sub-text': [],
      'leed-ceritified-communities': [],
      'platinum-count': [],
      'gold-count': [],
      'silver-count': [],
      'leed-certified': [],
      'leed-more-info': [],
      'empty': [],
      'energy-star-communities': [],
      'energy-star-more-info': [],
      'empty1': [],
      'image': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-div-block-89">
            <div className="af-class-div-block-415">
              <div className="af-class-div-block-90">
                <div className="af-class-div-block-118">
                  {map(proxies['title'], props => <h2 {...{...props, className: `af-class-section-tagline af-class-small ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Achieving High-Performance Benchmarks</React.Fragment>}</h2>)}
                  {map(proxies['sub-text'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>LEED Silver is the minimum certification level for all AMLI developments, and ENERGY STAR certifications confirm that our communities meet high energy performance standards.</React.Fragment>}</p>)}
                </div>
                <div className="af-class-benchmark-row">
                  <div className="af-class-div-block-119">
                    {map(proxies['leed-ceritified-communities'], props => <div {...{...props, className: `af-class-text-block-22 af-class-green-highlight-half ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>33</React.Fragment>}</div>)}
                    <div className="af-class-text-block-23">LEED Certified Communities</div><img src="/images/Leed-Logo3x.png" alt="" className="af-class-image-16" /></div>
                  <div className="af-class-benchmark-leed-numbers-wrapper">
                    <div className="af-class-benchmark-number-column af-class-first-child">
                      {map(proxies['platinum-count'], props => <div {...{...props, className: `af-class-benchmark-leed-level-number ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>7</React.Fragment>}</div>)}
                      <div className="af-class-text-block-25">LEED Platinum</div>
                    </div>
                    <div className="af-class-benchmark-number-column">
                      {map(proxies['gold-count'], props => <div {...{...props, className: `af-class-benchmark-leed-level-number ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>16</React.Fragment>}</div>)}
                      <div className="af-class-text-block-25">LEED gold</div>
                    </div>
                    <div className="af-class-benchmark-number-column">
                      {map(proxies['silver-count'], props => <div {...{...props, className: `af-class-benchmark-leed-level-number ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>9</React.Fragment>}</div>)}
                      <div className="af-class-text-block-25">LEED silver</div>
                    </div>
                    <div className="af-class-benchmark-number-column af-class-last-child">
                      {map(proxies['leed-certified'], props => <div {...{...props, className: `af-class-benchmark-leed-level-number ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1</React.Fragment>}</div>)}
                      <div className="af-class-text-block-25">LEED certified</div>
                    </div>
                    <div className="w-embed">
                      <style dangerouslySetInnerHTML={{__html: "\n .af-class-benchmark-leed-level-number::after {\n  position: absolute;\n  content:'';\n  top: -5px;\n  left: 0;\n  right: 0;\n  height: 5px;\n  background-color: #ECD925;\n  display: block;\n  z-index: 1;\n}\n" }} />
                    </div>
                  </div>
                  <div className="af-class-div-block-120">
                    {map(proxies['leed-more-info'], props => <div {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>For more information on the USGBC and the LEED rating system:</React.Fragment>}</div>)}{map(proxies['empty'], props => <a href="/#" {...{...props, className: `af-class-benchmark-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>www.usgbc.org</React.Fragment>}</a>)}</div>
                </div>
                <div className="af-class-benchmark-row af-class-margin-top-bottom">
                  <div className="af-class-div-block-119">
                    {map(proxies['energy-star-communities'], props => <div {...{...props, className: `af-class-text-block-22 af-class-green-highlight-half ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>25</React.Fragment>}</div>)}
                    <div className="af-class-text-block-23">ENERGY&nbsp;STAR Communities</div><img src="/images/energy-star-logo3x.jpg" alt="" className="af-class-image-16" /></div>
                  <div className="af-class-div-block-120">
                    {map(proxies['energy-star-more-info'], props => <div {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>For more information about the ENERGY STAR Program:</React.Fragment>}</div>)}{map(proxies['empty1'], props => <a href="/#" {...{...props, className: `af-class-benchmark-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>www.energystar.gov</React.Fragment>}</a>)}</div>
                </div>
              </div>
              {map(proxies['image'], props => <div {...{...props, className: `af-class-div-block-91 ${props.className || ''}`}}>{props.children}</div>)}
            </div>
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default LeedStatsView

/* eslint-enable */