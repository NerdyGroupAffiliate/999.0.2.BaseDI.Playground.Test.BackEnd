/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class SliderReviewsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SliderReviewsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SliderReviewsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SliderReviewsView ? transformProxies(this.props.children) : {
      'subtitle': [],
      'title': [],
      'slider-container': [],
      'star-wrapper': [],
      'review-text': [],
      'left-arrow': [],
      'right-arrow': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-slider-review-container">
            <div className="af-class-slider-header">
              {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-section-title af-class-loft ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>reviews &amp; recognition</React.Fragment>}</h2>)}
              {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline af-class-loft ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>What people say about AMLI Lofts</React.Fragment>}</h3>)}
            </div>
            {map(proxies['slider-container'], props => <div {...{...props, className: `af-class-slider-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-review-container">
                {map(proxies['star-wrapper'], props => <div {...{...props, className: `af-class-star-rating-wrapper af-class-review-slider ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/icon-star--active3x.png" alt="" className="af-class-star-icon" /><img src="/images/icon-star--active3x.png" alt="" className="af-class-star-icon" /><img src="/images/icon-star--active3x.png" alt="" className="af-class-star-icon" /><img src="/images/icon-star--active3x.png" alt="" className="af-class-star-icon" /><img src="/images/icon-star--inactive3x.png" alt="" className="af-class-star-icon" /></React.Fragment>}</div>)}
                <div className="af-class-div-block-472">
                  {map(proxies['review-text'], props => <p {...{...props, className: `af-class-paragraph af-class-centered af-class-light ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>I moved into my Amli River North apartment 2 years ago when they first opened and have absolutely loved every minute of it. They always say location is everything and I </React.Fragment>}</p>)}
                  <div className="af-class-icon-quote af-class-closing w-embed"><svg viewBox="0 0 43 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                      <desc>Created with Sketch.</desc>
                      <g id="UI/Icons/Quote---Close" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <path d="M25.2063492,27 L24,25.4174067 C30.836013,22.5399501 34.2539683,19.8223929 34.2539683,17.2646536 C34.2539683,16.1776145 32.9672086,15.1065772 30.3936508,14.0515098 C28.1015758,13.0923575 26.5031791,12.1332197 25.5984127,11.1740675 C24.6936463,10.2149153 24.2412698,8.96803609 24.2412698,7.43339254 C24.2412698,5.38720114 25.1560755,3.63677459 26.9857143,2.18206039 C28.8153531,0.72734619 30.9968127,0 33.5301587,0 C36.3449876,0 38.6269754,0.895195311 40.3761905,2.68561279 C42.1254056,4.47603027 43,6.80993233 43,9.68738899 C43,14.4192066 40.7481707,18.4795568 36.2444444,21.8685613 C34.7163945,22.9875722 33.2185259,23.8907603 31.7507937,24.5781528 C30.2830614,25.2655452 28.1016018,26.0728195 25.2063492,27 Z" id="Path" fill="#FFFFFF" />
                        <path d="M1.20634921,27 L0,25.4174067 C6.83601302,22.5079783 10.2539683,19.7904212 10.2539683,17.2646536 C10.2539683,16.6571906 9.97248959,16.1216719 9.40952381,15.6580817 C8.84655803,15.1944915 7.84127708,14.6589728 6.39365079,14.0515098 C4.18199952,13.156301 2.60370843,12.205156 1.65873016,11.1980462 C0.713751889,10.1909363 0.241269841,8.93606435 0.241269841,7.43339254 C0.241269841,5.3552294 1.1460227,3.59681004 2.95555556,2.15808171 C4.76508841,0.719353375 6.93649527,0 9.46984127,0 C12.324882,0 14.6269754,0.895195311 16.3761905,2.68561279 C18.1254056,4.47603027 19,6.80993233 19,9.68738899 C19,11.9573826 18.4269899,14.1314283 17.2809524,16.2095915 C16.1349149,18.2877546 14.4359901,20.174059 12.184127,21.8685613 C9.5703573,23.7868657 5.91113463,25.4973282 1.20634921,27 Z" id="Path" fill="#FFFFFF" />
                      </g>
                    </svg></div>
                  <div className="af-class-icon-quote af-class-opening w-embed"><svg width="43px" height="27px" viewBox="0 0 43 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                      <desc>Created with Sketch.</desc>
                      <g id="UI/Icons/Quote---Close" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <path d="M25.2063492,27 L24,25.4174067 C30.836013,22.5399501 34.2539683,19.8223929 34.2539683,17.2646536 C34.2539683,16.1776145 32.9672086,15.1065772 30.3936508,14.0515098 C28.1015758,13.0923575 26.5031791,12.1332197 25.5984127,11.1740675 C24.6936463,10.2149153 24.2412698,8.96803609 24.2412698,7.43339254 C24.2412698,5.38720114 25.1560755,3.63677459 26.9857143,2.18206039 C28.8153531,0.72734619 30.9968127,0 33.5301587,0 C36.3449876,0 38.6269754,0.895195311 40.3761905,2.68561279 C42.1254056,4.47603027 43,6.80993233 43,9.68738899 C43,14.4192066 40.7481707,18.4795568 36.2444444,21.8685613 C34.7163945,22.9875722 33.2185259,23.8907603 31.7507937,24.5781528 C30.2830614,25.2655452 28.1016018,26.0728195 25.2063492,27 Z" id="Path" fill="#FFFFFF" />
                        <path d="M1.20634921,27 L0,25.4174067 C6.83601302,22.5079783 10.2539683,19.7904212 10.2539683,17.2646536 C10.2539683,16.6571906 9.97248959,16.1216719 9.40952381,15.6580817 C8.84655803,15.1944915 7.84127708,14.6589728 6.39365079,14.0515098 C4.18199952,13.156301 2.60370843,12.205156 1.65873016,11.1980462 C0.713751889,10.1909363 0.241269841,8.93606435 0.241269841,7.43339254 C0.241269841,5.3552294 1.1460227,3.59681004 2.95555556,2.15808171 C4.76508841,0.719353375 6.93649527,0 9.46984127,0 C12.324882,0 14.6269754,0.895195311 16.3761905,2.68561279 C18.1254056,4.47603027 19,6.80993233 19,9.68738899 C19,11.9573826 18.4269899,14.1314283 17.2809524,16.2095915 C16.1349149,18.2877546 14.4359901,20.174059 12.184127,21.8685613 C9.5703573,23.7868657 5.91113463,25.4973282 1.20634921,27 Z" id="Path" fill="#FFFFFF" />
                      </g>
                    </svg></div>
                </div>
              </div>
              <div className="af-class-div-block-444">
                {map(proxies['left-arrow'], props => <div {...{...props, className: `af-class-review-arrow-wrap af-class-prev ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <div className="af-class-html-embed-25 af-class-html-embed-26 w-embed"><svg viewBox="0 0 8 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                      <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <g id="UI/Icons/Arrow-Block----Black" transform="translate(-9.000000, -6.000000)" fill="#FFFFFF" fillRule="nonzero">
                          <g id="Arrow">
                            <polygon points="9 7.5 10.25 6.25 16.5 12.5 10.25 18.75 9 17.5 13.9609375 12.5" />
                          </g>
                        </g>
                      </g>
                    </svg></div>
                </React.Fragment>}</div>)}
                {map(proxies['right-arrow'], props => <div {...{...props, className: `af-class-review-arrow-wrap af-class-next ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <div className="af-class-html-embed-25 af-class-previous af-class-html-embed-27 w-embed"><svg viewBox="0 0 8 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                      <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <g id="UI/Icons/Arrow-Block----Black" transform="translate(-9.000000, -6.000000)" fill="#FFFFFF" fillRule="nonzero">
                          <g id="Arrow">
                            <polygon points="9 7.5 10.25 6.25 16.5 12.5 10.25 18.75 9 17.5 13.9609375 12.5" />
                          </g>
                        </g>
                      </g>
                    </svg></div>
                </React.Fragment>}</div>)}
              </div>
            </React.Fragment>)}</div>)}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default SliderReviewsView

/* eslint-enable */