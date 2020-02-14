/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class TimelineCardView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/TimelineCardController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = TimelineCardView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== TimelineCardView ? transformProxies(this.props.children) : {
      'tag': [],
      'image': [],
      'text': [],
      'author': [],
      'date': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-timeline-track-card-w-image">
            {map(proxies['tag'], props => <div {...{...props, className: `af-class-timeline-card-tag ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Development</React.Fragment>}</div>)}
            {map(proxies['image'], props => <div {...{...props, className: `af-class-timeline-card-image-wrap ${props.className || ''}`}}>{props.children}</div>)}
            <div className="af-class-timeline-card-content-wrap">
              {map(proxies['text'], props => <div {...{...props, className: `af-class-timeline-card-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Upcoming work along the Helen River and at River Entrance</React.Fragment>}</div>)}
              <div className="af-class-timeline-card-author-wrap">
                {map(proxies['author'], props => <div {...{...props, className: `af-class-timeline-card-author ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lauren Fischer</React.Fragment>}</div>)}
                {map(proxies['date'], props => <div {...{...props, className: `af-class-timeline-card-author af-class-date ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>9/23/18</React.Fragment>}</div>)}
              </div>
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default TimelineCardView

/* eslint-enable */