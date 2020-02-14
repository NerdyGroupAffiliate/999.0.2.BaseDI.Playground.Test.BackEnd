/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/FloorplanCreateProfileView.css"
import PropertyFullView from '../components/PropertyFullView'
import CreateProfileFormView from '../components/CreateProfileFormView'
import CreateProfileSummaryView from '../components/CreateProfileSummaryView'


let Controller

class FloorplanCreateProfileView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FloorplanCreateProfileController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FloorplanCreateProfileView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== FloorplanCreateProfileView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/FloorplanCreateProfileMeta")
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
            <div className="af-class-signup-wrapper">
              <div className="af-class-create-profile-image">
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 992px) and (max-width: 1024px) {\n  .af-view .af-class-create-profile-image {\n    max-width: 200px;\n  }\n  .af-view .af-class-floorplan-card-profile-col-label {\n    font-size: 11px;\n  }\n  .af-view .af-class-floorplan-card-col-label {\n    font-size: 10px;\n  }\n  .af-view .af-class-floorplan-card-profile {\n    max-width: 330px;\n  }\n  .af-view .af-class-floorplan-card-image-col {\n    padding: 30px 20px;\n  }\n  .af-view .af-class-create-profile-home-container {\n    padding-right: 30px;\n  }\n}\n" }} />
                </div>
              </div>
              <CreateProfileFormView.Controller {...this.props} />
              <CreateProfileSummaryView.Controller {...this.props} />
              <div className="w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n@media screen and (min-width: 992px) and (max-width: 1075px) {\n  .af-view .af-class-signup-wrapper {\n    margin-top: 40px;\n  }\n}\n" }} />
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default FloorplanCreateProfileView

/* eslint-enable */