/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/FloorplansView.css"
import PropertyFullView from '../components/PropertyFullView'
import PropertySubPageHeaderView from '../components/PropertySubPageHeaderView'
import FloorplansConfigurationFilterView from '../components/FloorplansConfigurationFilterView'
import FloorplansSpecialSpotlightView from '../components/FloorplansSpecialSpotlightView'
import FloorplansCardContainerView from '../components/FloorplansCardContainerView'
import FloorplanPoliciesView from '../components/FloorplanPoliciesView'
import SpotlightTourView from '../components/SpotlightTourView'
import FooterView from '../components/FooterView'


let Controller

class FloorplansView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FloorplansController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FloorplansView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FloorplansView ? transformProxies(this.props.children) : {
      'floorplansCardContainerViewList4': [],
    }


    let Metadata
    try {
      Metadata = require("../meta/FloorplansMeta")
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
            <PropertySubPageHeaderView.Controller {...this.props} />
            <FloorplansConfigurationFilterView.Controller {...this.props} />
            <FloorplansSpecialSpotlightView.Controller {...this.props} />
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 992px) and (max-width: 1150px) {\n  .af-view .af-class-floorplan-section-header {\n    transform: translateX(20%) translateY(-75%);\n  }\n  .af-view .af-class-floorplans-card-unit-label {\n    font-weight: 500!important;\n    margin-bottom: 10px;\n  }\n  .af-view .af-class-floorplans-card-beds-column {\n    flex-direction: column;\n  }\n  .af-view .af-class-floorplans-card-beds-column, .af-view .af-class-floorplans-card-beds-column.af-class-bordered  {\n    align-items: center;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 10px;\n  }\n  .af-view .af-class-floorplans-card-cta-row {\n    flex-direction: column;\n    padding-bottom: 15px;\n    padding-top: 15px;\n  }\n}\n" }} />
            </div>
            {map(proxies['floorplansCardContainerViewList4'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}<FloorplanPoliciesView.Controller {...this.props} />
            <SpotlightTourView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default FloorplansView

/* eslint-enable */