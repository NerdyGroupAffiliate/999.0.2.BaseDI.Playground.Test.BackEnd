/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/FloorplanQuoteSummaryView.css"
import PropertyFullView from '../components/PropertyFullView'
import QuoteSummaryColumnView from '../components/QuoteSummaryColumnView'
import FooterView from '../components/FooterView'


let Controller

class FloorplanQuoteSummaryView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FloorplanQuoteSummaryController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FloorplanQuoteSummaryView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FloorplanQuoteSummaryView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/FloorplanQuoteSummaryMeta")
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
            <PropertyFullView.Controller {...this.props} />
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n@media screen and (min-width: 992px) and (max-width: 1100px) {\n .af-view .af-class-quote-details-wrap {\n    margin-top: 50px;\n  }\n}\n  /*@media (min-width:992px) and (max-width: 1200px){\n  .af-view .af-class-quote-details-wrap {\n    padding: 30px;\n    flex-direction: column;\n    align-items: center;\n    flex-flow: column-reverse;\n  }\n  .af-view .af-class-quote-details-wrap {\n    padding-top: 50px;\n  }\n  .af-view .af-class-quote-summary-details-col {\n    padding-left: 0px;\n  }\n  .af-view .af-class-quote-summary-apply-btn {\n    margin-top: 10px;\n  }\n}\n" }} />
            </div>
            <div className="af-class-div-block-388">
              <div className="af-class-profile-sidebar">
                <div className="af-class-div-block-396">
                  <div className="af-class-text-block-113">Hey Dennis,<br />Here's your quote Summary.</div><a href="/#" className="af-class-link-5">Logout</a></div>
                <div className="af-class-div-block-392">
                  <div className="af-class-paragraph af-class-small">Lease within 48 hours of touring and we'll take care of the admin fee.</div>
                  <div className="af-class-div-block-391">
                    <div>Exp. 1/30/19</div><a href="/#" className="af-class-link-text">Call for details</a></div>
                  <div className="af-class-lozenge--specials af-class-quote-summary">
                    <div className="af-class-text-block">Current Specials</div><img src="/images/icon-special-fire3x.svg" alt="" className="af-class-icon-fire" /></div>
                </div>
              </div>
              <div className="af-class-quote-details-wrap">
                <div className="af-class-quote-summary-unti-col">
                  <div className="af-class-community-placard af-class-margin-bottom">
                    <div className="af-class-div-block-317" />
                    <div className="af-class-div-block-318">
                      <div className="af-class-text-block-93">AMLI at Eldridge on Parkway</div><a href="/#" className="af-class-link-3">850 S Clarke St<br />Chicago, IL 60605</a><a href="/#" className="af-class-link-4">1 (888) 331-3172</a></div>
                  </div>
                  <div className="af-class-floorplan-card-profile af-class-quote-summary">
                    <div className="af-class-floorplan-card-content">
                      <div className="af-class-div-block-272">
                        <div className="af-class-floorplan-card-header-col af-class-left-aligned">
                          <div className="af-class-floorplan-card-label">Floorplan</div>
                          <div className="af-class-floorplan-card-bold-heading">E210</div>
                        </div>
                        <div className="af-class-floorplan-card-header-col af-class-right-aligned">
                          <div className="af-class-floorplan-card-label">Unit</div>
                          <div className="af-class-floorplan-card-bold-heading">Polk - 916</div>
                        </div>
                      </div>
                      <div className="af-class-floorplan-card-image-col af-class-profile"><img src="/images/Studio2x.png" alt="" className="af-class-image-70" /></div>
                      <div className="af-class-card-details-row">
                        <div className="af-class-floorplan-card-col af-class-profile">
                          <div className="af-class-floorplan-card-profile-col-label">1 Bedrooms</div>
                        </div>
                        <div className="af-class-floorplan-card-col af-class-no-border-right af-class-profile">
                          <div className="af-class-floorplan-card-profile-col-label">1 Bath</div>
                        </div>
                        <div className="af-class-floorplan-card-col af-class-border-top af-class-profile">
                          <div className="af-class-floorplan-card-profile-col-label">695 sqft</div>
                        </div>
                        <div className="af-class-floorplan-card-col af-class-last-col af-class-border-top af-class-profile">
                          <div className="af-class-floorplan-card-profile-col-label">4th Floor</div>
                        </div>
                      </div>
                      <div className="af-class-card-details-row af-class-padded af-class-sides-padded">
                        <div className="af-class-floorplan-card-col af-class-profile af-class-no-padding af-class-left-align">
                          <div className="af-class-floorplan-card-col-label">Lease Length</div>
                          <div>13 Months</div>
                        </div>
                        <div className="af-class-floorplan-card-col af-class-border-top af-class-profile af-class-no-padding af-class-no-border af-class-right-align">
                          <div className="af-class-floorplan-card-col-label">Move-in Date</div>
                          <div>03/28/19</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <QuoteSummaryColumnView.Controller {...this.props} />
              </div>
            </div>
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default FloorplanQuoteSummaryView

/* eslint-enable */