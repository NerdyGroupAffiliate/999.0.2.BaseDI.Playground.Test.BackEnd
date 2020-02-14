/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class CardsHighlightActivityView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CardsHighlightActivityController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CardsHighlightActivityView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CardsHighlightActivityView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
      'text-blurb': [],
      'activity-title-1': [],
      'activity-text-blurb-1': [],
      'activity-image-1': [],
      'activity-title-2': [],
      'activity-text-blurb-2': [],
      'activity-image-2': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-cards-highlight-activity">
            <div className="af-class-cards-highlight-activity-container">
              {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-div-block-98 ${props.className || ''}`}}>{props.children}</div>)}
              <div className="af-class-div-block-99">
                <div className="af-class-div-block-100">
                  {map(proxies['title'], props => <h2 {...{...props, className: `af-class-cards-highlight-community-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Building Community</React.Fragment>}</h2>)}
                  <div className="w-embed">
                    <style dangerouslySetInnerHTML={{__html: "\n .af-class-cards-highlight-community-heading::after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: -25px;\n  left: 0;\n  width: 50px;\n  height: 5px;\n  background-color: #ecd925;\n}\n" }} />
                  </div>
                  {map(proxies['text-blurb'], props => <p {...{...props, className: `af-class-paragraph af-class-white ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Our FAMLI Volunteer program encourages employees and residents to make a difference by getting involved with charitable organizations. Our impactful activities help those in need and build community and connections with each other and the cities and neighborhoods we call home.</React.Fragment>}</p>)}
                </div>
                <div className="af-class-cards-highlight-community--cards">
                  <div className="af-class-div-block-104">
                    <div className="af-class-card-highlights-community--card">
                      <div className="af-class-div-block-103">
                        {map(proxies['activity-title-1'], props => <div {...{...props, className: `af-class-cards-highlight-community-card-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI Atlanta</React.Fragment>}</div>)}
                        {map(proxies['activity-text-blurb-1'], props => <div {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>For over 20 years we've supported the <strong>Atlanta Community Food Bank</strong> with over $100,00 in annual donations in recent years!</React.Fragment>}</div>)}
                      </div>{map(proxies['activity-image-1'], props => <img src="/../images/giving-back-atlanta-food-bank.jpg" srcSet="../images/giving-back-atlanta-food-bank-p-500.jpeg 500w, ../images/giving-back-atlanta-food-bank.jpg 720w" sizes="(max-width: 479px) 90vw, (max-width: 767px) 46vw, (max-width: 991px) 41vw, 28vw" alt="" {...{...props, className: `af-class-image-15 ${props.className || ''}`}}>{props.children}</img>)}</div>
                    <div className="af-class-card-highlights-community--card">
                      <div className="af-class-div-block-103">
                        {map(proxies['activity-title-2'], props => <div {...{...props, className: `af-class-cards-highlight-community-card-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI Austin</React.Fragment>}</div>)}
                        {map(proxies['activity-text-blurb-2'], props => <div {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Residents and employees helped provide gifts for 150 needy children through the <strong>Salvation Army Angel Tree</strong> program. </React.Fragment>}</div>)}
                      </div>{map(proxies['activity-image-2'], props => <img src="/../images/giving-back-atlanta-food-bank.jpg" srcSet="../images/giving-back-atlanta-food-bank-p-500.jpeg 500w, ../images/giving-back-atlanta-food-bank.jpg 720w" sizes="(max-width: 479px) 90vw, (max-width: 767px) 46vw, (max-width: 991px) 41vw, 28vw" alt="" {...{...props, className: `af-class-image-15 ${props.className || ''}`}}>{props.children}</img>)}</div>
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

export default CardsHighlightActivityView

/* eslint-enable */