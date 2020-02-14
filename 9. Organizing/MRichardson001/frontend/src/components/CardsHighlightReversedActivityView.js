/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class CardsHighlightReversedActivityView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CardsHighlightReversedActivityController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CardsHighlightReversedActivityView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CardsHighlightReversedActivityView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
      'text-blurb': [],
      'title-1': [],
      'text-blurb-1': [],
      'image-1': [],
      'title-2': [],
      'text-blurb-2': [],
      'image-2': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-cards-highlight-activity af-class-reversed">
            <div className="af-class-cards-highlight-activity-container af-class-reversed">
              {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-div-block-98 ${props.className || ''}`}}>{props.children}</div>)}
              <div className="af-class-div-block-99">
                <div className="af-class-div-block-100">
                  {map(proxies['title'], props => <h2 {...{...props, className: `af-class-cards-highlight-community-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Protecting Our Planet</React.Fragment>}</h2>)}
                  <div className="w-embed">
                    <style dangerouslySetInnerHTML={{__html: "\n .af-class-cards-highlight-community-heading::after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: -25px;\n  left: 0;\n  width: 50px;\n  height: 5px;\n  background-color: #ecd925;\n}\n" }} />
                  </div>
                  {map(proxies['text-blurb'], props => <p {...{...props, className: `af-class-paragraph af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Many of our volunteer activities are sustainably focused because protecting our planet is a priority at AMLI. Whether it’s building a public park or organizing a beach clean-up, we are committed to our greater communities and making our environment’s future a cause for today.</React.Fragment>}</p>)}
                </div>
                <div className="af-class-cards-highlight-community--cards">
                  <div className="af-class-div-block-104">
                    <div className="af-class-card-highlights-community--card">
                      <div className="af-class-div-block-103">
                        {map(proxies['title-1'], props => <div {...{...props, className: `af-class-cards-highlight-community-card-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI Chicago</React.Fragment>}</div>)}
                        {map(proxies['text-blurb-1'], props => <div {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>130 employees collected 236 pounds of trash and recycling and calculated research data at Montrose Beach in partnership with the <strong>Alliance for the Great Lakes</strong>. </React.Fragment>}</div>)}
                      </div>{map(proxies['image-1'], props => <img src="/../images/giving-back-atlanta-food-bank.jpg" srcSet="../images/giving-back-atlanta-food-bank-p-500.jpeg 500w, ../images/giving-back-atlanta-food-bank.jpg 720w" sizes="(max-width: 479px) 90vw, (max-width: 767px) 46vw, (max-width: 991px) 41vw, 28vw" alt="" {...{...props, className: `af-class-image-15 ${props.className || ''}`}}>{props.children}</img>)}</div>
                    <div className="af-class-card-highlights-community--card">
                      <div className="af-class-div-block-103">
                        {map(proxies['title-2'], props => <div {...{...props, className: `af-class-cards-highlight-community-card-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI Denver</React.Fragment>}</div>)}
                        {map(proxies['text-blurb-2'], props => <div {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Our teams cleaned up <strong>Congress Park</strong> by sweeping, painting curbs, relocating mulch and cleaning up trash</React.Fragment>}</div>)}
                      </div>{map(proxies['image-2'], props => <img src="/../images/giving-back-atlanta-food-bank.jpg" srcSet="../images/giving-back-atlanta-food-bank-p-500.jpeg 500w, ../images/giving-back-atlanta-food-bank.jpg 720w" sizes="(max-width: 479px) 90vw, (max-width: 767px) 46vw, (max-width: 991px) 41vw, 28vw" alt="" {...{...props, className: `af-class-image-15 ${props.className || ''}`}}>{props.children}</img>)}</div>
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

export default CardsHighlightReversedActivityView

/* eslint-enable */