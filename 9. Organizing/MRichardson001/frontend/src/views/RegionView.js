/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/RegionView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import RegionHeaderMapView from '../components/RegionHeaderMapView'
import ContentIntroImageView from '../components/ContentIntroImageView'
import SliderPointsOfInterestView from '../components/SliderPointsOfInterestView'
import SliderPointOfInterestView from '../components/SliderPointOfInterestView'
import CardsPointsOfInterestDetailView from '../components/CardsPointsOfInterestDetailView'
import CardsNewsView from '../components/CardsNewsView'
import ListRelatedAreasView from '../components/ListRelatedAreasView'
import FooterView from '../components/FooterView'


let Controller

class RegionView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/RegionController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = RegionView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== RegionView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/RegionMeta")
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
            <RegionHeaderMapView.Controller {...this.props} />
            <ContentIntroImageView.Controller {...this.props} />
            <SliderPointsOfInterestView.Controller {...this.props} />
            <SliderPointOfInterestView.Controller {...this.props} />
            <CardsPointsOfInterestDetailView.Controller {...this.props} />
            <CardsNewsView.Controller {...this.props} />
            <ListRelatedAreasView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default RegionView

/* eslint-enable */