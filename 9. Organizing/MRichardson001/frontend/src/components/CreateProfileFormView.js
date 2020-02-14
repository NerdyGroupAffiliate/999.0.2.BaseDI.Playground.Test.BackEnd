/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class CreateProfileFormView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CreateProfileFormController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CreateProfileFormView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CreateProfileFormView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'title': [],
      'subtitle': [],
      'form': [],
      'first-name': [],
      'last-name': [],
      'email': [],
      'phone': [],
      'back': [],
      'save': [],
      'success': [],
      'error': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-div-block-314 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-form-block w-form">
              {map(proxies['title'], props => <h1 {...{...props, className: `af-class-heading-23 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Create Profile</React.Fragment>}</h1>)}
              {map(proxies['subtitle'], props => <div {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>To save your quote for this unit, please create a profile.</React.Fragment>}</div>)}
              {map(proxies['form'], props => <form id="email-form" name="email-form" data-name="Email Form" redirect="/floorplan-quote-summary" data-redirect="/floorplan-quote-summary" {...props}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['first-name'], props => <input type="text" maxLength={256} name="name" data-name="Name" placeholder="First Name" id="name" {...{...props, className: `af-class-input-field w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['last-name'], props => <input type="text" maxLength={256} name="email" data-name="Email" placeholder="Last Name" id="email" {...{...props, className: `af-class-input-field w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['email'], props => <input type="email" maxLength={256} name="Email" data-name="Email" placeholder="Email" id="Email-4" {...{...props, className: `af-class-input-field w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['phone'], props => <input type="tel" maxLength={256} name="Phone" data-name="Phone" placeholder="Phone" id="Phone" {...{...props, className: `af-class-input-field w-input ${props.className || ''}`}}>{props.children}</input>)}
                <div className="af-class-div-block-311">{map(proxies['back'], props => <a href="/#" {...{...props, className: `af-class-link-2 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Cancel</React.Fragment>}</a>)}{map(proxies['save'], props => <input type="submit" value="Save Quote" data-wait="Please wait..." {...{...props, className: `af-class-submit-button w-button ${props.className || ''}`}}>{props.children}</input>)}</div>
              </React.Fragment>)}</form>)}
              {map(proxies['success'], props => <div {...{...props, className: `w-form-done ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div>Thank you! Your submission has been received!</div>
              </React.Fragment>}</div>)}
              {map(proxies['error'], props => <div {...{...props, className: `w-form-fail ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div>Oops! Something went wrong while submitting the form.</div>
              </React.Fragment>}</div>)}
            </div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default CreateProfileFormView

/* eslint-enable */