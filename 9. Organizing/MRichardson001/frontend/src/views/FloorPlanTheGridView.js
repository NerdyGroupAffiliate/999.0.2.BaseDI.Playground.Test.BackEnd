/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/FloorPlanTheGridView.css"
import PropertyFullView from '../components/PropertyFullView'
import UnitGridStickyCardView from '../components/UnitGridStickyCardView'
import UnitLeaseGridView from '../components/UnitLeaseGridView'
import UnitGridStickySummaryBarView from '../components/UnitGridStickySummaryBarView'
import FooterView from '../components/FooterView'


let Controller

class FloorPlanTheGridView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FloorPlanTheGridController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FloorPlanTheGridView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FloorPlanTheGridView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/FloorPlanTheGridMeta")
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
            <div className="af-class-div-block-267">
              <UnitGridStickyCardView.Controller {...this.props} />
              <UnitLeaseGridView.Controller {...this.props} />
            </div>
            <UnitGridStickySummaryBarView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default FloorPlanTheGridView

/* eslint-enable */