/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/FloorplanUnitChosenView.css"
import PropertyFullView from '../components/PropertyFullView'
import PropertyFloorplanSliderView from '../components/PropertyFloorplanSliderView'
import PropertyFloorplanHeaderView from '../components/PropertyFloorplanHeaderView'
import FloorplanUnitItemView from '../components/FloorplanUnitItemView'
import FooterView from '../components/FooterView'


let Controller

class FloorplanUnitChosenView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FloorplanUnitChosenController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FloorplanUnitChosenView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FloorplanUnitChosenView ? transformProxies(this.props.children) : {
      'floorplanUnitItemViewList3': [],
    }


    let Metadata
    try {
      Metadata = require("../meta/FloorplanUnitChosenMeta")
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
            <div className="af-class-div-block-212">
              <div className="af-class-div-block-219">
                <PropertyFloorplanSliderView.Controller {...this.props} />
                <div className="af-class-div-block-217">
                  <PropertyFloorplanHeaderView.Controller {...this.props} />
                  {map(proxies['floorplanUnitItemViewList3'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
              </div>
            </div>
            <div className="af-class-floorplan-policies">
              <div className="af-class-policies-tabs">
                <div className="af-class-div-block-206">
                  <div className="af-class-div-block-210">
                    <div className="af-class-section-title">policies</div>
                    <div className="af-class-section-tagline">Apartment Add Ons</div>
                  </div>
                  <div className="af-class-tabbed-content-wrap">
                    <div className="af-class-tab-labels-wrap">
                      <div className="af-class-tab-header af-class-active">Upfront Costs</div>
                      <div className="af-class-tab-header">Parking</div>
                      <div className="af-class-tab-header">Pets</div>
                      <div className="af-class-tab-header">Other</div>
                      <div className="af-class-div-block-203" />
                    </div>
                    <div className="af-class-active-tab-content-wrap">
                      <div className="af-class-tab-content-details-row">
                        <div className="af-class-div-block-204">
                          <div className="af-class-tabbed-breakdown-header">Appplication</div>
                          <div className="af-class-tabbed-content-dotted-line" />
                          <div className="af-class-tabbed-breakdown-price">$50</div>
                        </div>
                        <p className="af-class-paragraph">Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.</p>
                      </div>
                      <div className="af-class-tab-content-details-row">
                        <div className="af-class-div-block-204">
                          <div className="af-class-tabbed-breakdown-header">Security Deposit</div>
                          <div className="af-class-tabbed-content-dotted-line" />
                          <div className="af-class-tabbed-breakdown-price">$50</div>
                        </div>
                        <p className="af-class-paragraph">Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.</p>
                      </div>
                      <div className="af-class-tab-content-details-row">
                        <div className="af-class-div-block-204">
                          <div className="af-class-tabbed-breakdown-header">Administration</div>
                          <div className="af-class-tabbed-content-dotted-line" />
                          <div className="af-class-tabbed-breakdown-price">$50</div>
                        </div>
                        <p className="af-class-paragraph">Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-div-block-200"><img src="/images/fees-background2x.jpg" srcSet="images/fees-background2x-p-500.jpeg 500w, images/fees-background2x-p-800.jpeg 800w, images/fees-background2x-p-1080.jpeg 1080w, images/fees-background2x.jpg 1440w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 40vw, (max-width: 2880px) 50vw, 1440px" alt="" className="af-class-image-37" /></div>
            </div>
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default FloorplanUnitChosenView

/* eslint-enable */