/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ScheduleTourModalView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ScheduleTourModalController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ScheduleTourModalView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ScheduleTourModalView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'left-column': [],
      'title': [],
      'text': [],
      'right-column': [],
      'form-wrapper': [],
      'full-name-input': [],
      'email-input': [],
      'phone-input': [],
      'message-input': [],
      'bedrooms-title': [],
      'studio-toggle': [],
      '1-room-toggle': [],
      '2-room-toggle': [],
      '3-room-toggle': [],
      'date-text': [],
      'date-picker': [],
      'cancel-button': [],
      'submit-button': [],
      'success-message': [],
      'error-message': [],
      'close-modal': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-section-3 af-class-blur ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-div-block-463">
              <div className="af-class-div-block-471">
                {map(proxies['left-column'], props => <div {...{...props, className: `af-class-div-block-464 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['title'], props => <h1 {...{...props, className: `af-class-heading-34 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Schedule a Tour</React.Fragment>}</h1>)}
                  {map(proxies['text'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>If you’re interested in touring AMLI Lofts, you can request a tour date that best fits your needs. You can even tell us when to contact you. <br /><br />Someone will reach out to you shortly to confirm your tour details.</React.Fragment>}</p>)}
                </React.Fragment>)}</div>)}
                {map(proxies['right-column'], props => <div {...{...props, className: `af-class-div-block-465 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['form-wrapper'], props => <div {...{...props, className: `af-class-form-block-2 w-form ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    <form id="email-form" name="email-form" data-name="Email Form">
                      <div className="af-class-input-field-wrapper">{map(proxies['full-name-input'], props => <input type="text" maxLength={256} name="name" data-name="Name" placeholder="Full Name" id="name" {...{...props, className: `af-class-input-field w-input ${props.className || ''}`}}>{props.children}</input>)}</div>
                      <div className="af-class-input-field-wrapper">{map(proxies['email-input'], props => <input type="email" maxLength={256} name="name-2" data-name="Name 2" placeholder="Email" id="name-2" {...{...props, className: `af-class-input-field w-input ${props.className || ''}`}}>{props.children}</input>)}</div>
                      <div className="af-class-input-field-wrapper">{map(proxies['phone-input'], props => <input type="tel" maxLength={256} name="name-2" data-name="Name 2" placeholder="Phone Number" id="name-2" {...{...props, className: `af-class-input-field w-input ${props.className || ''}`}}>{props.children}</input>)}</div>
                      <div className="af-class-input-field-wrapper">{map(proxies['message-input'], props => <textarea id="field" name="field" placeholder="Leave your message here..." maxLength={5000} {...{...props, className: `af-class-text-area w-input ${props.className || ''}`}}>{props.children}</textarea>)}</div>
                      <div className="af-class-div-block-469">
                        {map(proxies['bedrooms-title'], props => <h4 {...{...props, className: `af-class-content-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Select your apartment size</React.Fragment>}</h4>)}
                        <div className="af-class-div-block-467">
                          {map(proxies['studio-toggle'], props => <div {...{...props, className: `af-class-div-block-466 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                            <div className="af-class-text-block-132">Studio</div>
                          </React.Fragment>}</div>)}
                          {map(proxies['1-room-toggle'], props => <div {...{...props, className: `af-class-div-block-466 af-class-selected ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                            <div className="af-class-text-block-132 af-class-selected">1 Bed</div>
                          </React.Fragment>}</div>)}
                          {map(proxies['2-room-toggle'], props => <div {...{...props, className: `af-class-div-block-466 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                            <div className="af-class-text-block-132">2 Bed</div>
                          </React.Fragment>}</div>)}
                          {map(proxies['3-room-toggle'], props => <div {...{...props, className: `af-class-div-block-466 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                            <div className="af-class-text-block-132">3 Bed</div>
                          </React.Fragment>}</div>)}
                        </div>
                      </div>
                      <div className="af-class-div-block-469 af-class-margin-bottom-small">
                        {map(proxies['date-text'], props => <h4 {...{...props, className: `af-class-content-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Select a tour date</React.Fragment>}</h4>)}
                        <div className="af-class-div-block-467">
                          {map(proxies['date-picker'], props => <div {...{...props, className: `af-class-div-block-466 af-class-no-margin ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                            <div className="af-class-div-block-468"><img src="/https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" className="af-class-image-61" /></div>
                            <div className="af-class-text-block-132">07/02/19</div>
                          </React.Fragment>}</div>)}
                        </div>
                      </div>
                      <div className="af-class-div-block-470">
                        {map(proxies['cancel-button'], props => <a href="/#" {...{...props, className: `af-class-link-block-11 w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                          <div className="af-class-text-block-133">Cancel</div>
                        </React.Fragment>}</a>)}{map(proxies['submit-button'], props => <input type="submit" value="Submit" data-wait="Please wait..." {...{...props, className: `af-class-submit-button af-class-ada-blue w-button ${props.className || ''}`}}>{props.children}</input>)}</div>
                    </form>
                    {map(proxies['success-message'], props => <div {...{...props, className: `w-form-done ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <div>Thank you! Your submission has been received!</div>
                    </React.Fragment>}</div>)}
                    {map(proxies['error-message'], props => <div {...{...props, className: `w-form-fail ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </React.Fragment>}</div>)}
                  </React.Fragment>)}</div>)}
                </React.Fragment>)}</div>)}{map(proxies['close-modal'], props => <a href="/#" {...{...props, className: `af-class-close-modal w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="/images/icon-plus-sign.svg" alt="" className="af-class-image-62" /><div className="af-class-text-block-133">Close</div></React.Fragment>}</a>)}</div>
            </div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default ScheduleTourModalView

/* eslint-enable */