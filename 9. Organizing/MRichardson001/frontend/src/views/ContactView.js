/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/ContactView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import CommunityContactsView from '../components/CommunityContactsView'
import ContactCtaCardsView from '../components/ContactCtaCardsView'
import FooterView from '../components/FooterView'


let Controller

class ContactView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContactController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContactView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContactView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/ContactMeta")
      Metadata = Metadata.default || Metadata
    } catch (e) {
      // pass
      Metadata = null;
    }
    try {
      Metadata = require("../meta/defaultMeta")
      Metadata = Metadata.default || Metadata
    } catch (e) {
      // pass
      Metadata = null;
    }



    return (
      <React.Fragment>
        {Metadata ? <Metadata {...this.props} /> : null}
        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div>
            <NavigationHeaderView.Controller {...this.props} />
            <header className="af-class-about-page-header af-class-retail">
              <h1 className="af-class-heading-13">Contact Us</h1>
            </header>
            <div className="af-class-section">
              <div className="af-class-div-block-452">
                <h2 className="af-class-heading-33">I am a...</h2>
                <div className="af-class-div-block-453">
                  <div className="af-class-div-block-454">
                    <a href="/#" className="af-class-link-block-9 w-inline-block">
                      <div>Resident</div>
                    </a>
                  </div>
                  <div className="af-class-div-block-454">
                    <a href="/#" className="af-class-link-block-9 w-inline-block">
                      <div>Non-Resident</div>
                    </a>
                  </div>
                  <div className="af-class-div-block-454">
                    <a href="/#" className="af-class-link-block-9 w-inline-block">
                      <div>Retail/Corporate</div>
                    </a>
                  </div>
                </div>
                <div className="w-form">
                  <form id="email-form" name="email-form" data-name="Email Form" className="af-class-form">
                    <div className="af-class-div-block-455">
                      <div className="af-class-field-field-wrapper"><label htmlFor="name" className="af-class-input-label">First name</label><input type="text" id="name" name="name" data-name="Name" maxLength={256} className="af-class-text-field w-input" /></div>
                      <div className="af-class-field-field-wrapper"><label htmlFor="name-2" className="af-class-input-label">Last name</label><input type="text" id="name-2" name="name-2" data-name="Name 2" maxLength={256} className="af-class-text-field w-input" /></div>
                      <div className="af-class-field-field-wrapper"><label htmlFor="name-3" className="af-class-input-label">Email</label><input type="text" id="name-3" name="name-3" data-name="Name 3" maxLength={256} className="af-class-text-field w-input" /></div>
                      <div className="af-class-field-field-wrapper"><label htmlFor="name-4" className="af-class-input-label">Phone Number</label><input type="text" id="name-4" name="name-4" data-name="Name 4" maxLength={256} className="af-class-text-field w-input" /></div>
                      <div className="af-class-field-field-wrapper af-class-horizontal"><label htmlFor="name-5" className="af-class-input-label af-class-horizontal">Community</label>
                        <div data-delay={0} className="af-class-dropdown w-dropdown">
                          <div className="af-class-dropdown-toggle af-class-border w-dropdown-toggle">
                            <div className="af-class-text-block-94">Select Community</div>
                            <div className="af-class-div-block-322 af-class-contact-page">
                              <div className="af-class-icon af-class-contact-page w-icon-dropdown-toggle" />
                            </div>
                          </div>
                          <nav className="af-class-dropdown-list-4 w-dropdown-list"><a href="/#" className="af-class-community-dropdown-link w-dropdown-link">Community 1</a><a href="/#" className="af-class-community-dropdown-link w-dropdown-link">Community 2</a><a href="/#" className="af-class-community-dropdown-link w-dropdown-link">Community 3</a></nav>
                        </div>
                      </div>
                      <div className="af-class-field-field-wrapper"><label htmlFor="name-5" className="af-class-input-label">Unit</label><input type="text" id="name-4" name="name-4" data-name="Name 4" maxLength={256} className="af-class-text-field w-input" /></div>
                    </div>
                    <div className="af-class-field-field-wrapper af-class-full-width"><label htmlFor="name-5" className="af-class-input-label af-class-horizontal">Im interested in...</label>
                      <div data-delay={0} className="af-class-dropdown w-dropdown">
                        <div className="af-class-dropdown-toggle af-class-border w-dropdown-toggle">
                          <div className="af-class-text-block-94">Dropdown to select topic</div>
                          <div className="af-class-div-block-322 af-class-contact-page">
                            <div className="af-class-icon af-class-contact-page w-icon-dropdown-toggle" />
                          </div>
                        </div>
                        <nav className="af-class-dropdown-list-4 w-dropdown-list"><a href="/#" className="af-class-community-dropdown-link w-dropdown-link">Community 1</a><a href="/#" className="af-class-community-dropdown-link w-dropdown-link">Community 2</a><a href="/#" className="af-class-community-dropdown-link w-dropdown-link">Community 3</a></nav>
                      </div>
                    </div><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="af-class-submit-button w-button" /></form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </div>
            <CommunityContactsView.Controller {...this.props} />
            <div className="af-class-div-block-432">
              <ContactCtaCardsView.Controller {...this.props} />
            </div>
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default ContactView

/* eslint-enable */