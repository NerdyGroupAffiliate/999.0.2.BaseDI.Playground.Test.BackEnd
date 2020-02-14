/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import TimelineCardView from './TimelineCardView'


let Controller

class SliderTimelineView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SliderTimelineController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SliderTimelineView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SliderTimelineView ? transformProxies(this.props.children) : {
      'subtitle': [],
      'title': [],
      'slider': [],
      'extra-timeline-card': [],
      'extra-timeline-card-2': [],
      'prev-arrow': [],
      'next-arrow': [],
      'extra-timeline-card-3': [],
      'timeline-track': [],
      'sidebar-image': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-slider-timeline">
            <div className="af-class-slider-timeline-content-col">
              <div className="af-class-timeline-header-wrap">
                {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>News &amp; Updates</React.Fragment>}</h2>)}
                {map(proxies['title'], props => <div {...{...props, className: `af-class-section-tagline ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>We're hitting all the milestones</React.Fragment>}</div>)}
              </div>
              <div className="af-class-timeline-track-wrap">
                {map(proxies['slider'], props => <div {...{...props, className: `af-class-timeline-cards-wrap ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  <TimelineCardView.Controller {...this.props} />
                  {map(proxies['extra-timeline-card'], props => <div {...{...props, className: `af-class-timeline-track-card-w-image ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <div className="af-class-timeline-card-tag">Development</div>
                    <div className="af-class-timeline-card-image-wrap" />
                    <div className="af-class-timeline-card-content-wrap">
                      <div className="af-class-timeline-card-title">Upcoming work along the Helen River and at River Entrance</div>
                      <div className="af-class-timeline-card-author-wrap">
                        <div className="af-class-timeline-card-author">Lauren Fischer</div>
                        <div className="af-class-timeline-card-author af-class-date">9/23/18</div>
                      </div>
                    </div>
                  </React.Fragment>}</div>)}
                  {map(proxies['extra-timeline-card-2'], props => <div {...{...props, className: `af-class-timeline-track-card-w-image ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <div className="af-class-timeline-card-tag">Development</div>
                    <div className="af-class-timeline-card-image-wrap" />
                    <div className="af-class-timeline-card-content-wrap">
                      <div className="af-class-timeline-card-title">Upcoming work along the Helen River and at River Entrance</div>
                      <div className="af-class-timeline-card-author-wrap">
                        <div className="af-class-timeline-card-author">Lauren Fischer</div>
                        <div className="af-class-timeline-card-author af-class-date">9/23/18</div>
                      </div>
                    </div>
                  </React.Fragment>}</div>)}
                  <div className="af-class-timeline-navigation">
                    {map(proxies['prev-arrow'], props => <div {...{...props, className: `af-class-timeline-arrow-wrap ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <div className="af-class-timeline-prev-arrow w-embed">
                        <style dangerouslySetInnerHTML={{__html: "\n .af-class-arrow--chevron {\n  fill: #4c698f;\n  fill-rule: evenodd;\n}\n" }} />
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.13 22.02">
                          <title>Arrow -- Black</title>
                          <g id="Symbols">
                            <polygon id="ion-ios-arrow-forward---Ionicons" points="0 19.82 2.19 22.02 13.13 11.01 2.19 0 0 2.2 8.68 11.01 0 19.82" className="af-class-arrow--chevron">
                            </polygon></g>
                        </svg></div>
                    </React.Fragment>}</div>)}
                    {map(proxies['next-arrow'], props => <div {...{...props, className: `af-class-timeline-arrow-wrap ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <div className="af-class-timeline-next-arrow w-embed">
                        <style dangerouslySetInnerHTML={{__html: "\n .af-class-arrow--chevron {\n  fill: #4c698f;\n  fill-rule: evenodd;\n}\n" }} />
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.13 22.02">
                          <title>Arrow -- Black</title>
                          <g id="Symbols">
                            <polygon id="ion-ios-arrow-forward---Ionicons" points="0 19.82 2.19 22.02 13.13 11.01 2.19 0 0 2.2 8.68 11.01 0 19.82" className="af-class-arrow--chevron">
                            </polygon></g>
                        </svg></div>
                    </React.Fragment>}</div>)}
                  </div>
                  {map(proxies['extra-timeline-card-3'], props => <div {...{...props, className: `af-class-timeline-track-card-w-image ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <div className="af-class-timeline-card-tag">Development</div>
                    <div className="af-class-timeline-card-image-wrap" />
                    <div className="af-class-timeline-card-content-wrap">
                      <div className="af-class-timeline-card-title">Upcoming work along the Helen River and at River Entrance</div>
                      <div className="af-class-timeline-card-author-wrap">
                        <div className="af-class-timeline-card-author">Lauren Fischer</div>
                        <div className="af-class-timeline-card-author af-class-date">9/23/18</div>
                      </div>
                    </div>
                    <div className="af-class-timeline-active-card-indicator">
                      <div className="af-class-timeline-active-indicator-circle" />
                      <div className="af-class-radiant-small" />
                      <div className="af-class-div-block-399">
                        <div className="af-class-text-block-114">June</div>
                      </div>
                    </div>
                  </React.Fragment>}</div>)}
                </React.Fragment>)}</div>)}
                {map(proxies['timeline-track'], props => <div {...{...props, className: `af-class-timeline-track ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/Timeline-bars.jpg" srcSet="images/Timeline-bars-p-500.jpeg 500w, images/Timeline-bars-p-800.jpeg 800w, images/Timeline-bars-p-1080.jpeg 1080w, images/Timeline-bars-p-1600.jpeg 1600w, images/Timeline-bars-p-2000.jpeg 2000w, images/Timeline-bars.jpg 2324w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 70vw, (max-width: 991px) 75vw, (max-width: 2640px) 88vw, 2324px" alt="" /></React.Fragment>}</div>)}
              </div>
            </div>
            {map(proxies['sidebar-image'], props => <div {...{...props, className: `af-class-slider-timeline-image-col ${props.className || ''}`}}>{props.children}</div>)}
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default SliderTimelineView

/* eslint-enable */