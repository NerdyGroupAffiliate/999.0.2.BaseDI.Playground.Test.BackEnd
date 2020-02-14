/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/RegionNeighborhoodView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import NeighborhoodCardView from '../components/NeighborhoodCardView'
import NeighborhoodModalView from '../components/NeighborhoodModalView'
import CardsNewsView from '../components/CardsNewsView'
import FooterView from '../components/FooterView'


let Controller

class RegionNeighborhoodView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/RegionNeighborhoodController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = RegionNeighborhoodView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== RegionNeighborhoodView ? transformProxies(this.props.children) : {
      'neighborhoodCardViewList1': [],
    }


    let Metadata
    try {
      Metadata = require("../meta/RegionNeighborhoodMeta")
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
            <div className="af-class-header-property-map">
              <div className="af-class-real-estate-column">
                <div className="af-class-real-estate-column-container">
                  <div className="af-class-real-estate-sticky-menu">
                    <div className="af-class-div-block-34">
                      <div className="af-class-toggle-container">
                        <div className="af-class-toggle-active">
                          <div className="af-class-toggle-active-label">Properties</div><img src="/images/icon-property3x.png" alt="" className="af-class-property-icon" /></div>
                        <div className="af-class-toggle-inactive">
                          <div className="af-class-toggle-inactive-label">Neighborhoods</div><img src="/images/icon-neighborhood3x.png" alt="" className="af-class-toggle-inactive-icon" /></div>
                      </div>
                    </div>
                  </div>
                  {map(proxies['neighborhoodCardViewList1'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</div>
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 992px) and (max-width: 1115px) {\n  .af-view .af-class-property-card.af-class-icon-wrapper {\n    display: none;\n  }\n  .af-view .af-class-property-card-cta-label {\n    font-size: 16px;\n  }\n  .af-view .af-class-property-card-phone, .af-view .af-class-property-card-address {\n    font-size: 14px;\n  }\n  .af-view .af-class-property-card-info-wtrapper {\n    padding-bottom: 12px;\n    padding-left: 10px;\n  }\n  .af-view .af-class-property-card-left-border {\n    width: 0px;\n  }\n  .af-view .af-class-property-card-title-wrapper {\n    padding: 15px 9px;\n  }\n  .af-view .af-class-toggle-inactive-label, .af-view .af-class-toggle-active-label {\n    font-size: 16px;\n  }\n  .af-view .af-class-toggle-inactive {\n    padding: 5px 15px 5px 12px;\n  }\n  .af-view .af-class-toggle-active {\n    padding: 5px 0px 5px 12px;\n  }\n  .af-view .af-class-div-block-34 {\n    padding: 5px 10px;\n  }\n  .af-view .af-class-toggle-container {\n    height: 48px;\n    margin-bottom: 9px;\n  }\n  .af-view .af-class-real-estate-column-container {\n    padding-top: 9px;\n  }\n}\n" }} />
                </div>
              </div>
              <div className="af-class-map-container">
                <div className="af-class-lozenge--neighborhood"><img src="/images/icon-neighborhood3x_1.png" alt="" className="af-class-image-5" />
                  <div className="af-class-map--neighborhood-label-wrapper">
                    <div className="af-class-text-block-2">Neighborhood</div>
                    <div className="af-class-text-block-3">North Aurora</div>
                  </div>
                </div>
                <h2 className="af-class-heading-2">Chicago</h2>
                <div className="af-class-map-zoom-controls-wrapper"><img src="/images/icon-map-zoom--in3x.png" alt="" className="af-class-map" /><img src="/images/icon-map-zoom--out3x.png.png" alt="" className="af-class-map" /></div>
                <div className="af-class-sub-region-map-poi-bar-wrapper">
                  <div id="w-node-24297faa08b6-557497b7" className="af-class-map-poi-column"><img src="/images/Restaurants3x.png" alt="" className="af-class-map-poi-icon" />
                    <div className="af-class-map-poi-label">Restaurants</div>
                  </div>
                  <div id="w-node-14a336dcbcd3-557497b7" className="af-class-map-poi-column"><img src="/images/Groceries3x.png" alt="" className="af-class-map-poi-icon" />
                    <div className="af-class-map-poi-label">Groceries</div>
                  </div>
                  <div id="w-node-fbc54c333def-557497b7" className="af-class-map-poi-column"><img src="/images/Shopping3x.png" alt="" className="af-class-map-poi-icon" />
                    <div className="af-class-map-poi-label">Shopping</div>
                  </div>
                  <div id="w-node-eb5e826539aa-557497b7" className="af-class-map-poi-column af-class-last-child"><img src="/images/Entertainment3x.png" alt="" className="af-class-map-poi-icon" />
                    <div className="af-class-map-poi-label">Entertainment</div>
                  </div>
                  <div className="af-class-text-block-26">Whats Nearby</div>
                  <div className="w-embed">
                    <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 922px) and (max-width: 1160px) {\n.af-view .af-class-sub-region-map-poi-bar-wrapper {\n display: inline-flex;\n}\n.af-view .af-class-map-poi-icon {\n  padding-right: 0;\n  width: 25px;\n }\n .af-view .af-class-map-poi-label {\n   font-size: 12px!important;\n   margin-left: 8px;\n  }\n .af-view .af-class-map-poi-column {\n   padding-left: 15px;\n   padding-right: 15px;\n }\n}\n" }} />
                  </div>
                </div><a href="/sub-region" className="af-class-link-block-6 w-inline-block"><img src="/images/icon-property3x.png" alt="" className="af-class-image-52" /></a>
                <NeighborhoodModalView.Controller {...this.props} />
              </div>
            </div>
            <div className="af-class-wrapper af-class-content_intro_image">
              <div className="af-class-container af-class-image-background af-class-full-width af-class-min-height">
                <h2 className="af-class-content_intro_image_title">AMLI's Guide to Chicago</h2>
              </div>
            </div>
            <div className="af-class-wrapper">
              <div className="af-class-container" />
            </div>
            <div className="af-class-wrapper af-class-slider_points_of_interest">
              <div className="af-class-slider-poi-content-wrapper">
                <div className="af-class-slider_poi_headers">
                  <h1 className="af-class-list-blocks-b-section-label">entertainment &amp; shopping</h1>
                  <div className="af-class-slider-poi-header">Here there's never a dull moment.</div>
                </div>
                <div className="af-class-slide_info_wrapper">
                  <div className="af-class-point-title">Chicago Theatre</div>
                  <div className="af-class-poi_slide_title_border" />
                  <p className="af-class-point_blurb">The Loop’s 5,000-seat Chicago is just a couple minutes walk from our AMLI Lofts &nbsp;in West Loop. Wording content like this will help ensure quality SEO practices.</p><a href="/#" className="af-class-point_fact">0.2 miles from <span className="af-class-poi_slide_distance_property">AMLI Lofts</span></a>
                  <div className="af-class-poi_slide_next_arrow"><img src="/images/icon-arrow--right--blue.svg" alt="" className="af-class-image-46" /></div>
                  <div className="af-class-poi_slide_prev_arrow"><img src="/images/icon-arrow--right--blue.svg" alt="" className="af-class-arrow--right" /></div>
                  <div className="af-class-poi_slider_pagination_wrapper">
                    <div className="af-class-slider_pagination_dot af-class-active" />
                    <div className="af-class-slider_pagination_dot" />
                    <div className="af-class-slider_pagination_dot" />
                    <div className="af-class-slider_pagination_dot" />
                  </div>
                </div>
              </div>
              <div className="af-class-slider_poi_image_wrapper">
                <div className="af-class-slider_poi_image af-class-current" />
                <div className="af-class-slider_poi_image" />
              </div>
            </div>
            <div className="af-class-wrapper af-class-cards_content_offset">
              <div className="af-class-content-image-offset-header">
                <div className="af-class-div-block-11">
                  <div className="af-class-cards-poi-detail-headers">
                    <h1 className="af-class-section-title">restaurants &amp; drinks</h1>
                    <div className="af-class-section-tagline af-class-white">A true calling to all foodies.</div>
                  </div>
                  <p className="af-class-content-image-offset-paragraph">By virtue of being an epicenter of office buildings, hotels and many of the city's top tourist attractions, restaurants in the Loop tend to be either grab-and-go breakfast and lunch spots.</p>
                </div>
              </div>
              <div className="af-class-content_image_offset_cards">
                <div className="af-class-poi_card_container">
                  <div className="af-class-poi_card">
                    <div className="af-class-poi_card_image af-class-restaurant">
                      <div className="af-class-poi_card_tag">
                        <div className="af-class-poi_card_label">restaurants</div>
                      </div>
                    </div>
                    <div className="af-class-poi_card_content">
                      <h5 className="af-class-heading-3">Girl &amp; the Goat</h5><a href="/#" className="af-class-point_fact">0.2 miles from <span className="af-class-poi_slide_distance_property">AMLI Lofts</span></a>
                      <p className="af-class-poi_card_description">Description provided by the restaurant that ties AMLI back into the conversation whether it’s from distance to the food or what have you.</p>
                    </div>
                  </div>
                  <div className="af-class-poi_card">
                    <div className="af-class-poi_card_image af-class-brunch">
                      <div className="af-class-poi_card_tag">
                        <div className="af-class-poi_card_label">restaurants</div>
                      </div>
                    </div>
                    <div className="af-class-poi_card_content">
                      <h5 className="af-class-heading-3">Girl &amp; the Goat</h5><a href="/#" className="af-class-point_fact">0.2 miles from <span className="af-class-poi_slide_distance_property">AMLI Lofts</span></a>
                      <p className="af-class-poi_card_description">Description provided by the restaurant that ties AMLI back into the conversation whether it’s from distance to the food or what have you.</p>
                    </div>
                  </div>
                  <div className="af-class-poi_card">
                    <div className="af-class-poi_card_image af-class-drinks">
                      <div className="af-class-poi_card_tag">
                        <div className="af-class-poi_card_label">restaurants</div>
                      </div>
                    </div>
                    <div className="af-class-poi_card_content">
                      <h5 className="af-class-heading-3">Girl &amp; the Goat</h5><a href="/#" className="af-class-point_fact">0.2 miles from <span className="af-class-poi_slide_distance_property">AMLI Lofts</span></a>
                      <p className="af-class-poi_card_description">Description provided by the restaurant that ties AMLI back into the conversation whether it’s from distance to the food or what have you.</p>
                    </div>
                  </div>
                  <div className="af-class-html-embed w-embed">
                    <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-poi_card_tag {\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n}\n" }} />
                  </div>
                </div>
              </div>
              <div className="w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 1900px) {\n  .af-view .af-class-content_image_offset_header {\n    padding-bottom: 10%;\n  }\n}\n" }} />
              </div>
            </div>
            <CardsNewsView.Controller {...this.props} />
            <div className="af-class-wrapper af-class-list_related_areas">
              <div className="af-class-div-block-17">
                <div className="af-class-div-block-16">
                  <h1 className="af-class-list-blocks-b-section-label af-class-light">related areas</h1>
                  <div className="af-class-section-tagline af-class-light">Still Looking?</div>
                  <div className="af-class-related-areas-description">Check out these other areas around Chicago.</div>
                </div>
                <div className="af-class-related-areas-locations-wrapper">
                  <div className="af-class-related-areas-location-column af-class-cities">
                    <h6 className="af-class-related-areas-location-title">cities</h6><a href="/#" className="af-class-city-text-link">Deerfield</a><a href="/#" className="af-class-city-text-link">River North</a><a href="/#" className="af-class-city-text-link">South Loop</a><a href="/#" className="af-class-city-text-link">Woodridge</a></div>
                  <div className="af-class-related-areas-location-column af-class-hoods">
                    <h6 className="af-class-related-areas-location-title">neighborhoods</h6><a href="/#" className="af-class-hood-text-link">Seven Bridges</a><a href="/#" className="af-class-hood-text-link">River North</a><a href="/#" className="af-class-hood-text-link">Streeterville</a><a href="/#" className="af-class-hood-text-link">South Loop</a><a href="/#" className="af-class-hood-text-link">Bucktown</a></div>
                  <div className="af-class-related-areas-location-column af-class-zipcodes">
                    <h6 className="af-class-related-areas-location-title">zipcodes</h6><a href="/#" className="af-class-zipcode-text-link">60603</a><a href="/#" className="af-class-zipcode-text-link">60603</a><a href="/#" className="af-class-zipcode-text-link">60603</a><a href="/#" className="af-class-zipcode-text-link">60603</a><a href="/#" className="af-class-zipcode-text-link">60603</a><a href="/#" className="af-class-zipcode-text-link">60603</a><a href="/#" className="af-class-zipcode-text-link">60603</a></div>
                </div>
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

export default RegionNeighborhoodView

/* eslint-enable */