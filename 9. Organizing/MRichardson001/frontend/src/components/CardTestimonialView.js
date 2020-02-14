/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class CardTestimonialView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CardTestimonialController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CardTestimonialView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CardTestimonialView ? transformProxies(this.props.children) : {
      'title': [],
      'testimonial-text-1': [],
      'testimonial-image-1': [],
      'testimonial-name-1': [],
      'testimonial-position-1': [],
      'testimonial-text-2': [],
      'testimonial-image-2': [],
      'testimonial-name-2': [],
      'testimonial-position-2': [],
      'testimonial-text-3': [],
      'testimonial-image-3': [],
      'testimonial-name-3': [],
      'testimonial-position-3': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-cards-testimonial">
            <div className="af-class-cards-testimonial-container">
              {map(proxies['title'], props => <h2 {...{...props, className: `af-class-cards-testimonial af-class-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>From Our Employees</React.Fragment>}</h2>)}
              <div className="af-class-cards-testimonial-columns">
                <div className="af-class-cards-testimonial-column">
                  <div className="af-class-cards-testimonial-card">
                    {map(proxies['testimonial-text-1'], props => <p {...{...props, className: `af-class-paragraph af-class-cards-testimonial ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>In my position, each day presents a new challenge and learning opportunity. This is very satisfying and rewarding for me. Also, I feel like I work for a company that truly cares.</React.Fragment>}</p>)}
                    <div className="af-class-cards-testimonial-employee-info">{map(proxies['testimonial-image-1'], props => <img src="/images/cards-testimonial-profile2x.jpg" alt="" {...{...props, className: `af-class-cards-testimonial-image ${props.className || ''}`}}>{props.children}</img>)}
                      <div className="af-class-cards-testimonial-employee-details">
                        {map(proxies['testimonial-name-1'], props => <div {...{...props, className: `af-class-cards-testimonial-employee ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Gwen</React.Fragment>}</div>)}
                        {map(proxies['testimonial-position-1'], props => <div {...{...props, className: `af-class-cards-testimonial-position ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Assistant Community Manager</React.Fragment>}</div>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="af-class-cards-testimonial-column">
                  <div className="af-class-cards-testimonial-card">
                    {map(proxies['testimonial-text-2'], props => <p {...{...props, className: `af-class-paragraph af-class-cards-testimonial ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>In my position, each day presents a new challenge and learning opportunity. This is very satisfying and rewarding for me. Also, I feel like I work for a company that truly cares.</React.Fragment>}</p>)}
                    <div className="af-class-cards-testimonial-employee-info">{map(proxies['testimonial-image-2'], props => <img src="/images/Garry_Graves.jpg" alt="" {...{...props, className: `af-class-cards-testimonial-image ${props.className || ''}`}}>{props.children}</img>)}
                      <div className="af-class-cards-testimonial-employee-details">
                        {map(proxies['testimonial-name-2'], props => <div {...{...props, className: `af-class-cards-testimonial-employee ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Garry</React.Fragment>}</div>)}
                        {map(proxies['testimonial-position-2'], props => <div {...{...props, className: `af-class-cards-testimonial-position ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Groundskeeper</React.Fragment>}</div>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="af-class-cards-testimonial-column">
                  <div className="af-class-cards-testimonial-card">
                    {map(proxies['testimonial-text-3'], props => <p {...{...props, className: `af-class-paragraph af-class-cards-testimonial ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>In my position, each day presents a new challenge and learning opportunity. This is very satisfying and rewarding for me. Also, I feel like I work for a company that truly cares.</React.Fragment>}</p>)}
                    <div className="af-class-cards-testimonial-employee-info">{map(proxies['testimonial-image-3'], props => <img src="/images/cards-testimonial-profile2x.jpg" alt="" {...{...props, className: `af-class-cards-testimonial-image ${props.className || ''}`}}>{props.children}</img>)}
                      <div className="af-class-cards-testimonial-employee-details">
                        {map(proxies['testimonial-name-3'], props => <div {...{...props, className: `af-class-cards-testimonial-employee ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Gwen</React.Fragment>}</div>)}
                        {map(proxies['testimonial-position-3'], props => <div {...{...props, className: `af-class-cards-testimonial-position ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Regional Education Director</React.Fragment>}</div>)}
                      </div>
                    </div>
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

export default CardTestimonialView

/* eslint-enable */